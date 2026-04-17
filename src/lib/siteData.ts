export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dukes-alehouse.vercel.app";

export const dukeBrandAssets = {
  logo: "https://s3.us-east-1.amazonaws.com/securetree.com/Dukes+Alehouse+and+Kitchen/nop/Dukes-Logo.png",
  hero:
    "https://s3.us-east-1.amazonaws.com/securetree.com/Dukes+Alehouse+and+Kitchen/nop/Dukes-Hero-BG.jpg",
  diningRoom:
    "https://popmenucloud.com/cdn-cgi/image/width%3D1600%2Cheight%3D1600%2Cformat%3Dauto%2Cfit%3Dscale-down/vmmesojp/c85f911c-6ab6-4372-bcbf-d83cfa60f71c.jpg",
  cocktails:
    "https://popmenucloud.com/cdn-cgi/image/width%3D1600%2Cheight%3D1600%2Cformat%3Dauto%2Cfit%3Dscale-down/vmmesojp/8b0f7f75-83ec-44fc-b3d7-aafb8544f0ad.jpg",
  burger:
    "https://popmenucloud.com/cdn-cgi/image/width%3D1600%2Cheight%3D1600%2Cformat%3Dauto%2Cfit%3Dscale-down/vmmesojp/b10cc8f4-f689-49f0-b949-5ca30c6f97c8.jpg",
  cheeseCurds:
    "https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto/vmmesojp/b072dff8-acde-42ab-8255-93a0ae6edb6a.jpg",
  veggieBurger:
    "https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto/vmmesojp/0c4bb7ca-2092-4079-a059-52c1c6888fba.jpg",
};

export const dukeLinks = {
  home: "/",
  menu: "/menu",
  about: "/about",
  contact: "/contact",
  events: "/events",
  beer: "/beer",
  parties: "/book-a-party",
  order: "https://order.toasttab.com/online/dukes-alehouse-and-kitchen",
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
  officialAbout: "https://www.thedukeabides.com/about",
  reservationsHub: "https://www.thedukeabides.com/reservations",
  parking:
    "https://www.crystallake.org/our-community/resident-information/downtown-and-commuter-parking",
  downtown:
    "https://downtowncl.org/places/downtown-crystal-lake-main-street/",
};

export const dukeBusiness = {
  name: "Duke's Alehouse & Kitchen",
  shortName: "Duke's",
  city: "Crystal Lake, Illinois",
  addressLineOne: "110 N Main St",
  addressLineTwo: "Crystal Lake, IL 60014",
  phoneDisplay: "(815) 356-9980",
  emailDisplay: "hello@dukesalehouse.net",
  heroTitle:
    "The downtown tavern for dinner groups, beer people, and nights that turn into plans.",
  heroBody:
    "Duke's keeps Main Street loud in the right way: direct Toast ordering, Tock reservations, a live Untappd board, and a kitchen built for burgers, grain bowls, vegan regulars, vegetarians, and gluten-free diners at the same table.",
  utilityLine:
    "Order direct. Reserve fast. Check the taps live. Contact the house when the table gets bigger.",
};

export const primaryNav = [
  { href: dukeLinks.home, label: "Home" },
  { href: dukeLinks.menu, label: "Menu" },
  { href: dukeLinks.beer, label: "Beer + Drinks" },
  { href: dukeLinks.events, label: "Events" },
  { href: dukeLinks.parties, label: "Private Parties" },
  { href: dukeLinks.about, label: "About" },
  { href: dukeLinks.contact, label: "Visit" },
];

export const heroChips = [
  "Downtown Crystal Lake tavern",
  "Toast ordering",
  "Tock reservations",
  "Untappd live taps",
  "Weekly room rhythm",
  "Mixed-group menu",
];

export const heroServiceMoments = [
  {
    label: "Tonight starts here",
    title: "Order on Toast, reserve on Tock, then let the room handle the rest.",
  },
  {
    label: "Group-night reality",
    title: "Parties of 9+ go straight to the house by phone or email.",
  },
];

export const heroUtilityNotes = [
  "Monday kitchen 12 to 8, bar until midnight",
  "Tuesday house closed",
  "Live beer board on Untappd",
];

