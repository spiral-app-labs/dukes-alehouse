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
    "Real Duke's imagery, official guest reviews, Toast ordering, Tock reservations, live Untappd taps, and a mixed-group menu in downtown Crystal Lake.",
  openGraph: {
    title: `${dukeBusiness.name} | Downtown Crystal Lake Tavern`,
    description:
      "See the room, the food, the official guest proof, and the live order-reserve-beer rails that make Duke's easy to send.",
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
      "Real Duke's proof: official guest reviews, real tavern imagery, direct ordering, reservations, and the live beer board.",
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
