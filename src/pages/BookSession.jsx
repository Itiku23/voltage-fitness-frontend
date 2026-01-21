import React from "react";

export default function BookSession() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        Book a Session
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
        <iframe
          src="https://calendly.com/itikup/30min"
          width="100%"
          height="700"
          frameBorder="0"
          title="Book Session"
        />
      </div>
    </div>
  );
}
