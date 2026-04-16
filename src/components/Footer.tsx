import Link from "next/link";
import Image from "next/image";
import {
  dukeBrandAssets,
  dukeBusiness,
  dukeLinks,
  footerActionLinks,
  hours,
  primaryNav,
} from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a090c]">
      <div className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="line-card poster-shadow overflow-hidden rounded-[2rem] p-7 sm:p-9">
            <Image
              src={dukeBrandAssets.logo}
              alt={dukeBusiness.name}
              width={220}
              height={82}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(241,235,222,0.72)]">
              Duke&apos;s is the Main Street move when dinner, drinks, and a real night out need to
              happen in the same room.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {footerActionLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[1.25rem] border border-white/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.8)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-[1.25rem] border border-white/10 px-4 py-4 text-sm text-[rgba(241,235,222,0.8)] transition hover:border-[var(--rust-500)] hover:text-[var(--gold-300)]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="line-card rounded-[2rem] p-7">
              <p className="kicker text-[10px] text-[var(--gold-300)]">Visit the house</p>
              <a
                href={dukeLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block display-serif text-4xl text-[var(--stone-100)] transition hover:text-[var(--rust-600)]"
              >
                {dukeBusiness.addressLineOne}
                <br />
                {dukeBusiness.addressLineTwo}
              </a>
              <div className="mt-5 flex flex-col gap-2 text-sm text-[rgba(241,235,222,0.7)]">
                <a href={dukeLinks.phone} className="transition hover:text-[var(--gold-300)]">
                  {dukeBusiness.phoneDisplay}
                </a>
                <a href={dukeLinks.email} className="transition hover:text-[var(--gold-300)]">
                  {dukeBusiness.emailDisplay}
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="line-card rounded-[2rem] p-7">
                <p className="kicker text-[10px] text-[var(--gold-300)]">Hours</p>
                <div className="mt-5 space-y-3 text-sm text-[rgba(241,235,222,0.7)]">
                  {hours.map((entry) => (
                    <div key={entry.days} className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                      <p className="font-semibold text-[rgba(241,235,222,0.86)]">
                        {entry.days}
                      </p>
                      <p>Kitchen: {entry.kitchen}</p>
                      <p>Bar: {entry.bar}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="line-card rounded-[2rem] p-7">
                <p className="kicker text-[10px] text-[var(--gold-300)]">Navigate</p>
                <div className="mt-5 flex flex-col gap-3 text-sm text-[rgba(241,235,222,0.72)]">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-[var(--gold-300)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={dukeLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--gold-300)]"
                  >
                    Facebook
                  </a>
                  <a
                    href={dukeLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--gold-300)]"
                  >
                    Instagram
                  </a>
                  <a
                    href={dukeLinks.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--gold-300)]"
                  >
                    Yelp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-[rgba(241,235,222,0.46)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {dukeBusiness.name} | {dukeBusiness.city}
          </p>
          <p>Toast ordering, Tock reservations, live Untappd board, and direct private-party contact.</p>
        </div>
      </div>
    </footer>
  );
}
