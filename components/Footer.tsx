"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const { description, navLabel, contactLabel, rights, country } = t.footer;
  const enlacesNav = t.navbar.links;
  const anio = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a3a2a] overflow-hidden">
      {/* Background image */}
      <Image
        src="/footer.webp"
        alt="Agricultural fields at sunset"
        fill
        className="object-cover object-center"
      />
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#1a3a2a]/85" />

      {/* Content */}
      <div className="relative">

      {/* Footer body */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 — Logo and description */}
        <div className="flex flex-col gap-4">
          <a href="#inicio">
            <Image
              src="/logo.webp"
              alt="Viagro"
              width={120}
              height={40}
              className="object-contain brightness-0 invert"
            />
          </a>
          <p className="text-sm text-[#a8c5b5] leading-relaxed max-w-xs">
            {description}
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#52b788]">
            {navLabel}
          </span>
          <ul className="flex flex-col gap-2">
            {enlacesNav.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  className="text-sm text-[#a8c5b5] hover:text-white transition-colors duration-200"
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#52b788]">
            {contactLabel}
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#a8c5b5]">comercial@viagro.uk</span>
            <span className="text-sm text-[#a8c5b5]">+598 96 542 526</span>
            <span className="text-sm text-[#a8c5b5]">Av Roque Saenz Peña 943, Floor 8, CABA</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs text-[#6b9e85]">
          © {anio} Viagro. {rights}
        </span>
        <span className="text-xs text-[#6b9e85]">
          {country}
        </span>
      </div>
      </div>{/* fin contenido relativo */}
    </footer>
  );
}
