import ScrollReveal from "@/components/ScrollReveal";
import { beerHighlights, dukeLinks } from "@/lib/siteData";

export default function BeerPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell pb-14 sm:pb-16">
          <ScrollReveal>
            <p className="kicker text-[11px] text-[var(--gold-300)]">Beer + drinks</p>
            <h1 className="display-serif mt-5 max-w-5xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
              The beer identity should feel live, specific, and tied to the room.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
              Duke&apos;s should not pretend the tap board is static. Sell the beer point of view,
              the Belgian lean, and the way whiskey nights keep the bar program broader than one lane.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {beerHighlights.map((highlight, index) => (
            <ScrollReveal key={highlight.title} delay={index * 80}>
              <article className="line-card rounded-[2rem] p-7">
                <p className="kicker text-[10px] text-[var(--gold-300)]">Pour 0{index + 1}</p>
                <h2 className="display-serif mt-4 text-4xl text-[var(--stone-100)]">
                  {highlight.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                  {highlight.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#110f14] py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal>
            <div>
              <p className="kicker text-[10px] text-[var(--gold-300)]">Live handoff</p>
              <h2 className="display-serif mt-4 text-4xl text-[var(--stone-100)] sm:text-5xl">
                The right move is to sell the board, then open Untappd.
              </h2>
              <p className="mt-4 text-base leading-8 text-[rgba(241,235,222,0.72)]">
                That keeps the page honest and keeps regulars from treating the website like a stale
                beer menu.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={dukeLinks.beerMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)]"
              >
                Open Untappd
              </a>
              <a
                href={dukeLinks.order}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)]"
              >
                Pair with Food
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
