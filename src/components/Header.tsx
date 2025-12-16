"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { loadSettings, defaultSettings, SiteSettings, getAllPhoneNumbers } from "@/lib/settings";
import { cn } from "@/lib/utils";
import { defaultNavigationLinks, defaultProductMenuItems } from "@/lib/data";

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

  const navigation = defaultNavigationLinks;
  const productMenuItems = defaultProductMenuItems;
  const primaryPhone = getAllPhoneNumbers(settings.phones)[0] || settings.phones[0] || "";

  const isActive = (href: string) => pathname === href;
  const isProductActive = () => productMenuItems.some(item => pathname === item.href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled
          ? "bg-background border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-background border-b border-transparent"
      )}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group relative"
          onClick={() => setIsOpen(false)}
        >
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.slice(0, 3).map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group",
                "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
                isActive(item.href)
                  ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15"
                  : "text-foreground/70 hover:text-primary"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive(item.href) && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-hover/10 rounded-xl blur-sm" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-primary-hover rounded-full" />
                </>
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 to-primary-hover/0 group-hover:from-primary/5 group-hover:to-primary-hover/5 transition-all duration-300" />
            </Link>
          ))}
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl flex items-center gap-1.5 outline-none group",
                "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
                isProductActive()
                  ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              <span>Products</span>
              <ChevronDown className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                "group-data-[state=open]:rotate-180"
              )} />
              {isProductActive() && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-hover/10 rounded-xl blur-sm" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-primary-hover rounded-full" />
                </>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-72 p-3 bg-gradient-to-b from-primary/5 via-primary/8 to-primary/12 backdrop-blur-xl border-2 border-primary/20 shadow-2xl shadow-primary/10 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-primary/10 pointer-events-none" />
              {productMenuItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <DropdownMenuItem 
                    asChild
                    className={cn(
                      "rounded-xl px-4 py-3.5 my-1 cursor-pointer transition-all duration-300 relative z-10 group",
                      "hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15 hover:shadow-md hover:shadow-primary/10",
                      "hover:scale-[1.02] hover:-translate-y-0.5",
                      isActive(item.href) && "bg-gradient-to-r from-primary/20 to-primary-hover/20 shadow-lg shadow-primary/15"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex flex-col gap-1.5 w-full"
                    >
                      <span className={cn(
                        "text-sm font-bold tracking-tight transition-colors",
                        isActive(item.href) 
                          ? "text-primary" 
                          : "text-foreground/90 group-hover:text-primary"
                      )}>
                        {item.name}
                      </span>
                      <span className={cn(
                        "text-xs leading-relaxed transition-colors",
                        isActive(item.href) 
                          ? "text-primary/70" 
                          : "text-muted-foreground group-hover:text-primary/70"
                      )}>
                        {item.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  {index < productMenuItems.length - 1 && (
                    <DropdownMenuSeparator className="my-1.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px" />
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.slice(3).map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group",
                "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
                isActive(item.href)
                  ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15"
                  : "text-foreground/70 hover:text-primary"
              )}
              style={{ animationDelay: `${(index + 4) * 50}ms` }}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive(item.href) && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-hover/10 rounded-xl blur-sm" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-primary-hover rounded-full" />
                </>
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 to-primary-hover/0 group-hover:from-primary/5 group-hover:to-primary-hover/5 transition-all duration-300" />
            </Link>
          ))}

          <div className="ml-3 pl-3 border-l border-border/50">
            <Button 
              asChild 
              size="default"
              className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-semibold"
            >
              <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden relative p-2.5 rounded-xl transition-all duration-300",
            "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
            isOpen && "bg-gradient-to-r from-primary/15 to-primary-hover/15"
          )}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={cn(
              "absolute inset-0 h-6 w-6 text-foreground transition-all duration-300",
              isOpen && "opacity-0 rotate-90 scale-0"
            )} />
            <X className={cn(
              "absolute inset-0 h-6 w-6 text-foreground transition-all duration-300",
              !isOpen && "opacity-0 -rotate-90 scale-0"
            )} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto border-t border-border/50 bg-background px-4 py-6 space-y-2">
          {navigation.slice(0, 3).map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
                isActive(item.href)
                  ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15 shadow-sm shadow-primary/10"
                  : "text-foreground/80 hover:text-primary"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Products Dropdown for Mobile */}
          <div className="space-y-2 pt-2">
            <div className={cn(
              "block rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-300",
              isProductActive()
                ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15 shadow-sm shadow-primary/10"
                : "text-foreground/80"
            )}>
              Products
            </div>
            <div className="space-y-2 border-l-2 border-primary/30 ml-4 bg-gradient-to-b from-primary/5 to-primary/10 rounded-r-xl p-3 pl-6">
              {productMenuItems.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3.5 transition-all duration-300 group",
                      "hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15 hover:shadow-md hover:shadow-primary/10",
                      "hover:scale-[1.02] hover:-translate-y-0.5",
                      isActive(item.href)
                        ? "text-primary bg-gradient-to-r from-primary/20 to-primary-hover/20 shadow-lg shadow-primary/15 font-semibold"
                        : "text-foreground/90 hover:text-primary"
                    )}
                  >
                    <div className="flex flex-col gap-1.5">
                      <span className={cn(
                        "text-sm font-bold tracking-tight transition-colors",
                        isActive(item.href) 
                          ? "text-primary" 
                          : "text-foreground/90 group-hover:text-primary"
                      )}>
                        {item.name}
                      </span>
                      <span className={cn(
                        "text-xs leading-relaxed transition-colors",
                        isActive(item.href) 
                          ? "text-primary/70" 
                          : "text-muted-foreground group-hover:text-primary/70"
                      )}>
                        {item.description}
                      </span>
                    </div>
                  </Link>
                  {index < productMenuItems.length - 1 && (
                    <div className="my-2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {navigation.slice(3).map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-hover/10",
                isActive(item.href)
                  ? "text-primary bg-gradient-to-r from-primary/15 to-primary-hover/15 shadow-sm shadow-primary/10"
                  : "text-foreground/80 hover:text-primary"
              )}
              style={{ animationDelay: `${(index + 4) * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-border/50 mt-4">
            <Button 
              asChild 
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <a href={`tel:${primaryPhone}`} className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;