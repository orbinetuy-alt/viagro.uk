import Image from "next/image";

const cards = [
  {
    titulo: "Tailored solutions",
    descripcion: "We provide supplies, machinery and custom solutions adapted to each client's specific needs",
  },
  {
    titulo: "Expert trading",
    descripcion: "Our trading operations connect producers with markets, ensuring competitive conditions at every stage.",
  },
  {
    titulo: "Integrated support",
    descripcion: "We accompany producers across the region with end-to-end solutions",
  },
];

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-[#f7f4ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top label */}
        <div className="flex justify-center mb-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
            About us
          </span>
        </div>

        {/* Main title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a3a2a] leading-tight tracking-tight text-center mb-14">
          A strategic partner for<br />the agricultural industry
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
              Viagro Servicios SRL is a strategic partner to the agricultural industry,
              focused on driving the growth of its clients through the provision of inputs,
              machinery and tailored solutions. Through our trading operations and our
              expertise in end-to-end logistics and financing, we support producers across
              different countries in the region, generating efficiency, competitiveness
              and sustainable value.
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
