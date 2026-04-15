import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, eventFeatures } from "@/lib/siteData";

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_left,_rgba(212,162,78,0.16),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">Events</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              Weekly music, whiskey nights, vinyl nights, and late karaoke are back in the site map.
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-cream/70">
              Duke&apos;s is not just a menu and a phone number. The live calendar is a real reason guests choose the room,
              so it now sits alongside order and reservation paths.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {eventFeatures.map((event, index) => (
              <ScrollReveal key={event.name} delay={index * 90}>
                <a href={event.href} target="_blank" rel="noopener noreferrer" className="block rounded-[2rem] border border-copper/10 bg-card-bg/55 p-7 transition hover:border-copper/40">
                  <p className="text-xs uppercase tracking-[0.35em] text-copper">{event.schedule}</p>
                  <h2 className="mt-4 font-serif text-3xl text-cream">{event.name}</h2>
                  <p className="mt-4 leading-7 text-cream/68">{event.description}</p>
                  <p className="mt-6 text-sm font-semibold text-copper">Open event page</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-copper/10 bg-charcoal/20 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-cream">Reserve a table before the music starts.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={dukeLinks.reservations} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                Reservations
              </a>
              <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                Order Online
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
