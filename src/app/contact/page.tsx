"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { loadSettings } from "@/lib/settings";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const settings = loadSettings();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const isSupabaseConfigured =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

  // Validation functions
  const validateName = (value: string): string | undefined => {
    if (!value.trim()) {
      return "Name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (value.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (value && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Please enter a valid email address";
      }
      if (value.length > 100) {
        return "Email must be less than 100 characters";
      }
    }
    return undefined;
  };

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) {
      return "Phone number is required";
    }
    // Remove spaces, dashes, and plus signs for validation
    const cleaned = value.replace(/[\s\-+()]/g, "");
    // Indian phone number: 10 digits, optionally with country code 91
    const phoneRegex = /^(\+?91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleaned)) {
      return "Please enter a valid Indian phone number (10 digits starting with 6-9)";
    }
    return undefined;
  };

  const validateMessage = (value: string): string | undefined => {
    if (!value.trim()) {
      return "Message is required";
    }
    if (value.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (value.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "phone" | "message", value: string) => {
    let error: string | undefined;
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (nameError || emailError || phoneError || messageError) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from("messages").insert([
          { name, email, phone, message },
        ]);
        if (error) throw error;
        toast({ 
          title: "Message sent successfully!", 
          description: "We will get back to you shortly.",
        });
        setSubmitted(true);
      } else {
        const subject = `Website enquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({ title: "Opening email", description: "Sending via your email app as a fallback." });
      }
      setName(""); 
      setEmail(""); 
      setPhone(""); 
      setMessage("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      console.error(err);
      const subject = `Website enquiry from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
      window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      toast({ 
        title: "Failed to send online", 
        description: err?.message || "Opened your email app as fallback.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      content: settings.phones,
      link: (val: string) => `tel:${val}`,
      type: "phone" as const,
    },
    {
      icon: Mail,
      title: "Email",
      content: [settings.email],
      link: (val: string) => `mailto:${val}`,
      type: "email" as const,
    },
    {
      icon: MapPin,
      title: "Address",
      content: [settings.address],
      link: () => "#",
      type: "address" as const,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Get in Touch
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Contact <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Get in touch for a free consultation and quote
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Reveal variant="fade-right">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Send us a message</h2>
                  </div>
                  
                  {!isSupabaseConfigured && (
                    <Alert className="mb-6 border-yellow-500/50 bg-yellow-500/10">
                      <AlertDescription className="text-yellow-900 dark:text-yellow-100">
                        Online message storage is not configured. Your message will be sent via your email app.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitted && (
                    <Alert className="mb-6 border-green-500/50 bg-green-500/10">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-900 dark:text-green-100">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) {
                            setErrors((prev) => ({ ...prev, name: validateName(e.target.value) }));
                          }
                        }}
                        onBlur={(e) => handleBlur("name", e.target.value)}
                        className={`h-12 border-2 transition-colors ${
                          errors.name ? "border-destructive focus:border-destructive" : "focus:border-primary"
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) {
                            setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
                          }
                        }}
                        onBlur={(e) => handleBlur("email", e.target.value)}
                        className={`h-12 border-2 transition-colors ${
                          errors.email ? "border-destructive focus:border-destructive" : "focus:border-primary"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => {
                          // Allow only numbers, spaces, +, -, and ()
                          const value = e.target.value.replace(/[^\d\s+\-()]/g, "");
                          setPhone(value);
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
                          }
                        }}
                        onBlur={(e) => handleBlur("phone", e.target.value)}
                        className={`h-12 border-2 transition-colors ${
                          errors.phone ? "border-destructive focus:border-destructive" : "focus:border-primary"
                        }`}
                        required
                        maxLength={15}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                      )}
                      <p className="text-xs text-muted-foreground">Format: +91 9876543210 or 9876543210</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">
                        Your Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={6}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) {
                            setErrors((prev) => ({ ...prev, message: validateMessage(e.target.value) }));
                          }
                        }}
                        onBlur={(e) => handleBlur("message", e.target.value)}
                        className={`border-2 transition-colors resize-none ${
                          errors.message ? "border-destructive focus:border-destructive" : "focus:border-primary"
                        }`}
                        required
                        maxLength={1000}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive mt-1">{errors.message}</p>
                      )}
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground">Minimum 10 characters required</p>
                        <p className="text-xs text-muted-foreground">{message.length}/1000</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary-hover hover:shadow-xl transition-all duration-300 text-lg font-semibold" 
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Contact Information */}
            <div className="space-y-6">
              <Reveal variant="fade-left">
                <div className="mb-8">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Contact Information
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground">
                    We're here to help! Reach out to us through any of these channels.
                  </p>
                </div>
              </Reveal>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Reveal key={method.title} variant="fade-left" delayMs={index * 100}>
                    <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 text-lg font-bold">{method.title}</h3>
                            <div className="space-y-1">
                              {method.content.map((item, idx) => (
                                method.type === "address" ? (
                                  <p key={idx} className="text-muted-foreground leading-relaxed">
                                    {item}
                                  </p>
                                ) : (
                                  <a
                                    key={idx}
                                    href={method.link(item)}
                                    className="block text-muted-foreground transition-colors hover:text-primary"
                                  >
                                    {item}
                                  </a>
                                )
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}

              <Reveal variant="fade-left" delayMs={300}>
                <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary-hover/5">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-bold">Business Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="mt-4 font-semibold text-primary">24/7 Emergency Support Available</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}