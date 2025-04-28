import React from "react";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mast } from "@/components/layout/Mast";

const problemPoints = [
  "‘’Sparen?! Ik ben al blij als ik rondkom.‘’",
  "Ik weet niet meer waar mijn geld blijft aan het eind van de maand.",
  "Het voelt alsof ik constant achter de feiten aanloop.",
  "Ik schaam me om hulp te vragen, maar ik red het gewoon niet meer alleen.",
  "Elke keer als ik denk dat ik grip heb, komt er weer iets onverwachts.",
  "Ik weet dat ik iets moet doen, maar ik weet niet waar ik moet beginnen.",
  "Ik heb het gevoel dat ik faal als ik mijn geld niet op orde heb.",
  "Ik wil het zo graag beter doen, ook voor mijn kinderen."
];

const benefits = [
  "Ik dacht dat ik nooit zou kunnen sparen, maar nu lukt het gewoon.",
  "Voor het eerst in jaren weet ik precies waar ik financieel sta.",
  "De community gaf me meer dan tips – het gaf me hoop én een nieuwe start.",
  "Ik schaam me niet meer – ik ben juist trots op de stappen die ik zet.",
  "Ik heb eindelijk grip op mijn geld – en dat voelt zó goed.",
  "Elke keer als ik twijfel, weet ik dat ik terechtkan bij de community.",
  "Het kasboek en dashboard geven me overzicht en rust.",
  "Mijn kinderen hoeven niet dezelfde zorgen te hebben als ik had. De cirkel stopt bij mij.",
  "Dankzij de community durf ik weer vooruit te kijken."
];

export const TimeForChange = () => {
  return (
    <div className="w-screen">
      <Mast>
        <section className="w-full px-4 sm:px-0">
          <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase">
                Tijd voor verandering..
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm space-y-6"
              >
                <ul className="space-y-6">
                  {problemPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center shadow-sm">
                        <X className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-text/90 text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm space-y-6"
              >
                <ul className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shadow-sm">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-text/90 text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="w-full max-w-6xl flex justify-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="orange">
                  Yes! Ik doe mee
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Mast>
    </div>
  );
};
