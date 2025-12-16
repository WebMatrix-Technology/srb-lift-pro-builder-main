"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Clock, MessageCircle, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { loadSettings, defaultSettings, SiteSettings, parsePhoneCategories } from "@/lib/settings";
import { Button } from "@/components/ui/button";
import {
  defaultFooterQuickLinks,
  defaultFooterProductLinks,
  defaultFooterServiceLinks,
  defaultSocialLinks,
} from "@/lib/data";

const Footer = () => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = defaultFooterQuickLinks;
  const productLinks = defaultFooterProductLinks;
  const serviceLinks = defaultFooterServiceLinks;
  const socialLinks = defaultSocialLinks;

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/50">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-hover to-primary opacity-20" />
      
      <div className="container relative mx-auto px-4 py-8 md:py-10">
        {/* Main Footer Grid */}
        <div className="grid gap-6 lg:grid-cols-12 mb-6">
          {/* Company Info Section - Takes 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-4 flex items-center gap-3 group">
              <div className="relative h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-primary-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <Image 
                  src="/logo.png?v=1" 
                  alt={settings.companyName}
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain relative z-10 drop-shadow-lg"
                  priority
                  unoptimized
                />
              </div>
              <div className="relative h-9 w-auto transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/logo_title.png?v=1" 
                  alt={settings.companyName}
                  width={160}
                  height={36}
                  className="h-9 w-auto object-contain relative z-10 drop-shadow-md"
                  priority
                  unoptimized
                />
              </div>
            </Link>
            
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground max-w-md">
              {settings.tagline}: Supply, Installation, Commissioning, Servicing, AMC, Modification.
            </p>

            {/* Address */}
            {settings.address && (
              <div className="mb-4 flex items-start gap-2">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{settings.address}</p>
              </div>
            )}
            
            {/* Business Hours */}
            <div className="mb-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary-hover/5 p-3 border border-primary/10">
              <div className="mb-2 flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-foreground">Business Hours</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p className="pt-1 text-xs font-semibold text-primary border-t border-primary/10">24/7 Emergency Support</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="mb-2 text-xs font-semibold text-foreground">Follow Us</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Sections - Takes 8 columns, divided into 3 */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                Products
              </h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Contact Combined */}
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                Services
              </h4>
              <ul className="space-y-2 mb-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Section */}
              <div className="pt-4 border-t border-border/50">
                <h4 className="mb-3 text-sm font-bold text-foreground">
                  Contact Us
                </h4>
                <div className="space-y-3">
                  {/* Phone Numbers */}
                  <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary-hover/5 p-3 border border-primary/10">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover shadow-md">
                        <Phone className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Phone</span>
                    </div>
                    <div className="space-y-3">
                      {parsePhoneCategories(settings.phones).map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-1.5">
                          <div className="text-xs font-semibold text-foreground/80 uppercase tracking-wide px-1">
                            {category.title}
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {category.numbers.map((phoneNumber, phoneIndex) => (
                              <a
                                key={`${categoryIndex}-${phoneIndex}`}
                                href={`tel:${phoneNumber}`}
                                className="group flex items-center gap-1.5 rounded-md bg-background/50 px-2 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                              >
                                <Phone className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                                <span className="whitespace-nowrap">{phoneNumber}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary-hover/5 p-3 border border-primary/10">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover shadow-md">
                        <Mail className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Email</span>
                    </div>
                    <a
                      href={`mailto:${settings.email}`}
                      className="group flex items-center gap-2 rounded-md bg-background/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:translate-x-1 break-all"
                    >
                      <Mail className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                      <span className="flex-1">{settings.email}</span>
                    </a>
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white shadow-lg hover:shadow-xl transition-all duration-300 h-9 text-xs font-semibold group/btn"
                  >
                    <a
                      href={`https://wa.me/${settings.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} <span className="font-semibold text-foreground">{settings.companyName}</span>. All rights reserved.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Certified & Licensed</span>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">ISO Compliant</span>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Safety First</span>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 pt-4 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              Developed by{" "}
              <a 
                href="https://web-matrix.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-primary hover:underline transition-colors"
              >
                WebMatrix Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;