import React, { useEffect } from "react";

export default function BookSession() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Book a Session
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Schedule a 30-minute consultation and let’s get started.
        </p>

        {/* CALENDLY INLINE EMBED */}
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-gray-800"
          data-url="https://calendly.com/itikup/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "750px" }}
        />
      </div>
    </div>
  );
}
