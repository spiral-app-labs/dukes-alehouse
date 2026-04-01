"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const reviews = [
  {
    text: "First time at Dukes. Excellent food with big menu. Brussels sprouts were outstanding appetizers. Cuban with special fries were a 10. Veggie bowl excellent as well. Service was perfect.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "I really like Duke's Alehouse. I remember when the original Duke's opened. The food and craft beer selection keeps me coming back.",
    source: "Yelp",
    rating: 5,
  },
  {
    text: "Duke's is the place in Crystal Lake that really wants to give you a more trendy city-like experience, that much of these restaurants in the suburbs tend to lack.",
    source: "TripAdvisor",
    rating: 4,
  },
  {
    text: "Delicious gluten-free selections. My husband enjoyed a gluten-free goat cheese and chorizo pizza while I had a wonderful fall pizza.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Best gastropub in the northwest suburbs. The craft beer list alone is worth the trip, but the food is what keeps us regulars.",
    source: "Google",
    rating: 5,
  },
];

const menuHighlights = [
  {
    name: "Grass-Fed Burger",
    desc: "Our signature burger with homemade fries — the one everyone talks about",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    name: "Brussels Sprouts",
    desc: "Roasted and crispy — our most-reviewed appetizer",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1534938665420-4c46868d2e8b?w=400&h=300&fit=crop",
  },
  {
    name: "Craft Beer Flight",
    desc: "Sample from 21 rotating taps featuring 140+ craft brews",
    category: "Craft Beer",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
  },
  {
    name: "Cuban Sandwich",
    desc: "With our famous special fries — a crowd favorite",
    category: "Sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
  },
];

