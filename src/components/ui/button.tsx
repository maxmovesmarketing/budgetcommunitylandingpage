import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-sans font-medium uppercase ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-text text-white hover:bg-text/90 shadow-sm hover:shadow-md",
        orange: "bg-[#FF7F50] text-white hover:bg-[#FF7F50]/90 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-text bg-transparent text-text hover:bg-text/5 shadow-sm hover:shadow-md",
        secondary:
          "bg-background text-text hover:bg-background/80 shadow-sm hover:shadow-md",
        ghost: "text-text hover:bg-text/5",
        link: "text-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 min-w-[120px]",
        sm: "h-9 px-3 text-xs min-w-[100px]",
        lg: "h-12 px-6 text-base min-w-[160px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{ fontFamily: 'Poppins, Inter, sans-serif', fontWeight: 700, ...(props.style || {}) }}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
