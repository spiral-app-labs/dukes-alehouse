import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, eventFeatures } from "@/lib/siteData";

export default function EventsPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell pb-14 sm:pb-16">
          <ScrollReveal>
            <p className="kicker text-[11px] text-[var(--gold-300)]">Weekly house rhythm</p>
            <h1 className="display-serif mt-5 max-w-5xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
              Vinyl nights, whiskey specials, live music, and karaoke are part of the room, not side quests.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
              Duke&apos;s earns repeat visits because the calendar keeps the room moving. These are
              the recurring anchors that give dinner a second reason to stay out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-5 lg:grid-cols-2">
          {eventFeatures.map((event, index) => (
            <ScrollReveal key={event.name} delay={index * 80}>
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group line-card block rounded-[2rem] p-7 transition hover:-translate-y-1"
              >
                <p className="kicker text-[10px] text-[var(--gold-300)]">{event.schedule}</p>
                <h2 className="display-serif mt-4 text-4xl text-[var(--stone-100)] transition group-hover:text-[var(--rust-600)]">
                  {event.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                  {event.description}
                </p>
                <p className="mt-6 text-sm text-[var(--gold-300)]">Open the live event page</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#110f14] py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <ScrollReveal>
            <div>
              <p className="kicker text-[10px] text-[var(--gold-300)]">Make the night easy</p>
              <h2 className="display-serif mt-4 text-4xl text-[var(--stone-100)] sm:text-5xl">
                Reserve first, then let the event page handle the details.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={dukeLinks.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)]"
              >
                Reserve on Tock
              </a>
              <a
                href={dukeLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)]"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
