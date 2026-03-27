"use client";

import { useRef } from "react";
import Image from "next/image";

/* ---------- Data ---------- */
const commodities = [
  { nombre: "Soybean",  imagen: "/soja1.jpg"  },
  { nombre: "Maize",   imagen: "/maiz.jpg"   },
  { nombre: "Wheat",   imagen: "/trigo.jpg"  },
  { nombre: "Rapeseed",imagen: "/colza.jpg"  },
  { nombre: "Rice",    imagen: "/arroz.jpg"  },
  { nombre: "Chia",    imagen: "/chia.jpg"   },
  { nombre: "Sesame",  imagen: "/sesamo.jpg" },
];

const fertilizantes = [
  { nombre: "Granular Urea",        tipo: "Nitrogen",  imagen: "/granular urea.jpg"            },
  { nombre: "Ammonium Sulphate",    tipo: "Nitrogen",  imagen: "/Ammonium Sulphate.jpg"        },
  { nombre: "MAP",                  tipo: "Phosphate", imagen: "/fertilizer phosphate MAP.jpg" },
  { nombre: "DAP",                  tipo: "Phosphate", imagen: "/fertilizer phosphate DAP.jpg" },
  { nombre: "SSP",                  tipo: "Phosphate", imagen: "/fertilizer phosphate SSP.jpg" },
  { nombre: "TSP",                  tipo: "Phosphate", imagen: "/Fertiliser phosphate TSP.jpg" },
  { nombre: "Potassium Chloride",   tipo: "Potassium", imagen: "/Potassium Chloride.jpg"       },
  { nombre: "Potassium Sulphate",   tipo: "Potassium", imagen: "/Potassium Sulphate.jpg"       },
];

/* ---------- Product card ---------- */
function CardProducto({ nombre, tipo, imagen }: { nombre: string; tipo?: string; imagen?: string }) {
  return (
    <div className="flex-shrink-0 w-52 sm:w-60 group cursor-pointer">
      {/* Image */}
      <div className="w-full aspect-square bg-[#d8eedd] rounded-sm overflow-hidden group-hover:opacity-90 transition-opacity duration-200 relative">
        {imagen ? (
          <Image
            src={imagen}
            alt={nombre}
            fill
            className="object-cover object-center"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[#2d6a4f] text-xs font-medium tracking-wider uppercase opacity-40">
            Image
          </span>
        )}
      </div>
      {/* Type (fertilisers only) */}
      {tipo && (
        <span className="mt-3 inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#7c5c3b] border border-[#c4a882] px-2 py-0.5 rounded-full">
          {tipo}
        </span>
      )}
      {/* Name */}
      <p className={`${tipo ? "mt-1.5" : "mt-3"} text-sm font-semibold text-[#1a3a2a] tracking-wide`}>
        {nombre}
      </p>
    </div>
  );
}

/* ---------- Carousel ---------- */
function Carrusel({
  categoria,
  items,
}: {
  categoria: string;
  items: { nombre: string; tipo?: string; imagen?: string }[];
}) {
  const refCarrusel = useRef<HTMLDivElement>(null);

  function desplazar(direccion: "left" | "right") {
    if (!refCarrusel.current) return;
    const desplazamiento = 280;
    refCarrusel.current.scrollBy({
      left: direccion === "right" ? desplazamiento : -desplazamiento,
      behavior: "smooth",
    });
  }

  return (
    <div className="mb-14">
      {/* Category label */}
      <span className="inline-block mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-[#7c5c3b] border border-[#c4a882] px-3 py-1 rounded-full">
        {categoria}
      </span>

      {/* Row: left arrow + cards + right arrow */}
      <div className="flex items-center gap-3">
        {/* Left arrow */}
        <button
          onClick={() => desplazar("left")}
          aria-label="Previous"
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[#c4a882] rounded-full text-[#7c5c3b] hover:bg-[#f0e8db] transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Scrollable container */}
        <div
          ref={refCarrusel}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <CardProducto key={item.nombre} nombre={item.nombre} tipo={item.tipo} imagen={item.imagen} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => desplazar("right")}
          aria-label="Next"
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[#c4a882] rounded-full text-[#7c5c3b] hover:bg-[#f0e8db] transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ---------- Main section ---------- */
export default function Productos() {
  return (
    <section id="productos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Label + title */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
            Our products
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] text-center mb-16 tracking-tight">
          Comprehensive solutions backed by<br />
          <span className="text-[#2d6a4f]">strong relationships</span>
        </h2>
        <h3 className="text-lg text-[#4a4a4a] text-center mb-16">
          Our management capabilities, together with our extensive relationships with producers and suppliers, allow us to offer our clients comprehensive and full-service solutions.
        </h3>

        {/* Carousels */}
        <Carrusel categoria="Agricultural Commodities" items={commodities} />
        <Carrusel categoria="Fertilisers" items={fertilizantes} />
      </div>
    </section>
  );
}
