"use client";

import * as React from "react";
import AtlaskitButton, { LinkButton, type ButtonProps as AKButtonProps } from "@atlaskit/button/new";
import { BRAND } from "@/theme/brand";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "gold"
  | "orange"
  | "destructive"
  | "outline"
  | "outline-gold"
  | "secondary"
  | "ghost"
  | "link"
  | "whatsapp";

type Size = "default" | "sm" | "lg" | "xl" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  href?: string;
}

const APPEARANCE_MAP: Record<Variant, AKButtonProps["appearance"]> = {
  default: "default",
  gold: "primary",
  orange: "primary",
  destructive: "danger",
  outline: "default",
  "outline-gold": "default",
  secondary: "default",
  ghost: "subtle",
  link: "subtle-link" as AKButtonProps["appearance"],
  whatsapp: "primary",
};

const SPACING_MAP: Record<Size, "compact" | "default"> = {
  default: "default",
  sm: "compact",
  lg: "default",
  xl: "default",
  icon: "compact",
};

function getVariantStyle(variant: Variant): React.CSSProperties {
  switch (variant) {
    case "orange":
      return {
        background: BRAND.orange.DEFAULT,
        color: "white",
        boxShadow: "0 8px 24px -8px rgba(255,77,0,0.4)",
      };
    case "whatsapp":
      return { background: BRAND.whatsapp, color: "white" };
    case "outline":
      return {
        background: "transparent",
        border: `1px solid ${BRAND.midnight[200]}`,
        color: BRAND.midnight.DEFAULT,
      };
    case "outline-gold":
      return {
        background: "transparent",
        border: `1px solid ${BRAND.gold.DEFAULT}`,
        color: BRAND.gold.DEFAULT,
      };
    case "gold":
      return {
        background: BRAND.gold.DEFAULT,
        color: BRAND.midnight.DEFAULT,
        boxShadow: "var(--moshe-shadow-gold)",
      };
    case "secondary":
      return { background: BRAND.midnight[50], color: BRAND.midnight.DEFAULT };
    default:
      return {};
  }
}

function getSizeStyle(size: Size): React.CSSProperties {
  switch (size) {
    case "xl":
      return { minHeight: "56px", padding: "0 32px", fontSize: "16px" };
    case "lg":
      return { minHeight: "48px", padding: "0 24px" };
    case "icon":
      return { width: "44px", height: "44px", padding: 0 };
    default:
      return {};
  }
}

const ButtonShim = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "default", href, className, style, children, asChild, ...rest },
    ref
  ) => {
    const appearance = APPEARANCE_MAP[variant];
    const spacing = SPACING_MAP[size];
    const mergedStyle: React.CSSProperties = {
      borderRadius: 9999,
      fontFamily: "'Google Sans', 'Heebo', system-ui, sans-serif",
      ...getVariantStyle(variant),
      ...getSizeStyle(size),
      ...style,
    };

    // asChild fallback: render children directly with our merged style so
    // callers like <Button asChild><a href="…">…</a></Button> keep working.
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        className: cn(className, (children as any).props?.className),
        style: { ...mergedStyle, ...(children as any).props?.style },
        ...rest,
      });
    }

    if (href) {
      return (
        <span style={mergedStyle} className={className}>
          <LinkButton
            appearance={appearance}
            spacing={spacing}
            href={href}
          >
            {children}
          </LinkButton>
        </span>
      );
    }

    return (
      <span style={mergedStyle} className={className}>
        <AtlaskitButton
          appearance={appearance}
          spacing={spacing}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...(rest as any)}
        >
          {children}
        </AtlaskitButton>
      </span>
    );
  }
);

ButtonShim.displayName = "Button";

export const Button = ButtonShim;
export const buttonVariants = () => "";
