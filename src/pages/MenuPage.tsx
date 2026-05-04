import Layout from "@/components/site/Layout";

type Item = { name: string; desc: string; price: string };
type Section = { title: string; tagline: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Antipasti",
    tagline: "To begin",
    items: [
      { name: "Bruschetta al Pomodoro", desc: "Grilled sourdough, heirloom tomato, basil, garlic, olive oil.", price: "11" },
      { name: "Burrata Pugliese", desc: "Creamy burrata, peach, prosciutto di Parma, aged balsamic.", price: "16" },
      { name: "Calamari Fritti", desc: "Lightly battered squid, lemon, smoked aioli.", price: "15" },
      { name: "Antipasto della Casa", desc: "Cured meats, marinated olives, cheeses, focaccia. (For two)", price: "24" },
    ],
  },
  {
    title: "Pasta",
    tagline: "Made by hand each morning",
    items: [
      { name: "Tagliatelle al Tartufo", desc: "Hand-cut egg pasta, butter, parmigiano, shaved black truffle.", price: "28" },
      { name: "Spaghetti alle Vongole", desc: "Fresh clams, white wine, garlic, chili, parsley.", price: "26" },
      { name: "Rigatoni alla Norma", desc: "Slow-roasted eggplant, San Marzano tomato, ricotta salata.", price: "22" },
      { name: "Ravioli di Zucca", desc: "Pumpkin ravioli, brown butter, sage, amaretti crumble.", price: "24" },
      { name: "Pappardelle al Cinghiale", desc: "Wild boar ragù slow-cooked in red wine.", price: "27" },
    ],
  },
  {
    title: "Dal Forno",
    tagline: "From the wood-fired oven",
    items: [
      { name: "Margherita Verace", desc: "San Marzano tomato, fior di latte, basil, olive oil.", price: "19" },
      { name: "Diavola", desc: "Spicy soppressata, mozzarella, chili honey.", price: "22" },
      { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, fontina, parmigiano.", price: "21" },
      { name: "Tartufo Bianco", desc: "Fontina, mushroom, shaved white truffle (in season).", price: "32" },
    ],
  },
  {
    title: "Secondi",
    tagline: "Mains",
    items: [
      { name: "Bistecca alla Fiorentina", desc: "Grilled ribeye, rosemary, sea salt, lemon, roasted potatoes.", price: "44" },
      { name: "Branzino al Sale", desc: "Whole salt-baked sea bass, salsa verde, grilled vegetables.", price: "38" },
      { name: "Pollo alla Milanese", desc: "Breaded chicken cutlet, arugula, cherry tomato, parmigiano.", price: "29" },
      { name: "Osso Buco", desc: "Braised veal shank, saffron risotto, gremolata.", price: "36" },
    ],
  },
  {
    title: "Dolci",
    tagline: "Sweet endings",
    items: [
      { name: "Tiramisù della Nonna", desc: "Mascarpone, espresso-soaked savoiardi, cocoa.", price: "12" },
      { name: "Panna Cotta", desc: "Vanilla bean cream, seasonal fruit compote.", price: "11" },
      { name: "Affogato", desc: "Vanilla gelato drowned in hot espresso, amaretto.", price: "10" },
      { name: "Cannoli Siciliani", desc: "Crisp shells, ricotta cream, pistachio, candied orange.", price: "11" },
    ],
  },
];

const MenuPage = () => (
  <Layout>
    <section className="bg-charcoal pt-32 pb-20 text-cream text-center">
      <div className="container-tight">
        <p className="eyebrow !text-gold">Our menu</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl text-balance">
          A taste of <span className="italic text-gold">la dolce vita</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-cream/75">
          Our menu changes seasonally. Please ask your server about today's specials and ingredient sourcing.
        </p>
      </div>
    </section>

    <div className="container-tight py-20 md:py-28 space-y-20">
      {sections.map((s) => (
        <section key={s.title}>
          <header className="text-center mb-12">
            <p className="eyebrow">{s.tagline}</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">{s.title}</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-primary" />
          </header>

          <ul className="mx-auto max-w-3xl divide-y divide-border">
            {s.items.map((it) => (
              <li key={it.name} className="grid grid-cols-[1fr_auto] gap-x-6 py-6">
                <div>
                  <h3 className="font-serif text-2xl">{it.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">{it.desc}</p>
                </div>
                <div className="font-serif text-2xl text-primary self-start">${it.price}</div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Layout>
);

export default MenuPage;
