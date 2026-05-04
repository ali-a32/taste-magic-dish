import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import pasta from "@/assets/dish-pasta.jpg";
import interior from "@/assets/interior.jpg";
import wine from "@/assets/dish-wine.jpg";
import bruschetta from "@/assets/dish-bruschetta.jpg";

const posts = [
  {
    img: wine,
    category: "Wine",
    title: "Five Italian reds to discover this autumn",
    excerpt: "Beyond Chianti — our sommelier picks five bottles from small producers shaping the future of Italian wine.",
    date: "Apr 28, 2026",
  },
  {
    img: pasta,
    category: "Recipe",
    title: "How we make our tagliatelle by hand",
    excerpt: "A walk through our morning ritual — from cracking eggs into 00 flour to the perfect al dente bite.",
    date: "Apr 14, 2026",
  },
  {
    img: bruschetta,
    category: "Sourcing",
    title: "Meet the farmers behind our tomatoes",
    excerpt: "A short drive from the city, the Romano family has been growing San Marzanos for four generations.",
    date: "Mar 30, 2026",
  },
  {
    img: interior,
    category: "Events",
    title: "Spring tasting menu — May 12 & 13",
    excerpt: "Six courses, four wine pairings, one unforgettable evening. Reservations open now.",
    date: "Mar 18, 2026",
  },
];

const JournalPage = () => (
  <Layout>
    <section className="bg-charcoal pt-32 pb-20 text-cream text-center">
      <div className="container-tight">
        <p className="eyebrow !text-gold">Journal</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl text-balance">
          Stories from <span className="italic text-gold">our kitchen</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-cream/75">
          Recipes, producers, events, and the people behind the plates.
        </p>
      </div>
    </section>

    <div className="container-tight py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="group">
            <div className="aspect-[5/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-primary font-medium">{p.category}</span>
                <span className="h-px w-6 bg-border" />
                <span>{p.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl group-hover:text-primary transition-smooth">
                {p.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <Button asChild variant="link" className="mt-4 px-0 text-primary uppercase tracking-widest text-xs">
                <Link to="#">Read more →</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </Layout>
);

export default JournalPage;
