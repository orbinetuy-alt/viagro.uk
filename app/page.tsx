import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Below-the-fold components loaded lazily to reduce initial JS bundle
const QuienesSomos = dynamic(() => import("@/components/QuienesSomos"));
const Productos = dynamic(() => import("@/components/Productos"));
const Servicios = dynamic(() => import("@/components/Servicios"));
const Contacto = dynamic(() => import("@/components/Contacto"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Viagro | Agricultural Commodities & Fertilisers",
  description:
    "Viagro connects global markets with the land. We trade agricultural commodities and fertilisers worldwide from the United Kingdom.",
  alternates: {
    canonical: "https://www.viagro.co.uk",
  },
};

export default function Inicio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Productos />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
