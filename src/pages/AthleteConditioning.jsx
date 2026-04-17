import React from "react";
import athleteImg from "../assets/athlete-conditioning.jpg";

export default function AthleteConditioning() {
  return (
    <div className="bg-black text-white min-h-screen animate-fade-in">
      
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src={athleteImg}
          alt="Athlete Conditioning"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 p-6 pb-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Athlete Conditioning
          </h1>

          <p className="text-gray-200 text-lg">
            High-performance conditioning for competitive athletes who demand
            speed, power, resilience, and mental toughness.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        
        {/* WHO THIS IS FOR */}
        <div className="mb-16">
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
        <div className="mb-16">
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

        {/* HOW IT WORKS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            How It Works
          </h2>

          <ol className="space-y-4 text-gray-300 list-decimal list-inside">
            <li>Performance assessment & goal setting</li>
            <li>Sport-specific conditioning plan</li>
            <li>Progressive overload & monitoring</li>
            <li>Consistent feedback & program adjustments</li>
          </ol>
        </div>

{/* PRICING */}
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-6 text-green-500">
    Pricing
  </h2>

  <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
    <p className="text-3xl font-extrabold mb-4">
      ₦50,000 <span className="text-sm text-gray-400">/month</span>
    </p>

    <ul className="space-y-3 text-gray-300 mb-6">
      <li>✔ Sport-specific conditioning</li>
      <li>✔ Speed & power development</li>
      <li>✔ Injury prevention</li>
      <li>✔ Competition prep</li>
    </ul>
  </div>
</section>

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
            Book Assessment
          </a>
        </div>
      </section>

    </div>
  );
}