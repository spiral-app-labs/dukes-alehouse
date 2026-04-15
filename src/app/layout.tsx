import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileActions from "@/components/StickyMobileActions";
import { dukeLinks, siteUrl } from "@/lib/siteData";

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Duke's Alehouse & Kitchen | Crystal Lake Craft Beer and Kitchen",
    template: "%s | Duke's Alehouse & Kitchen",
  },
  description:
    "Downtown Crystal Lake gastropub with direct online ordering, Tock reservations, 140+ craft beers and Belgian ales, rotating live events, and Duke's signature menu.",
  keywords: [
    "gastropub",
    "Crystal Lake IL",
    "craft beer",
    "gourmet burgers",
    "Belgian ale",
    "live music",
    "restaurant",
    "Duke's Alehouse",
  ],
  openGraph: {
    title: "Duke's Alehouse & Kitchen | Crystal Lake Craft Beer and Kitchen",
    description:
      "Order direct, book reservations on Tock, explore the beer list, and plan banquets at Duke's Alehouse & Kitchen in Crystal Lake.",
    url: siteUrl,
    siteName: "Duke's Alehouse & Kitchen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Duke's Alehouse & Kitchen in Crystal Lake, Illinois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duke's Alehouse & Kitchen",
    description:
      "Order direct, reserve on Tock, and explore Duke's craft beer and event calendar.",
    images: [`${siteUrl}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Duke's Alehouse & Kitchen",
  image: [`${siteUrl}/opengraph-image`],
  url: siteUrl,
  telephone: "(815) 356-9980",
  email: "hello@dukesalehouse.net",
  menu: dukeLinks.order,
  address: {
    "@type": "PostalAddress",
    streetAddress: "110 N Main St",
    addressLocality: "Crystal Lake",
    addressRegion: "IL",
    postalCode: "60014",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.2414,
    longitude: -88.3162,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Sunday"],
      opens: "12:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "01:00",
    },
  ],
  servesCuisine: ["American", "Gastropub", "Craft Beer"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "1149",
    bestRating: "5",
  },
  acceptsReservations: "Yes",
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
      <body className="font-sans antialiased bg-dark-bg text-cream">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyMobileActions />
      </body>
    </html>
  );
}