export const fastFacts = [
  {
    title: "Beer-first identity",
    body: "Belgian leaning, draft board always moving, and a live Untappd handoff instead of stale tap-copy promises.",
  },
  {
    title: "Useful for mixed groups",
    body: "Burgers, hot sandwiches, grain bowls, vegan options, vegetarian dishes, and gluten-free lanes all show up on the same menu.",
  },
  {
    title: "A room with a weekly pulse",
    body: "Hi-Fi vinyl nights, Whiskey Wednesdays, Thursday live music, and Friday karaoke give Duke's a repeating reason to choose it over another pub stop.",
  },
];

export const visualProofMoments = [
  {
    title: "The room actually looks like the night out Duke's is selling.",
    body: "The official gallery backs the Bramble mood with a real wood-and-brick dining room instead of generic tavern styling.",
    image: dukeBrandAssets.diningRoom,
    alt: "Duke's Alehouse interior dining room",
    accent: "Official gallery interior",
  },
  {
    title: "The food proof is specific to Duke's signatures.",
    body: "Cheese curds, burgers, grain bowls, and other house staples show up as real plates, not generic pub placeholders.",
    image: dukeBrandAssets.cheeseCurds,
    alt: "Duke's Alehouse cheese curds",
    accent: "Official gallery food shot",
  },
  {
    title: "The bar side shows up as cocktails, beer, and staying power.",
    body: "Cocktail imagery plus the live Untappd handoff makes the beer-first story feel current instead of decorative.",
    image: dukeBrandAssets.cocktails,
    alt: "Cocktails at Duke's Alehouse",
    accent: "Official gallery bar shot",
  },
];

export const trustBadges = [
  "Official guest reviews tied to real menu items",
  "Tripadvisor Travelers' Choice listing",
  "Tock reservations live now",
  "Toast direct ordering live now",
  "Untappd beer board live now",
];

export const reviewHighlights = [
  {
    quote: "One of my favorites in the entire world.",
    item: "Chipotle Chicken Pasta",
    reviewer: "Jason",
    context: "Official Duke's review",
  },
  {
    quote: "The vegan chocolate torte is heavenly.",
    item: "Vegan Chocolate Torte",
    reviewer: "Emily",
    context: "Official Duke's review",
  },
  {
    quote: "This appetizer is absolutely delicious.",
    item: "Tempura Green Beans",
    reviewer: "Donna M.",
    context: "Official Duke's review",
  },
];

export const hours = [
  {
    days: "Monday",
    kitchen: "12:00pm - 8:00pm",
    bar: "12:00pm - 12:00am",
  },
  {
    days: "Tuesday",
    kitchen: "Closed",
    bar: "Closed",
  },
  {
    days: "Wednesday",
    kitchen: "12:00pm - 8:00pm",
    bar: "12:00pm - 12:00am",
  },
  {
    days: "Thursday",
    kitchen: "12:00pm - 8:00pm",
    bar: "12:00pm - 12:00am",
  },
  {
    days: "Friday",
    kitchen: "12:00pm - 9:00pm",
    bar: "12:00pm - 1:00am",
  },
  {
    days: "Saturday",
    kitchen: "12:00pm - 9:00pm",
    bar: "12:00pm - 1:00am",
  },
  {
    days: "Sunday",
    kitchen: "12:00pm - 8:00pm",
    bar: "12:00pm - 12:00am",
  },
];

export const menuMoments = [
  {
    title: "A mixed-group menu that actually closes the plan",
    body: "Bison burgers, grain bowls, tofu, cauliflower, whitefish, and gluten-free desserts all belong on the same table here, so nobody has to talk themselves into a backup spot.",
  },
  {
    title: "House names people recognize",
    body: "Duke's Burger, Duke's Cuban, Duke's Chicken, the grain bowl, beet salad, and Korean fried cauliflower give the menu its own shape instead of reading like interchangeable alehouse filler.",
  },
  {
    title: "The handoff stays direct",
    body: "Once the table knows what it wants, the next step is still Duke's own Toast flow rather than a generic delivery marketplace detour.",
  },
];

export const menuPreview = [
  {
    category: "Appetizers",
    items: ["Steamed Mussels", "Tempura Green Beans", "Cheese Curds"],
  },
  {
    category: "Burgers + Sandwiches",
    items: ["Duke's Burger", "Duke's Cuban", "Hot Chicken Sandwich"],
  },
  {
    category: "Dinner Plates",
    items: [
      "Duke's Grain Bowl",
      "Pan-Roasted Whitefish",
      "Korean Fried Cauliflower",
    ],
  },
];

