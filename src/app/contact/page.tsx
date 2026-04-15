import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, hours } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_left,_rgba(184,115,51,0.18),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">Contact and hours</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              Directions, direct ordering, reservations, and a real private-events email.
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-cream/70">
              The broken placeholder map is gone. This page now focuses on the details that actually help a guest finish the task.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <ScrollReveal>
            <div className="rounded-[2rem] border border-copper/10 bg-card-bg/55 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-copper">Visit Duke&apos;s</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cream/45">Address</p>
                  <a href={dukeLinks.directions} target="_blank" rel="noopener noreferrer" className="mt-2 block font-serif text-3xl text-cream hover:text-copper">
                    110 N Main St
                    <br />
                    Crystal Lake, IL 60014
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cream/45">Phone</p>
                  <a href={dukeLinks.phone} className="mt-2 block text-2xl text-cream hover:text-copper">
                    (815) 356-9980
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cream/45">Email</p>
                  <a href={dukeLinks.email} className="mt-2 block text-xl text-cream hover:text-copper">
                    hello@dukesalehouse.net
                  </a>
                  <p className="mt-2 text-sm leading-7 text-cream/60">
                    Tock routes groups of 9+ here as well, so the event inquiry path is now surfaced on the page and in the footer.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                  Order Online
                </a>
                <a href={dukeLinks.reservations} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                  Reservations
                </a>
                <a href={dukeLinks.parties} className="rounded-full border border-cream/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-cream/80 transition hover:border-copper/40 hover:text-copper">
                  Book a Party
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            <ScrollReveal>
              <div className="rounded-[2rem] border border-copper/10 bg-dark-bg/75 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-copper">Kitchen and bar hours</p>
                <div className="mt-6 space-y-4">
                  {hours.map((entry) => (
                    <div key={entry.days} className="rounded-[1.25rem] border border-copper/10 bg-card-bg/50 p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="font-serif text-2xl text-cream">{entry.days}</h2>
                        <span className="text-xs uppercase tracking-[0.28em] text-copper">
                          {entry.bar === "Closed" ? "Closed" : "Open"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-cream/65">Kitchen: {entry.kitchen}</p>
                      <p className="text-sm leading-7 text-cream/65">Bar: {entry.bar}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-[2rem] border border-copper/10 bg-card-bg/45 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-copper">Get there faster</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={dukeLinks.directions} target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-copper/10 bg-dark-bg/70 p-5 text-cream transition hover:border-copper/40 hover:text-copper">
                    Get directions
                  </a>
                  <a href={dukeLinks.giftCards} target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-copper/10 bg-dark-bg/70 p-5 text-cream transition hover:border-copper/40 hover:text-copper">
                    Buy gift cards
                  </a>
                  <a href={dukeLinks.beerMenu} target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-copper/10 bg-dark-bg/70 p-5 text-cream transition hover:border-copper/40 hover:text-copper">
                    Live beer menu
                  </a>
                  <a href={dukeLinks.email} className="rounded-[1.25rem] border border-copper/10 bg-dark-bg/70 p-5 text-cream transition hover:border-copper/40 hover:text-copper">
                    Email private events
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
