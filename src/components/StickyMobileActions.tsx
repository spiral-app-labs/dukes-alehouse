"use client";

import { usePathname } from "next/navigation";
import { dukeLinks } from "@/lib/siteData";

const hiddenRoutes = new Set([dukeLinks.contact]);

export default function StickyMobileActions() {
  const pathname = usePathname();

  if (hiddenRoutes.has(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-copper/15 bg-dark-bg/95 px-4 py-3 backdrop-blur-xl xl:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3">
        <a
          href={dukeLinks.order}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-copper px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-dark-bg"
        >
          Order Online
        </a>
        <a
          href={dukeLinks.reservations}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-copper/40 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-copper"
        >
          Reservations
        </a>
      </div>
    </div>
  );
}
