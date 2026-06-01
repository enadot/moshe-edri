"use client";

import {
  CalendarCheck,
  Link as LinkIcon,
  Key,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "calendar-check": CalendarCheck,
  link: LinkIcon,
  key: Key,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
};

type Differentiator = {
  icon?: string;
  title?: string;
  description?: string;
};

export type WizardEdgeBlockData = {
  _type: "wizardEdgeBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  differentiators?: Differentiator[];
};

const FALLBACK_DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "calendar-check",
    title: "11 שנות ניסיון",
    description: "מקצוענות מוכחת ומוניטין של הצלחות בשוק המשכנתאות הישראלי",
  },
  {
    icon: "link",
    title: 'קשרים ישירים עם מנכ"לים',
    description:
      "גישה ישירה לבכירי הבנקים וחברות המימון - תוצאות שאחרים לא יכולים להשיג",
  },
  {
    icon: "key",
    title: "אין מסורבים",
    description: "פתרונות יצירתיים ואישיים גם לתיקים המורכבים ביותר",
  },
  {
    icon: "trending-up",
    title: "חיסכון אדיר",
    description: "מאות אלפי שקלים נחסכו ללקוחות שלנו בזכות מיחזורים חכמים",
  },
  {
    icon: "shield-check",
    title: "שירות בוטיק אישי",
    description: "ליווי צמוד ומקצועי לכל אורך התהליך, ללא הסתרות וללא הפתעות",
  },
  {
    icon: "sparkles",
    title: "פתרונות חריגים",
    description: "אישורים חריגים והסדרים מיוחדים שמדהימים גם את בכירי הבנק",
  },
];

export function WizardEdgeBlock({ data }: { data: WizardEdgeBlockData }) {
  const differentiators =
    data.differentiators && data.differentiators.length > 0
      ? data.differentiators
      : FALLBACK_DIFFERENTIATORS;

  return (
    <section className="py-20 md:py-28 bg-midnight-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        data-gsap="parallax"
        data-speed="0.4"
        className="absolute top-1/4 right-0 size-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        data-gsap="parallax"
        data-speed="0.3"
        className="absolute bottom-0 left-1/4 size-80 rounded-full bg-orange/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {data.eyebrow && (
            <span
              data-gsap="fade-up"
              className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-4"
            >
              {data.eyebrow}
            </span>
          )}
          <h2
            data-gsap="fade-up"
            className="text-3xl md:text-5xl font-black mb-6 leading-tight"
          >
            <span className="text-gold-gradient">
              {data.heading || "דלת שנסגרת נפתחת"}
            </span>
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-midnight-100 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((diff, i) => {
            const Icon = ICONS[diff.icon || "sparkles"] || Sparkles;
            return (
              <div
                key={i}
                className="glass rounded-2xl p-6 md:p-8 group cursor-default hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="size-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-5 shadow-gold group-hover:rotate-6 transition-transform">
                  <Icon className="size-7 text-midnight" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-midnight-100 leading-relaxed text-sm">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
