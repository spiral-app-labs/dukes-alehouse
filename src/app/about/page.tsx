import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, heroStats, reviews } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_right,_rgba(184,115,51,0.18),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">About Duke&apos;s</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              A downtown Crystal Lake room built around taps, local sourcing, and a stage that stays busy.
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-cream/70">
              The voice on this site is now rooted in what Duke&apos;s actually is: an eco-conscious gastropub,
              a beer destination, a live event room, and a place where vegans, gluten-free diners, and burger regulars
              can all order like the menu was built for them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 90}>
                <div className="rounded-[1.75rem] border border-copper/10 bg-card-bg/55 p-6 text-center">
                  <p className="font-serif text-4xl text-copper">{stat.value}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-cream/55">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-copper/10 bg-charcoal/20 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-copper">What feels local</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">The copy is no longer generic because the restaurant isn&apos;t generic.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            {[
              "Duke's identity now centers downtown Crystal Lake, 140+ craft beers and Belgian ales, the live stage, and the eco-conscious menu language repeated across public Duke's surfaces.",
              "Instead of stock lifestyle promises, the site calls out the real dining patterns that make the room useful: parties, beer discovery, music nights, and a broad dietary menu.",
              "The about page now acts as orientation, not filler. Conversion paths stay obvious while the brand story stays tied to how people actually use the venue.",
            ].map((line, index) => (
              <ScrollReveal key={line} delay={index * 120}>
                <div className="rounded-[1.5rem] border border-copper/10 bg-dark-bg/75 p-5">
                  <p className="leading-7 text-cream/70">{line}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-copper">Public proof</p>
            <h2 className="mt-4 font-serif text-4xl text-cream">Language borrowed from real descriptions, not a restaurant template.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <ScrollReveal key={review.source} delay={index * 100}>
                <div className="rounded-[1.6rem] border border-copper/10 bg-card-bg/50 p-6">
                  <p className="text-sm leading-7 text-cream/70">&ldquo;{review.quote}&rdquo;</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-copper">{review.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-copper/10 bg-charcoal/20 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-cream">Start with the real next step.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-cream/70">
              Order dinner, reserve a table, or email Duke&apos;s for a larger event.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                Order Online
              </a>
              <a href={dukeLinks.reservations} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                Reservations
              </a>
              <a href={dukeLinks.email} className="rounded-full border border-cream/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-cream/80 transition hover:border-copper/40 hover:text-copper">
                Private Events
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
