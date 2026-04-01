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
        name: "Green Beans",
        description: "Tempura battered, teriyaki-ginger dipping sauce",
        price: "$9",
        tag: "Vegan",
        image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&h=300&fit=crop",
      },
      {
        name: "Chips and Salsa",
        description: "House-made tortilla chips with tomatillo salsa",
        price: "$6",
        tag: "Vegan / GF",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
      },
      {
        name: "Cheese Curds",
        description: "Cornbread batter, alehouse mustard aioli",
        price: "$9",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop",
      },
      {
        name: "Jalapeno Hummus",
        description: "Pitas, sunflower-flax sourdough, cucumber, olive tapenade, paprika. Add feta $1",
        price: "$9",
        tag: "Vegan",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop",
      },
      {
        name: "Togarashi Fries",
        description: "Hand-cut fries, kewpie mayonnaise, teriyaki, scallions",
        price: "$10",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Salads",
    icon: "🥬",
    items: [
      {
        name: "Roasted Beets",
        description: "Bleu cheese, candied pecans, endive, antique apples, bacon vinaigrette",
        price: "$11",
        tag: "Gluten Free",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      },
      {
        name: "Grilled Romaine Caesar",
        description: "Jalapeno caesar dressing, tomatoes, pinto beans, sweet corn, pickled onion, feta, crispy tortilla",
        price: "$11",
        tag: "Gluten Free",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
      },
      {
        name: "Alehouse Salad",
        description: "Baby field greens, feta, radishes, grape tomatoes, cucumbers, coriander-orange crackers, ginger vinaigrette",
        price: "$9",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
      },
      {
        name: "Fried Goat Cheese Salad",
        description: "Baby arugula, Sam Smith Strawberry Cider vinaigrette, strawberries, craisins, candied pecans",
        price: "$13",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Burgers",
    icon: "🍔",
    items: [
      {
        name: "Duke's Burger",
        description: "Ground organic bison, chipotle bacon jam, Duke's mayonnaise, white cheddar, tomato, toasted pretzel bun",
        price: "$15",
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      },
      {
        name: '"Classic" Burger',
        description: "Grass-fed beef, special sauce, smoked cheddar, lettuce, tomato, onion, pickles, toasted brioche bun",
        price: "$15",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
      },
      {
        name: "Veggie Burger",
        description: "Sweet potatoes, pinto beans, jalapenos, vegan chipotle mayonnaise, lettuce, tomato, toasted vegan pretzel bun",
        price: "$12",
        tag: "Vegan",
        image: "https://images.unsplash.com/photo-1520072959219-c595e6fdc652?w=400&h=300&fit=crop",
      },
      {
        name: "Plain Ole Burger",
        description: "Choice of grass-fed beef or organic bison patty, lettuce, tomato, toasted pretzel bun. Add cheese $2",
        price: "$12",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Sandwiches",
    icon: "🥪",
    items: [
      {
        name: "Fried Chicken Sandwich",
        description: "Special spice blend, Duke's mayo, orange-chili marmalade, lettuce, tomato, toasted brioche bun",
        price: "$15",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
      },
      {
        name: "Falafel Pita",
        description: "Chickpea fritters, tzatziki, pickled red onions, arugula, sriracha, grilled pita",
        price: "$12",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=400&h=300&fit=crop",
      },
      {
        name: "Duke's Chicken",
        description: "Bacon, smoked cheddar, chipotle mayo, lettuce, tomato, toasted pretzel bun",
        price: "$15",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Entrees",
    icon: "🍽️",
    items: [
      {
        name: "Duke's Grain Bowl",
        description: "Chickpeas, short grain brown rice, quinoa, lentils, sweet potatoes, roasted peppers, vegan chipotle mayo, avocado, kale chips, toasted almonds",
        price: "$16",
        tag: "Vegan / GF",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      },
      {
        name: "Mac and Cheese",
        description: "Cavatappi pasta, gouda and butterkase bechamel, butter toasted bread crumbs",
        price: "$15",
        tag: "Vegetarian",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop",
      },
      {
        name: "Meatloaf",
        description: "Organic ketchup, roasted garlic mashed potatoes, gravy, sauteed spinach",
        price: "$16",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      },
      {
        name: "Chipotle Chicken Pasta",
        description: "Gluten-free penne, chorizo, grilled chicken, sweet corn, chipotle cream sauce, parmesan cheese",
        price: "$17",
        tag: "Gluten Free",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    title: "Sides",
    icon: "🍟",
    items: [
      {
        name: "Cup of Soup",
        description: "Made fresh daily — ask your server for today's selection",
        price: "$3",
        tag: "Daily Special",
      },
      {
        name: "Cup of Vegan Chili",
        description: "Hearty house-made vegan chili",
        price: "$3",
        tag: "Vegan",
      },
      {
        name: "Dipping Vegetables & Hummus",
        description: "Fresh seasonal vegetables with our jalapeno hummus",
        price: "$3",
        tag: "Vegan",
      },
      {
        name: "French Fries",
        description: "Hand-cut and fried to golden perfection",
        price: "$3",
      },
      {
        name: "Tater Tots",
        description: "Crispy golden tater tots",
        price: "$3",
      },
      {
        name: "Mac and Cheese (Side)",
        description: "Gouda and butterkase bechamel, butter toasted bread crumbs",
        price: "$4",
      },
      {
        name: "Garlic Parmesan Fries",
        description: "Hand-cut fries tossed with garlic and parmesan",
        price: "$4",
      },
      {
        name: "Arrogant Cheese Fries",
        description: "Loaded hand-cut fries with house cheese sauce",
        price: "$4",
      },
      {
        name: "Inferno Fries",
        description: "Hand-cut fries with fiery house-made spice blend",
        price: "$4",
      },
      {
        name: "Togarashi Fries (Side)",
        description: "Kewpie mayonnaise, teriyaki, scallions",
        price: "$4",
      },
    ],
  },
];

const craftBeerCategories = [
  {
    title: "On Tap — 21+ Rotating Lines",
    beers: [
      "Gumballhead — 3 Floyds (Pale Wheat, 5.6%)",
      "Robert the Bruce — 3 Floyds (Scottish Ale, 6.5%)",
      "Zombie Dust — 3 Floyds (Pale Ale, 6.5%)",
      "Arctic Panzer Wolf — 3 Floyds (IPA, 9.0%)",
      "Allagash White — Allagash (Witbier, 5.2%)",
      "Oberon Ale — Bell's (Pale Wheat, 5.8%)",
      "Orange Vanilla Cream Oberon — Bell's (5.8%)",
      "Delirium Tremens — Huyghe (Belgian Golden, 8.5%)",
      "Conway's Irish Ale — Great Lakes (Red Ale, 6.3%)",
      "Zlotonator — Goldfinger (Doppelbock, 7.8%)",
      "Guinness Draught — Guinness (Stout, 4.2%)",
      "Belgian-Style Saison — Kishwaukee (5.0%)",
      "Son of Juice — Maplewood (Hazy IPA, 6.3%)",
      "Melvin IPA — Melvin Brewing (IPA, 7.5%)",
      "Miller Lite — Miller (Light Lager, 4.2%)",
      "The Knot — Phase Three (Irish Red, 5.0%)",
      "Lizard King — Pipeworks (Pale Ale, 6.0%)",
      "Reissdorf Kolsch — Reissdorf (Kolsch, 4.8%)",
      "Original Turbo Shandy — Hoppin' Frog (7.0%)",
      "Juicy Bits — WeldWerks (Hazy IPA, 6.7%)",
      "Braaaaaaaains Ruby Red — Drekker (Sour, 6.4%)",
      "Ectogasm — Drekker (Hazy IPA, 7.0%)",
    ],
  },
  {
    title: "Bottles — 72+ Selections",
    beers: [
      "Alpha King — 3 Floyds (Pale Ale, 6.66%)",
      "Yum Yum — 3 Floyds (Pale Ale, 5.5%)",
      "Celebrator — Ayinger (Doppelbock, 6.7%)",
      "Rumpkin — Avery (Spiced Beer, 16.7%)",
      "The Nuttiest Professor — Avery (Imperial Stout, 15.2%)",
      "Caramelized Chocolate Churro — Moody Tongue (Porter, 7.0%)",
      "Duchesse de Bourgogne — Verhaeghe (Flanders Red, 6.2%)",
      "Chimay Blue — Chimay (Belgian Dark, 9.0%)",
      "Chimay Red — Chimay (Belgian Dubbel, 7.0%)",
      "Chimay White — Chimay (Belgian Tripel, 8.0%)",
      "Duvel — Duvel Moortgat (Belgian Golden, 8.5%)",
      "Delirium Nocturnum — Huyghe (Belgian Dark, 8.5%)",
      "Orval — Brasserie d'Orval (Belgian Pale, 6.2%)",
      "Westmalle Tripel — Westmalle (Tripel, 9.5%)",
      "St. Bernardus Abt 12 — St. Bernardus (Quad, 10.0%)",
      "Rochefort 10 — Rochefort (Quad, 11.3%)",
      "La Chouffe — Brasserie d'Achouffe (Belgian Golden, 8.0%)",
      "Maredsous Brune — Maredsous (Belgian Dubbel, 8.0%)",
    ],
  },
  {
    title: "Cans — 33+ Selections",
    beers: [
      "Two Hearted Ale — Bell's (IPA, 7.0%)",
      "Fox Rocker — Crystal Lake Brewing (Amber, 6.0%)",
      "Daisy Cutter — Half Acre (Pale Ale, 5.2%)",
      "Anti-Hero — Revolution (IPA, 6.7%)",
      "Pabst Blue Ribbon — Pabst (Lager, 4.7%)",
      "Bud Light — Budweiser (Light Lager, 4.2%)",
      "Founders All Day IPA — Founders (Session IPA, 4.7%)",
      "Sierra Nevada Pale Ale — Sierra Nevada (5.6%)",
      "Ninja vs. Unicorn — Pipeworks (DIPA, 8.0%)",
      "Apex Predator — Off Color (Saison, 6.5%)",
      "Flannel Pajamas — Begyle (Oatmeal Stout, 5.5%)",
      "Fun Size — Pollyanna (Milk Stout, 5.5%)",
    ],
  },
  {
    title: "Cocktails, Wine & More",
    beers: [
      "Award-winning craft cocktails — updated seasonally",
      "Curated wine list — reds, whites, and bubbles",
      "Creative mocktails — non-alcoholic options",
      "Premium spirits selection",
      "Seasonal signature drinks",
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
            all made with sustainable ingredients from local producers. Served with your choice of side.
            Gluten-free buns available for $1 more. Add grilled chicken to any salad for $6.
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
              Over 100 craft brews and Belgian ales — 21+ on rotating tap, 72+ bottles, 33+ cans —
              plus an award-winning cocktail menu, wines, and mocktails. Tap list changes frequently.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {craftBeerCategories.map((cat, ci) => (
              <ScrollReveal key={cat.title} delay={ci * 100}>
                <div className="bg-card-bg/80 rounded-xl border border-copper/20 p-8">
                  <h3 className="text-copper font-serif text-2xl mb-6">{cat.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
