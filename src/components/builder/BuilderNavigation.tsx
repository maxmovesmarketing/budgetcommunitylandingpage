
import { Button } from "@/components/ui/button";
import { LogOut, Users, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BuilderNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed md:left-4 bottom-0 md:bottom-8 left-0 w-full md:w-auto bg-primary md:bg-transparent py-2 md:py-0 flex justify-center md:justify-start gap-1 md:gap-2 z-50 md:z-40 border-t md:border-0">
      <Button variant="outline" size="icon" className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors">
        <LogOut className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors"
        onClick={() => navigate("/community")}
      >
        <Users className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-[#2E3438] hover:text-white transition-colors">
        <History className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </Button>
    </div>
  );
};
