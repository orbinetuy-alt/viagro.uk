"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Servicios() {
  const { t } = useLanguage();
  const { badge, title1, title2, items } = t.services;

  return (
    <section id="servicios" className="bg-[#f7f4ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Label + title */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] text-center mb-16 tracking-tight">
          {title1}<br />
          <span className="text-[#2d6a4f]">{title2}</span>
        </h2>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((servicio) => (
            <div
              key={servicio.numero}
              className="bg-white border border-[#e0d8cc] rounded-sm p-7 flex flex-col gap-4 hover:border-[#2d6a4f] hover:shadow-sm transition-all duration-200 group"
            >
              {/* Decorative number */}
              <span className="text-4xl font-bold text-[#e0d8cc] group-hover:text-[#d8eedd] transition-colors duration-200 leading-none">
                {servicio.numero}
              </span>

              {/* Accent line */}
              <div className="w-8 h-0.5 bg-[#52b788]" />

              {/* Title */}
              <h3 className="text-base font-bold text-[#1a3a2a] leading-snug tracking-tight">
                {servicio.titulo}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
