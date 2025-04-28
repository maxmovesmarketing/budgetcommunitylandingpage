import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mast } from "@/components/layout/Mast";
import { cn } from "@/lib/utils";

type Plan = {
  title: string;
  subtitle: string;
  regularPrice: number;
  introPrice: number;
  duration: number;
  isPopular: boolean;
};

const features = [
  "Persoonlijk financieel dashboard",
  "Genereer jouw persoonlijke budgetplan",
  "Ontvang betalingsherinneringen",
  "De beste bespaartips",
  "Chatten met de community",
  "24/7 chatfunctie met coaches",
  "Toegang tot webinars en gastcolleges",
  "Inspirerende blogs en succesverhalen",
  "Deelname aan challenges en winacties"
];

const plans: Plan[] = [
  {
    title: "3 maanden toegang",
    subtitle: "Voor wie de eerste stappen wil zetten naar financiële rust",
    regularPrice: 75,
    introPrice: 60,
    duration: 3,
    isPopular: false
  },
  {
    title: "6 maanden toegang",
    subtitle: "De beste keuze voor maximaal resultaat",
    regularPrice: 125,
    introPrice: 100,
    duration: 6,
    isPopular: true
  }
];

export const PricingPlans = () => {
  return (
    <div id="pricing-plans" className="w-screen bg-[#F2F1EB] flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
      <Mast>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 items-center bg-[#F2F1EB] rounded-2xl py-12 px-4 sm:px-8">
          <div>
          </div>

          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase">
              Kies je lidmaatschap
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full px-4 sm:px-0">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-2xl p-8 bg-white shadow-sm",
                  plan.isPopular ? "ring-4 ring-[#6D5656]" : "ring-4 ring-[#6D5656]/20"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6D5656] text-white px-6 py-2 rounded-full text-sm font-medium">
                    Meest gekozen
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-heading mb-2 text-[#6D5656] leading-[1.1] uppercase">{plan.title}</h3>
                  <p className="text-text/80">{plan.subtitle}</p>
                </div>

                <div className="mb-8">
                  <span
                    className="inline-block mb-3 rounded-full bg-orange-100 text-[#B85B1B] px-4 py-1 text-xs font-semibold tracking-wide border border-[#FF7F50] shadow-sm"
                    style={{ borderColor: '#FF7F50' }}
                  >
                    25% introductiekorting
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg line-through text-text/60">€{plan.regularPrice}</span>
                    <span className="text-2xl font-bold text-[#6D5656]">€{plan.introPrice}</span>
                    <span className="text-sm text-text/60">/ {plan.duration} maanden</span>
                    <span className="text-sm text-text/80">(€{Math.round(plan.introPrice/plan.duration)}/maand)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-text/80 text-base">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shadow-sm">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full gap-4"
                    asChild
                  >
                    <a
                      href="/aanmelden"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full uppercase ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F50] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-[Poppins] font-bold bg-[#FF7F50] text-white hover:bg-[#FF7F50]/90 shadow-sm hover:shadow-md h-12 px-6 text-base min-w-[160px] w-full gap-4"
                      style={{ backgroundColor: '#FF7F50', color: '#fff', fontFamily: 'Poppins, Inter, sans-serif', fontWeight: 700 }}
                    >
                      JOIN THE COMMUNITY
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full gap-4"
                    asChild
                  >
                    <a
                      href="https://wa.me/+31612345678"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full uppercase ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F50] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-[Poppins] font-bold border-2 border-[#FF7F50] bg-transparent text-[#FF7F50] hover:bg-[#FF7F50]/10 shadow-sm hover:shadow-md h-12 px-6 text-base min-w-[160px] w-full gap-4"
                      style={{ borderColor: '#FF7F50', color: '#FF7F50', fontFamily: 'Poppins, Inter, sans-serif', fontWeight: 700 }}
                    >
                      FAQ
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Mast>
    </div>
  );
};
