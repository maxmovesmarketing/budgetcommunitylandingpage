import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["JOUW GIDS", "JOUW GRIP OP GELD ", "JOUW FINANCE BUDDY", "JOUW WEG NAAR FINANCIELE RUST"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden w-full px-4 sm:px-8 md:px-12 -translate-x-0 left-0">
      {/* Background GIF */}
      {/* <div className="absolute inset-0 w-full h-full">
        <img
          src="/uploads/giphy (1).gif"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* White Overlay */}
      {/* <div className="absolute inset-0 w-full h-full bg-white/80" /> */}

      <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-20 w-full" style={{ backgroundColor: '#F2F1EB' }}>


      {/* Main content */}
      <div className="w-full flex items-center justify-center z-10">
        <div className="flex gap-4 items-center justify-center flex-col w-full">
          <div className="flex gap-0 flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-[Poppins] font-black text-[#6D5656] leading-[1.1] uppercase text-center break-words max-w-full">
              <span className="text-[#6D5656] block w-full font-heading">
                The Budget Community
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center min-h-0 mb-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-[#6D5656] leading-[1.1] uppercase whitespace-nowrap break-words max-w-full"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#6D5656]/80 text-center font-[Poppins] font-normal mt-2 md:mt-1" style={{ fontFamily: 'Poppins, Inter, sans-serif', fontWeight: 400 }}>
              Persoonlijke budgetcoaching, praktische budgettools en een betrokken community. Alles op één plek!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full md:w-auto">
            <Button size="lg" className="gap-2" variant="secondary">
              <span className="font-sans font-medium">REVIEWS</span> <MoveRight className="w-4 h-4 text-[#6D5656]" />
            </Button>
            <Button size="lg" className="gap-2 bg-[#6D5656] text-white hover:opacity-90" style={{backgroundColor:'#6D5656', color:'#fff'}}>
              <span className="font-sans font-medium">JOIN NOW!</span> <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export { Hero };
