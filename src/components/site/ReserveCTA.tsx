import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const ReserveCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={hero} alt="" loading="lazy" className="h-full w-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="relative z-10 container-tight text-center text-cream">
        <p className="eyebrow !text-gold">Join us</p>
        <h2 className="mt-4 font-serif text-4xl md:text-6xl text-balance max-w-3xl mx-auto leading-tight">
          A table by candlelight is <span className="italic text-gold">waiting for you.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-cream/80">
          Reservations recommended on weekends. Walk-ins welcome at the bar.
        </p>
        <Button asChild size="lg" className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary-glow uppercase tracking-widest text-xs px-10 h-12 shadow-warm">
          <Link to="/contact#reserve">Reserve a table</Link>
        </Button>
      </div>
    </section>
  );
};

export default ReserveCTA;
