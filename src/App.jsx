import React from "react";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(
        "https://voltage-fitness-backend-1.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Server error. Try again.");
      }
    } catch {
      alert("Backend not connected.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-gray-800">
        <h1 className="text-lg font-bold text-green-500">Voltage Fitness</h1>

        <ul className="hidden sm:flex gap-4 text-sm">
          {["Home", "About", "Programs", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full bg-gray-900 hover:bg-green-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm"
        >
          Book Session
        </a>
      </nav>

      {/* HERO — MOBILE FIRST */}
      <section
        id="home"
        className="relative px-4 pt-14 pb-24 sm:px-8"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div className="text-center md:text-left z-10">
            <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
              Train Hard. <span className="text-green-500">Stay Strong.</span>
            </h2>

            <p className="text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              Personal training, strength programs, and fitness coaching built
              for real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 py-4 rounded-full font-semibold text-center transition-transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#programs"
                className="bg-gray-900 hover:bg-gray-800 py-4 rounded-full font-semibold text-center transition-transform hover:scale-105"
              >
                View Programs
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              alt="Fitness"
              className="rounded-3xl object-cover w-full h-[420px] shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-4 sm:px-8 py-20">
        <div className="max-w-5xl mx-auto bg-gray-950 rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Coach"
            className="rounded-2xl object-cover w-full h-[320px]"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">About the Creator</h3>
            <p className="text-green-400 mb-4 font-medium">
              Fitness-focused Creator & Performance Athlete
            </p>
            <p className="text-gray-300 leading-relaxed">
              I help fitness, lifestyle, and wellness brands connect with their
              audience through authentic, high-quality content. Discipline,
              structure, and results define everything I build.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-4 sm:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-16">
          What We Offer
        </h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Personal Training",
              text: "One-on-one coaching focused on strength, fat loss, and discipline.",
              img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            },
            {
              title: "Online Coaching",
              text: "Train anywhere with structured programs and accountability.",
              img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            },
            {
              title: "Athlete Conditioning",
              text: "Performance-based training for fighters and athletes.",
              img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-950 rounded-3xl overflow-hidden border border-gray-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-6">{item.text}</p>

                <div className="flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="bg-green-600 hover:bg-green-700 py-3 rounded-full text-sm font-semibold text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 py-3 rounded-full text-sm font-semibold text-center"
                  >
                    View Programs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-4 sm:px-8 py-24"
      >
        <div className="max-w-4xl mx-auto bg-gray-950 rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Let’s Work Together
          </h3>
          <p className="text-gray-300 mb-10">
            Interested in personal training, coaching, or collaboration?
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 bg-black border border-gray-700 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 bg-black border border-gray-700 rounded-l
