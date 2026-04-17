import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyMobileActions from "@/components/StickyMobileActions";
import { dukeBrandAssets, dukeBusiness, dukeLinks, siteUrl } from "@/lib/siteData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${dukeBusiness.name} | Downtown Crystal Lake Tavern`,
    template: `%s | ${dukeBusiness.name}`,
  },
  description:
    "Direct Toast ordering, Tock reservations, live Untappd taps, weekly events, and a mixed-group menu in downtown Crystal Lake.",
  openGraph: {
    title: `${dukeBusiness.name} | Downtown Crystal Lake Tavern`,
    description:
      "Plan dinner, drinks, reservations, live events, and private parties at Duke's Alehouse & Kitchen.",
    url: siteUrl,
    siteName: dukeBusiness.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${dukeBusiness.name} in ${dukeBusiness.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${dukeBusiness.name} | Downtown Crystal Lake Tavern`,
    description:
      "Direct ordering, Tock reservations, weekly room rhythm, and a menu built for the whole table.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: dukeBusiness.name,
  image: [dukeBrandAssets.hero, dukeBrandAssets.logo],
  url: siteUrl,
  telephone: dukeBusiness.phoneDisplay,
  email: dukeBusiness.emailDisplay,
  servesCuisine: ["American", "Tavern", "Beer Bar"],
  address: {
    "@type": "PostalAddress",
    streetAddress: dukeBusiness.addressLineOne,
    addressLocality: "Crystal Lake",
    addressRegion: "IL",
    postalCode: "60014",
    addressCountry: "US",
  },
  menu: dukeLinks.menu,
  acceptsReservations: "True",
  sameAs: [dukeLinks.facebook, dukeLinks.instagram, dukeLinks.yelp],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--ink-950)] antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyMobileActions />
      </body>
    </html>
  );
}
