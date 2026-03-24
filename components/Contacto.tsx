"use client";

import { useState } from "react";

type Estado = "idle" | "enviando" | "ok" | "error";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState<Estado>("idle");

  function manejarCambio(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  async function manejarEnvio(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });
      if (!res.ok) throw new Error();
      setEstado("ok");
      setFormulario({ nombre: "", empresa: "", email: "", mensaje: "" });
    } catch {
      setEstado("error");
    }
  }

  return (
    <section id="contacto" className="bg-[#f7f4ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Label */}
        <span className="inline-block mb-10 text-xs font-semibold tracking-[0.25em] uppercase text-[#2d6a4f] border border-[#2d6a4f] px-4 py-1.5 rounded-full">
          Get in touch
        </span>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] mb-14 tracking-tight max-w-xl">
          Let&apos;s talk about your<br />
          <span className="text-[#2d6a4f]">next operation</span>
        </h2>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">

          {/* Left column — floating form */}
          <form
            onSubmit={manejarEnvio}
            className="bg-white rounded-2xl shadow-xl shadow-[#1a3a2a]/10 p-8 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#4a4a4a]">
                  Name
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Your name"
                  className="bg-[#f7f4ef] border border-[#e0d8cc] rounded-lg px-4 py-3 text-sm text-[#1c1c1c] placeholder-[#b0a898] focus:outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 transition-all duration-200"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#4a4a4a]">
                  Company
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formulario.empresa}
                  onChange={manejarCambio}
                  placeholder="Your company"
                  className="bg-[#f7f4ef] border border-[#e0d8cc] rounded-lg px-4 py-3 text-sm text-[#1c1c1c] placeholder-[#b0a898] focus:outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-[#4a4a4a]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                placeholder="yourname@company.com"
                className="bg-[#f7f4ef] border border-[#e0d8cc] rounded-lg px-4 py-3 text-sm text-[#1c1c1c] placeholder-[#b0a898] focus:outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 transition-all duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-[#4a4a4a]">
                Message
              </label>
              <textarea
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Tell us about your enquiry or requirement..."
                rows={5}
                className="bg-[#f7f4ef] border border-[#e0d8cc] rounded-lg px-4 py-3 text-sm text-[#1c1c1c] placeholder-[#b0a898] focus:outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 transition-all duration-200 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="self-start bg-[#1a3a2a] text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-[#2d6a4f] transition-colors duration-200 shadow-md shadow-[#1a3a2a]/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {estado === "enviando" ? "Sending..." : "Send message"}
            </button>

            {estado === "ok" && (
              <p className="text-sm text-[#2d6a4f] font-medium">
                ✓ Message sent — we&apos;ll be in touch shortly.
              </p>
            )}
            {estado === "error" && (
              <p className="text-sm text-red-600 font-medium">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          {/* Right column — contact info + map */}
          <div className="flex flex-col gap-4 h-full">

            {/* Map */}
            <div className="w-full flex-1 min-h-52 rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9!2d-58.3796!3d-34.6033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac8019e7b11%3A0x0!2sAv.+Roque+S%C3%A1enz+Pe%C3%B1a+943%2C+Buenos+Aires!5e0!3m2!1sen!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "208px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Viagro office location"
              />
            </div>

            {/* 3 floating contact cards */}
            {[
              { etiqueta: "Email", valor: "comercial@viagro.uk", icono: "✉" },
              { etiqueta: "Phone", valor: "+598 96 542 526", icono: "✆" },
              { etiqueta: "Location", valor: "Av Roque Saenz Peña 943, Floor 8, CABA", icono: "⊕" },
            ].map((item) => (
              <div
                key={item.etiqueta}
                className="bg-white border border-[#e0d8cc] rounded-xl px-5 py-4 flex items-center gap-4 hover:border-[#2d6a4f] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#1a3a2a]/10 transition-all duration-200 shadow-sm"
              >
                <span className="text-[#2d6a4f] text-lg w-8 text-center flex-shrink-0">
                  {item.icono}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#7c5c3b]">
                    {item.etiqueta}
                  </span>
                  <span className="text-sm text-[#1c1c1c]">{item.valor}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
