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

        <div className="relative z-10 p-6 pb-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Personal Training
          </h1>

          <p className="text-gray-200 text-lg">
            One-on-one coaching built around discipline, structure,
            and real results — no shortcuts, no guesswork.
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
            <li>✔ Individuals serious about strength & fitness</li>
            <li>✔ Beginners who want proper foundations</li>
            <li>✔ Clients tired of random workouts</li>
            <li>✔ People who value discipline & structure</li>
          </ul>
        </div>

        {/* WHAT YOU GET */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            What You Get
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <li>✔ Personalized training programs</li>
            <li>✔ Proper technique & form correction</li>
            <li>✔ Strength & conditioning progression</li>
            <li>✔ Accountability & coaching support</li>
          </ul>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-green-500">
            How It Works
          </h2>

          <ol className="space-y-4 text-gray-300 list-decimal list-inside">
            <li>Initial assessment & goal setting</li>
            <li>Customized training plan</li>
            <li>Structured training sessions</li>
            <li>Progress tracking & adjustments</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2349131101149"
            className="flex-1 text-center bg-green-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Start Personal Training
          </a>

          <a
            href="https://calendly.com/itikup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-green-500 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
