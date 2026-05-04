import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-tight grid gap-12 py-20 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-2xl">
            Trattoria <span className="text-primary">Bella</span>
          </h3>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Hand-crafted Italian classics, served with warmth since 1998.
          </p>
        </div>

        <div>
          <h4 className="eyebrow !text-cream/60">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 24 Vine Street, Old Town</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> (555) 014 — 2200</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> ciao@trattoriabella.com</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-cream/60">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li className="flex justify-between"><span>Mon — Thu</span><span>5pm — 10pm</span></li>
            <li className="flex justify-between"><span>Fri — Sat</span><span>5pm — 11pm</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>4pm — 9pm</span></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-cream/60">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="text-cream/80 hover:text-primary transition-smooth">Full Menu</Link></li>
            <li><Link to="/gallery" className="text-cream/80 hover:text-primary transition-smooth">Gallery</Link></li>
            <li><Link to="/journal" className="text-cream/80 hover:text-primary transition-smooth">Journal</Link></li>
            <li><Link to="/contact" className="text-cream/80 hover:text-primary transition-smooth">Contact & Reservations</Link></li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-primary transition-smooth"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-primary transition-smooth"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-tight py-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Trattoria Bella. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
