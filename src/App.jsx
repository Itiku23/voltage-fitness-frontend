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
      <nav className="border-b border-gray-800 px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-green-500">
            Voltage Fitness
          </h1>

          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            Book Session
          </a>
        </div>

        {/* NAV LINKS */}
        <ul className="flex justify-center gap-3 mt-4 text-sm">
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
      </nav>

      {/* HERO */}
      <section id="home" className="px-4 sm:px-8 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6">
              Train Hard.{" "}
              <span className="text-green-500">Stay Strong.</span>
            </h2>

            <p className="text-gray-300 mb-8">
              Personal training, strength programs, and fitness coaching
              built for real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-green-600 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
              >
                Get Started
              </a>

              <a
                href="#programs"
                className="bg-gray-900 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
              >
                View Programs
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="Fitness"
            className="rounded-3xl h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-4 sm:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h3>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Personal Training",
              text: "One-on-one coaching focused on strength and discipline.",
              img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            },
            {
              title: "Online Coaching",
              text: "Train anywhere with structured programs and accountability.",
              img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            },
            {
              title: "Athlete Conditioning",
              text: "Performance-based training for athletes.",
              img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm mb-6">
                  {item.text}
                </p>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="
