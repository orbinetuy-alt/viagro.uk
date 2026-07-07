import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Productos from "@/components/Productos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

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
