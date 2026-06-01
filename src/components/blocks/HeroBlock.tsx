"use client";

import { Phone, MessageCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiStepQuiz } from "@/components/MultiStepQuiz";
import { HeroGsap } from "@/components/animations/HeroGsap";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

type Stat = { value: string; label: string };

export type HeroBlockData = {
  _type: "heroBlock";
  _key: string;
  headline?: string;
  highlightText?: string;
  subheadline?: string;
  floatingBadge?: string;
  ctaPrimary?: { label?: string; href?: string };
  ctaSecondary?: { label?: string };
  showQuickForm?: boolean;
  stats?: Stat[];
};

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { to: 0, prefix: "", suffix: value };
  return {
    prefix: match[1] || "",
    to: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

const TRUST_POINTS = [
  "ייעוץ חינם",
  "ללא התחייבות",
  "מענה תוך שעה",
];

export function HeroBlock({ data }: { data: HeroBlockData }) {
  const headline = data.headline || "נחנקים מהמשכנתא?";
  const highlight = data.highlightText || "אנחנו נדאג שתחסכו.";
  const subheadline =
    data.subheadline ||
    "מאות משפחות בישראל כבר חסכו מאות אלפי שקלים בעזרת ייעוץ מקצועי. בואו לבדוק כמה אתם יכולים לחסוך.";
  const badge = data.floatingBadge || "השבוע נחסך ללקוח: ₪270,000";
  const stats: Stat[] = data.stats?.length
    ? data.stats
    : [
        { value: "11+", label: "שנות ניסיון" },
        { value: "500+", label: "תיקים שטופלו" },
        { value: "₪50M+", label: "סך חיסכון ללקוחות" },
      ];

  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "Hero"
  );

  return (
    <HeroGsap>
      <section className="relative overflow-hidden bg-[#0a192f] text-white -mt-20 pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.2) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="hero-orb absolute top-32 right-[15%] size-96 rounded-full bg-gold/[0.08] blur-3xl" />
        <div className="hero-orb absolute bottom-10 left-[10%] size-80 rounded-full bg-orange/[0.06] blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="hero-badge inline-flex items-center gap-2.5 mb-8 py-1.5 pl-1.5 pr-4 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <span className="size-6 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="size-2 rounded-full bg-gold animate-pulse" />
                </span>
                <span className="text-xs md:text-sm font-medium text-white/80">
                  {badge}
                </span>
              </div>

              <h1 className="hero-headline font-display text-display-xl text-white mb-6 max-w-[18ch]">
                <span className="block">{headline}</span>
                <span className="block text-gold-gradient">{highlight}</span>
              </h1>

              <p className="hero-sub text-lg md:text-xl text-white/65 leading-[1.6] mb-10 max-w-[55ch]">
                {subheadline}
              </p>

              <div className="hero-cta flex flex-wrap items-center gap-4 mb-10">
                <Button asChild variant="orange" size="xl" className="rounded-full">
                  <a href={data.ctaPrimary?.href || "#quick-form"}>
                    {data.ctaPrimary?.label || "בדיקת חיסכון חינם"}
                    <ArrowLeft className="size-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="xl"
                  className="text-white hover:text-gold hover:bg-white/5 rounded-full"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />
                    שלחו וואטסאפ
                  </a>
                </Button>
              </div>

              <ul className="hero-trust flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 text-sm text-white/55">
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className="size-4 text-gold" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="hero-stats grid grid-cols-3 gap-6 md:gap-10 max-w-lg pt-8 border-t border-white/[0.08]">
                {stats.map((stat) => {
                  const parsed = parseStatValue(stat.value);
                  return (
                    <div key={stat.label}>
                      <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {parsed.to > 0 ? (
                          <AnimatedCounter
                            to={parsed.to}
                            prefix={parsed.prefix}
                            suffix={parsed.suffix}
                          />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-xs md:text-sm text-white/50 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              id="quick-form"
              className="hero-form lg:col-span-5 order-1 lg:order-2 relative"
            >
              {data.showQuickForm !== false ? (
                <MultiStepQuiz source="Hero - בדיקה מהירה" />
              ) : null}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </HeroGsap>
  );
}
