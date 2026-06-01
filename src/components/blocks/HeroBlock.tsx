"use client";

import { Phone, MessageCircle, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiStepQuiz } from "@/components/MultiStepQuiz";
import { HeroGsap } from "@/components/animations/HeroGsap";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";
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

function parseStatValue(value: string): {
  to: number;
  prefix: string;
  suffix: string;
} {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { to: 0, prefix: "", suffix: value };
  return {
    prefix: match[1] || "",
    to: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

export function HeroBlock({ data }: { data: HeroBlockData }) {
  const headline = data.headline || "נחנקים מהמשכנתא? מסורבים בבנק?";
  const highlight = data.highlightText || "משה אדרי: הקוסם הפיננסי";
  const subheadline =
    data.subheadline ||
    "אל תהיו פראיירים של הבנק! מאות משפחות כבר חסכו מאות אלפי שקלים וקיבלו אישור גם כשכולם אמרו לא.";
  const badge = data.floatingBadge || 'חסכתי 270,000 ש"ח השבוע!';
  const stats: Stat[] = data.stats?.length
    ? data.stats
    : [
        { value: "11+", label: "שנות ניסיון" },
        { value: "500+", label: "לקוחות מרוצים" },
        { value: "₪50M+", label: "נחסך ללקוחות" },
      ];

  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "Hero"
  );

  const statIcons = [TrendingUp, Award, Users];

  return (
    <HeroGsap>
      <section className="relative overflow-hidden bg-midnight-gradient text-white -mt-20 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="hero-glow absolute top-20 right-1/4 size-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="hero-glow absolute bottom-10 left-1/4 size-96 rounded-full bg-orange/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="hero-badge inline-flex items-center gap-2 bg-orange/20 border border-orange/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex size-2 rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-orange" />
                </span>
                <span className="text-sm font-bold text-orange-100">
                  {badge}
                </span>
              </div>

              <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                <span className="block">{headline}</span>
                <span className="block text-gold-gradient">{highlight}</span>
                <span className="block text-white">שיציל לכם את הכסף.</span>
              </h1>

              <p className="hero-sub text-lg md:text-xl text-midnight-100 leading-relaxed mb-8 max-w-2xl">
                {subheadline}
              </p>

              <div className="hero-cta flex flex-wrap gap-3 mb-10">
                <MagneticButton strength={0.3}>
                  <Button asChild variant="orange" size="xl">
                    <a href={data.ctaPrimary?.href || "#quick-form"}>
                      <Phone className="size-5" />
                      {data.ctaPrimary?.label || "בדוק כמה אתה יכול לחסוך"}
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
                      {data.ctaSecondary?.label || "שלח וואטסאפ"}
                    </a>
                  </Button>
                </MagneticButton>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md">
                {stats.map((stat, i) => {
                  const Icon = statIcons[i] || TrendingUp;
                  const parsed = parseStatValue(stat.value);
                  return (
                    <div key={stat.label} className="hero-stat glass rounded-2xl p-4">
                      <Icon className="size-5 text-gold mb-2" />
                      <div className="text-2xl md:text-3xl font-extrabold text-white">
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
                      <div className="text-xs text-midnight-100">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              id="quick-form"
              className="hero-form lg:col-span-2 order-1 lg:order-2 relative"
            >
              <div className="absolute -top-4 -right-4 bg-orange text-white px-4 py-2 rounded-full font-extrabold text-sm shadow-orange z-10 animate-float-up">
                חינם · ללא התחייבות
              </div>

              {data.showQuickForm !== false ? (
                <MultiStepQuiz source="Hero - בדיקת בריאות משכנתא" />
              ) : (
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-midnight to-midnight-700 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="size-32 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center text-7xl shadow-gold">
                        👨‍💼
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2">
                        משה אדרי
                      </h3>
                      <p className="text-gold font-bold">
                        יועץ משכנתאות מומחה
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>
    </HeroGsap>
  );
}
