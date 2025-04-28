
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  className?: string;
  children: React.ReactNode;
}

export const FloatingCard = ({ className, children }: FloatingCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
