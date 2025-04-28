import React from "react"
// Do NOT use next/image, use regular <img> for non-Next.js React projects
import { Button } from "@/components/ui/button"

function WelcomeSection() {
  return (
    <section id="welcome-section" className="w-full px-4 sm:px-0 bg-[#F2F1EB] py-12 md:py-20">
      {/* Side background color for padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#F2F1EB] rounded-2xl">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-[32px] md:text-5xl font-heading text-[#6D5656] leading-[1.1] uppercase">
            WELKOM BIJ THE BUDGET COMMUNITY
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#6D5656]/80 text-left font-sans font-normal mt-2 md:mt-1">
            Fijn dat je er bent! Wij hebben deze community opgericht vanuit onze drijfveer om iets voor een ander te betekenen. Met onze expertise en ervaring in budgetteren, coachen en schuldhulpverlening geloven wij dat cirkels doorbroken kunnen worden. Samen bouwen wij aan een positieve, duurzame verandering.<br /><br />
            In onze omgeving zien we dat veel mensen – jong én oud – behoefte hebben aan praktische tools, betrouwbare informatie en een steuntje in de rug als het gaat om beheren van je persoonlijke financiële situatie. In de online community, waar je uiteraard ook anoniem aan kunt deelnemen, vind je handige hulpmiddelen, een betrokken community die met je meedenkt en de mogelijkheid om op elk gewenst moment vragen te stellen. Wij zijn er voor jou!
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/uploads/Two Women Smiling.jpeg"
            alt="Two Women Smiling"
            width={480}
            height={360}
            className="rounded-2xl shadow-sm object-cover max-w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export { WelcomeSection }
