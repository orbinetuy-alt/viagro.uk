"use client";

import { useState } from "react";
import Image from "next/image";

const enlaces = [
  { etiqueta: "Home", href: "#inicio" },
  { etiqueta: "About", href: "#nosotros" },
  { etiqueta: "Products", href: "#productos" },
  { etiqueta: "Services", href: "#servicios" },
  { etiqueta: "Contact", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f4ef] border-b border-[#e0d8cc]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#inicio" className="flex items-center select-none">
          <Image
            src="/logo.png"
            alt="Viagro"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Links — escritorio */}
        <ul className="hidden md:flex items-center gap-8">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="text-sm font-medium tracking-wider uppercase text-[#1c1c1c] hover:text-[#2d6a4f] transition-colors duration-200 relative group"
              >
                {enlace.etiqueta}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2d6a4f] transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Open menu"
        >
          <span className={`block h-0.5 w-6 bg-[#1a3a2a] transition-all duration-200 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1a3a2a] transition-all duration-200 ${menuAbierto ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1a3a2a] transition-all duration-200 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="md:hidden bg-[#f7f4ef] border-t border-[#e0d8cc] px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="text-sm font-medium tracking-wider uppercase text-[#1c1c1c] hover:text-[#2d6a4f] transition-colors duration-200"
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
