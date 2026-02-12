import { useState } from "react"
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
    <div className="fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-black/70 border border-gray-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                isActive
                  ? "text-green-500"
                  : "text-gray-400 hover:text-green-400"
              }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 bg-green-500/10 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}