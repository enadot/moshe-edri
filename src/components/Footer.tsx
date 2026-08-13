"use client";

import Link from "next/link";
import { Box, Stack, Inline, Anchor, xcss } from "@atlaskit/primitives";
import { media } from "@atlaskit/primitives/responsive";
import PhoneIcon from "@atlaskit/icon/core/phone";
import EmailIcon from "@atlaskit/icon/core/email";
import LocationIcon from "@atlaskit/icon/core/location";
import CommentIcon from "@atlaskit/icon/core/comment";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { BRAND } from "@/theme/brand";

const footerStyles = xcss({
  position: "relative",
  overflow: "hidden",
  color: "color.text.inverse",
});

const containerStyles = xcss({
  maxWidth: "1200px",
  marginInline: "auto",
  paddingInline: "space.400",
  paddingBlock: "space.800",
  position: "relative",
});

const responsiveGridStyles = xcss({
  display: "grid",
  gap: "space.500",
  gridTemplateColumns: "1fr",
  [media.above.sm]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [media.above.md]: {
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
});

const listResetStyles = xcss({
  listStyle: "none",
  padding: "space.0",
  margin: "space.0",
});

const linkHoverStyles = xcss({
  textDecoration: "none",
  transition: "color 0.2s",
  ":hover": {
    color: "color.text.brand",
  },
});

export function Footer() {
  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "פוטר אתר"
  );

  return (
    <Box
      as="footer"
      xcss={footerStyles}
      style={{ background: "var(--moshe-gradient-midnight)" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 0,
          height: "3px",
          background: "var(--moshe-gradient-gold)",
        }}
      />

      <Box xcss={containerStyles}>
        <Box xcss={responsiveGridStyles}>
          <Stack space="space.200">
            <Inline space="space.150" alignBlock="center">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--moshe-gradient-gold)",
                  color: BRAND.midnight.DEFAULT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "24px",
                  boxShadow: "var(--moshe-shadow-gold)",
                }}
              >
                מ
              </div>
              <Stack space="space.0">
                <div style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>
                  משה אדרי
                </div>
                <div style={{ fontSize: "13px", color: BRAND.gold.DEFAULT }}>
                  יועץ משכנתאות
                </div>
              </Stack>
            </Inline>
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              יועץ משכנתאות מוביל בישראל. 11+ שנות ניסיון בייעוץ אישי,
              מיחזור משכנתאות, איחוד הלוואות ופתרונות לתיקים מורכבים.
            </div>
          </Stack>

          <Stack space="space.200">
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: BRAND.gold.DEFAULT,
              }}
            >
              ניווט
            </div>
            <Box as="ul" xcss={listResetStyles}>
              <Stack space="space.100">
                {NAV_ITEMS.map((item) => (
                  <Box as="li" key={item.href}>
                    <Link
                      href={item.href}
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>

          <Stack space="space.200">
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: BRAND.gold.DEFAULT,
              }}
            >
              שירותים
            </div>
            <Box as="ul" xcss={listResetStyles}>
              <Stack space="space.100">
                {[
                  "מיחזור משכנתא",
                  "משכנתא למסורבים",
                  "איחוד הלוואות",
                  "משכנתא לכל מטרה",
                  "מחיר למשתכן",
                  "מימון לעסקים",
                ].map((s) => (
                  <Box
                    as="li"
                    key={s}
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
                  >
                    {s}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>

          <Stack space="space.200">
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: BRAND.gold.DEFAULT,
              }}
            >
              צור קשר
            </div>
            <Box as="ul" xcss={listResetStyles}>
              <Stack space="space.150">
                <Box as="li">
                  <Anchor
                    href={`tel:${SITE_CONFIG.phone}`}
                    xcss={linkHoverStyles}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <PhoneIcon label="טלפון" color="currentColor" />
                    {SITE_CONFIG.phone}
                  </Anchor>
                </Box>
                <Box as="li">
                  <Anchor
                    href={`tel:${SITE_CONFIG.mobile}`}
                    xcss={linkHoverStyles}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <PhoneIcon label="נייד" color="currentColor" />
                    {SITE_CONFIG.mobile}
                  </Anchor>
                </Box>
                <Box as="li">
                  <Anchor
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    xcss={linkHoverStyles}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CommentIcon label="וואטסאפ" color="currentColor" />
                    שלח וואטסאפ
                  </Anchor>
                </Box>
                <Box as="li">
                  <Anchor
                    href={`mailto:${SITE_CONFIG.email}`}
                    xcss={linkHoverStyles}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <EmailIcon label="אימייל" color="currentColor" />
                    {SITE_CONFIG.email}
                  </Anchor>
                </Box>
                <Box as="li">
                  <Inline
                    space="space.100"
                    alignBlock="center"
                    xcss={xcss({ color: "color.text.subtlest" })}
                  >
                    <LocationIcon label="מיקום" color="currentColor" />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                      ישראל
                    </span>
                  </Inline>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box
          xcss={xcss({
            marginBlockStart: "space.600",
            paddingBlockStart: "space.400",
            borderBlockStart: "1px solid rgba(255,255,255,0.1)",
          })}
        >
          <Inline spread="space-between" alignBlock="center" space="space.200">
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
              © 2026 משה אדרי - יועץ משכנתאות. כל הזכויות שמורות.
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
              האמור באתר אינו מהווה ייעוץ פיננסי. אנא היוועצו עם יועץ מוסמך לפני
              קבלת החלטות.
            </div>
          </Inline>
        </Box>
      </Box>
    </Box>
  );
}
