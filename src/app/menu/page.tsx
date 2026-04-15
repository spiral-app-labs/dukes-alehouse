"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { dukeLinks, menuSections } from "@/lib/siteData";

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(menuSections[0]?.slug ?? "appetizers");

  return (
    <>
      <section className="border-b border-copper/10 bg-[linear-gradient(180deg,_rgba(26,26,46,0.98),_rgba(15,15,26,1)),radial-gradient(circle_at_top_left,_rgba(184,115,51,0.16),_transparent_35%)] pt-28">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.38em] text-copper">Real Duke&apos;s menu data</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold text-cream md:text-6xl">
              Menus rebuilt from Duke&apos;s public PDFs and live ordering surfaces.
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-cream/70">
              This page now uses the real item names, sections, prices, and callouts mentioned in the audit.
              It also gives mobile guests a faster path with jump chips and sticky action buttons.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={dukeLinks.order} target="_blank" rel="noopener noreferrer" className="rounded-full bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-dark-bg transition hover:bg-amber">
                Order Online
              </a>
              <a href={dukeLinks.reservations} target="_blank" rel="noopener noreferrer" className="rounded-full border border-copper/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-copper transition hover:bg-copper/10">
                Reservations
              </a>
              <a href={dukeLinks.beerMenu} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-cream/80 transition hover:border-copper/40 hover:text-copper">
                Beer Menu
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-copper/10 bg-dark-bg/90 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {menuSections.map((section) => (
            <button
              key={section.slug}
              type="button"
              onClick={() => {
                setActiveSection(section.slug);
                document.getElementById(section.slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                activeSection === section.slug
                  ? "bg-copper text-dark-bg"
                  : "border border-copper/15 text-cream/70 hover:border-copper/40 hover:text-copper"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {menuSections.map((section, sectionIndex) => (
            <ScrollReveal key={section.slug} delay={sectionIndex * 60}>
              <section id={section.slug} className="rounded-[2rem] border border-copper/10 bg-card-bg/45 p-6 sm:p-8">
                <div className="flex flex-col gap-3 border-b border-copper/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-copper">Section {sectionIndex + 1}</p>
                    <h2 className="mt-3 font-serif text-4xl text-cream">{section.title}</h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-cream/60">{section.note}</p>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {section.items.map((item, index) => (
                    <motion.article
                      key={item.name}
                      whileHover={{ y: -4 }}
                      className="rounded-[1.5rem] border border-copper/10 bg-dark-bg/75 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-2xl text-cream">{item.name}</h3>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-cream/68">{item.description}</p>
                        </div>
                        <p className="rounded-full bg-copper/10 px-3 py-1 text-sm font-bold text-copper">{item.price}</p>
                      </div>
                      {index < 2 && (
                        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-copper/75">
                          Highlighted audit item
                        </p>
                      )}
                    </motion.article>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-copper/10 bg-charcoal/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-copper">Ordering clarity</p>
              <h2 className="mt-4 font-serif text-4xl text-cream">No marketplace guessing.</h2>
              <p className="mt-5 leading-8 text-cream/70">
                We could not verify DoorDash or Uber Eats as active Duke&apos;s destinations, so the menu flow now stays honest:
                order direct, reserve on Tock, or call Duke&apos;s for the fastest answer.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Order direct", body: "Official ordering path through Duke's live order system." },
              { title: "Reserve fast", body: "Tock handles tables and clarifies that larger parties should email or call." },
              { title: "Ask the house", body: "For specials, tap changes, and modifiers, the phone line is surfaced across the site." },
            ].map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 100}>
                <div className="rounded-[1.5rem] border border-copper/10 bg-dark-bg/70 p-5">
                  <h3 className="font-serif text-2xl text-cream">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cream/65">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
