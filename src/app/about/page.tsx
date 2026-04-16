import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutNotes, dukeBrandAssets, dukeBusiness, dukeLinks } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell grid gap-10 pb-14 sm:pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <ScrollReveal>
            <div>
              <p className="kicker text-[11px] text-[var(--gold-300)]">About the room</p>
              <h1 className="display-serif mt-5 max-w-4xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
                Duke&apos;s should read like a downtown regular already knows why it works.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
                The story is not mythology. It is Main Street location, a beer-first bar program, a
                mixed-group menu, and a calendar that gives people a reason to come back next week.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative aspect-[5/4]">
                <Image
                  src={dukeBrandAssets.hero}
                  alt={dukeBusiness.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-4">
          {aboutNotes.map((note, index) => (
            <ScrollReveal key={note} delay={index * 80}>
              <article className="line-card rounded-[1.9rem] p-7 sm:p-8">
                <p className="kicker text-[10px] text-[var(--gold-300)]">About 0{index + 1}</p>
                <p className="display-serif mt-4 text-4xl leading-tight text-[var(--stone-100)]">
                  {note}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#100e13] py-20">
        <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ScrollReveal>
            <div>
              <p className="kicker text-[10px] text-[var(--gold-300)]">Close the plan</p>
              <h2 className="display-serif mt-4 text-4xl text-[var(--stone-100)] sm:text-5xl">
                When the room sounds right, the next move should still be practical.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              <a
                href={dukeLinks.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)]"
              >
                Reserve on Tock
              </a>
              <a
                href={dukeLinks.order}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)]"
              >
                Order Direct
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
