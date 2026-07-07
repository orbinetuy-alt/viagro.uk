"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuienesSomos() {
  const { t } = useLanguage();
  const { badge, titleLine1, titleLine2, body, cards } = t.about;

  return (
    <section id="nosotros" className="bg-[#f7f4ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top label */}
        <div className="flex justify-center mb-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
            {badge}
          </span>
        </div>

        {/* Main title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a3a2a] leading-tight tracking-tight text-center mb-14">
          {titleLine1}<br />{titleLine2}
        </h2>

        {/* Content: image + text/cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left column — image */}
          <div className="relative w-full aspect-[4/3]">
            {/* Decorative offset block */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#52b788]/20 rounded-sm" />
            {/* Image */}
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xl shadow-[#1a3a2a]/20 group">
              <Image
                src="/aboutus.jpg"
                alt="Viagro — Agricultural operations"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2a]/30 to-transparent" />
            </div>
          </div>

          {/* Right column — text + cards */}
          <div className="flex flex-col gap-8">

            {/* Body text */}
            <p className="text-[#4a4a4a] text-lg leading-relaxed">
              {body}
            </p>

            {/* 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map((card) => (
                <div
                  key={card.titulo}
                  className="bg-white border border-[#e0d8cc] rounded-sm p-5 flex flex-col gap-2 hover:border-[#2d6a4f] hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-6 h-0.5 bg-[#52b788] mb-1" />
                  <h3 className="text-sm font-bold text-[#1a3a2a] tracking-tight">
                    {card.titulo}
                  </h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    {card.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
