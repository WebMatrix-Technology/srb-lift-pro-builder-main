import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { loadSettings } from "@/lib/settings";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const settings = loadSettings();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isSupabaseConfigured =
    Boolean(import.meta.env.VITE_SUPABASE_URL) &&
    Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast({ title: "Please fill required fields", description: "Name, phone and message are required." });
      return;
    }
    setLoading(true);
    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from("messages").insert([
          { name, email, phone, message },
        ]);
        if (error) throw error;
        toast({ title: "Message sent", description: "We will get back to you shortly." });
      } else {
        // Fallback to email if Supabase is not configured
        const subject = `Website enquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({ title: "Opening email", description: "Sending via your email app as a fallback." });
      }
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch (err: any) {
      console.error(err);
      const subject = `Website enquiry from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
      window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      toast({ title: "Failed to send online", description: err?.message || "Opened your email app as fallback." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-lg text-white/90">Get in touch for a free consultation</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
                {!isSupabaseConfigured && (
                  <Alert className="mb-4">
                    <AlertDescription>
                      Online message storage is not configured. Your message will be sent via your email app.
                    </AlertDescription>
                  </Alert>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <Textarea placeholder="Your Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                  <Button className="w-full" disabled={loading}>{loading ? "Sending..." : "Submit Enquiry"}</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <div className="text-muted-foreground">
                      {settings.phones.map((p) => (
                        <a key={p} href={`tel:${p}`} className="block hover:text-primary">{p}</a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href={`mailto:${settings.email}`} className="text-muted-foreground hover:text-primary">{settings.email}</a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">{settings.address}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;