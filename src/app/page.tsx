"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  dukeLinks,
  eventFeatures,
  heroStats,
  privateEventDetails,
  reviews,
  serviceNotes,
} from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-copper/10 bg-[radial-gradient(circle_at_top_left,_rgba(212,162,78,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(184,115,51,0.16),_transparent_30%),linear-gradient(180deg,_#171520,_#0f0f1a_60%)] pt-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 text-xs uppercase tracking-[0.45em] text-copper"
            >
              Crystal Lake • Order Direct • Reserve on Tock
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-4xl font-serif text-5xl font-bold leading-none text-cream md:text-7xl"
            >
              Duke&apos;s is the downtown tavern for craft pours, loud plates, and late nights.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-cream/70"
            >
              This pass restores the real business flow: direct ordering, Tock reservations,
              live events, beer access, private parties, split kitchen and bar hours, and menu
              sections built from Duke&apos;s public PDFs instead of template filler.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                Order Online
              </a>
              <a href={dukeLinks.reservations} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/50 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                Reservations
              </a>
              <Link href={dukeLinks.parties} className="rounded-full border border-cream/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-cream/80 transition hover:border-copper/50 hover:text-copper">
                Book a Party
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-4 text-sm text-cream/50"
            >
              We did not verify DoorDash or Uber Eats listings, so the site now explicitly points guests to Duke&apos;s official order flow.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative flex items-center lg:justify-end"
          >
            <div className="w-full max-w-xl rounded-[2rem] border border-copper/20 bg-charcoal/60 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ rotateX: 5, rotateY: -5, translateY: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-3xl border border-copper/10 bg-dark-bg/70 p-5"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <p className="font-serif text-4xl text-copper">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/55">{stat.label}</p>
                    <div className="mt-4 h-1 rounded-full bg-copper/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${55 + index * 10}%` }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-copper to-amber"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-copper/10 bg-gradient-to-r from-copper/8 via-amber/10 to-copper/8 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-copper">Tap Wall</p>
                    <p className="mt-2 font-serif text-2xl text-cream">A better beer front door</p>
                  </div>
                  <a href={dukeLinks.beerMenu} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-copper hover:text-amber">
                    Open Untappd
                  </a>
                </div>
                <div className="mt-5 grid grid-cols-7 gap-2">
                  {Array.from({ length: 14 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 18, opacity: 0.3 }}
                      animate={{ height: [18, 52 + (index % 5) * 18, 28], opacity: [0.3, 1, 0.75] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                      className="rounded-full bg-gradient-to-t from-copper to-amber"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-copper/10 bg-charcoal/30 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-cream/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>110 N Main St, Crystal Lake, IL 60014 • (815) 356-9980 • hello@dukesalehouse.net</p>
          <div className="flex flex-wrap gap-3">
            <a href={dukeLinks.phone} className="text-copper hover:text-amber">Call</a>
            <a href={dukeLinks.email} className="text-copper hover:text-amber">Email</a>
            <a href={dukeLinks.directions} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-amber">Directions</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-copper">What changed</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Round 2 now fixes the business paths first.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            {serviceNotes.map((note, index) => (
              <ScrollReveal key={note} delay={index * 100}>
                <div className="rounded-[1.75rem] border border-copper/10 bg-card-bg/60 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-copper/80">0{index + 1}</p>
                  <p className="mt-3 leading-7 text-cream/70">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-copper/10 bg-charcoal/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-copper">Live energy</p>
            <h2 className="mt-4 font-serif text-4xl text-cream">Events are back in the nav because they are part of the venue identity.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {eventFeatures.map((event, index) => (
              <motion.a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[1.75rem] border border-copper/10 bg-dark-bg/70 p-6 transition hover:border-copper/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-copper">{event.schedule}</p>
                <h3 className="mt-4 font-serif text-2xl text-cream transition group-hover:text-copper">
                  {event.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-cream/65">{event.description}</p>
                <p className="mt-6 text-sm font-semibold text-copper">See event details</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal>
              <div className="rounded-[2rem] border border-copper/10 bg-gradient-to-br from-card-bg/80 to-dark-bg p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-copper">Real menu structure</p>
                <h2 className="mt-4 font-serif text-4xl text-cream">The menu section now mirrors Duke&apos;s actual public menu.</h2>
                <p className="mt-5 max-w-xl leading-7 text-cream/70">
                  Signature audit items are restored: Duke&apos;s Cuban, Hot Chicken Sandwich,
                  beet salad, tofu and kim-chi, Duke&apos;s Grain Bowl, and gluten-free bun availability.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={dukeLinks.menu} className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                    Browse Menus
                  </Link>
                  <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                    Open Order Flow
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {reviews.map((review, index) => (
                <ScrollReveal key={review.source} delay={index * 100}>
                  <div className="rounded-[1.6rem] border border-copper/10 bg-card-bg/55 p-6">
                    <p className="text-sm leading-7 text-cream/70">&ldquo;{review.quote}&rdquo;</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-copper">{review.source}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-copper/10 bg-charcoal/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-copper">Banquets and groups</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">Private events now have a real landing path instead of a buried mention.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            {privateEventDetails.map((detail, index) => (
              <ScrollReveal key={detail} delay={index * 120}>
                <div className="rounded-[1.6rem] border border-copper/10 bg-dark-bg/70 p-5">
                  <p className="leading-7 text-cream/70">{detail}</p>
                </div>
              </ScrollReveal>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={dukeLinks.parties} className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                Book a Party
              </Link>
              <a href={dukeLinks.email} className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                Email Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
