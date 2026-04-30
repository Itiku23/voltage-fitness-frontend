import { useState } from "react"

const testimonials = [
  {
    id: 1,
    quote: "My speed and conditioning improved massively in 8 weeks.",
    author: "Combat Athlete",
    role: "Taekwondo / MMA",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    id: 2,
    quote: "I stopped guessing in the gym. Every session had purpose.",
    author: "Field Athlete",
    role: "Football / Track",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652"
  },
  {
    id: 3,
    quote: "Discipline and accountability changed everything.",
    author: "Online Client",
    role: "Remote Coaching",
    avatar: "https://images.unsplash.com/photo-1671656349218-5218444643d8"
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)

  const handleSelect = (index) => {
    setDisplayedQuote(testimonials[index].quote)
    setDisplayedRole(testimonials[index].role)
    setActiveIndex(index)
  }

  return (
    <section className="py-24 bg-black text-white text-center">
      <h3 className="text-3xl font-bold mb-12">
        Athlete Results & Client Feedback
      </h3>

      {/* QUOTE */}
      <div className="max-w-2xl mx-auto mb-10 px-6">
        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
          “{displayedQuote}”
        </p>
        <p className="text-green-500 mt-4 text-sm uppercase tracking-widest">
          {displayedRole}
        </p>
      </div>

      {/* AVATARS */}
      <div className="flex justify-center gap-4">
        {testimonials.map((t, index) => (
          <button
            key={t.id}
            onClick={() => handleSelect(index)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition ${
              activeIndex === index
                ? "bg-green-500 text-black"
                : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            <img
              src={t.avatar}
              alt={t.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="hidden sm:inline text-sm font-medium">
              {t.author}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}