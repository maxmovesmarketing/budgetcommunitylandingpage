import React from "react";
import { motion } from "framer-motion";
import { Mast } from "@/components/layout/Mast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat is The Budget Community en voor wie is het bedoeld?",
    answer: "The Budget Community is een veilige, anonieme plek waar iedereen die meer grip wil krijgen op geld welkom is. Je kunt ervaringen, tips en vragen delen of gewoon meelezen. Zowel starters als ervaren budgetteerders zijn welkom."
  },
  {
    question: "Hoe werkt het lidmaatschap en wat kost het?",
    answer: "Je kiest tussen 3 maanden toegang (€60,- introductieprijs, daarna €75,-) of 6 maanden toegang (€100,- introductieprijs, daarna €125,-). Je kunt op elk moment opzeggen. Er zijn geen verborgen kosten en iedereen kan lid worden, ongeacht ervaring."
  },
  {
    question: "Is de community echt anoniem en veilig?",
    answer: "Ja, je kiest zelf je gebruikersnaam en hoeft geen persoonlijke gegevens te delen. Jouw gegevens worden nooit gedeeld met derden en privacy staat centraal."
  },
  {
    question: "Wat kan ik doen in de community?",
    answer: "Je kunt ervaringen delen, vragen stellen, tips lezen, meedoen aan challenges en gebruik maken van tools zoals het dashboard en kasboek."
  },
  {
    question: "Hoe werkt het dashboard en kasboek?",
    answer: "Het dashboard geeft je overzicht over je inkomsten en uitgaven. Het kasboek helpt je om eenvoudig je geldstromen bij te houden."
  },
  {
    question: "Kan ik anoniem vragen stellen en alleen meelezen?",
    answer: "Ja, je kunt altijd (anoniem) een vraag stellen en volledig anoniem meelezen. Reageren of actief deelnemen is nooit verplicht."
  }
];

export const FAQ = () => {
  return (
    <section className="w-full px-4 sm:px-0">
      <Mast>
        <div className="flex flex-col gap-8 py-20 lg:py-32 items-center justify-center">
          <div>
            <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase text-center">
              Veelgestelde vragen
            </h2>
          </div>
          <motion.div 
            className="w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-[#6D5656] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6D5656]/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Mast>
    </section>
  );
};
