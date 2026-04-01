"use client";

import ScrollReveal from "@/components/ScrollReveal";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tag?: string;
  image?: string;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Appetizers",
    icon: "🥗",
    items: [
      {
        name: "Beet Salad",
        description: "Apples, Wisconsin bleu cheese, house-cured bacon, endive, candied pecans, bacon vinaigrette",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      },
      {
        name: "Brussels Sprouts",
        description: "Roasted and crispy — our most talked-about appetizer",
        tag: "Fan Favorite",
        image: "https://images.unsplash.com/photo-1534938665420-4c46868d2e8b?w=400&h=300&fit=crop",
      },
      {
        name: "Handmade Polenta",
        description: "Stuffed with goat cheese and fresh basil, grilled to perfection",
        price: "$10",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      },
      {
        name: "Duke's Wings",
        description: "Choice of house-made sauces — ask your server for today's selection",
        image: "https://images.unsplash.com/photo-1608039829572-9b85e41e7512?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Burgers & Sandwiches",
    icon: "🍔",
    items: [
      {
        name: "Grass-Fed Burger",
        description: "Our signature burger served with homemade fries — the one that put Duke's on the map",
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      },
      {
        name: "Cuban Sandwich",
        description: "Pressed to perfection, served with our famous special fries",
        tag: "Highly Reviewed",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
      },
      {
        name: "Artisan Sandwiches",
        description: "Rotating selection of handcrafted sandwiches — ask your server for today's offerings",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Entrées",
    icon: "🍽️",
    items: [
      {
        name: "Goat Cheese & Chorizo Pizza",
        description: "Wood-fired style with our house-made dough — gluten-free crust available",
        tag: "GF Available",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      },
      {
        name: "Fall Pizza",
        description: "Squash and seasonal toppings on our signature crust",
        tag: "Seasonal",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      },
      {
        name: "Blackened Chicken Pasta",
        description: "Cajun-spiced chicken with our house pasta preparation",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
      },
      {
        name: "Cavatappi Mac & Cheese",
        description: "Homemade gouda cheese mornay sauce, topped with breadcrumbs, baked golden brown",
        tag: "Comfort Classic",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop",
      },
      {
        name: "Gluten-Free Penne Pasta",
        description: "Grilled chicken, fresh corn, chorizo, chipotle peppers, cream sauce",
        tag: "Gluten Free",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      },
      {
        name: "Veggie Bowl",
        description: "Fresh seasonal vegetables and grains — a guest favorite",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Sides",
    icon: "🍟",
    items: [
      {
        name: "Homemade Fries",
        description: "Hand-cut and fried to golden perfection",
      },
      {
        name: "Side Salad",
        description: "Fresh greens with house vinaigrette",
      },
      {
        name: "Seasonal Soup",
        description: "Made fresh daily — ask your server",
        tag: "Daily Special",
      },
    ],
  },
];

const craftBeerCategories = [
  {
    title: "On Tap — 21 Rotating Lines",
    beers: [
      "Allagash White", "Bell's Two Hearted", "Ballast Point Sculpin",
      "Goose Island IPA", "Lagunitas IPA", "Revolution Anti-Hero",
      "Three Floyds Zombie Dust", "Founders All Day IPA",
      "Sierra Nevada Pale Ale", "Stone IPA", "Dogfish Head 60 Min",
      "Half Acre Daisy Cutter", "Maplewood Son of Juice",
      "Pipeworks Ninja vs. Unicorn", "Off Color Apex Predator",
      "Metropolitan Krankshaft", "Begyle Flannel Pajamas",
      "Spiteful Alley Time", "Pollyanna Fun Size",
      "Miskatonic Killswitch", "Two Brothers Sidekick",
    ],
  },
  {
    title: "Belgian Ales",
    beers: [
      "Chimay Blue", "Chimay Red", "Chimay White",
      "Duvel", "Delirium Tremens", "Delirium Nocturnum",
      "Orval", "Westmalle Tripel", "St. Bernardus Abt 12",
      "Rochefort 10", "La Chouffe", "Maredsous",
    ],
  },
  {
    title: "Cocktails & More",
    beers: [
      "Award-winning craft cocktails",
      "Seasonal signature drinks",
      "Curated wine list",
      "Creative mocktails",
      "Premium spirits selection",
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Taste the Difference</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mt-3 mb-4">
            Our <span className="gradient-text">Menu</span>
          </h1>
          <p className="text-cream/60 max-w-2xl mx-auto">
            From gourmet burgers and artisan sandwiches to comfort food classics —
            all made with sustainable ingredients from local producers.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <section key={section.title} className="py-16 px-4 even:bg-charcoal/20">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  <span className="gradient-text">{section.title}</span>
                </h2>
              </div>
              <div className="mt-3 h-0.5 w-20 bg-copper/50 rounded-full" />
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 80}>
                  <div className="card-hover bg-card-bg rounded-lg overflow-hidden border border-copper/10 h-full flex flex-col">
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        {item.tag && (
                          <span className="absolute top-3 right-3 px-2 py-1 bg-copper/90 text-charcoal text-xs font-bold uppercase rounded">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-cream">{item.name}</h3>
                        {item.price && (
                          <span className="text-copper font-bold whitespace-nowrap">{item.price}</span>
                        )}
                      </div>
                      <p className="text-cream/60 text-sm mt-2 flex-1">{item.description}</p>
                      {item.tag && !item.image && (
                        <span className="inline-block mt-3 px-2 py-1 bg-copper/10 text-copper text-xs font-medium uppercase rounded w-fit">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Craft Beer Section */}
      <section className="py-24 px-4 bg-charcoal/40">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Beer Lover&apos;s Paradise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Craft <span className="gradient-text">Beer &amp; Drinks</span>
            </h2>
            <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
              Over 140 craft brews and Belgian ales, 21 on rotating tap, plus an award-winning
              cocktail menu, wines, and mocktails.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {craftBeerCategories.map((cat, ci) => (
              <ScrollReveal key={cat.title} delay={ci * 100}>
                <div className="bg-card-bg/80 rounded-xl border border-copper/20 p-8">
                  <h3 className="text-copper font-serif text-2xl mb-6">{cat.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.beers.map((beer, i) => (
                      <div
                        key={beer}
                        className="text-cream/70 text-sm py-2 px-3 rounded bg-charcoal/50 border border-copper/10 hover:border-copper/30 transition-colors flex items-center gap-2"
                      >
                        <span className="text-copper font-bold text-xs">{(i + 1).toString().padStart(2, "0")}</span>
                        <span>{beer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-cream/40 text-sm mt-8">
            Our tap list and seasonal selections change regularly. Call (815) 356-9980 for today&apos;s offerings.
          </p>
        </div>
      </section>

      {/* Catering */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Private Events</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
              <span className="gradient-text">Catering</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Duke&apos;s offers party platters and buffet-style service with soup and our famous
              alehouse salad. Perfect for corporate events, celebrations, and gatherings.
            </p>
            <a
              href="tel:8153569980"
              className="inline-block px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105"
            >
              Call to Inquire — (815) 356-9980
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
