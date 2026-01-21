import React from "react";

export default function BookSession() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Book a Session
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Schedule a 30-minute consultation and let’s get started.
        </p>

        {/* CALENDLY EMBED */}
        <div className="w-full h-[750px] rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            src="https://calendly.com/itikup/30min"
            className="w-full h-full"
            frameBorder="0"
            title="Calendly Booking"
          />
        </div>
      </div>
    </div>
  );
}
