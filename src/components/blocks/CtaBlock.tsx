"use client";

import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink, cn } from "@/lib/utils";

export type CtaBlockData = {
  _type: "ctaBlock";
  _key: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  style?: "midnight" | "gold" | "orange";
};

export function CtaBlock({ data }: { data: CtaBlockData }) {
  const style = data.style || "midnight";
  const heading = data.heading || "הצעד הראשון לשקט כלכלי מתחיל כאן";
  const description =
    data.description ||
    "אל תחכו עוד רגע! צרו קשר עוד היום וקבלו ייעוץ ראשוני ללא עלות וללא התחייבות.";
  const ctaLabel = data.ctaLabel || "לקבלת ייעוץ חינם";
  const ctaHref = data.ctaHref || "#quick-form";

  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "CTA"
  );

  const styles = {
    midnight: "bg-midnight-gradient text-white",
    gold: "bg-gold-gradient text-midnight",
    orange: "bg-orange-gradient text-white",
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div
          data-gsap="scale-in"
          className={cn(
            "rounded-3xl p-8 md:p-16 relative overflow-hidden",
            styles[style]
          )}
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 -left-20 size-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              {heading}
            </h2>
            <p
              className={cn(
                "text-lg md:text-xl mb-8 leading-relaxed",
                style === "gold" ? "text-midnight-700" : "text-white/90"
              )}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <MagneticButton strength={0.3}>
                <Button
                  asChild
                  variant={style === "gold" ? "default" : "orange"}
                  size="xl"
                >
                  <a href={ctaHref}>
                    {ctaLabel}
                    <ArrowLeft className="size-5" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button asChild variant="whatsapp" size="xl">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    שלח וואטסאפ
                  </a>
                </Button>
              </MagneticButton>
              <Button
                asChild
                variant={style === "gold" ? "default" : "outline-gold"}
                size="xl"
                className={
                  style !== "gold"
                    ? "border-white text-white hover:bg-white hover:text-midnight"
                    : ""
                }
              >
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="size-5" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            <p
              className={cn(
                "mt-6 text-sm",
                style === "gold" ? "text-midnight-600" : "text-white/70"
              )}
            >
              ⏱️ זמן תגובה ממוצע: שעה · 🔒 הפרטים שלך מאובטחים · 🆓 ייעוץ ראשוני בחינם
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
