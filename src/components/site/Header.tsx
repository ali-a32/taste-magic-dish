import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md shadow-card"
      }`}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Link
          to="/"
          className={`font-serif text-2xl font-semibold tracking-wide transition-smooth ${
            transparent ? "text-cream" : "text-foreground"
          }`}
        >
          Trattoria <span className="text-primary">Bella</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-sans text-sm uppercase tracking-widest transition-smooth ${
                  transparent ? "text-cream/90 hover:text-cream" : "text-foreground/80 hover:text-primary"
                } ${isActive ? "after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-primary" : ""}`
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 uppercase tracking-widest text-xs">
            <Link to="/contact#reserve">Reserve</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden ${transparent ? "text-cream" : "text-foreground"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-tight flex flex-col py-6 gap-4">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-widest py-2 ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild className="rounded-none mt-2 bg-primary text-primary-foreground">
              <Link to="/contact#reserve">Reserve a Table</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
