import React from "react"
import { motion } from "framer-motion"
import { UserPlus, ClipboardList, CalendarCheck2, Users, Trophy } from "lucide-react"
import { Mast } from "@/components/layout/Mast"

type Step = {
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    title: "Kies je lidmaatschap",
    description: "Selecteer het lidmaatschap dat bij jou past en word direct onderdeel van The Budget Community.",
    icon: <UserPlus className="w-6 h-6" />,
  },
  {
    title: "Vul het budgetplan in",
    description: "Maak eenvoudig je persoonlijke budgetplan aan. Zo krijg je direct inzicht in je inkomsten en uitgaven.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Plan een budgetgesprek",
    description: "Plan een gesprek met een budgetcoach voor persoonlijke tips en antwoorden op je vragen.",
    icon: <CalendarCheck2 className="w-6 h-6" />,
  },
  {
    title: "Leer van leden",
    description: "Ontdek inspirerende verhalen, tips en ervaringen van andere leden in de community.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Deel je ervaringen",
    description: "Vier je successen en help anderen door jouw ervaringen en tips te delen in de community.",
    icon: <Trophy className="w-6 h-6" />,
  },
]

export const Roadmap = () => {
  return (
    <section className="w-full px-4 sm:px-0">
      <Mast>
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase">
              The Budget Community Roadmap
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto w-full">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#6D5656]/20" />
            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${index === steps.length - 1 ? "pb-0" : "pb-24"}`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      <div className="bg-white/50 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold text-[#6D5656] mb-2">{step.title}</h3>
                        <p className="text-base text-[#6D5656]/80">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#6D5656] text-white flex items-center justify-center shadow-sm">
                      {step.icon}
                    </div>
                  </motion.div>
                  {/* Empty div for spacing */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Mast>
    </section>
  )
}
