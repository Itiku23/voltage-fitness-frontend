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
    } catch (err) {
      alert("Backend not connected.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="border-b border-gray-800 px-4 sm:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-green-500">
            Voltage Fitness
          </h1>

          <ul className="flex gap-3 text-sm">
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
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm"
          >
            Book Session
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Train Hard.{" "}
            <span className="text-green-500 block sm:inline">
              Stay Strong.
            </span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 mb-10">
            Personal training, strength programs, and fitness coaching
            built for real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold text-center"
            >
              Get Started
            </a>
            <a
              href="#programs"
              className="bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-full font-semibold text-center"
            >
              View Programs
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="Fitness training"
          className="rounded-2xl w-full h-[360px] object-cover"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto bg-gray-950 rounded-2xl p-8 sm:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Coach"
            className="rounded-xl w-full h-[320px] object-cover"
          />

          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              About the Creator
            </h3>

            <p className="text-green-400 font-medium mb-4">
              Fitness Coach & Performance Athlete
            </p>

            <p className="text-gray-300 leading-relaxed">
              I help individuals and athletes build discipline, strength,
              and confidence through structured training systems designed
              for real-life performance.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 px-4 sm:px-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          What We Offer
        </h3>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Personal Training",
              text:
                "One-on-one coaching focused on strength, fat loss, and discipline.",
              img:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            },
            {
              title: "Online Coaching",
              text:
                "Train anywhere with structured programs and accountability.",
              img:
                "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            },
            {
              title: "Athlete Conditioning",
              text:
                "Performance-based training for fighters and competitive athletes.",
              img:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-300 text-sm mb-6">
                  {item.text}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="bg-green-600 hover:bg-green-700 py-3 rounded-full text-sm font-semibold"
                  >
                    Get Started
                  </a>
                  <a
                    href="#contact"
                    className="bg-gray-800 hover:bg-gray-700 py-3 rounded-full text-sm font-semibold"
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
        className="py-24 px-4 sm:px-10"
      >
        <div className="max-w-4xl mx-auto bg-gray-950 rounded-2xl p-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Work Together
          </h3>

          <p className="text-gray-300 mb-10">
            Interested in personal training, coaching, or collabor
