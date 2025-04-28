import React from "react";
import { Users2, MessageSquare, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mast } from "@/components/layout/Mast";

const features = [
  {
    icon: MessageSquare,
    title: "Chat 24/7 met onze professionals",
    description:
      "Financiële vragen kunnen op elk moment ontstaan. Ervaren coaches staan klaar om je te helpen. Je krijgt advies en concrete handvatten om weer grip te krijgen op je geldzaken. Twijfel niet langer – stel je vraag en krijg de ondersteuning die je nodig hebt."
  },
  {
    icon: LayoutDashboard,
    title: "Persoonlijk dashboard",
    description:
      "Nooit meer het overzicht kwijt! Maak je inkomsten, uitgaven, spaardoelen en schulden inzichtelijk in je persoonlijke dashboard om weloverwogen beslissingen te nemen. Het kasboek biedt extra ondersteuning door je uitgaven gedetailleerd bij te houden, zodat je altijd precies weet waar je staat."
  },
  {
    icon: Users2,
    title: "Samen sterker",
    description:
      "Als geld zorgen geeft, zijn wij er om mee te denken. In de community vind je herkenning, steun en praktische tips van mensen die begrijpen wat jij doormaakt. Deel (anoniem) je verhaal, lees mee of stel vragen – op een veilige plek. Samen zetten we stappen richting financiële rust."
  }
];

export const Features = () => {
  return (
    <section className="w-full px-4 sm:px-0 py-12 md:py-20">
      <Mast>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 bg-[#F2F1EB] rounded-2xl py-12 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto w-full text-center">
            <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase md:whitespace-nowrap text-center w-full">
              WAAROM KIES JE VOOR ONS?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 border border-text/10 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-text flex items-center justify-center mb-4 shadow-lg shadow-[#6D5656]/10">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading mb-2 text-[#6D5656] leading-[1.1] uppercase">
                  {feature.title}
                </h3>
                <p className="text-text/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg">
              Word nu lid!
            </Button>
          </div>
        </div>
      </Mast>
    </section>
  );
};
