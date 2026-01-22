import React from "react";

export default function AthleteConditioning() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Athlete Conditioning"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 p-6 pb-12 max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Athlete Conditioning
          </h1>

          <p className="text-gray-200">
            High-performance conditioning for athletes who compete,
            not just train.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-500">
          Built for Competitive Athletes
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>✔ Speed, power & endurance development</li>
          <li>✔ Sport-specific conditioning</li>
          <li>✔ Injury prevention & recovery focus</li>
          <li>✔ Mental toughness & discipline training</li>
        </ul>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2349131101149"
            className="flex-1 text-center bg-green-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Apply via WhatsApp
          </a>

          <a
            href="https://calendly.com/itikup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-green-500 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition"
          >
            Performance Call
          </a>
        </div>
      </section>
    </div>
  );
}
