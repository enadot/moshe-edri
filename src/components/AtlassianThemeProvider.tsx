"use client";

import { useEffect } from "react";
import { setGlobalTheme } from "@atlaskit/tokens/set-global-theme";
import { BRAND } from "@/theme/brand";

export function AtlassianThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setGlobalTheme({
      colorMode: "light",
      light: "light",
      dark: "dark",
      spacing: "spacing",
      typography: "typography",
      shape: "shape",
      UNSAFE_themeOptions: {
        brandColor: BRAND.gold.DEFAULT,
      },
    }).catch((err) => {
      console.error("[AtlassianThemeProvider] setGlobalTheme failed", err);
    });
  }, []);

  return <>{children}</>;
}
