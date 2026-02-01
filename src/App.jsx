import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import BookSession from "./pages/BookSession";
import PersonalTraining from "./pages/PersonalTraining";
import OnlineCoaching from "./pages/OnlineCoaching";
import AthleteConditioning from "./pages/AthleteConditioning";

function ProgramCard({ title, desc, img, link }) {
  return (
    <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
      <img src={img} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 mb-6">{desc}</p>

        <Link
          to={link}
          className="block text-center bg-green-600 py-3 rounded-full font-semibold"
        >
          View Program
        </Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-lg font-bold text-green-500">
            Voltage Fitness
          </h1>

          <Link
            to="/book-session"
            className="bg-green-600 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Book Session
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-28 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          High-Performance Training for
          <span className="text-green-500"> Disciplined Individuals</span>
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Performance athlete & discipline-focused trainer helping serious
          individuals build strength, structure, and mental toughness —
          in sport and in life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/online-coaching"
            className="bg-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Start Online Coaching
          </Link>

          <Link
            to="/personal-training"
            className="border border-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-600 hover:text-black transition"
          >
            Personal Training
          </Link>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="px-6 py-20 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-12">
          Who This Is For
        </h3>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-gray-300 text-lg">
          <p>✔ Combat sport athletes (Taekwondo, Boxing, MMA)</p>
          <p>✔ Field & court athletes</p>
          <p>✔ Competitive individuals preparing for events</p>
          <p>✔ People who value discipline & structure</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-14">
          Training Programs
        </h3>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <ProgramCard
            title="Personal Training"
            desc="One-on-one coaching focused on strength, discipline, and real results."
            img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            link="/personal-training"
          />

          <ProgramCard
            title="Online Coaching"
            desc="Structured remote coaching with accountability and progression."
            img="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            link="/online-coaching"
          />

          <ProgramCard
            title="Athlete Conditioning"
            desc="High-performance conditioning for serious competitive athletes."
            img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            link="/athlete-conditioning"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center bg-gray-950">
        <h3 className="text-3xl font-bold mb-6">
          Ready to Train With Structure & Purpose?
        </h3>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Stop guessing. Start training with a clear plan, accountability,
          and discipline that carries over into life.
        </p>

        <Link
          to="/book-session"
          className="inline-block bg-green-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Book Your Session
        </Link>
      </section>

      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 Voltage Fitness
      </footer>
    </div>
  );
}



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/online-coaching" element={<OnlineCoaching />} />
        <Route path="/athlete-conditioning" element={<AthleteConditioning />} />
      </Routes>
    </BrowserRouter>
  );
}
