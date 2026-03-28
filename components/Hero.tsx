import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Agricultural field at sunset"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark green semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#1a3a2a]/80" />

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f4ef] to-transparent" />

      {/* Decorative accent — green line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#52b788]" />

      {/* Logo centrado */}
      <div className="absolute top-17 left-0 right-0 flex justify-center">
        <Image
          src="/logo.png"
          alt="Viagro"
          width={250}
          height={170}
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28">

        

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          Powering
          <br />
          <span className="text-[#52b788]">agribusiness efficiency</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-[#c4a882] max-w-xl leading-relaxed">
          We connect global markets with the land. We trade agricultural commodities and fertilisers with experience and commitment.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#productos"
            className="inline-block bg-[#2d6a4f] text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-[#52b788] transition-colors duration-200"
          >
            View products
          </a>
          <a
            href="#contacto"
            className="inline-block border border-white/30 text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-sm hover:border-white hover:bg-white/10 transition-colors duration-200"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
