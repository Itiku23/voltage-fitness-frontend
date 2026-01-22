import React from "react";

export default function PersonalTraining() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          alt="Personal Training"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 p-6 pb-14 max-w-xl">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-500 text-black font-semibold">
            1-on-1 Coaching
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Personal Training
          </h1>

          <p className="text-gray-200 text-lg">
            One-on-one coaching designed to build strength, burn fat, and
            develop discipline that lasts a lifetime.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Who This Is For
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✔ Beginners who want real structure</li>
              <li>✔ Busy professionals who need accountability</li>
              <li>✔ Athletes rebuilding strength & discipline</li>
              <li>✔ Anyone tired of random workouts</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-500">
              What You Get
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✔ Fully customized training plan</li>
              <li>✔ Fat loss & muscle development focus</li>
              <li>✔ Progress tracking & performance reviews</li>
              <li>✔ Discipline-driven coaching mindset</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gray-950 border border-gray-800 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start?
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation or chat directly to see
            if personal training is right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <a
              href="https://wa.me/2349131101149"
              className="flex-1 bg-green-500 text-black py-4 rounded-xl font-bold text-lg hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="https://calendly.com/itikup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-green-500 py-4 rounded-xl font-bold text-lg hover:bg-green-500 hover:text-black transition"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