const tapBeers = [
  "Allagash White",
  "Bell's Two Hearted",
  "Ballast Point Sculpin",
  "Chimay Blue",
  "Duvel",
  "Delirium Tremens",
  "Goose Island IPA",
  "Lagunitas IPA",
  "Revolution Anti-Hero",
  "Three Floyds Zombie Dust",
  "Founders All Day IPA",
  "Sierra Nevada Pale Ale",
  "Stone IPA",
  "Dogfish Head 60 Min",
  "Half Acre Daisy Cutter",
  "Maplewood Son of Juice",
  "Pipeworks Ninja vs. Unicorn",
  "Off Color Apex Predator",
  "Metropolitan Krankshaft",
  "Begyle Flannel Pajamas",
  "Spiteful Alley Time",
];

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/50 to-dark-bg" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 border border-copper/40 text-copper text-xs uppercase tracking-[0.3em] mb-6 rounded-full">
              Est. Crystal Lake, IL
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-up">
            <span className="text-cream">Duke&apos;s</span>
            <br />
            <span className="gradient-text">Alehouse &amp; Kitchen</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Where 140+ craft beers meet gourmet gastropub cuisine.
            Sustainable ingredients, local producers, unforgettable flavors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/menu"
              className="px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105 animate-pulse-glow"
            >
              Explore Our Menu
            </Link>
            <a
              href="tel:8153569980"
              className="px-8 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded hover:bg-copper/10 transition-all"
            >
              Call to Reserve
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-copper/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal/50 border-y border-copper/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={140} suffix="+" label="Craft Beers" />
          <AnimatedCounter target={21} suffix="" label="Rotating Taps" />
          <AnimatedCounter target={1100} suffix="+" label="Reviews" />
          <AnimatedCounter target={15} suffix="+" label="Years Serving" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
                alt="Duke's Alehouse interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-copper/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
              A Gastropub <span className="gradient-text">Like No Other</span>
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              Duke&apos;s Alehouse and Kitchen is Crystal Lake&apos;s eco-conscious gastropub,
              featuring gourmet burgers, artisan sandwiches and salads, and comfort foods
              made with sustainable ingredients from local producers.
            </p>
            <p className="text-cream/70 leading-relaxed mb-8">
              With 140+ craft brews and Belgian ales — 21 on rotating tap — plus
              an award-winning cocktail menu, we&apos;re a beer lover&apos;s paradise
              wrapped in a warm, rustic tavern atmosphere.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-copper font-medium hover:text-amber transition-colors"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-4 bg-charcoal/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Taste the Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Menu <span className="gradient-text">Highlights</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="card-hover bg-card-bg rounded-lg overflow-hidden border border-copper/10 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-1 bg-copper/90 text-charcoal text-xs font-bold uppercase rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-cream mb-2">{item.name}</h3>
                    <p className="text-cream/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Craft Beer Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Beer Lover&apos;s Paradise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              140+ <span className="gradient-text">Craft Beers</span>
            </h2>
            <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
              From rare Belgian imports to beloved local favorites, our rotating selection of 21 taps
              and extensive bottle list makes Duke&apos;s a destination for craft beer enthusiasts.
            </p>
          </ScrollReveal>

          {/* Tap list preview */}
          <ScrollReveal>
            <div className="bg-card-bg/80 backdrop-blur-sm rounded-xl border border-copper/20 p-8">
              <h3 className="text-copper font-serif text-2xl mb-6 text-center">
                Currently on Tap
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {tapBeers.map((beer, i) => (
                  <div
                    key={beer}
                    className="flex items-center gap-2 text-cream/70 text-sm py-2 px-3 rounded bg-charcoal/50 border border-copper/10 hover:border-copper/30 transition-colors"
                  >
                    <span className="text-copper font-bold text-xs">{(i + 1).toString().padStart(2, "0")}</span>
                    <span>{beer}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-cream/40 text-sm mt-6">
                Tap list rotates regularly — call for today&apos;s selections
              </p>
            </div>
          </ScrollReveal>

          {/* Beer categories */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <ScrollReveal delay={0}>
              <div className="text-center p-8 bg-card-bg/50 rounded-lg border border-copper/10 card-hover">
                <div className="text-4xl mb-4">&#127867;</div>
                <h3 className="font-serif text-xl text-copper mb-2">Craft Brews</h3>
                <p className="text-cream/60 text-sm">
                  IPAs, stouts, sours, pilsners, and everything in between from top craft breweries
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="text-center p-8 bg-card-bg/50 rounded-lg border border-copper/10 card-hover">
                <div className="text-4xl mb-4">&#127463;&#127466;</div>
                <h3 className="font-serif text-xl text-copper mb-2">Belgian Ales</h3>
                <p className="text-cream/60 text-sm">
                  Rare Belgian imports including Chimay, Duvel, Delirium, and seasonal specialties
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center p-8 bg-card-bg/50 rounded-lg border border-copper/10 card-hover">
                <div className="text-4xl mb-4">&#127864;</div>
                <h3 className="font-serif text-xl text-copper mb-2">Cocktails &amp; More</h3>
                <p className="text-cream/60 text-sm">
                  Award-winning cocktail menu, fantastic wines, and creative mocktails
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-4 bg-charcoal/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">What People Say</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Guest <span className="gradient-text">Reviews</span>
            </h2>
          </ScrollReveal>

          {/* Rating badges */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { platform: "Google", rating: "4.3", count: "230+" },
                { platform: "Yelp", rating: "3.7", count: "672" },
                { platform: "TripAdvisor", rating: "4.0", count: "247" },
              ].map((badge) => (
                <div
                  key={badge.platform}
                  className="flex items-center gap-3 px-6 py-3 bg-card-bg rounded-full border border-copper/20"
                >
                  <span className="text-amber font-bold text-lg">{badge.rating}</span>
                  <div>
                    <div className="text-cream text-sm font-medium">{badge.platform}</div>
                    <div className="text-cream/50 text-xs">{badge.count} reviews</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Review cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-hover bg-card-bg rounded-lg p-6 border border-copper/10 h-full flex flex-col">
                  <StarRating rating={review.rating} />
                  <p className="text-cream/70 text-sm leading-relaxed mt-4 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-copper/10">
                    <span className="text-copper text-xs uppercase tracking-wider">
                      via {review.source}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live Music */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Entertainment</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
              Live <span className="gradient-text">Music</span>
            </h2>
            <p className="text-cream/70 text-lg mb-4">
              Duke&apos;s features a full stage with live music performances throughout the week.
              From local bands to regional acts, there&apos;s always something happening.
            </p>
            <p className="text-cream/50 mb-10">
              Follow us on social media for the latest event schedule and lineup announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/dukesalehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all"
              >
                Follow on Facebook
              </a>
              <a
                href="tel:8153569980"
                className="px-8 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded hover:bg-copper/10 transition-all"
              >
                Call for Events
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-charcoal/50 to-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Come <span className="gradient-text">Experience Duke&apos;s</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether it&apos;s a craft beer flight, our signature grass-fed burger, or a night of live music,
              Duke&apos;s is where Crystal Lake comes together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8153569980"
                className="px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105"
              >
                Call Us — (815) 356-9980
              </a>
              <a
                href="https://dukes.securetree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded hover:bg-copper/10 transition-all"
              >
                Buy a Gift Card
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
