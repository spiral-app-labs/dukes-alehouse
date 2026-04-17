"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, menuSections } from "@/lib/siteData";

export default function MenuPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell pb-14 sm:pb-16">
          <ScrollReveal>
            <p className="kicker text-[11px] text-[var(--gold-300)]">Full menu</p>
            <h1 className="display-serif mt-5 max-w-5xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
              Duke&apos;s menu keeps the tavern energy, then gives the table actual range.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
              From bison burgers and hot sandwiches to grain bowls, whitefish, vegan plates, and
              gluten-free desserts, this is the part of Duke&apos;s that makes mixed groups easy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={dukeLinks.order}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)]"
              >
                Order Online
              </a>
              <a
                href={dukeLinks.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)]"
              >
                Reserve on Tock
              </a>
              <a
                href={dukeLinks.beerMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.7)]"
              >
                Open Untappd
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-white/8 bg-[#0a090c]/92 py-3 backdrop-blur-xl">
        <div className="section-shell flex gap-5 overflow-x-auto">
          {menuSections.map((section) => (
            <a
              key={section.slug}
              href={`#${section.slug}`}
              className="kicker whitespace-nowrap border-b border-transparent pb-2 text-[11px] text-[rgba(241,235,222,0.68)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <ScrollReveal className="lg:sticky lg:top-32">
            <aside className="line-card rounded-[2rem] p-7">
              <p className="kicker text-[10px] text-[var(--gold-300)]">How to use this page</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[rgba(241,235,222,0.72)]">
                <p>Jump by category, lock in the house signatures, then hand the order straight to Toast.</p>
                <p>Gluten-free, vegetarian, and vegan lanes stay visible because somebody at the table always needs them.</p>
                <p>Use the beer page when the board matters just as much as the plate.</p>
              </div>
              <div className="mt-7 grid gap-3">
                <a
                  href={dukeLinks.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] bg-[var(--rust-500)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[var(--ink-950)]"
                >
                  Start the Order
                </a>
                <a
                  href={dukeLinks.beerMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] border border-white/12 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.82)]"
                >
                  Check Live Beer
                </a>
              </div>
            </aside>
          </ScrollReveal>

          <div className="space-y-10">
            {menuSections.map((section, index) => (
              <ScrollReveal key={section.slug} delay={index * 40}>
                <section id={section.slug} className="rounded-[2rem] border border-white/8 bg-[#131116] p-6 sm:p-8">
                  <div className="border-b border-white/8 pb-6">
                    <p className="kicker text-[10px] text-[var(--gold-300)]">
                      Section 0{index + 1}
                    </p>
                    <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                      <h2 className="display-serif text-4xl text-[var(--stone-100)]">
                        {section.title}
                      </h2>
                      <p className="max-w-2xl text-sm leading-7 text-[rgba(241,235,222,0.64)]">
                        {section.note}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 divide-y divide-white/8">
                    {section.items.map((item) => (
                      <article
                        key={item.name}
                        className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
                      >
                        <div>
                          <h3 className="display-serif text-3xl text-[var(--stone-100)]">
                            {item.name}
                          </h3>
                          <p className="mt-3 max-w-3xl text-sm leading-7 text-[rgba(241,235,222,0.7)]">
                            {item.description}
                          </p>
                        </div>
                        <p className="display-serif text-3xl text-[var(--rust-600)] sm:text-right">
                          {item.price}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
