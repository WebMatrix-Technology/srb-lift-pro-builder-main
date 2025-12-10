"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Building2, Clock, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { loadSettings, defaultSettings, SiteSettings } from "@/lib/settings";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
  ];

  const productLinks = [
    { name: "Product Types", href: "/product-types" },
    { name: "Specifications", href: "/specifications" },
    { name: "Technical", href: "/technical" },
    { name: "Landing Doors", href: "/landing-doors" },
  ];

  const serviceLinks = [
    { name: "Lift Installation", href: "/services" },
    { name: "Lift Modernisation", href: "/services" },
    { name: "Maintenance & Repair", href: "/services" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="relative border-t bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative mx-auto px-4 py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-6">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-1">
            <div className="mb-3 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover shadow-md">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                {settings.companyName}
              </h3>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              {settings.tagline}: Supply, Installation, Commissioning, Servicing, AMC, Modification.
            </p>
            
            {/* Business Hours - Compact */}
            <div className="mb-3 rounded-lg bg-primary/5 p-2">
              <div className="mb-1 flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-primary" />
                <span className="text-xs font-semibold">Business Hours</span>
              </div>
              <div className="space-y-0.5 text-xs text-muted-foreground">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p className="mt-1 text-xs font-semibold text-primary">24/7 Emergency Support</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Follow Us</p>
              <div className="flex gap-1.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
                      aria-label={social.name}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xs text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
                  >
                    <ArrowRight className="mr-1.5 h-2.5 w-2.5 opacity-0 transition-all group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center text-xs font-semibold text-primary transition-all hover:translate-x-1"
                >
                  <ArrowRight className="mr-1.5 h-2.5 w-2.5" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Products
            </h4>
            <ul className="space-y-1.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xs text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
                  >
                    <ArrowRight className="mr-1.5 h-2.5 w-2.5 opacity-0 transition-all group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="space-y-1.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xs text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
                  >
                    <ArrowRight className="mr-1.5 h-2.5 w-2.5 opacity-0 transition-all group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Get In Touch
            </h4>
            <ul className="space-y-2">
              {/* Phone Numbers */}
              <li>
                <div className="mb-1 flex items-center gap-1.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover shadow-md">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold">Call Us</span>
                </div>
                <div className="ml-9 grid grid-cols-2 gap-x-2 gap-y-0.5">
                  {settings.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="block text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>

              {/* Email */}
              <li>
                <div className="mb-1 flex items-center gap-1.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover shadow-md">
                    <Mail className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold">Email Us</span>
                </div>
                <a
                  href={`mailto:${settings.email}`}
                  className="ml-9 block text-xs text-muted-foreground transition-colors hover:text-primary break-all"
                >
                  {settings.email}
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white shadow-md h-8 text-xs px-3"
                >
                  <a
                    href={`https://wa.me/${settings.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-border/50 pt-4">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} <span className="font-semibold text-foreground">{settings.companyName}</span>. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                Services
              </Link>
              <Link href="/products" className="text-muted-foreground transition-colors hover:text-primary">
                Products
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-3 flex flex-col items-center justify-center gap-0.5 border-t border-border/50 pt-3 text-center">
            <p className="text-xs text-muted-foreground">
              Certified & Licensed | ISO Compliant | Safety First
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;