export const menuSections = [
  {
    slug: "appetizers",
    title: "Appetizers",
    note: "Open with the share plates and beer snacks that make the second round feel inevitable.",
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
    note: "Fresh enough to reset the table, still rooted in the house flavor profile.",
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
    note: "The burger lane is real, with Rosie's gluten-free buns available where noted.",
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
    note: "House names, hot sandwiches, and tavern signatures that regulars actually order.",
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
    note: "Kitchen depth for tables that want something past burgers and fries.",
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
    note: "Short dessert finish, still leaving room for gluten-free and vegan tables.",
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
    title: "The live draft board stays live",
    body: "Duke's beer credibility comes from movement. Untappd is the right handoff because regulars care what is pouring now, not what a static website promised last month.",
  },
  {
    title: "Belgian roots still matter",
    body: "The public Duke's identity still leans Belgian, which gives the room a sharper point of view than the usual catch-all craft-beer bar.",
  },
  {
    title: "Drinks go past beer",
    body: "Whiskey Wednesdays and cocktail promos keep the bar program broader than pints alone, even when beer leads the brand.",
  },
];

export const eventFeatures = [
  {
    name: "Hi-Fi Vinyl Nights",
    schedule: "Monday nights",
    description:
      "Bring-your-own-record nights with full kitchen service and Monday drink specials.",
    href: "https://www.thedukeabides.com/events/lets-get-hi-fi-vinyl-nights-at-dukes",
  },
  {
    name: "Whiskey Wednesdays",
    schedule: "Wednesday nights",
    description:
      "Public event pages promote whiskey pours and Old Fashioned specials midweek.",
    href: "https://www.thedukeabides.com/events/whiskey-wednesdays",
  },
  {
    name: "Live Music with Jim and Friends",
    schedule: "Thursday nights",
    description:
      "A recurring live-music anchor that turns dinner into a neighborhood plan.",
    href: "https://www.thedukeabides.com/events/live-music-with-jim-and-friends",
  },
  {
    name: "Karaoke",
    schedule: "Friday nights",
    description:
      "Late-night karaoke keeps the room moving after the dinner rush lets out.",
    href: "https://www.thedukeabides.com/events/dukes-karaoke-33006043",
  },
];

export const privatePartyDetails = [
  "Groups of 9+ are still routed to the house directly by phone or email.",
  "The banquet page and menu keep the planning handoff easy when dinner turns into a larger Main Street plan.",
  "Birthdays, work hangs, rehearsal-adjacent dinners, and neighborhood group nights all fit better here than in a generic banquet room.",
];

export const partyUseCases = [
  "Birthday dinners that want a room with some noise left in it",
  "Work gatherings that still need a real menu and a serious bar",
  "Rehearsal-adjacent dinners that fit better in a tavern than a banquet hall",
  "Local groups that want Main Street energy without formal-venue friction",
];

export const neighborhoodNotes = [
  {
    title: "Main Street matters here",
    body: "Duke's is a downtown Crystal Lake choice, not a highway stop. Meeting on Main Street and staying late is part of the social logic of the room.",
  },
  {
    title: "The plan closes fast",
    body: "Directions, call, reservations, and gift cards stay easy to reach because most Duke's decisions happen on a phone while the group chat is still open.",
  },
  {
    title: "Parking guidance stays honest",
    body: "Downtown Crystal Lake publishes parking guidance separately, so guests can get the real municipal guidance without Duke's inventing lot claims it does not own.",
  },
];

export const aboutNotes = [
  "Duke's is the room you pick when beer, dinner, and a real night out all need to happen in one place.",
  "The strongest Duke's story is still practical: Main Street location, direct ordering, Tock reservations, recurring weekly nights, and a menu that works for the whole group.",
  "That combination is what turns a casual plan into a repeat stop for downtown Crystal Lake regulars.",
];

export const footerActionLinks = [
  { href: dukeLinks.order, label: "Order Online", external: true },
  { href: dukeLinks.reservations, label: "Reserve on Tock", external: true },
  { href: dukeLinks.menu, label: "See Menu", external: false },
  { href: dukeLinks.beerMenu, label: "Open Untappd", external: true },
  { href: dukeLinks.parties, label: "Plan a Party", external: false },
  { href: dukeLinks.giftCards, label: "Gift Cards", external: true },
];
