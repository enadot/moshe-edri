"use client";

import Image from "next/image";
import { Phone, MessageCircle, ArrowDown, Check } from "lucide-react";
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
  portraitSrc?: string;
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
  "ייעוץ ראשוני חינם",
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
  const portraitSrc = data.portraitSrc || SITE_CONFIG.portrait;
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
      <section className="relative overflow-hidden bg-[#0a192f] text-white -mt-20 pt-32 pb-16 md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.2) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

        <div className="hero-orb absolute top-32 right-[15%] size-96 rounded-full bg-gold/[0.08] blur-3xl pointer-events-none" />
        <div className="hero-orb absolute bottom-10 left-[10%] size-80 rounded-full bg-orange/[0.06] blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hero-badge inline-flex items-center gap-2.5 mb-8 py-1.5 pl-1.5 pr-4 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="size-6 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="size-2 rounded-full bg-gold animate-pulse" />
              </span>
              <span className="text-xs md:text-sm font-medium text-white/80">
                {badge}
              </span>
            </div>

            <h1 className="hero-headline font-display text-display-xl text-white mb-6 mx-auto max-w-[20ch]">
              <span className="block">{headline}</span>
              <span className="block text-gold-gradient">{highlight}</span>
            </h1>

            <p className="hero-sub text-base md:text-lg text-white/65 leading-[1.6] mb-10 max-w-[55ch] mx-auto">
              {subheadline}
            </p>
          </div>

          <div className="hero-portrait relative mx-auto mt-4 mb-4 w-full max-w-[420px] md:max-w-[520px] aspect-[4/5]">
            <div
              className="absolute inset-x-0 bottom-0 h-3/4 mx-auto rounded-full blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/3 mx-auto rounded-full blur-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,77,0,0.2) 0%, transparent 60%)",
              }}
            />
            <Image
              src={portraitSrc}
              alt="משה אדרי - יועץ משכנתאות"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 520px"
              className="relative object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="hero-cta flex flex-wrap items-center justify-center gap-3 mb-8">
              <Button
                asChild
                variant="orange"
                size="xl"
                className="rounded-full"
              >
                <a href={data.ctaPrimary?.href || "#quick-form"}>
                  {data.ctaPrimary?.label || "בדיקת חיסכון חינם"}
                  <ArrowDown className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="xl"
                className="text-white hover:text-gold hover:bg-white/5 rounded-full"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  שלחו וואטסאפ
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="xl"
                className="text-white hover:text-gold hover:bg-white/5 rounded-full"
              >
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="size-5" />
                  התקשרו
                </a>
              </Button>
            </div>

            <ul className="hero-trust flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12 text-sm text-white/55">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="size-4 text-gold" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="hero-stats grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto pt-10 border-t border-white/[0.08]">
              {stats.map((stat) => {
                const parsed = parseStatValue(stat.value);
                return (
                  <div key={stat.label}>
                    <div className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
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
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {data.showQuickForm !== false && (
        <section
          id="quick-form"
          className="relative bg-white py-16 md:py-24 border-b border-midnight-100"
        >
          <div
            className="absolute inset-0 dot-pattern opacity-50 pointer-events-none"
            aria-hidden
          />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-6 text-center lg:text-right">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 mb-4">
                  <span className="size-1.5 rounded-full bg-gold" />
                  בדיקה מהירה
                </div>
                <h2 className="font-display text-display-md text-midnight mb-4">
                  כמה תוכלו לחסוך?
                </h2>
                <p className="text-midnight-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  4 שאלות קצרות, ואנחנו נחזור אליכם עם הערכת חיסכון אישית
                  ופוטנציאל חיסכון מדויק על המשכנתא הנוכחית שלכם.
                </p>
              </div>
              <div className="lg:col-span-6">
                <MultiStepQuiz source="Hero - בדיקה מהירה" />
              </div>
            </div>
          </div>
        </section>
      )}
    </HeroGsap>
  );
}
