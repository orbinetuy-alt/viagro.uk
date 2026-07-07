"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Productos() {
  const { t } = useLanguage();
  const { badge, title1, title2, intro, categories } = t.products;

  return (
    <section id="productos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Label + title */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] text-center mb-8 tracking-tight">
          {title1}<br />
          <span className="text-[#2d6a4f]">{title2}</span>
        </h2>
        <p className="text-lg text-[#4a4a4a] text-center mb-20 max-w-3xl mx-auto">
          {intro}
        </p>

        {/* Category blocks */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <span className="inline-block mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-[#7c5c3b] border border-[#c4a882] px-3 py-1">
                {cat.label}
              </span>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Left: image */}
                <div className="w-full aspect-[3/2] bg-[#e8f0eb] flex items-center justify-center overflow-hidden group rounded-sm">
                  {cat.imagen ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cat.imagen}
                      alt={cat.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-[#2d6a4f] text-sm font-medium tracking-widest uppercase opacity-40">
                      Image
                    </span>
                  )}
                </div>

                {/* Right: paragraph cards */}
                <div className="flex flex-col justify-center gap-4">
                  {cat.paragraphs.map((p, i) => (
                    <div
                      key={i}
                      className="border border-[#dde8e2] rounded-sm p-6 shadow-sm bg-[#f9fcfa] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md cursor-default"
                    >
                      <p className="text-[#4a4a4a] text-base leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
