export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dukes-alehouse.vercel.app";

export const dukeLinks = {
  home: "/",
  menu: "/menu",
  about: "/about",
  contact: "/contact",
  events: "/events",
  beer: "/beer",
  parties: "/book-a-party",
  order:
    "https://www.thedukeabides.com/popmenu-order/dukes-alehouse-and-kitchen/menus/main-menu",
  reservations: "https://www.exploretock.com/dukesalehouse",
  giftCards: "https://dukes.securetree.com/",
  beerMenu: "https://untappd.com/v/dukes-alehouse-and-kitchen/7677",
  banquets: "https://www.thedukeabides.com/banquets",
  directions:
    "https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL+60014",
  phone: "tel:8153569980",
  email: "mailto:hello@dukesalehouse.net",
  facebook: "https://www.facebook.com/dukesalehouse",
  instagram: "https://www.instagram.com/dukesalehouse",
  yelp: "https://www.yelp.com/biz/dukes-alehouse-and-kitchen-crystal-lake",
};

export const primaryNav = [
  { href: dukeLinks.home, label: "Home" },
  { href: dukeLinks.menu, label: "Menus" },
  { href: dukeLinks.events, label: "Events" },
  { href: dukeLinks.beer, label: "Beer" },
  { href: dukeLinks.parties, label: "Book a Party" },
  { href: dukeLinks.about, label: "About" },
  { href: dukeLinks.contact, label: "Contact" },
];

export const heroStats = [
  { value: "140+", label: "Craft beers & Belgian ales" },
  { value: "21", label: "Rotating taps" },
  { value: "2008", label: "Downtown Crystal Lake mainstay" },
  { value: "7", label: "Days of music, specials, or events in rotation" },
];

export const serviceNotes = [
  "Order direct through Toast-style Popmenu ordering. We did not verify DoorDash or Uber Eats listings, so this site points you to Duke's official ordering path.",
  "Reservations run through Tock. For groups of 9+, Duke's asks guests to email hello@dukesalehouse.net or call the restaurant directly.",
  "Kitchen and bar hours are split. Tuesday is not listed as open in Duke's live event pages, so this site keeps Tuesday closed.",
];

export const hours = [
  {
    days: "Monday, Wednesday, Thursday, Sunday",
    kitchen: "12:00pm - 8:00pm",
    bar: "12:00pm - 12:00am",
  },
  {
    days: "Friday, Saturday",
    kitchen: "12:00pm - 9:00pm",
    bar: "12:00pm - 1:00am",
  },
  {
    days: "Tuesday",
    kitchen: "Closed",
    bar: "Closed",
  },
];

