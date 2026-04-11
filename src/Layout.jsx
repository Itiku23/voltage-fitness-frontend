import { Outlet } from "react-router-dom";
import AnimatedNavbar from "./components/AnimatedNavbar";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Layout() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      <AnimatedNavbar />

      {/* ✅ ADD THIS */}
      <WhatsAppButton />

      <main className="flex-1 pt-28 md:pt-24">
        <Outlet />
      </main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2025 Voltage Fitness
      </footer>
    </div>
  );
}