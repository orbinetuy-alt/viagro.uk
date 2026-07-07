import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const URL_BASE = "https://www.viagro.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(URL_BASE),
  title: {
    default: "Viagro | Agricultural Solutions",
    template: "%s | Viagro",
  },
  description:
    "A UK-based company specialising in the trading of agricultural commodities and fertilisers at a global level.",
  keywords: [
    "agricultural commodities",
    "fertilisers",
    "UK agribusiness",
    "grain trading",
    "soybean",
    "maize",
    "wheat",
    "commodity trading UK",
    "Viagro",
  ],
  authors: [{ name: "Viagro", url: URL_BASE }],
  creator: "Viagro",
  publisher: "Viagro",
  alternates: {
    canonical: URL_BASE,
    languages: {
      "en": URL_BASE,
      "es": URL_BASE,
      "x-default": URL_BASE,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: URL_BASE,
    siteName: "Viagro",
    title: "Viagro | Innovative Agricultural Solutions",
    description:
      "We connect global markets with the land. Agricultural commodities and fertilisers from the United Kingdom.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Viagro — Innovative agricultural solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viagro | Innovative Agricultural Solutions",
    description:
      "We connect global markets with the land. Agricultural commodities and fertilisers from the United Kingdom.",
    images: ["/hero.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Viagro",
  url: URL_BASE,
  logo: `${URL_BASE}/logo.png`,
  description:
    "A UK-based company specialising in the trading of agricultural commodities and fertilisers at a global level.",
  email: "comercial@viagro.uk",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressCountry: "PY",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
