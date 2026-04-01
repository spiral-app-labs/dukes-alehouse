"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const reviews = [
  {
    text: "First time at Dukes. Excellent food with big menu. Brussels sprouts were outstanding appetizers. Cuban with special fries were a 10. Veggie bowl excellent as well. Service was perfect.",
    author: "TripAdvisor Guest",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "I really like Duke's Alehouse. I remember when the original Duke's opened. The food and craft beer selection keeps me coming back.",
    author: "Yelp Reviewer",
    source: "Yelp",
    rating: 5,
  },
  {
    text: "Duke's is the place in Crystal Lake that really wants to give you a more trendy city-like experience, that much of these restaurants in the suburbs tend to lack.",
    author: "TripAdvisor Guest",
    source: "TripAdvisor",
    rating: 4,
  },
  {
    text: "Delicious gluten-free selections. My husband enjoyed a gluten-free goat cheese and chorizo pizza while I had a wonderful fall pizza.",
    author: "TripAdvisor Guest",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Best gastropub in the northwest suburbs. The craft beer list alone is worth the trip, but the food is what keeps us regulars.",
    author: "Google Reviewer",
    source: "Google",
    rating: 5,
  },
  {
    text: "Amazing selection of craft beers. The staff really knows their stuff and can recommend the perfect pairing for any meal.",
    author: "Yelp Reviewer",
    source: "Yelp",
    rating: 5,
  },
];

const menuHighlights = [
  {
    name: "Grass-Fed Burger",
    desc: "Our signature burger crafted from sustainably sourced grass-fed beef. The one everyone talks about.",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=450&fit=crop",
    badge: "Fan Favorite",
  },
  {
    name: "Brussels Sprouts",
    desc: "Crispy roasted sprouts with our house glaze — our most-reviewed appetizer. Don't skip them.",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1534938665420-4c46868d2e8b?w=600&h=450&fit=crop",
    badge: "Must Try",
  },
  {
    name: "Craft Beer Flight",
    desc: "Sample our rotating 100+ tap selection. Let our staff guide you through local and imported treasures.",
    category: "Craft Beer",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=450&fit=crop",
    badge: "Signature",
  },
  {
    name: "Cuban Sandwich",
    desc: "Pressed to perfection with our famous special fries. A crowd favorite for good reason.",
    category: "Sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=450&fit=crop",
    badge: "Best Seller",
  },
];

const beerCategories = [
  {
    emoji: "🍺",
    title: "IPAs & Pale Ales",
    desc: "West Coast IPAs, hazy NEIPAs, session ales — rotating picks from the country's best craft breweries.",
    count: "30+",
  },
  {
    emoji: "🏴󠁧󠁢󠁢󠁥󠁬󠁳󠁿",
    title: "Belgian Ales",
    desc: "Rare imports: Chimay, Duvel, Delirium Tremens, and seasonal abbey ales straight from Belgium.",
    count: "20+",
  },
  {
    emoji: "🌑",
    title: "Stouts & Porters",
    desc: "Rich, roasty, and complex. From dry Irish stouts to imperial coffee stouts.",
    count: "15+",
  },
  {
    emoji: "🍋",
    title: "Sours & Saisons",
    desc: "Funky and refreshing. Lambics, gose, kettle sours, and farmhouse ales.",
    count: "15+",
  },
  {
    emoji: "🌾",
    title: "Lagers & Wheat",
    desc: "Crisp pilsners, hefeweizens, and easy-drinking locals like Half Acre and Metropolitan.",
    count: "20+",
  },
  {
    emoji: "🦁",
    title: "Local Legends",
    desc: "Chicago's finest: Revolution, Maplewood, Off Color, Begyle, Spiteful, Pipeworks.",
    count: "25+",
  },
];

const tapBeers = [
  "Allagash White", "Bell's Two Hearted", "Ballast Point Sculpin", "Chimay Blue",
  "Duvel", "Delirium Tremens", "Goose Island IPA", "Lagunitas IPA",
  "Revolution Anti-Hero", "Three Floyds Zombie Dust", "Founders All Day IPA",
  "Sierra Nevada Pale Ale", "Stone IPA", "Dogfish Head 60 Min",
  "Half Acre Daisy Cutter", "Maplewood Son of Juice", "Pipeworks Ninja vs. Unicorn",
  "Off Color Apex Predator", "Metropolitan Krankshaft", "Begyle Flannel Pajamas",
  "Spiteful Alley Time",
];

