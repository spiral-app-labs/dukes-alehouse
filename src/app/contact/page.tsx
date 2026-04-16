import ScrollReveal from "@/components/ScrollReveal";
import { dukeBusiness, dukeLinks, hours, neighborhoodNotes } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero pt-28">
        <div className="section-shell pb-14 sm:pb-16">
          <ScrollReveal>
            <p className="kicker text-[11px] text-[var(--gold-300)]">Visit Duke&apos;s</p>
            <h1 className="display-serif mt-5 max-w-5xl text-5xl leading-[0.95] text-[var(--stone-100)] md:text-6xl lg:text-7xl">
              Directions, split hours, direct contact, and the fastest path to making the plan real.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(241,235,222,0.74)]">
              This page should finish the decision. Keep every practical path visible and keep the
              room-specific detail stronger than generic restaurant utility copy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="line-card rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[var(--gold-300)]">Direct contact</p>
              <a
                href={dukeLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="display-serif mt-4 block text-4xl text-[var(--stone-100)] transition hover:text-[var(--rust-600)] sm:text-5xl"
              >
                {dukeBusiness.addressLineOne}
                <br />
                {dukeBusiness.addressLineTwo}
              </a>
              <div className="mt-6 flex flex-col gap-3 text-lg text-[rgba(241,235,222,0.78)]">
                <a href={dukeLinks.phone} className="transition hover:text-[var(--gold-300)]">
                  {dukeBusiness.phoneDisplay}
                </a>
                <a href={dukeLinks.email} className="transition hover:text-[var(--gold-300)]">
                  {dukeBusiness.emailDisplay}
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={dukeLinks.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] bg-[var(--rust-500)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[var(--ink-950)]"
                >
                  Order Online
                </a>
                <a
                  href={dukeLinks.reservations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] border border-white/12 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.82)]"
                >
                  Reserve on Tock
                </a>
                <a
                  href={dukeLinks.giftCards}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] border border-white/12 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.72)]"
                >
                  Gift Cards
                </a>
                <a
                  href={dukeLinks.parking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.2rem] border border-white/12 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.72)]"
                >
                  Downtown Parking
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            <ScrollReveal>
              <div className="line-card rounded-[2rem] p-7 sm:p-8">
                <p className="kicker text-[10px] text-[var(--gold-300)]">Kitchen + bar hours</p>
                <div className="mt-6 space-y-4">
                  {hours.map((entry) => (
                    <div
                      key={entry.days}
                      className="rounded-[1.25rem] border border-white/8 bg-black/12 p-5"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="display-serif text-2xl text-[var(--stone-100)]">
                          {entry.days}
                        </p>
                        <p className="kicker text-[10px] text-[var(--gold-300)]">
                          {entry.bar === "Closed" ? "Closed" : "Open"}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                        Kitchen: {entry.kitchen}
                      </p>
                      <p className="text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                        Bar: {entry.bar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {neighborhoodNotes.map((note, index) => (
              <ScrollReveal key={note.title} delay={(index + 1) * 80}>
                <div className="line-card rounded-[1.6rem] p-6">
                  <p className="display-serif text-3xl text-[var(--stone-100)]">
                    {note.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                    {note.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
