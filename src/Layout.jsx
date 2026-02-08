import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <h1 className="text-xl font-bold text-green-500">
            Voltage Fitness
          </h1>

          {/* NAV LINKS */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-green-500">

                Home
              </Link>
            </li>
            <li>
  <Link to="/about" className="hover:text-green-500">
    About
  </Link>
</li>
            <li>
              <a href="#programs" className="hover:text-green-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA */}
          <Link
            to="/book-session"
            className="bg-green-600 px-5 py-2 rounded-full text-sm font-semibold pop-lg
"
          >
            Book Session
          </Link>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2025 Voltage Fitness
      </footer>
    </div>
  );
}
