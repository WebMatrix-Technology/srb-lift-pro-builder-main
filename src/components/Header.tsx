import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadSettings } from "@/lib/settings";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settings = loadSettings();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "AMC", href: "/amc" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">{settings.companyName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <a href={`tel:${settings.phones[0]}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <a href={`tel:${settings.phones[0]}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;