import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Home, User, Dumbbell, Laptop } from "lucide-react"

export default function AnimatedNavbar() {
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Programs", path: "/personal-training", icon: Dumbbell },
    { name: "Online", path: "/online-coaching", icon: Laptop },
  ]

  return (
    <div className="fixed bottom-6 md:top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center gap-3 bg-black/60 border border-gray-700 backdrop-blur-xl px-2 py-2 rounded-full shadow-2xl">

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            >
              {/* TEXT / ICON */}
              <span className={`hidden md:inline ${
                isActive ? "text-white" : "text-gray-400"
              }`}>
                {item.name}
              </span>

              <span className="md:hidden text-gray-300">
                <Icon size={18} />
              </span>

              {/* ACTIVE BACKGROUND */}
              {isActive && (
                <motion.div
                  layoutId="navHighlight"
                  className="absolute inset-0 rounded-full bg-green-500/20 border border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition bg-green-500/10" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}