export const menuSections = [
  {
    slug: "appetizers",
    title: "Appetizers",
    note: "Real Duke's starters from the public 2021 menu PDF.",
    items: [
      {
        name: "Steamed Mussels",
        price: "$12",
        description:
          "Allagash White ale, garlic, chipotle, ciabatta, garlic aioli.",
      },
      {
        name: "Tempura Green Beans",
        price: "$9",
        description: "Vegan. Served with teriyaki-ginger dipping sauce.",
      },
      {
        name: "Cheese Curds",
        price: "$10",
        description: "Cornbread batter with mustard aioli.",
      },
      {
        name: "Jalapeno Hummus",
        price: "$9",
        description:
          "Vegan. Pitas, grilled sunflower-flax sourdough, cucumber, olive tapenade, paprika. Add feta for $1.",
      },
      {
        name: "Togarashi Fries",
        price: "$10",
        description:
          "Vegetarian. Hand-cut fries, kewpie mayonnaise, teriyaki, scallions.",
      },
    ],
  },
  {
    slug: "salads",
    title: "Salads",
    note: "Salads can add grilled chicken for $6 or pan-roasted whitefish for $10.",
    items: [
      {
        name: "Alehouse Salad",
        price: "$10",
        description:
          "Baby lettuce mix, cherry tomatoes, cucumbers, radishes, coriander yogurt crackers, ginger-citrus vinaigrette, feta.",
      },
      {
        name: "Beet Salad",
        price: "$11",
        description:
          "Gluten-free. Bleu cheese, candied pecans, endive, antique apples, bacon vinaigrette.",
      },
      {
        name: "Chopped Salad",
        price: "$10",
        description:
          "Gluten-free / vegan. Red oak leaf lettuce, bibb lettuce, avocado-ranch dressing, cucumbers, tomatoes, cauliflower, carrots, peas, scallions, grilled tofu.",
      },
      {
        name: "Fried Goat Cheese",
        price: "$13",
        description:
          "Vegetarian. Arugula, Sam Smith Strawberry Cider vinaigrette, strawberries, craisins, candied pecans.",
      },
    ],
  },
  {
    slug: "burgers",
    title: "Burgers",
    note: "Served with a side. Rosie's gluten-free burger buns available for $2 more.",
    items: [
      {
        name: "Duke's Burger",
        price: "$15",
        description:
          "Ground organic bison, chipotle bacon jam, Duke's mayonnaise, white cheddar, tomato, pretzel bun.",
      },
      {
        name: '"Classic" Burger',
        price: "$15",
        description:
          "Grass-fed beef, special sauce, American cheese, lettuce, tomato, onion, pickles, brioche bun.",
      },
      {
        name: "Veggie Burger",
        price: "$12",
        description:
          "Vegetarian. Sweet potatoes, pinto beans, breadcrumbs, oatmeal, jalapenos, golden raisins, vegan chipotle mayonnaise, lettuce, tomato, pretzel bun.",
      },
      {
        name: "Plain Ole Burger",
        price: "$12",
        description:
          "Choice of grass-fed beef or organic bison, lettuce, tomato, brioche bun. Add cheese for $2.",
      },
    ],
  },
  {
    slug: "sandwiches",
    title: "Sandwiches",
    note: "Served with a side. Duke's signatures called out in the audit are included here.",
    items: [
      {
        name: "Duke's Chicken",
        price: "$15",
        description:
          "Bacon, smoked cheddar, chipotle mayo, lettuce, tomato, toasted pretzel bun.",
      },
      {
        name: "Grilled Tofu and Kim-Chi",
        price: "$13",
        description:
          "Vegan. Duke's kimchi, togarashi, vegan mayonnaise, teriyaki-ginger, grilled ciabatta.",
      },
      {
        name: "Duke's Cuban",
        price: "$16",
        description:
          "Slow-roasted Slagel Farm pork, Beeler's ham, Prairie Pure swiss cheese, yellow mustard aioli, pickles, grilled ciabatta.",
      },
      {
        name: "Hot Chicken Sandwich",
        price: "$16",
        description:
          "Special spice blend, Duke's mayo, Duke's pickles, lettuce, tomato, red onion, brioche bun.",
      },
      {
        name: "Falafel Pita",
        price: "$13",
        description:
          "Vegetarian / vegan by request. Chickpea fritters, tzatziki, pickled red onions, arugula, sriracha, grilled pita.",
      },
    ],
  },
  {
    slug: "entrees",
    title: "Entrees",
    note: "Comfort food plus vegan and gluten-free standouts from the live menu PDF.",
    items: [
      {
        name: "Duke's Grain Bowl",
        price: "$16",
        description:
          "Vegan / gluten-free. Chickpeas, short grain brown rice, quinoa, sweet potatoes, roasted peppers, vegan chipotle mayonnaise, avocado, kale chips, toasted almonds.",
      },
      {
        name: "Pan-Roasted Whitefish",
        price: "$20",
        description:
          "Gluten-free. Parsnip puree, sauteed swiss chard, quinoa, dates, walnuts, grilled radish, heirloom apples, shallot oil, lemon.",
      },
      {
        name: "Mac & Cheese",
        price: "$15",
        description:
          "Vegetarian. Cavatappi pasta, gouda and butterkase bechamel, butter-toasted bread crumbs.",
      },
      {
        name: "Chipotle Chicken Pasta",
        price: "$18",
        description:
          "Gluten-free penne, chorizo, grilled chicken, sweet corn, chipotle cream sauce, parmesan cheese.",
      },
      {
        name: "Korean Fried Cauliflower",
        price: "$17",
        description:
          "Vegan. Tempura-ale fried cauliflower, soy-garlic glaze, Duke's kim-chi fried rice, scallions.",
      },
    ],
  },
  {
    slug: "desserts",
    title: "Desserts",
    note: "Current staples called out in reviews and the public PDF.",
    items: [
      {
        name: "Carrot Cake",
        price: "$6",
        description: "Gluten-free with cream cheese frosting.",
      },
      {
        name: "Chocolate Torte",
        price: "$7",
        description:
          "Gluten-free / vegan. Ethereal chocolate and avocado mousse with pecan crust.",
      },
      {
        name: "Seasonal Cheesecake",
        price: "$7",
        description: "Graham cracker crust with whipped cream.",
      },
    ],
  },
];

