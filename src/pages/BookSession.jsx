import React from "react";

export default function BookSession() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Book a Session
        </h1>

        <p className="text-gray-400 text-lg">
          Let’s assess your goals, training background, and discipline level
          to determine the best program for you.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* ONLINE */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Online Coaching Call
          </h2>

          <p className="text-gray-400 mb-6">
            Perfect for athletes or individuals training remotely who want
            structure, accountability, and expert guidance.
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Goal & lifestyle assessment</li>
            <li>✔ Program explanation</li>
            <li>✔ Expectations & discipline standards</li>
          </ul>

          <a
            href="https://calendly.com/itikup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-600 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Book Online Session
          </a>
        </div>

        {/* IN-PERSON / DIRECT */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Direct Consultation
          </h2>

          <p className="text-gray-400 mb-6">
            Best for local clients, athletes preparing for competition,
            or anyone who prefers direct communication.
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Training history review</li>
            <li>✔ Performance expectations</li>
            <li>✔ Program placement</li>
          </ul>

          <a
            href="https://wa.me/2349131101149"
            className="block text-center border border-green-600 py-4 rounded-xl font-bold hover:bg-green-600 hover:text-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="text-center px-6 pb-16">
        <p className="text-gray-500 text-sm">
          Serious clients only. Discipline, consistency, and commitment required.
        </p>
      </section>
    </div>
  );
}
