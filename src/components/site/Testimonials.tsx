import { Quote } from "lucide-react";

const reviews = [
  {
    text: "The closest thing to my grandmother's kitchen in Bologna I've found this side of the Atlantic. The tagliatelle is perfection.",
    author: "Elena M.",
    source: "The Daily Critic",
  },
  {
    text: "An absolute gem. Warm, unpretentious, and every plate feels like it was made just for you. We're already planning our return.",
    author: "James & Priya",
    source: "Diner's Review",
  },
  {
    text: "Marco's seasonal menu is a love letter to Italian cooking. The wine list is small but exceptional.",
    author: "City Food Guide",
    source: "★★★★★",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-charcoal text-cream py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-gold">Kind words</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            What our guests <span className="italic text-gold">are saying</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="flex flex-col">
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-6 font-serif text-xl leading-relaxed text-cream/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-cream/15 pt-4">
                <div className="font-medium">{r.author}</div>
                <div className="text-xs uppercase tracking-widest text-cream/50 mt-1">{r.source}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
