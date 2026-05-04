import chef from "@/assets/chef.jpg";
import interior from "@/assets/interior.jpg";

const About = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight grid gap-16 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img
            src={interior}
            alt="Warm interior of Trattoria Bella with brick walls and Edison bulbs"
            loading="lazy"
            width={1280}
            height={1280}
            className="aspect-[4/5] w-full object-cover shadow-soft"
          />
          <img
            src={chef}
            alt="Head chef Marco plating a dish"
            loading="lazy"
            width={400}
            height={500}
            className="absolute -bottom-10 -right-6 hidden w-48 object-cover shadow-warm md:block lg:w-60"
          />
        </div>

        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance leading-tight">
            Three generations of <span className="italic text-primary">Italian family cooking.</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Trattoria Bella began in 1998 with Nonna Rosa's recipe book, a wood-burning oven, and twelve seats by the window. Today, her grandson Marco leads the kitchen — but the philosophy hasn't changed.
            </p>
            <p>
              Pasta is rolled by hand each morning. Sauces simmer slowly. Bread is baked in-house. We source from small farms within fifty miles, because the best Italian cooking starts with the best ingredients — and a little patience.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="eyebrow">Est.</dt>
              <dd className="mt-2 font-serif text-3xl">1998</dd>
            </div>
            <div>
              <dt className="eyebrow">Recipes</dt>
              <dd className="mt-2 font-serif text-3xl">120+</dd>
            </div>
            <div>
              <dt className="eyebrow">Local farms</dt>
              <dd className="mt-2 font-serif text-3xl">24</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
