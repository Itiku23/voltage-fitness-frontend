import React from "react";

export default function OnlineCoaching() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
          alt="Online Coaching"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 p-6 pb-12 max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Online Coaching
          </h1>

          <p className="text-gray-200">
            Train anywhere with structured programs, accountability,
            and expert guidance — no gym required.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-500">
          What’s Included
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>✔ Personalized workout plans</li>
          <li>✔ Weekly progress check-ins</li>
          <li>✔ Nutrition & lifestyle guidance</li>
          <li>✔ Flexible training anywhere</li>
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
