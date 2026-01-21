import React from "react";

export default function PersonalTraining() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          alt="Personal Training"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 p-6 pb-12 max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Personal Training
          </h1>

          <p className="text-gray-200">
            One-on-one coaching designed to build strength,
            burn fat, and create discipline that lasts.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-500">
          What You Get
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>✔ Customized training programs</li>
          <li>✔ Fat loss & strength focus</li>
          <li>✔ Accountability & progress tracking</li>
          <li>✔ Athlete-level discipline</li>
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
