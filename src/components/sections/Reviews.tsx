import React, { useEffect, useRef, useState } from "react"
import { Mast } from "@/components/layout/Mast"

const reviews = [
  "Ik dacht altijd dat ik het zelf moest oplossen, maar hier voelde ik me voor het eerst begrepen. Het helpt zó om te praten met mensen die hetzelfde doormaken.",
  "Door het dashboard en kasboek heb ik eindelijk overzicht. Geen stress meer over rekeningen en ik weet nu precies wat er binnenkomt en uitgaat.",
  "Ik was eerst een beetje sceptisch, maar de community is echt een veilige plek. Geen oordeel, gewoon mensen die je snappen en meedenken.",
  "Ik heb zoveel geleerd van anderen hier. Kleine tips, handige tools, maar vooral het gevoel dat ik er niet alleen voor sta. Dat geeft vertrouwen.",
  "Voorheen stopte ik m’n kop in het zand. Nu log ik elke week even in, check m’n kasboek en stel m’n vragen. Het voelt goed om weer grip te hebben.",
  "Wat ik fijn vind is dat je niks hoeft te delen als je dat niet wil. Je kunt gewoon meelezen, maar als je iets vraagt, krijg je altijd steun of een goed advies."
]

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [current])

  return (
    <div className="w-screen bg-[#F2F1EB] flex flex-col items-center justify-center py-12 lg:py-20">
      <Mast>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase">
              Wat Onze Leden Zeggen
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-full max-w-3xl h-40 mt-12 bg-[#F2F1EB] rounded-2xl py-12 px-4 sm:px-8">
            {reviews.map((text, idx) => (
              <div
                key={idx}
                className={`absolute left-0 top-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                aria-hidden={idx !== current}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-[#6D5656] bg-white/70 rounded-lg shadow-sm px-8 py-8 mx-2 select-none transition-all duration-700 animate-fade-in text-center flex items-center justify-center h-full">
                  “{text}”
                </blockquote>
              </div>
            ))}
            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {reviews.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#FF7F50] scale-110' : 'bg-[#FF7F50]/30'}`}
                  aria-label={idx === current ? 'actieve review' : 'andere review'}
                />
              ))}
            </div>
          </div>
        </div>
      </Mast>
    </div>
  )
}

// Animatie fade-in
// In Tailwind config: theme.extend.keyframes.fade-in { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
// theme.extend.animation.fade-in = 'fade-in 0.7s ease-in'
