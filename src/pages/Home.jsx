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
              image="/personal-training.jpg"
            />

            <ProgramCard
              title="Online Coaching"
              desc="Structured remote training with accountability and support."
              link="/online-coaching"
              image="/online-coaching.jpg"
            />

            <ProgramCard
              title="Athlete Conditioning"
              desc="High-performance conditioning for competitive athletes."
              link="/athlete-conditioning"
              image="/athlete-conditioning.jpg"
            />

          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 bg-black">
        <h3 className="text-3xl font-bold text-center mb-14">
          Athlete Results & Client Feedback
        </h3>

        <Reveal delay={0.25}>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <TestimonialCard
              quote="My speed and conditioning improved massively in 8 weeks. Training structure was elite."
              name="Combat Athlete"
            />

            <TestimonialCard
              quote="I stopped guessing in the gym. Every session had purpose and progression."
              name="Field Sport Athlete"
            />

            <TestimonialCard
              quote="Discipline and accountability changed everything — not just my fitness."
              name="Online Coaching Client"
            />

          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <Reveal delay={0.3}>
          <div>
            <h3 className="text-3xl font-bold mb-6">
              About the Coach
            </h3>

            <p className="text-gray-400 mb-8">
              Performance athlete & discipline-focused trainer helping serious
              individuals build strength, structure, and elite-level discipline.
            </p>

            <Link
              to="/about"
              className="bg-green-600 px-6 py-3 rounded-full font-semibold"
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

/* ---------- PROGRAM CARD (UPDATED WITH IMAGE) ---------- */
function ProgramCard({ title, desc, link, image }) {
  return (
    <Link to={link} className="group block">
      <div className="relative h-72 rounded-2xl overflow-hidden border border-gray-800">

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

        {/* CONTENT */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-300 text-sm mb-4">{desc}</p>

          <span className="text-green-500 font-semibold">
            View Program →
          </span>
        </div>

      </div>
    </Link>
  );
}

/* ---------- TESTIMONIAL CARD ---------- */
function TestimonialCard({ quote, name }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition duration-300">
      <p className="text-gray-300 mb-6 italic">
        “{quote}”
      </p>
      <p className="text-green-500 font-semibold">
        — {name}
      </p>
    </div>
  );
}