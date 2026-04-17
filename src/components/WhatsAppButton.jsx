export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349131101149"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition"
    >
      Chat on WhatsApp
    </a>
  );
}