"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-copper flex items-center justify-center text-charcoal font-serif font-bold text-xl group-hover:bg-amber transition-colors">
              D
            </div>
            <div>
              <span className="text-xl font-serif font-bold text-cream group-hover:text-copper transition-colors">
                Duke&apos;s
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-copper/80">
                Alehouse &amp; Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors hover:text-copper ${
                  pathname === link.href ? "text-copper" : "text-cream/80"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-copper rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="https://dukes.securetree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-copper text-charcoal text-sm font-bold uppercase tracking-wider rounded hover:bg-amber transition-colors"
            >
              Gift Cards
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line block w-6 h-0.5 bg-cream ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-cream ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-cream ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-charcoal/98 backdrop-blur-md border-t border-copper/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg uppercase tracking-wider font-medium transition-colors hover:text-copper ${
                pathname === link.href ? "text-copper" : "text-cream/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://dukes.securetree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 bg-copper text-charcoal text-center text-sm font-bold uppercase tracking-wider rounded hover:bg-amber transition-colors"
          >
            Gift Cards
          </a>
        </nav>
      </div>
    </header>
  );
}
