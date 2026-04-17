"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dukeBrandAssets, dukeBusiness, dukeLinks, primaryNav } from "@/lib/siteData";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0c0b0f]/92 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      }`}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-4">
            <Image
              src={dukeBrandAssets.logo}
              alt={dukeBusiness.name}
              width={182}
              height={68}
              className="h-11 w-auto sm:h-12"
            />
            <div className="hidden min-w-0 xl:block">
              <p className="kicker text-[10px] text-[rgba(215,187,122,0.82)]">
                {dukeBusiness.city}
              </p>
              <p className="mt-1 truncate text-sm text-[rgba(241,235,222,0.7)]">
                Order direct, reserve on Tock, then stay for the room.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`kicker text-[11px] transition ${
                    isActive
                      ? "text-[var(--rust-600)]"
                      : "text-[rgba(241,235,222,0.78)] hover:text-[var(--gold-300)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={dukeLinks.order}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--rust-500)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)] transition hover:-translate-y-0.5 hover:bg-[var(--rust-600)]"
            >
              Order Online
            </a>
            <a
              href={dukeLinks.reservations}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(241,235,222,0.18)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.82)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
            >
              Reserve
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/25 text-[var(--stone-100)] xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-current transition ${
                  isMobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[7px] h-0.5 bg-current transition ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[14px] h-0.5 bg-current transition ${
                  isMobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0b0a0d]/96 backdrop-blur-xl transition-all xl:hidden ${
          isMobileOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell py-6">
          <div className="line-card rounded-[1.6rem] p-5">
            <p className="kicker text-[10px] text-[var(--gold-300)]">
              {dukeBusiness.utilityLine}
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`display-serif text-3xl transition ${
                    pathname === item.href
                      ? "text-[var(--rust-600)]"
                      : "text-[rgba(241,235,222,0.9)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <a
                href={dukeLinks.order}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--rust-500)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-950)]"
              >
                Order Online
              </a>
              <a
                href={dukeLinks.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.86)]"
              >
                Reserve on Tock
              </a>
              <Link
                href={dukeLinks.parties}
                className="rounded-full border border-white/10 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(241,235,222,0.7)]"
              >
                Plan a Party
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
