"use client";

import { usePathname } from "next/navigation";
import { dukeLinks } from "@/lib/siteData";

export default function StickyMobileActions() {
  const pathname = usePathname();

  if (pathname === dukeLinks.contact) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#09080b]/94 px-4 py-3 backdrop-blur-xl xl:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3">
        <a
          href={dukeLinks.order}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--rust-500)] px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ink-950)]"
        >
          Order
        </a>
        <a
          href={dukeLinks.reservations}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/12 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(241,235,222,0.86)]"
        >
          Reserve
        </a>
        <a
          href={dukeLinks.beerMenu}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/12 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(241,235,222,0.7)]"
        >
          Beer List
        </a>
      </div>
    </div>
  );
}
