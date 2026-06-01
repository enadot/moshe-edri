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

const FALLBACK: Differentiator[] = [
  {
    icon: "calendar-check",
    title: "11+ שנות ניסיון",
    description:
      "ניסיון מעמיק בשוק המשכנתאות הישראלי וטיפול במאות תיקים מסוגים שונים.",
  },
  {
    icon: "link",
    title: "קשרים מקצועיים",
    description:
      "עבודה ישירה עם בכירי הבנקים וחברות המימון להשגת תנאים אטרקטיביים.",
  },
  {
    icon: "key",
    title: "פתרונות לתיקים מורכבים",
    description:
      "ידע וניסיון במציאת פתרונות מותאמים גם למקרים שבהם הבנקים סירבו.",
  },
  {
    icon: "trending-up",
    title: "חיסכון משמעותי",
    description:
      "מאות אלפי שקלים שנחסכו ללקוחות באמצעות מיחזורים חכמים ותכנון אסטרטגי.",
  },
  {
    icon: "shield-check",
    title: "ליווי אישי",
    description:
      "שירות בוטיק - ליווי צמוד ומקצועי לכל אורך התהליך, בשקיפות מלאה.",
  },
  {
    icon: "sparkles",
    title: "תפירה אישית",
    description:
      "התאמת תמהיל המשכנתא לצרכים הספציפיים, ליכולות ולתכנון העתידי שלכם.",
  },
];

export function WizardEdgeBlock({ data }: { data: WizardEdgeBlockData }) {
  const differentiators =
    data.differentiators && data.differentiators.length > 0
      ? data.differentiators
      : FALLBACK;

  return (
    <section className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,77,0,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-16">
          {data.eyebrow && (
            <div data-gsap="fade-up" className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                <span className="size-1.5 rounded-full bg-gold" />
                {data.eyebrow}
              </span>
            </div>
          )}
          <h2
            data-gsap="fade-up"
            className="font-display text-display-lg text-white mb-5"
          >
            {data.heading || "למה דווקא איתנו"}
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-white/60 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]"
        >
          {differentiators.map((diff, i) => {
            const Icon = ICONS[diff.icon || "sparkles"] || Sparkles;
            return (
              <div
                key={i}
                className="bg-[#0a192f] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="size-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <Icon className="size-5 text-gold" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">
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
