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
      <nav className="border-b border-gray-800 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-green-500">
            Voltage Fitness
          </h1>

          <Link
            to="/book-session"
            className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold"
          >
            Book Session
          </Link>
        </div>

        <ul className="flex justify-center gap-3 mt-4 text-sm">
          <li>
            <Link to="/" className="px-4 py-2 bg-gray-900 rounded-full">
              Home
            </Link>
          </li>
          <li>
            <a href="#programs" className="px-4 py-2 bg-gray-900 rounded-full">
              Programs
            </a>
          </li>
          <li>
            <a href="#about" className="px-4 py-2 bg-gray-900 rounded-full">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          High-Performance Training for
          <span className="text-green-500"> Disciplined Athletes</span>
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Performance athlete & discipline-focused trainer helping serious
          individuals build strength, structure, and mental toughness —
          in and out of sport.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/online-coaching"
            className="bg-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Start Online Coaching
          </Link>

          <Link
            to="/athlete-conditioning"
            className="border border-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-600 hover:text-black transition"
          >
            Athlete Conditioning
          </Link>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="px-6 py-16 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-10">
          Who This Is For
        </h3>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-gray-300">
          <p>✔ Combat sport athletes (Taekwondo, Boxing, MMA)</p>
          <p>✔ Field & court athletes</p>
          <p>✔ Competitive individuals preparing for events</p>
          <p>✔ People who value discipline & structure</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-14">
          Training Programs
        </h3>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* PERSONAL */}
          <ProgramCard
            title="Personal Training"
            desc="One-on-one coaching built around strength, discipline, and results."
            img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            link="/personal-training"
          />

          {/* ONLINE */}
          <ProgramCard
            title="Online Coaching"
            desc="Structured remote training with accountability and support."
            img="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            link="/online-coaching"
          />

          {/* ATHLETE */}
          <ProgramCard
            title="Athlete Conditioning"
            desc="High-performance conditioning for competitive athletes."
            img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            link="/athlete-conditioning"
          />
        </div>
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
