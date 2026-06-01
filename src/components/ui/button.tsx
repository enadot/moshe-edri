import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default:
          "bg-midnight text-white hover:bg-midnight-800 shadow-soft",
        gold: "bg-gold text-midnight font-bold shadow-gold hover:bg-gold-400",
        orange:
          "bg-orange text-white shadow-orange hover:bg-orange-600 font-bold",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-midnight-200 bg-transparent text-midnight hover:bg-midnight-50",
        "outline-gold":
          "border border-gold/40 bg-transparent text-gold hover:bg-gold/10",
        secondary:
          "bg-midnight-50 text-midnight hover:bg-midnight-100",
        ghost: "hover:bg-midnight-50 hover:text-midnight",
        link: "text-midnight underline-offset-4 hover:underline",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe57] font-bold",
      },
      size: {
        default: "h-11 px-5 py-2.5 [&_svg]:size-4",
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-sm [&_svg]:size-4",
        xl: "h-14 px-8 text-base [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
