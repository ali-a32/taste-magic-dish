import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pasta from "@/assets/dish-pasta.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const dishes = [
  {
    name: "Tagliatelle al Tartufo",
    description: "Hand-cut egg pasta, butter, parmigiano, shaved black truffle.",
    price: "28",
    img: pasta,
  },
  {
    name: "Margherita Verace",
    description: "San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil.",
    price: "19",
    img: pizza,
  },
  {
    name: "Tiramisù della Nonna",
    description: "Mascarpone cream, espresso-soaked savoiardi, cocoa.",
    price: "12",
    img: dessert,
  },
];

const MenuHighlights = () => {
  return (
    <section className="bg-gradient-section py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Tonight's Selection</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Signature dishes from <span className="italic text-primary">our kitchen</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A small selection of our most-loved plates. Our menu changes with the seasons, guided by what's freshest at the market.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="group bg-card shadow-card hover:shadow-warm transition-smooth overflow-hidden"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl">{d.name}</h3>
                  <span className="font-serif text-xl text-primary">${d.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild variant="outline" className="rounded-none border-foreground/20 hover:bg-foreground hover:text-background uppercase tracking-widest text-xs px-8 h-12">
            <Link to="/menu">See the full menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
