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

const res = await fetch("https://voltage-fitness-backend.onrender.com/api/contact", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

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
    <div className="min-h-screen bg-black text-white px-4 sm:px-8">
      {/* NAVBAR */}
      <nav className="flex flex-wrap items-center justify-between py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-green-500">Voltage Fitness</h1>

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
          className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm"
        >
          Book Session
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 sm:py-28"
      >
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Train Hard. <span className="text-green-500">Stay Strong.</span>
          </h2>

          <p className="text-gray-300 max-w-xl mb-10">
            Personal training, strength programs, and fitness coaching built for
            real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold">
              Get Started
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-full font-semibold">
              View Programs
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="Fitness training"
          className="rounded-2xl object-cover w-full h-[350px]"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-950 p-8 sm:p-12 rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Coach"
            className="rounded-xl object-cover w-full h-[300px]"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About the Creator
            </h2>

            <p className="text-green-400 mb-4 font-medium">
              Fitness-focused Creator & Performance Athlete
            </p>

            <p className="text-gray-300 leading-relaxed">
              I help fitness, lifestyle, and wellness brands connect with their
              audience through authentic, high-quality content. My background as
              an athlete brings discipline, consistency, and intent into every
              program I build.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20">
        <h3 className="text-3xl font-bold text-center mb-14">
          What We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
  title: "Personal Training",
  text: "One-on-one coaching focused on strength, fat loss, and discipline.",
  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
},
,
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
              className="bg-gray-950 rounded-2xl border border-gray-800 hover:border-green-500 transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-300 mb-6 text-sm">
                  {item.text}
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-full text-sm font-semibold">
                    Get Started
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-full text-sm font-semibold">
                    View Programs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-gray-950 rounded-2xl max-w-4xl mx-auto"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 mb-10">
            Interested in personal training, coaching, or collaboration?
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Brand / Name"
              className="w-full p-4 bg-black border border-gray-700 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-4 bg-black border border-gray-700 rounded-lg"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project"
              className="w-full p-4 bg-black border border-gray-700 rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-black py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-8">
        © 2025 Voltage Fitness. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
