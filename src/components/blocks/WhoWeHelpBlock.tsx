"use client";

import {
  Heart,
  Home,
  XCircle,
  Layers,
  Briefcase,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  heart: Heart,
  home: Home,
  "x-circle": XCircle,
  layers: Layers,
  briefcase: Briefcase,
  "arrow-up-right": ArrowUpRight,
};

type Audience = {
  icon?: string;
  title?: string;
  description?: string;
};

export type WhoWeHelpBlockData = {
  _type: "whoWeHelpBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  audiences?: Audience[];
};

const FALLBACK: Audience[] = [
  {
    icon: "heart",
    title: "זוגות צעירים ורוכשי דירה ראשונה",
    description: "ליווי לקבלת המשכנתא בתנאים המתאימים לצרכים שלכם",
  },
  {
    icon: "home",
    title: "משפחות שרוצות לשדרג דיור",
    description: "מיחזור משכנתא ומימון לשיפוץ והרחבה",
  },
  {
    icon: "x-circle",
    title: "מסורבי בנקים",
    description: "מציאת פתרונות מימון גם לאחר סירוב מהבנק",
  },
  {
    icon: "layers",
    title: "בעלי הלוואות רבות",
    description: "איחוד הלוואות לסדר פיננסי ולחיסכון",
  },
  {
    icon: "briefcase",
    title: "יזמים ועסקים",
    description: "מימון לעסקים ופתרונות אשראי מותאמים",
  },
  {
    icon: "arrow-up-right",
    title: "משפרי דיור",
    description: "ייעוץ וליווי בתהליכי מכירה ורכישה במקביל",
  },
];

export function WhoWeHelpBlock({ data }: { data: WhoWeHelpBlockData }) {
  const audiences =
    data.audiences && data.audiences.length > 0 ? data.audiences : FALLBACK;

  return (
    <section className="py-24 md:py-32 bg-midnight-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          {data.eyebrow && (
            <div data-gsap="fade-up" className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-700">
                <span className="size-1.5 rounded-full bg-gold" />
                {data.eyebrow}
              </span>
            </div>
          )}
          <h2
            data-gsap="fade-up"
            className="font-display text-display-lg text-midnight mb-5"
          >
            {data.heading || "למי השירות מתאים"}
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-midnight-500 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {audiences.map((audience, i) => {
            const Icon = ICONS[audience.icon || "heart"] || Heart;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-midnight-100 hover:border-gold/40 hover:shadow-soft transition-all duration-300"
              >
                <div className="size-11 rounded-xl bg-midnight-50 group-hover:bg-gold/10 flex items-center justify-center mb-5 transition-colors">
                  <Icon
                    className="size-5 text-midnight group-hover:text-gold-700 transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold text-midnight mb-2">
                  {audience.title}
                </h3>
                <p className="text-midnight-500 leading-relaxed text-sm">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
