/* ---------- Main section ---------- */

const categories = [
  {
    label: "Agricultural Commodities",
    paragraphs: [
      "We trade a broad range of agricultural commodities, including grains and oilseeds, sourced from key producing regions around the world.",
      "Our approach is driven by market dynamics, allowing us to adapt quickly to changing conditions and identify opportunities that create value for our clients.",
      "Through strong relationships with producers, logistics partners and buyers, we ensure efficient execution and reliable supply across different markets.",
    ],
    imagen: "/AGRICULTURAL COMMODITIES.jpg",
    alt: "Agricultural commodities",
  },
  {
    label: "Fertilisers",
    paragraphs: [
      "We offer a wide range of fertilizers, including urea, phosphates and tailored blends, designed to meet diverse agronomic requirements.",
      "By working closely with trusted suppliers and understanding regional needs, we provide solutions that support productivity and soil health.",
      "Our flexible trading approach allows us to respond to market conditions while ensuring consistent quality and timely delivery.",
    ],
    imagen: "/fertilizers.jpg",
    alt: "Fertilisers",
  },
];

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
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] text-center mb-8 tracking-tight">
          Comprehensive solutions backed by<br />
          <span className="text-[#2d6a4f]">strong relationships</span>
        </h2>
        <p className="text-lg text-[#4a4a4a] text-center mb-20 max-w-3xl mx-auto">
          Our management capabilities, together with our extensive relationships with producers and suppliers, allow us to offer our clients comprehensive and full-service solutions.
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
