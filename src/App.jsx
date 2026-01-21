import BookSession from "./pages/BookSession";
import BookSession from "./pages/BookSession";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PersonalTraining from "./pages/PersonalTraining";
import OnlineCoaching from "./pages/OnlineCoaching";
import AthleteConditioning from "./pages/AthleteConditioning";

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
  className="bg-red-600 px-4 py-2 rounded-full text-sm"
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
            <a href="#contact" className="px-4 py-2 bg-gray-900 rounded-full">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Train Hard. <span className="text-green-500">Stay Strong.</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Real programs. Real results.
        </p>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {/* PERSONAL */}
          <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">
                Personal Training
              </h4>
              <p className="text-gray-400 mb-6">
                One-on-one strength & discipline coaching.
              </p>
              <Link
                to="/personal-training"
                className="block text-center bg-green-600 py-3 rounded-full font-semibold"
              >
                View Program
              </Link>
            </div>
          </div>

          {/* ONLINE */}
          <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">
                Online Coaching
              </h4>
              <p className="text-gray-400 mb-6">
                Train anywhere with structured plans.
              </p>
              <Link
                to="/online-coaching"
                className="block text-center bg-green-600 py-3 rounded-full font-semibold"
              >
                View Program
              </Link>
            </div>
          </div>

          {/* ATHLETE */}
          <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">
                Athlete Conditioning
              </h4>
              <p className="text-gray-400 mb-6">
                Performance-focused training.
              </p>
              <Link
                to="/athlete-conditioning"
                className="block text-center bg-green-600 py-3 rounded-full font-semibold"
              >
                View Program
              </Link>
            </div>
          </div>
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
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/" element={<Home />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/online-coaching" element={<OnlineCoaching />} />
        <Route path="/athlete-conditioning" element={<AthleteConditioning />} />
      </Routes>
    </BrowserRouter>
  );
}
