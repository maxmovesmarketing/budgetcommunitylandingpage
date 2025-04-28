import React from "react";
import { Home, Calendar, Eye, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mast } from "@/components/layout/Mast";
import CountUp from "react-countup";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "jaar ervaring in financiële begeleiding.",
    icon: Home,
  },
  {
    value: 95,
    suffix: "%",
    label: "van onze leden ervaart meer grip op hun geld binnen 3 maanden.",
    icon: Calendar,
  },
  {
    value: "24/7",
    suffix: "",
    label: "toegang tot experts voor directe ondersteuning.",
    icon: Eye,
  },
  {
    value: 80,
    prefix: "%",
    suffix: "",
    label: "toegang tot experts en ervaringsdeskundigen voor directe ondersteuning.",
    icon: DollarSign,
  },
];

export const TrackRecord = () => {
  return (
    <section className="w-full bg-[#E4E2DC] px-4 sm:px-0">
      <Mast>
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Track record
            </Button>
          </div>

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading text-[#6D5656] leading-[1.1] uppercase">
              De cijfers liegen er niet om...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E4E2DC] flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-text" />
                  </div>
                  <div className="text-4xl font-medium text-text">
                    {stat.prefix}
                    {typeof stat.value === 'number' ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator="."
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    ) : (
                      stat.value
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-base text-text/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Mast>
    </section>
  );
};
