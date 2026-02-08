import { Link } from "react-router-dom";

export default function AboutSection({ showCTA = true }) {
  return (
    <section
      id="about"
      className="px-6 py-24 max-w-5xl mx-auto text-center animate-fade-in"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        Built on Discipline. Powered by Performance.
      </h3>

      <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Voltage Fitness is not a casual gym brand. It is built for individuals
        who respect structure, consistency, and personal accountability.
        Every program is designed with purpose — to build strength, resilience,
        and mental toughness that transfers beyond training.
      </p>

      {showCTA && (
        <Link
          to="/about"
          className="inline-block bg-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Learn More About Me
        </Link>
      )}
    </section>
  );
}
