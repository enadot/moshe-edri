"use client";

import * as React from "react";
import { BRAND } from "@/theme/brand";
import { cn } from "@/lib/utils";

type RadioGroupContextValue = {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, style, value, onValueChange, name, children, ...props }, ref) => (
    <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
      <div
        ref={ref}
        role="radiogroup"
        className={cn(className)}
        style={{ display: "grid", gap: 12, ...style }}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, style, value, id, ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext);
    const checked = ctx.value === value;
    return (
      <span
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          height: 20,
        }}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={ctx.name || "radio"}
          value={value}
          checked={checked}
          onChange={() => ctx.onValueChange?.(value)}
          className={cn(className)}
          style={{
            appearance: "none",
            width: 20,
            height: 20,
            margin: 0,
            border: `2px solid ${checked ? BRAND.gold.DEFAULT : BRAND.midnight[200]}`,
            borderRadius: "50%",
            cursor: "pointer",
            ...style,
          }}
          {...props}
        />
        {checked && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: BRAND.gold.DEFAULT,
              pointerEvents: "none",
            }}
          />
        )}
      </span>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
