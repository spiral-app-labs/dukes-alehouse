"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  {
    icon: "🌿",
    title: "Sustainability",
    description:
      "Eco-conscious practices from sourcing to service. We partner with local producers to reduce our footprint and support the community.",
  },
  {
    icon: "🍺",
    title: "Craft Beer Culture",
    description:
      "140+ carefully curated craft brews and Belgian ales, 21 on rotating tap. We're passionate about great beer and helping you find your next favorite.",
  },
  {
    icon: "👨‍🍳",
    title: "Culinary Excellence",
    description:
      "Gourmet burgers, artisan sandwiches, and comfort food classics — all made from scratch with the finest sustainable ingredients.",
  },
  {
    icon: "🎵",
    title: "Community Hub",
    description:
      "Live music on our stage, a cozy tavern atmosphere, and an open patio — Duke's is where Crystal Lake comes together.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mt-3 mb-4">
            About <span className="gradient-text">Duke&apos;s</span>
          </h1>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Crystal Lake&apos;s eco-conscious gastropub — where craft beer meets farm-to-table dining
            in a warm, welcoming atmosphere.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=500&fit=crop"
                alt="Duke's Alehouse interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-copper/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              More Than a <span className="gradient-text">Restaurant</span>
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              Duke&apos;s Alehouse and Kitchen has been a cornerstone of Crystal Lake&apos;s
              dining scene for over 15 years. What started as a vision for bringing
              city-quality gastropub dining to the northwest suburbs has grown into one
              of the area&apos;s most beloved restaurants.
            </p>
            <p className="text-cream/70 leading-relaxed mb-4">
              Under the leadership of owner Zak D., Duke&apos;s has stayed true to its
              founding principles: exceptional food made with sustainable, locally-sourced
              ingredients, an unmatched craft beer selection, and a warm atmosphere that
              makes everyone feel at home.
            </p>
            <p className="text-cream/70 leading-relaxed">
              As one reviewer put it: &ldquo;Duke&apos;s is the place in Crystal Lake that really
              wants to give you a more trendy city-like experience, that much of these
              restaurants in the suburbs tend to lack.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-charcoal/50 border-y border-copper/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={140} suffix="+" label="Craft Beers" />
          <AnimatedCounter target={21} suffix="" label="Rotating Taps" />
          <AnimatedCounter target={1100} suffix="+" label="Reviews" />
          <AnimatedCounter target={15} suffix="+" label="Years Serving" />
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Our <span className="gradient-text">Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="card-hover bg-card-bg rounded-lg p-8 border border-copper/10 h-full text-center">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-serif text-xl text-copper mb-3">{v.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-24 px-4 bg-charcoal/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">The Space</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Cozy <span className="gradient-text">Tavern</span> + Open <span className="gradient-text">Patio</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="rounded-lg overflow-hidden card-hover">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=500&fit=crop"
                  alt="Tavern interior"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-card-bg p-4 border border-copper/10 border-t-0">
                  <h3 className="font-serif text-lg text-copper">The Tavern</h3>
                  <p className="text-cream/60 text-sm mt-1">Warm, rustic atmosphere with dark wood and copper accents</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-lg overflow-hidden card-hover">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop"
                  alt="Live music stage"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-card-bg p-4 border border-copper/10 border-t-0">
                  <h3 className="font-serif text-lg text-copper">The Stage</h3>
                  <p className="text-cream/60 text-sm mt-1">Live music performances throughout the week</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="rounded-lg overflow-hidden card-hover">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop"
                  alt="Patio dining"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-card-bg p-4 border border-copper/10 border-t-0">
                  <h3 className="font-serif text-lg text-copper">The Patio</h3>
                  <p className="text-cream/60 text-sm mt-1">Open-air dining in the heart of downtown Crystal Lake</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to <span className="gradient-text">Visit?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              We&apos;re located in the heart of downtown Crystal Lake. Stop by for a craft beer, stay for dinner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105"
              >
                Find Us
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded hover:bg-copper/10 transition-all"
              >
                View Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
