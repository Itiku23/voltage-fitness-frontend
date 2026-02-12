import { Outlet } from "react-router-dom";
import AnimatedNavbar from "./components/AnimatedNavbar";

export default function Layout() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      {/* NEW ANIMATED NAVBAR */}
      <AnimatedNavbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2025 Voltage Fitness
      </footer>
    </div>
  );
}