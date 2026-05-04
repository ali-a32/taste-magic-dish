import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="An overhead view of an Italian restaurant table set with pasta, pizza and wine"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container-tight">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow !text-gold">Since 1998 · Old Town</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-cream text-balance md:text-7xl lg:text-[5.5rem]">
              A taste of Italy,<br />
              <span className="italic text-gold">made by hand.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-cream/85">
              Slow-rolled pasta, wood-fired pizza, and seasonal recipes passed down through three generations — served in our warm, candlelit dining room.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary-glow uppercase tracking-widest text-xs px-8 h-12 shadow-warm">
                <Link to="/contact#reserve">Reserve a Table</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-charcoal uppercase tracking-widest text-xs px-8 h-12">
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-fade-in">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
