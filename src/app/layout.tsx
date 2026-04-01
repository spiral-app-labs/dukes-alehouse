import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Duke's Alehouse & Kitchen | Crystal Lake's Premier Gastropub",
    template: "%s | Duke's Alehouse & Kitchen",
  },
  description:
    "Eco-conscious gastropub in Crystal Lake, IL featuring gourmet burgers, 140+ craft beers, 21 rotating taps, and comfort food made with sustainable local ingredients. Live music venue.",
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
    title: "Duke's Alehouse & Kitchen | Crystal Lake's Premier Gastropub",
    description:
      "Eco-conscious gastropub featuring gourmet burgers, 140+ craft beers, and comfort food from sustainable local ingredients.",
    url: "https://thedukeabides.com",
    siteName: "Duke's Alehouse & Kitchen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duke's Alehouse & Kitchen",
    description:
      "Crystal Lake's premier gastropub — 140+ craft beers, gourmet burgers, live music.",
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
  image: [],
  url: "https://thedukeabides.com",
  telephone: "(815) 356-9980",
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
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
      </body>
    </html>
  );
}
