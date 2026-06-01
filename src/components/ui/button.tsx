import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-midnight text-white hover:bg-midnight-800 shadow-lg shadow-midnight/30 hover:scale-[1.02] active:scale-[0.98]",
        gold: "bg-gold-gradient text-midnight font-extrabold shadow-gold hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl",
        orange:
          "bg-orange text-white shadow-orange hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] font-extrabold",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline:
          "border-2 border-midnight bg-transparent text-midnight hover:bg-midnight hover:text-white",
        "outline-gold":
          "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-midnight",
        secondary:
          "bg-midnight-50 text-midnight hover:bg-midnight-100",
        ghost: "hover:bg-midnight-50 hover:text-midnight",
        link: "text-midnight underline-offset-4 hover:underline",
        whatsapp:
          "bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe57] hover:scale-[1.02]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "size-12",
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
