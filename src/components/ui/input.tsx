"use client";

import * as React from "react";
import Textfield from "@atlaskit/textfield";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <div style={{ direction: "rtl", ...style }} className={className}>
        <Textfield
          ref={ref as React.Ref<HTMLInputElement>}
          isCompact={false}
          {...(props as any)}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
