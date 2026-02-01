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
            High-performance training for athletes who demand
            speed, power, durability, and mental toughness.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        {/* WHO THIS IS FOR */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            Who This Is For
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <li>✔ Combat sport athletes (Taekwondo, Boxing, MMA)</li>
            <li>✔ Field & court athletes</li>
            <li>✔ Competitive individuals preparing for events</li>
            <li>✔ Athletes who value discipline & structure</li>
          </ul>
        </div>

        {/* TRAINING FOCUS */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            Training Focus
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <li>✔ Speed, power & explosive strength</li>
            <li>✔ Conditioning & energy system development</li>
            <li>✔ Injury prevention & durability</li>
            <li>✔ Mental toughness & discipline</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2349131101149"
            className="flex-1 text-center bg-green-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="https://calendly.com/itikup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-green-500 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition"
          >
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
}
