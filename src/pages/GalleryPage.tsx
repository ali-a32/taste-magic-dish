import Layout from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import bruschetta from "@/assets/dish-bruschetta.jpg";
import steak from "@/assets/dish-steak.jpg";
import wine from "@/assets/dish-wine.jpg";

const items = [
  { src: hero, alt: "Restaurant table spread", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: pasta, alt: "Tagliatelle pasta" },
  { src: pizza, alt: "Margherita pizza" },
  { src: interior, alt: "Restaurant interior" },
  { src: chef, alt: "Chef plating", className: "md:row-span-2" },
  { src: steak, alt: "Grilled ribeye steak" },
  { src: bruschetta, alt: "Bruschetta with tomato" },
  { src: wine, alt: "Glass of red wine" },
  { src: dessert, alt: "Tiramisu dessert" },
];

const GalleryPage = () => (
  <Layout>
    <section className="bg-charcoal pt-32 pb-20 text-cream text-center">
      <div className="container-tight">
        <p className="eyebrow !text-gold">Gallery</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl text-balance">
          A glimpse <span className="italic text-gold">inside</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-cream/75">
          From the kitchen to the dining room — moments captured at Trattoria Bella.
        </p>
      </div>
    </section>

    <div className="container-tight py-20 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
        {items.map((it, i) => (
          <figure
            key={i}
            className={`group relative overflow-hidden shadow-card hover:shadow-warm transition-smooth ${it.className ?? ""}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </figure>
        ))}
      </div>
    </div>
  </Layout>
);

export default GalleryPage;
