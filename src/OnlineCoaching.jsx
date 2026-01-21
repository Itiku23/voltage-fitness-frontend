export default function OnlineCoaching() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Online Coaching
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Remote programs with weekly check-ins,
        progress tracking, and accountability.
      </p>

      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
        className="rounded-2xl mx-auto mb-10 max-w-md"
      />

      <a
        href="https://calendly.com/"
        className="inline-block bg-green-600 px-8 py-4 rounded-full font-semibold"
      >
        Schedule a Call
      </a>
    </div>
  );
}
