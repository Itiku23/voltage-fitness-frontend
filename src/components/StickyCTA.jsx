import { Link } from "react-router-dom";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black border-t border-gray-800 px-4 py-3 flex gap-3">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/2349131101149"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black border-t border-gray-800 px-4 py-3 flex gap-3"
      >
        WhatsApp
      </a>

      {/* BOOK SESSION */}
      <Link
        to="/book-session"
        className="flex-1 text-center border border-green-500 py-3 rounded-xl font-bold text-white"
      >
        Book
      </Link>

    </div>
  );
}