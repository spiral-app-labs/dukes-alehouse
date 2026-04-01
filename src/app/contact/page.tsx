"use client";

import ScrollReveal from "@/components/ScrollReveal";

const hours = [
  { day: "Monday", time: "12pm – 1am", open: true },
  { day: "Tuesday", time: "CLOSED", open: false },
  { day: "Wednesday", time: "12pm – 1am", open: true },
  { day: "Thursday", time: "12pm – 1am", open: true },
  { day: "Friday", time: "12pm – 1am", open: true },
  { day: "Saturday", time: "12pm – 1am", open: true },
  { day: "Sunday", time: "12pm – 1am", open: true },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mt-3 mb-4">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Located in the heart of downtown Crystal Lake. Come visit us or give us a call.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="bg-card-bg rounded-xl border border-copper/10 p-8">
                <h2 className="text-2xl font-serif font-bold text-copper mb-6">Visit Us</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-cream font-medium mb-1">Address</h3>
                      <a
                        href="https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL+60014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream/60 hover:text-copper transition-colors"
                      >
                        110 N Main St<br />Crystal Lake, IL 60014
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-cream font-medium mb-1">Phone</h3>
                      <a
                        href="tel:8153569980"
                        className="text-cream/60 hover:text-copper transition-colors text-lg"
                      >
                        (815) 356-9980
                      </a>
                    </div>
                  </div>

                  {/* Gift Cards */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-cream font-medium mb-1">Gift Cards</h3>
                      <a
                        href="https://dukes.securetree.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-copper hover:text-amber transition-colors font-medium"
                      >
                        Purchase Online →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal delay={100}>
              <div className="bg-card-bg rounded-xl border border-copper/10 p-8">
                <h2 className="text-2xl font-serif font-bold text-copper mb-6">Hours</h2>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center py-2 border-b border-copper/5 last:border-0 ${
                        !h.open ? "text-red-400/80" : "text-cream/70"
                      }`}
                    >
                      <span className="font-medium">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8153569980"
                  className="flex-1 px-6 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all text-center"
                >
                  Call Us
                </a>
                <a
                  href="https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL+60014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 border-2 border-copper/50 text-copper font-bold uppercase tracking-wider text-sm rounded hover:bg-copper/10 transition-all text-center"
                >
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal variant="right">
            <div className="rounded-xl overflow-hidden border border-copper/10 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.1!2d-88.3162!3d42.2414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1c0f46f5e3b7%3A0x3e0b5e8e5e5e5e5e!2s110%20N%20Main%20St%2C%20Crystal%20Lake%2C%20IL%2060014!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Duke's Alehouse & Kitchen Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-24 px-4 bg-charcoal/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Private Events</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
              Hosting an <span className="gradient-text">Event?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Duke&apos;s offers catering with party platters and buffet-style service.
              Perfect for corporate events, celebrations, and gatherings of all sizes.
            </p>
            <a
              href="tel:8153569980"
              className="inline-block px-8 py-4 bg-copper text-charcoal font-bold uppercase tracking-wider text-sm rounded hover:bg-amber transition-all hover:scale-105"
            >
              Call to Discuss — (815) 356-9980
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
