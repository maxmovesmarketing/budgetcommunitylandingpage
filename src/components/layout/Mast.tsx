import React from "react";
import { cn } from "@/lib/utils";

interface MastProps {
  children: React.ReactNode;
  className?: string;
}

export const Mast = ({ children, className }: MastProps) => {
  return (
    <div className={cn("w-screen", className)} style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
      {children}
    </div>
  );
};