export const beerHighlights = [
  {
    title: "Rotating Drafts",
    description:
      "Untappd currently shows Duke's draft list carrying taps like Gumballhead, Allagash White, Delirium Tremens, Guinness, Son of Juice, Melvin IPA, Juicy Bits, and Drekker's Braaaaaaaains.",
  },
  {
    title: "Belgian Bench",
    description:
      "The bottle list and Duke's long-running positioning both lean into Belgian ales, with Chimay, Duvel, Rochefort, St. Bernardus, and other staples called out across public menus and reviews.",
  },
  {
    title: "Cocktails and THC Specials",
    description:
      "Current event listings promote $7 Old Fashioneds on Whiskey Wednesdays and THC cocktails on Monday vinyl nights, so the drinks program extends past beer.",
  },
];

export const eventFeatures = [
  {
    name: "Whiskey Wednesdays",
    schedule: "Weekly Wednesday",
    description:
      "$3 whiskey pours and $7 Old Fashioneds in the tavern.",
    href: "https://www.thedukeabides.com/events/whiskey-wednesdays",
  },
  {
    name: "Live Music with Jim and Friends",
    schedule: "Weekly Thursday · 6pm to 8pm",
    description:
      "A regular Thursday music anchor with local musicians on Duke's stage.",
    href: "https://www.thedukeabides.com/events/live-music-with-jim-and-friends",
  },
  {
    name: "Karaoke",
    schedule: "Weekly Friday · 9pm to 1am",
    description:
      "Late-night karaoke backed by food, cocktails, and the full bar.",
    href: "https://www.thedukeabides.com/events/dukes-karaoke-33006043",
  },
  {
    name: "Hi-Fi Vinyl Nights",
    schedule: "Weekly Monday · 6pm to 9pm",
    description:
      "Bring-your-own-record nights with full kitchen service and special drinks.",
    href: "https://www.thedukeabides.com/events/lets-get-hi-fi-vinyl-nights-at-dukes",
  },
];

export const privateEventDetails = [
  "Groups of 9+ are routed to hello@dukesalehouse.net or the main phone line per Tock.",
  "Duke's banquet page publishes a dedicated banquet menu PDF and calls out mix-and-match appetizers, entrees, and desserts.",
  "The private event pitch should feel like downtown Crystal Lake hospitality, not generic catering copy.",
];

export const reviews = [
  {
    quote:
      "There are 21 beers on tap and Duke's has you covered whether you want a craft brew at the bar or a more upscale dining experience.",
    source: "Daily Herald feature",
  },
  {
    quote:
      "The menu is built for vegans, vegetarians, gluten-free guests, and burger people without feeling like anyone settled.",
    source: "Recent review trend",
  },
  {
    quote:
      "Warm, cozy, and casual with local sourcing and a serious beer list remains the core Duke's identity.",
    source: "Public venue descriptions",
  },
];
