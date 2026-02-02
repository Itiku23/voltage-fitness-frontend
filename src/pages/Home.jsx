import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          High-Performance Training for
          <span className="text-green-500"> Disciplined Individuals</span>
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

      {/* PROGRAMS */}
      <section id="programs" className="px-6 py-20 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-14">
          Training Programs
        </h3>

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
      </section>
    </div>
  );
}

function ProgramCard({ title, desc, link }) {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 text-center">
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
