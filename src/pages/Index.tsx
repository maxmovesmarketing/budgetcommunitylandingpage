import React from "react";
import { FAQ } from "@/components/sections/FAQ";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/sections/Features";
import { TimeForChange } from "@/components/sections/TimeForChange";
import { WelcomeSection } from "@/components/sections/welcome-section"; 
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Reviews } from "@/components/sections/Reviews";
import { Roadmap } from "@/components/sections/Roadmap";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 overflow-hidden relative" style={{ backgroundColor: '#F2F1EB' }}>
      <Navbar />
      <Hero />
      <WelcomeSection /> 
      <Features />
      <TimeForChange />
      <Roadmap />
      <PricingPlans />
      <Reviews />
      {/* <CallToAction /> */}
      <FAQ />
      <Footer />

      {/* Floating Sticky Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 z-50 group inline-flex items-center gap-2 bg-[#6D5656] hover:bg-[#5d4848] text-white px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:pr-7 hover:shadow-[#6D5656]/30 hover:shadow-xl ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Sparkles className="w-4 h-4 animate-pulse text-[#E4E2DD]" />
        <span className="text-sm font-medium uppercase whitespace-nowrap tracking-tight">TIJDELIJK GRATIS BUDGETSCAN</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
};

export default Index;
