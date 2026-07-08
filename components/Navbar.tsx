"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { links, openMenu } = t.navbar;

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-1 ${mobile ? "pt-2 border-t border-[#e0d8cc]" : ""}`}>
      <button
        onClick={() => setLang("en")}
        className={`text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-sm transition-colors duration-200 ${
          lang === "en"
            ? "bg-[#2d6a4f] text-white"
            : "text-[#6b6b6b] hover:text-[#2d6a4f]"
        }`}
      >
        EN
      </button>
      <span className="text-[#c4b9a8] text-xs">|</span>
      <button
        onClick={() => setLang("es")}
        className={`text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-sm transition-colors duration-200 ${
          lang === "es"
            ? "bg-[#2d6a4f] text-white"
            : "text-[#6b6b6b] hover:text-[#2d6a4f]"
        }`}
      >
        ES
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f4ef] border-b border-[#e0d8cc]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#inicio" className="flex items-center select-none">
          <Image
            src="/logo.webp"
            alt="Viagro"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Links + selector de idioma — escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((enlace) => (
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
          <LangToggle />
        </div>

        {/* Botón hamburguesa — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={openMenu}
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
            {links.map((enlace) => (
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
          <div className="mt-4">
            <LangToggle mobile />
          </div>
        </div>
      )}
    </header>
  );
}
