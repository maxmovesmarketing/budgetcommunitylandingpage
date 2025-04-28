import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mast } from "@/components/layout/Mast";

export const CallToAction = () => {
  return (
    <section className="w-full px-4 sm:px-0">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/public/uploads/giphy.gif"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50" />

      {/* Content */}
      <Mast>
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white leading-[1.1] uppercase">
              Ben je klaar om je leven te veranderen?
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Word vandaag nog lid van onze community en begin aan je reis naar financiële vrijheid.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-4"
              asChild
            >
              <a href="/aanmelden">
                BEGIN VANDAAG
              </a>
            </Button>

          </motion.div>
        </div>
      </Mast>
    </section>
  );
};
