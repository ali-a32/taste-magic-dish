import { useState } from "react";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Reservation request received", {
        description: "We'll confirm your table within 2 hours.",
      });
    }, 800);
  };

  return (
    <Layout>
      <section className="bg-charcoal pt-32 pb-20 text-cream text-center">
        <div className="container-tight">
          <p className="eyebrow !text-gold">Visit us</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-balance">
            Reserve a <span className="italic text-gold">table</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-cream/75">
            We can't wait to welcome you. Reservations are recommended Friday and Saturday evenings.
          </p>
        </div>
      </section>

      <div className="container-tight py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-10">
            <div>
              <p className="eyebrow">Find us</p>
              <h2 className="mt-3 font-serif text-3xl">Old Town, by the cathedral</h2>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-medium">24 Vine Street</div>
                  <div className="text-sm text-muted-foreground">Old Town, 10024</div>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-medium">(555) 014 — 2200</div>
                  <div className="text-sm text-muted-foreground">For larger parties, please call.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-medium">ciao@trattoriabella.com</div>
                  <div className="text-sm text-muted-foreground">Private events & press inquiries.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div className="text-sm">
                  <div className="flex justify-between gap-8"><span>Mon — Thu</span><span>5pm — 10pm</span></div>
                  <div className="flex justify-between gap-8"><span>Fri — Sat</span><span>5pm — 11pm</span></div>
                  <div className="flex justify-between gap-8"><span>Sunday</span><span>4pm — 9pm</span></div>
                </div>
              </li>
            </ul>

            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <iframe
                title="Map to Trattoria Bella"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.10%2C51.52&layer=mapnik"
                className="h-full w-full border-0 grayscale"
                loading="lazy"
              />
            </div>
          </aside>

          <section id="reserve" className="bg-card shadow-soft p-8 md:p-12 scroll-mt-28">
            <p className="eyebrow">Booking</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Request a reservation</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fill in your details and we'll confirm by email within two hours.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required className="rounded-none h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="rounded-none h-11" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" required className="rounded-none h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" required className="rounded-none h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min={1} max={20} defaultValue={2} required className="rounded-none h-11" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Special requests (optional)</Label>
                <Textarea id="notes" rows={4} className="rounded-none" placeholder="Allergies, occasions, seating preferences..." />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="rounded-none mt-2 bg-primary text-primary-foreground hover:bg-primary-glow uppercase tracking-widest text-xs h-12"
              >
                {submitting ? "Sending..." : "Request reservation"}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
