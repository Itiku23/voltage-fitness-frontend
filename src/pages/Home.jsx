import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white animate-fade-in">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="/hero-training.jpg"
          alt="High Performance Training"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <Reveal>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              High-Performance Training for
              <span className="text-green-500"> Disciplined Individuals</span>
            </h2>

            <p className="text-gray-300 text-lg mb-10">
              Performance athlete & discipline-focused coach helping serious
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
          </div>
        </Reveal>
      </section>

      {/* PROGRAMS */}
      <section id="