const socialImages = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop", alt: "Duke's bar atmosphere" },
  { src: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=400&h=400&fit=crop", alt: "Craft beer taps" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop", alt: "Signature burger" },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop", alt: "Beer and food pairing" },
  { src: "https://images.unsplash.com/photo-1571167530149-c1105da4c2f8?w=400&h=400&fit=crop", alt: "Craft beer selection" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop", alt: "Live music night" },
];

const stats = [
  { value: "100+", label: "Craft Beers" },
  { value: "21", label: "Rotating Taps" },
  { value: "1,100+", label: "Reviews" },
  { value: "15+", label: "Years Serving" },
];

const hours = [
  { day: "Monday", time: "12pm – 1am" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "12pm – 1am" },
  { day: "Thursday", time: "12pm – 1am" },
  { day: "Friday", time: "12pm – 1am" },
  { day: "Saturday", time: "12pm – 1am" },
  { day: "Sunday", time: "12pm – 1am" },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber" : "text-cream/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function DishCard({ item }: { item: typeof menuHighlights[0]; index?: number }) {
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setRotate({ x, y });
  }

  function handleMouseLeave() {
    setHovered(false);
    setRotate({ x: 0, y: 0 });
  }

  return (
    <motion.div
      variants={staggerItem}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative bg-card-bg rounded-xl overflow-hidden border border-copper/10 cursor-default"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${hovered ? 1.03 : 1})`,
        transition: "transform 0.2s ease-out",
        boxShadow: hovered ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(184,115,51,0.15)" : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-copper text-charcoal text-xs font-bold uppercase tracking-wider rounded-full">
          {item.badge}
        </span>
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-charcoal/80 text-cream/70 text-xs rounded">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-cream mb-2">{item.name}</h3>
        <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const beerRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: beerScroll } = useScroll({
    target: beerRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const beerY = useTransform(beerScroll, [0, 1], ["-10%", "10%"]);

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      {/* ── Quick Menu CTA Bar ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-[64px] left-0 right-0 z-40 bg-charcoal/90 backdrop-blur-md border-b border-copper/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-cream/70 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="hidden sm:inline">Open today · 12pm – 1am · 110 N Main St, Crystal Lake</span>
            <span className="sm:hidden">Open today · Crystal Lake</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8153569980"
              className="text-copper text-sm font-medium hover:text-amber transition-colors hidden sm:block"
            >
              (815) 356-9980
            </a>
            <Link
              href="/menu"
              className="px-5 py-1.5 bg-copper text-charcoal text-sm font-bold uppercase tracking-wider rounded-full hover:bg-amber transition-colors whitespace-nowrap"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/30 via-transparent to-dark-bg/30" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 border border-copper/50 text-copper text-xs uppercase tracking-[0.4em] mb-8 rounded-full bg-copper/5 backdrop-blur-sm">
              Est. Crystal Lake, IL
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-cream">Duke&apos;s</span>
            <br />
            <span
              className="gradient-text"
              style={{
                background: "linear-gradient(135deg, #B87333 0%, #D4A24E 50%, #B87333 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alehouse &amp; Kitchen
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-cream/75 max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Crystal Lake&apos;s eco-conscious gastropub. 100+ craft beers on tap,
            gourmet burgers, and sustainable comfort food.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {["100+ Craft Beers", "Sustainable Ingredients", "Local Producers"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-copper/10 border border-copper/25 text-copper/80 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/menu"
              className="px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber transition-all hover:scale-105"
              style={{ boxShadow: "0 0 30px rgba(184,115,51,0.3)" }}
            >
              Explore Our Menu
            </Link>
            <a
              href="https://www.facebook.com/dukesalehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-copper/10 transition-all"
            >
              Follow on Facebook
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-copper/40 text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-copper/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-charcoal/60 border-y border-copper/10 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center group"
            >
              <div
                className="text-5xl md:text-6xl font-serif font-bold"
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-cream/60 text-sm uppercase tracking-wider">{stat.label}</div>
              <motion.div
                className="mt-3 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── The Craft Beer Experience ──────────────────────────────────────── */}
      <section ref={beerRef} className="py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: beerY }}
        >
          <div
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/92 to-dark-bg" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="inline-block px-4 py-1.5 border border-copper/30 text-copper text-xs uppercase tracking-[0.3em] mb-5 rounded-full">
              #1 Differentiator
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              The Craft Beer{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experience
              </span>
            </h2>
            <p className="text-cream/60 text-lg max-w-3xl mx-auto leading-relaxed">
              With 100+ craft beers, 21 rotating taps, and rare Belgian imports, Duke&apos;s is a
              destination for beer lovers. Our knowledgeable staff lives for helping you discover
              your new favorite pour.
            </p>
          </motion.div>

          {/* Beer category grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {beerCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={staggerItem}
                whileHover={{ scale: 1.03, borderColor: "rgba(184,115,51,0.5)" }}
                className="group p-8 bg-card-bg/70 backdrop-blur-sm rounded-xl border border-copper/10 transition-all duration-300 cursor-default"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{cat.emoji}</span>
                  <span className="px-2.5 py-1 bg-copper/15 text-copper text-xs font-bold rounded-full border border-copper/20">
                    {cat.count}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-cream font-bold mb-2 group-hover:text-amber transition-colors">
                  {cat.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tap list */}
          <motion.div
            className="bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-copper/20 p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-copper font-serif text-2xl font-bold">Featured on Tap</h3>
                <p className="text-cream/40 text-sm mt-1">Rotates regularly · call for today&apos;s selection</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-copper/10 rounded-full border border-copper/20">
                <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
                <span className="text-copper text-sm font-medium">21 Taps Live</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tapBeers.map((beer, i) => (
                <motion.div
                  key={beer}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  whileHover={{ borderColor: "rgba(184,115,51,0.5)", backgroundColor: "rgba(184,115,51,0.08)" }}
                  className="flex items-center gap-2 text-cream/70 text-sm py-2.5 px-3.5 rounded-lg bg-charcoal/50 border border-copper/10 transition-colors"
                >
                  <span className="text-copper/60 font-bold text-xs w-5 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                  <span>{beer}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Dishes ───────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-charcoal/25">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Sustainably Sourced</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dishes
              </span>
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto">
              Every dish is crafted with ingredients from local producers. Taste the difference that sustainable sourcing makes.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {menuHighlights.map((item, i) => (
              <DishCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-10 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber transition-all hover:scale-105"
              style={{ boxShadow: "0 0 30px rgba(184,115,51,0.25)" }}
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeft}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=550&fit=crop"
                  alt="Duke's Alehouse interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-copper/25 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-copper/15 rounded-xl -z-10" />

              {/* Sustainability badge */}
              <motion.div
                className="absolute -bottom-4 left-8 bg-card-bg border border-copper/30 rounded-xl px-5 py-3 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <div className="text-cream font-bold text-sm">Eco-Conscious</div>
                    <div className="text-cream/50 text-xs">Local &amp; sustainable</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRight}
            >
              <span className="text-copper text-sm uppercase tracking-[0.25em] font-medium">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
                A Gastropub Built on{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #B87333, #D4A24E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Principle
                </span>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-5 text-lg">
                Duke&apos;s Alehouse and Kitchen is Crystal Lake&apos;s eco-conscious gastropub,
                featuring gourmet burgers, artisan sandwiches and salads, and comfort foods
                made with sustainable ingredients from local producers.
              </p>
              <p className="text-cream/60 leading-relaxed mb-5">
                We believe great food starts before it hits the plate. That means partnering with
                local farms, choosing sustainable suppliers, and putting craft and conscience into
                every dish we serve. You taste the difference — and the community feels it too.
              </p>
              <p className="text-cream/60 leading-relaxed mb-10">
                Pair that with 100+ craft beers, rare Belgian imports, and an award-winning cocktail
                menu, and you&apos;ve got something Crystal Lake has never seen before — and won&apos;t
                find anywhere else.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { icon: "🌱", label: "Sustainable" },
                  { icon: "🏡", label: "Local Sourced" },
                  { icon: "🍺", label: "100+ Beers" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 rounded-xl bg-card-bg/50 border border-copper/10">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-cream/60 text-xs uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-copper font-semibold hover:text-amber transition-colors"
              >
                Our full story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-charcoal/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">What People Say</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
              Guest{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reviews
              </span>
            </h2>

            {/* Platform badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { platform: "Google", rating: "4.3", count: "230+" },
                { platform: "Yelp", rating: "3.7", count: "672" },
                { platform: "TripAdvisor", rating: "4.0", count: "247" },
              ].map((badge) => (
                <motion.div
                  key={badge.platform}
                  variants={staggerItem}
                  className="flex items-center gap-3 px-6 py-3 bg-card-bg rounded-full border border-copper/20"
                >
                  <span className="text-amber font-bold text-lg">{badge.rating}</span>
                  <div className="text-left">
                    <div className="text-cream text-sm font-medium">{badge.platform}</div>
                    <div className="text-cream/50 text-xs">{badge.count} reviews</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(184,115,51,0.1)" }}
                className="bg-card-bg rounded-xl p-7 border border-copper/10 flex flex-col transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-copper/50 text-xs uppercase tracking-wider">{review.source}</span>
                </div>
                <p className="text-cream/70 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-copper/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-copper/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-cream/50 text-xs">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Social Feed ───────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Follow the Vibes</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
              Duke&apos;s on{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Facebook
              </span>
            </h2>
            <p className="text-cream/50 max-w-lg mx-auto">
              Events, specials, new tap arrivals, and live music schedules — follow us to stay in the loop.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {socialImages.map((img, i) => (
              <motion.a
                key={i}
                href="https://www.facebook.com/dukesalehouse"
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                className="relative block aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href="https://www.facebook.com/dukesalehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-[#1664d4] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow Duke&apos;s on Facebook
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Location & Hours ──────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-charcoal/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Location &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B87333, #D4A24E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hours
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Address & contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideLeft}
            >
              <div className="bg-card-bg rounded-2xl border border-copper/15 p-8 h-full">
                <h3 className="font-serif text-2xl text-copper font-bold mb-6">Get Here</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-cream font-medium">110 N Main St</div>
                      <div className="text-cream/50 text-sm">Crystal Lake, IL 60014</div>
                      <a
                        href="https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-copper text-sm hover:text-amber transition-colors mt-1 inline-block"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-cream font-medium">(815) 356-9980</div>
                      <a
                        href="tel:8153569980"
                        className="text-copper text-sm hover:text-amber transition-colors"
                      >
                        Call to reserve
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-cream font-medium">@dukesalehouse</div>
                      <a
                        href="https://www.facebook.com/dukesalehouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-copper text-sm hover:text-amber transition-colors"
                      >
                        Follow on Facebook
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <a
                  href="https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block relative rounded-xl overflow-hidden group"
                >
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=110+N+Main+St+Crystal+Lake+IL&zoom=15&size=500x200&maptype=roadmap&markers=color:orange%7C42.2213,-88.3162&key=NO_KEY"
                    alt="Map to Duke's Alehouse"
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.background = "rgba(30,30,48,0.8)";
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.style.height = "160px";
                        parent.innerHTML = `<div class="text-center py-6"><div class="text-copper text-3xl mb-2">📍</div><div class="text-cream font-medium">110 N Main St</div><div class="text-cream/50 text-sm">Crystal Lake, IL 60014</div><div class="text-copper text-sm mt-2">View on Google Maps →</div></div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/30 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-cream font-medium text-sm bg-dark-bg/80 px-3 py-1 rounded-full transition-opacity">
                      Open in Maps
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideRight}
            >
              <div className="bg-card-bg rounded-2xl border border-copper/15 p-8 h-full">
                <h3 className="font-serif text-2xl text-copper font-bold mb-6">Hours</h3>
                <div className="space-y-3">
                  {hours.map((h) => {
                    const isToday = h.day === today;
                    const isClosed = h.time === "Closed";
                    return (
                      <div
                        key={h.day}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                          isToday
                            ? "bg-copper/15 border border-copper/30"
                            : "border border-transparent hover:bg-charcoal/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {isToday && (
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                          )}
                          <span className={`font-medium text-sm ${isToday ? "text-cream" : "text-cream/70"}`}>
                            {h.day}
                          </span>
                          {isToday && (
                            <span className="text-xs text-green-400 font-medium">Today</span>
                          )}
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            isClosed ? "text-cream/30" : isToday ? "text-amber" : "text-cream/60"
                          }`}
                        >
                          {h.time}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-4 bg-copper/8 rounded-xl border border-copper/15">
                  <p className="text-cream/60 text-xs text-center">
                    Kitchen hours may vary · Call ahead for large parties
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="inline-block px-4 py-1.5 border border-copper/30 text-copper text-xs uppercase tracking-[0.3em] mb-6 rounded-full">
            Crystal Lake, IL
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Come Experience{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B87333, #D4A24E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Duke&apos;s
            </span>
          </h2>
          <p className="text-cream/65 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a craft beer flight, our signature grass-fed burger, or a live music night —
            Duke&apos;s is where Crystal Lake comes together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8153569980"
              className="px-10 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber transition-all hover:scale-105"
              style={{ boxShadow: "0 0 30px rgba(184,115,51,0.3)" }}
            >
              Call (815) 356-9980
            </a>
            <a
              href="https://dukes.securetree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-copper/10 transition-all"
            >
              Buy a Gift Card
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
