"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadSettings, defaultSettings, SiteSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const pathname = usePathname();

  useEffect(() => {
    setSettings(loadSettings());
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Specifications", href: "/specifications" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              {settings.companyName}
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                isActive(item.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <Button 
            asChild 
            className="ml-4 bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <a href={`tel:${settings.phones[0]}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto border-t bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                isActive(item.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:bg-accent hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="w-full mt-2 bg-gradient-to-r from-primary to-primary-hover"
            onClick={() => setIsOpen(false)}
          >
            <a href={`tel:${settings.phones[0]}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;