"use client";

import * as React from "react";
import { BRAND } from "@/theme/brand";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, style, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(className)}
      style={{
        display: "block",
        marginBottom: 8,
        fontFamily: "'Google Sans', 'Heebo', system-ui, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: BRAND.midnight.DEFAULT,
        ...style,
      }}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };
