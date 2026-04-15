import ScrollReveal from "@/components/ScrollReveal";
import { beerHighlights, dukeLinks } from "@/lib/siteData";

export default function BeerPage() {
  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_right,_rgba(184,115,51,0.18),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">Beer and drinks</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              Duke&apos;s beer program finally has its own page because it is the venue&apos;s clearest differentiator.
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-cream/70">
              The beer page now pushes guests to the verified Untappd venue while also summarizing what Duke&apos;s is known for:
              Belgian depth, a wide rotating draft board, and a drinks program that changes with the week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {beerHighlights.map((highlight, index) => (
              <ScrollReveal key={highlight.title} delay={index * 100}>
                <div className="rounded-[2rem] border border-copper/10 bg-card-bg/55 p-7">
                  <p className="text-xs uppercase tracking-[0.35em] text-copper">Pour {index + 1}</p>
                  <h2 className="mt-4 font-serif text-3xl text-cream">{highlight.title}</h2>
                  <p className="mt-4 leading-7 text-cream/68">{highlight.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <div className="rounded-[2rem] border border-copper/10 bg-dark-bg/70 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-copper">Live list</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Use the verified venue menu for the current tap board.</h2>
              <p className="mt-4 max-w-3xl leading-8 text-cream/70">
                Drafts change too often to freeze them into static marketing copy. The site now gives guests the correct live path instead of burying it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={dukeLinks.beerMenu} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                  Open Untappd
                </a>
                <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                  Pair with Food
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
