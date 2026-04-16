import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, partyUseCases, privatePartyDetails } from "@/lib/siteData";

export default function BookAPartyPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell pb-14 sm:pb-16">
          <ScrollReveal>
            <p className="kicker text-[11px] text-[var(--gold-300)]">Private parties</p>
            <h1 className="display-serif mt-5 max-w-5xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
              Group dinners should feel easy to start and still sound like Duke&apos;s.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
              Sell the local, practical cases first. Keep the contact flow direct. Let the banquet
              menu do the heavy lifting without inventing venue-package theater.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="paper-panel rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[#68411f]">How the inquiry works</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#453629]">
                {privatePartyDetails.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                <a
                  href={dukeLinks.email}
                  className="rounded-[1.2rem] bg-[var(--rust-500)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[var(--ink-950)]"
                >
                  Email the House
                </a>
                <a
                  href={dukeLinks.phone}
                  className="rounded-[1.2rem] border border-[#7d5c41]/20 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#362a21]"
                >
                  Call Duke&apos;s
                </a>
                <a
                  href={dukeLinks.banquets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] border border-[#7d5c41]/20 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#362a21]"
                >
                  Banquet Menu
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {partyUseCases.map((useCase, index) => (
              <ScrollReveal key={useCase} delay={index * 80}>
                <div className="line-card rounded-[1.75rem] p-6">
                  <p className="display-serif text-3xl text-[var(--stone-100)]">{useCase}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
