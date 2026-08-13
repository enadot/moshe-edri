"use client";

/**
 * FaqBlock accordion. Radix headless engine is kept intentionally
 * (best-in-class keyboard + a11y) and restyled with Atlaskit tokens
 * via inline style. Documented exception to the "remove all Radix"
 * pass in PR10 — the Radix engine survives because @atlaskit does not
 * ship a disclosure/accordion primitive.
 */
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import PlusIcon from "@atlaskit/icon/core/add";
import { BRAND } from "@/theme/brand";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, style, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(className)}
    style={{
      borderBottom: `1px solid ${BRAND.midnight[100]}`,
      background: "transparent",
      ...style,
    }}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, style, children, ...props }, ref) => (
  <AccordionPrimitive.Header style={{ display: "flex" }}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(className, "faq-trigger")}
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 0",
        fontFamily: "'Google Sans', 'Heebo', system-ui, sans-serif",
        fontSize: 18,
        fontWeight: 600,
        color: BRAND.midnight.DEFAULT,
        background: "transparent",
        border: 0,
        cursor: "pointer",
        transition: "color 0.2s",
        textAlign: "right",
        ...style,
      }}
      {...props}
    >
      {children}
      <span
        className="faq-trigger-icon"
        style={{
          transition: "transform 0.3s",
          color: BRAND.midnight[400],
          display: "inline-flex",
        }}
      >
        <PlusIcon label="" color="currentColor" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, style, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(className)}
    style={{
      overflow: "hidden",
      fontSize: 15,
      color: BRAND.midnight[600],
      lineHeight: 1.6,
      ...style,
    }}
    {...props}
  >
    <div style={{ padding: "0 0 24px 0", maxWidth: "48rem" }}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
