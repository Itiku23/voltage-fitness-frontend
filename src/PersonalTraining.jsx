export default function PersonalTraining() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Personal Training
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        One-on-one sessions focused on strength, discipline,
        body recomposition, and confidence.
      </p>

      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="rounded-2xl mx-auto mb-10 max-w-md"
      />

      <a
        href="https://wa.me/234XXXXXXXXXX"
        className="inline-block bg-green-600 px-8 py-4 rounded-full font-semibold"
      >
        Book on WhatsApp
      </a>
    </div>
  );
}
