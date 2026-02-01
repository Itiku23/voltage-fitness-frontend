import React from "react";

export default function OnlineCoaching() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07b"
          alt="Online Coaching"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 p-6 pb-12 max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Online Coaching
          </h1>

          <p className="text-gray-200">
            Structured remote training designed to keep you consistent,
            accountable, and progressing — wherever you train.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        {/* WHAT YOU GET */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            What You Get
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <li>✔ Personalized training programs</li>
            <li>✔ Weekly progress check-ins</li>
            <li>✔ Technique feedback & adjustments</li>
            <li>✔ Nutrition & lifestyle guidance</li>
          </ul>
        </div>

        {/* WHO IT'S FOR */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            Who This Is For
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <li>✔ Busy individuals who need structure</li>
            <li>✔ Athletes training without a coach nearby</li>
            <li>✔ People who want discipline & accountability</li>
            <li>✔ Anyone serious about long-term progress</li>
          </ul>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            How It Works
          </h2>

          <ol className="space-y-4 text-gray-300 list-decimal list-inside">
            <li>Initial consultation & goal setting</li>
            <li>Custom program built around your schedule</li>
            <li>Weekly check-ins & progress tracking</li>
            <li>Ongoing support & program updates</li>
          </ol>
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
