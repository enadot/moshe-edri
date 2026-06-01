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
    description: "ליווי צמוד לקבלת המשכנתא בתנאים הטובים ביותר",
  },
  {
    icon: "home",
    title: "משפחות שרוצות לשדרג דיור",
    description: "מיחזור משכנתא חכם ומשכנתא לשיפוץ והרחבה",
  },
  {
    icon: "x-circle",
    title: "מסורבי בנקים",
    description: "מציאת פתרונות מימון גם לאחר שקיבלתם סירוב",
  },
  {
    icon: "layers",
    title: "בעלי הלוואות רבות",
    description: "איחוד הלוואות שיחזיר לכם את השקט הכלכלי",
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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {data.eyebrow && (
            <span
              data-gsap="fade-up"
              className="inline-block px-4 py-1 rounded-full bg-orange/10 text-orange text-sm font-bold mb-4"
            >
              {data.eyebrow}
            </span>
          )}
          <h2
            data-gsap="fade-up"
            className="text-3xl md:text-5xl font-black text-midnight mb-4 leading-tight"
          >
            {data.heading || "נחנקתם מההחזרים? הבנק סגר לכם דלת?"}
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-midnight-600 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {audiences.map((audience, i) => {
            const Icon = ICONS[audience.icon || "heart"] || Heart;
            return (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-midnight-50/30 rounded-3xl p-6 md:p-8 border-2 border-midnight-100/50 hover:border-gold transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute -top-10 -left-10 size-32 rounded-full bg-gold/5 group-hover:bg-gold/20 transition-colors blur-2xl" />
                <div className="relative z-10">
                  <div className="size-14 rounded-2xl bg-midnight text-gold flex items-center justify-center mb-4 group-hover:bg-gold-gradient group-hover:text-midnight transition-all duration-300">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-midnight mb-2 leading-tight">
                    {audience.title}
                  </h3>
                  <p className="text-midnight-600 leading-relaxed text-sm">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
