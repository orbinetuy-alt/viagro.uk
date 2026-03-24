import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

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
    icon: "/logo.png",
    apple: "/logo.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
