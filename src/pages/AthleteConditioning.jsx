import React from "react";

export default function AthleteConditioning() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1517960413843-0aee8e2d471c"
          alt="Athlete Conditioning"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-6 pb-12 max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Athlete Conditioning
          </h1>
          <p className="text-gray-200">
            Performance-focused training built for speed,
            power, endurance, and competitive athletes.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-500">
          What You Get
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>✔ Strength & explosive power training</li>
          <li>✔ Speed, agility & conditioning work</li>
          <li>✔ Sport-specific programming</li>
          <li>✔ Elite mindset & discipline development</li>
        </ul>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2349131101149"
            className="flex-1 text-center bg-green-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="#contact"
            className="flex-1 text-center border border-green-500 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition"
          >
            Train as an Athlete
          </a>
        </div>
      </section>
    </div>
  );
}
