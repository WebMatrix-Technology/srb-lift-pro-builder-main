import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { loadSettings } from "@/lib/settings";

const Footer = () => {
  const settings = loadSettings();
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">{settings.companyName}</h3>
            <p className="text-sm text-muted-foreground">
              {settings.tagline}: Supply, Installation, Commissioning, Servicing, AMC, Modification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Lift Installation</li>
              <li className="text-muted-foreground">Lift Modernisation</li>
              <li className="text-muted-foreground">Lift Maintenance</li>
              <li className="text-muted-foreground">AMC Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-muted-foreground">
                  {settings.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-primary block">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${settings.email}`} className="text-muted-foreground hover:text-primary">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {settings.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {settings.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;