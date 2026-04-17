"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  dukeBrandAssets,
  dukeBusiness,
  dukeLinks,
  eventFeatures,
  fastFacts,
  heroServiceMoments,
  heroUtilityNotes,
  heroChips,
  menuMoments,
  menuPreview,
  neighborhoodNotes,
  partyUseCases,
  privatePartyDetails,
} from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24">
        <Image
          src={dukeBrandAssets.hero}
          alt={dukeBusiness.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
        <div className="section-shell relative grid min-h-[calc(100svh-6rem)] gap-10 pb-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="flex flex-col justify-end py-10"
          >
            <p className="kicker text-[11px] text-[var(--gold-300)]">
              Bramble in downtown Crystal Lake
            </p>
            <h1 className="display-serif mt-5 max-w-4xl text-5xl leading-[0.92] text-[var(--stone-100)] md:text-7xl xl:text-[5.6rem]">
              {dukeBusiness.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(241,235,222,0.78)]">
              {dukeBusiness.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={dukeLinks.order}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)] transition hover:-translate-y-0.5 hover:bg-[var(--rust-600)]"
              >
                Order Online
              </a>
              <a
                href={dukeLinks.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[var(--stone-100)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
              >
                Reserve on Tock
              </a>
              <Link
                href={dukeLinks.menu}
                className="rounded-full border border-white/12 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.78)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
              >
                See Menu
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14 }}
            className="flex items-end lg:justify-end"
          >
            <div className="line-card poster-shadow w-full max-w-xl rounded-[2rem] p-6 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="kicker rounded-full border border-white/10 px-3 py-2 text-[10px] text-[rgba(241,235,222,0.7)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroServiceMoments.map((moment) => (
                  <div key={moment.label} className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5">
                    <p className="kicker text-[10px] text-[var(--gold-300)]">{moment.label}</p>
                    <p className="display-serif mt-3 text-3xl text-[var(--stone-100)]">
                      {moment.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {heroUtilityNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[1.25rem] border border-white/10 bg-black/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.72)]"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <a
                  href={dukeLinks.beerMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.25rem] border border-white/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.8)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Open Untappd
                </a>
                <Link
                  href={dukeLinks.events}
                  className="rounded-[1.25rem] border border-white/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.8)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Weekly Events
                </Link>
                <Link
                  href={dukeLinks.parties}
                  className="rounded-[1.25rem] border border-white/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.8)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Private Parties
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#0c0b0e] py-4">
        <div className="section-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="kicker text-[10px] text-[var(--gold-300)]">Fast reality strip</p>
            <p className="mt-2 text-sm text-[rgba(241,235,222,0.76)]">
              {dukeBusiness.addressLineOne}, {dukeBusiness.addressLineTwo} |{" "}
              {dukeBusiness.phoneDisplay} | {dukeBusiness.emailDisplay}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[rgba(241,235,222,0.72)]">
            <a href={dukeLinks.phone} className="transition hover:text-[var(--gold-300)]">
              Call
            </a>
            <a href={dukeLinks.email} className="transition hover:text-[var(--gold-300)]">
              Email
            </a>
            <a
              href={dukeLinks.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--gold-300)]"
            >
              Directions
            </a>
            <a
              href={dukeLinks.reservations}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--gold-300)]"
            >
              Reserve
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <ScrollReveal>
            <div className="line-card rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[var(--gold-300)]">Why Duke&apos;s works</p>
              <h2 className="display-serif mt-5 text-4xl leading-tight text-[var(--stone-100)] sm:text-5xl">
                The room says yes to dinner, beer, and staying out longer.
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgba(241,235,222,0.72)]">
                Duke&apos;s lands when the first-time guest sees the same things the regular already
                knows: a beer-first bar, enough menu range for a mixed table, and a downtown room
                with a weekly pulse that keeps people coming back.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            {fastFacts.map((fact, index) => (
              <ScrollReveal key={fact.title} delay={index * 90}>
                <article className="line-card rounded-[1.75rem] p-6">
                  <p className="kicker text-[10px] text-[var(--gold-300)]">
                    0{index + 1}
                  </p>
                  <h3 className="display-serif mt-3 text-3xl text-[var(--stone-100)]">
                    {fact.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                    {fact.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#120f14] py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <ScrollReveal>
            <div className="paper-panel rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[#68411f]">Why mixed groups land here</p>
              <h2 className="display-serif mt-4 text-4xl leading-tight text-[#191411] sm:text-5xl">
                Burgers for one seat, grain bowls for another, and enough range to keep the whole
                table from negotiating.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/10 bg-white/30 p-5">
                  <p className="kicker text-[10px] text-[#68411f]">House signatures</p>
                  <p className="mt-3 text-sm leading-7 text-[#423427]">
                    Duke&apos;s Burger, Duke&apos;s Cuban, Duke&apos;s Chicken, Korean fried
                    cauliflower, and the grain bowl all read like Duke&apos;s, not a generic pub SKU list.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-white/30 p-5">
                  <p className="kicker text-[10px] text-[#68411f]">Dietary range</p>
                  <p className="mt-3 text-sm leading-7 text-[#423427]">
                    Vegan, vegetarian, and gluten-free lanes stay visible from the first scroll so
                    the group can pick Duke&apos;s without needing a side conversation.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-3">
              {menuPreview.map((preview, index) => (
                <ScrollReveal key={preview.category} delay={index * 80}>
                  <article className="rounded-[1.6rem] border border-white/10 bg-black/15 p-5">
                    <p className="kicker text-[10px] text-[var(--gold-300)]">
                      {preview.category}
                    </p>
                    <div className="mt-4 space-y-3">
                      {preview.items.map((item) => (
                        <p
                          key={item}
                          className="display-serif text-2xl leading-tight text-[var(--stone-100)]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
            {menuMoments.map((moment, index) => (
              <ScrollReveal key={moment.title} delay={index * 90}>
                <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-6">
                  <h3 className="display-serif text-3xl text-[var(--stone-100)]">
                    {moment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                    {moment.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={dukeLinks.menu}
                  className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)] transition hover:-translate-y-0.5 hover:bg-[var(--rust-600)]"
                >
                  See Full Menu
                </Link>
                <a
                  href={dukeLinks.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Order Direct
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div className="line-card rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[var(--gold-300)]">Weekly house rhythm</p>
              <h2 className="display-serif mt-5 text-4xl leading-tight text-[var(--stone-100)] sm:text-5xl">
                Duke&apos;s feels alive because the calendar repeats on purpose.
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgba(241,235,222,0.72)]">
                Vinyl nights, whiskey specials, live music, and Friday karaoke are the proof that
                Duke&apos;s is more than a one-off dinner stop. The calendar gives the room a reason
                to pull people back in next week.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={dukeLinks.events}
                  className="rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.84)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Open Events
                </Link>
                <a
                  href={dukeLinks.reservations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.84)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Reserve First
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2">
            {eventFeatures.map((event, index) => (
              <ScrollReveal key={event.name} delay={index * 80}>
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group line-card block rounded-[1.75rem] p-6 transition hover:-translate-y-1"
                >
                  <p className="kicker text-[10px] text-[var(--gold-300)]">
                    {event.schedule}
                  </p>
                  <h3 className="display-serif mt-3 text-3xl text-[var(--stone-100)] transition group-hover:text-[var(--rust-600)]">
                    {event.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                    {event.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#130f15] py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <div className="paper-panel rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[#68411f]">Private parties</p>
              <h2 className="display-serif mt-4 text-4xl leading-tight text-[#191411] sm:text-5xl">
                Plan the group night without turning Duke&apos;s into a banquet-hall fantasy.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#423427]">
                Keep the pitch practical: direct contact, banquet-menu handoff, and local group use
                cases that still fit the tavern identity.
              </p>
              <div className="mt-7 space-y-3 text-sm leading-7 text-[#4b3a2b]">
                {privatePartyDetails.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {partyUseCases.map((useCase, index) => (
              <ScrollReveal key={useCase} delay={index * 80}>
                <div className="line-card rounded-[1.6rem] p-5">
                  <p className="display-serif text-3xl text-[var(--stone-100)]">
                    {useCase}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={dukeLinks.parties}
                  className="rounded-full bg-[var(--rust-500)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)] transition hover:-translate-y-0.5 hover:bg-[var(--rust-600)]"
                >
                  Plan a Party
                </Link>
                <a
                  href={dukeLinks.email}
                  className="rounded-full border border-white/14 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Email the House
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="line-card rounded-[2rem] p-7 sm:p-8">
              <p className="kicker text-[10px] text-[var(--gold-300)]">Downtown Crystal Lake</p>
              <h2 className="display-serif mt-5 text-4xl leading-tight text-[var(--stone-100)] sm:text-5xl">
                Main Street is part of the product, not a footnote.
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgba(241,235,222,0.72)]">
                Duke&apos;s gets stronger the second it feels like a real downtown meet-up point
                instead of a tavern floating in nowhere. Main Street is where the plan starts, not
                just where the map pin lands.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={dukeLinks.contact}
                  className="rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.84)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Visit Duke&apos;s
                </Link>
                <a
                  href={dukeLinks.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(241,235,222,0.84)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {neighborhoodNotes.map((note, index) => (
              <ScrollReveal key={note.title} delay={index * 90}>
                <article className="line-card rounded-[1.6rem] p-6">
                  <p className="display-serif text-3xl text-[var(--stone-100)]">
                    {note.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(241,235,222,0.68)]">
                    {note.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
