
import { Button } from "@/components/ui/button";
import { Image, Text, Link2, Heading, Plane } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BuilderFAB = () => {
  return (
    <div className="fixed bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 z-40 md:z-50">
      <div className="bg-primary rounded-full shadow-lg px-3 md:px-4 py-1.5 md:py-2 flex gap-1 md:gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
              >
                <Image className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="py-1 px-2 text-xs">
              <p>Image & Video</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
              >
                <Text className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="py-1 px-2 text-xs">
              <p>Text</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
              >
                <Link2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="py-1 px-2 text-xs">
              <p>Link</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
              >
                <Heading className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="py-1 px-2 text-xs">
              <p>Title Section</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
              >
                <Plane className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="py-1 px-2 text-xs">
              <p>Itinerary</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
