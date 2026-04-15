import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, privateEventDetails } from "@/lib/siteData";

export default function BookAPartyPage() {
  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_left,_rgba(184,115,51,0.18),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">Book a party</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              Private events now have a real destination with email, banquet menu access, and clear next steps.
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-cream/70">
              This page replaces vague catering language with the actual banquet path Duke&apos;s publishes today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="grid gap-4">
            {privateEventDetails.map((detail, index) => (
              <ScrollReveal key={detail} delay={index * 100}>
                <div className="rounded-[1.75rem] border border-copper/10 bg-card-bg/55 p-6">
                  <p className="leading-7 text-cream/70">{detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="rounded-[2rem] border border-copper/10 bg-dark-bg/75 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-copper">Start the inquiry</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Email, call, or open the banquet menu PDF.</h2>
              <div className="mt-8 grid gap-3">
                <a href={dukeLinks.email} className="rounded-[1.25rem] bg-copper px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                  hello@dukesalehouse.net
                </a>
                <a href={dukeLinks.phone} className="rounded-[1.25rem] border border-copper/40 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                  (815) 356-9980
                </a>
                <a href={dukeLinks.banquets} target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-cream/15 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-cream/80 transition hover:border-copper/40 hover:text-copper">
                  Banquet Menu PDF
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
