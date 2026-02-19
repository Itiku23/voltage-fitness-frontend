import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white animate-fade-in">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero-training.jpg"
          alt="High Performance Training"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <Reveal>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              High-Performance Training for
              <span className="text-green-500"> Disciplined Individuals</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-10">
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
      <section id="programs" className="px-6 py-24 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-14">
          Training Programs
        </h3>

        <Reveal delay={0.2}>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

            <ProgramCard
              title="Personal Training"
              desc="One-on-one coaching built around strength, discipline, and results."
              link="/personal-training"
            />

            <ProgramCard
              title="Online Coaching"
              desc="Structured remote training with accountability and support."
              link="/online-coaching"
            />

            <ProgramCard
              title="Athlete Conditioning"
              desc="High-performance conditioning for competitive athletes."
              link="/athlete-conditioning"
            />

          </div>
        </Reveal>
      </section>

      {/* ABOUT PREVIEW */}
      <section
        id="about"
        className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >

        <Reveal delay={0.3}>
          <div>
            <h3 className="text-3xl font-bold mb-6">
              About the Coach
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Performance athlete & discipline-focused trainer helping serious
              individuals build strength, structure, and elite-level discipline.
              Training here is built on accountability, progression, and mental
              resilience — not guesswork.
            </p>

            <Link
              to="/about"
              className="inline-block bg-green-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Learn More
            </Link>
          </div>
        </Reveal>

        <img
          src="/coach.jpg"
          alt="Coach"
          className="rounded-3xl object-cover w-full h-[420px]"
        />

      </section>

    </div>
  );
}

/* ---------- CARD COMPONENT ---------- */

function ProgramCard({ title, desc, link }) {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:scale-105 transition">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400 mb-6">{desc}</p>

      <Link
        to={link}
        className="inline-block bg-green-600 px-6 py-3 rounded-full font-semibold"
      >
        View Program
      </Link>
    </div>
  );
}