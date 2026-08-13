"use client";

import * as React from "react";
import { BRAND } from "@/theme/brand";
import { cn } from "@/lib/utils";

const baseCardStyle: React.CSSProperties = {
  background: "white",
  border: `1px solid ${BRAND.midnight[100]}`,
  borderRadius: 16,
  color: BRAND.midnight.DEFAULT,
  boxShadow: "0 1px 2px rgba(10,25,47,0.04), 0 8px 24px -4px rgba(10,25,47,0.08)",
  transition: "box-shadow 0.3s, transform 0.3s",
};

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{ ...baseCardStyle, ...style }}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{ padding: 24, display: "flex", flexDirection: "column", gap: 8, ...style }}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        fontFamily: "'Google Sans', 'Heebo', system-ui, sans-serif",
        fontSize: 24,
        fontWeight: 700,
        color: BRAND.midnight.DEFAULT,
        lineHeight: 1.2,
        ...style,
      }}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{ color: BRAND.midnight[600], fontSize: 16, lineHeight: 1.6, ...style }}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{ padding: 24, paddingTop: 0, ...style }}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{ display: "flex", alignItems: "center", padding: 24, paddingTop: 0, ...style }}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
