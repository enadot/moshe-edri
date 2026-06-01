"use client";

import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

type KeyPoint = {
  title?: string;
  description?: string;
};

export type AboutBlockData = {
  _type: "aboutBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  body?: PortableTextBlock[];
  keyPoints?: KeyPoint[];
};

const FALLBACK_BODY: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "1",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "1a",
        text: "משה אדרי הוא יועץ משכנתאות ומומחה מימון עם למעלה מ-11 שנות ניסיון בתחום. הוא מתמחה באישור תיקים מורכבים, מציאת פתרונות מותאמים אישית גם במקרים מאתגרים, וחיסכון משמעותי ללקוחות במיחזור משכנתאות.",
      },
    ],
  } as unknown as PortableTextBlock,
  {
    _type: "block",
    _key: "2",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "2a",
        text: "משה בנה קשרים מקצועיים עם בכירי המערכת הבנקאית וחברות המימון, מה שמאפשר לו להשיג תנאים מועדפים ללקוחותיו. הוא מאמין בליווי אישי, מקצועיות ושקיפות מלאה לכל אורך הדרך.",
      },
    ],
  } as unknown as PortableTextBlock,
];

const FALLBACK_POINTS: KeyPoint[] = [
  {
    title: "11+ שנות ניסיון",
    description: "מומחיות במימון ומשכנתאות עם מאות לקוחות מרוצים",
  },
  {
    title: "פילוסופיה אישית",
    description: "לכל בעיה פיננסית יש פתרון - אנחנו נמצא אותו",
  },
  {
    title: "הישגים מוכחים",
    description: "מאות אלפי שקלים נחסכו, אישור תיקים מורכבים",
  },
  {
    title: "ערכים",
    description: "מקצועיות, יושרה, שירות אישי ויצירתיות",
  },
];

const ICONS = [Award, Heart, TrendingUp, Users];

export function AboutBlock({ data }: { data: AboutBlockData }) {
  const body = data.body && data.body.length > 0 ? data.body : FALLBACK_BODY;
  const keyPoints =
    data.keyPoints && data.keyPoints.length > 0 ? data.keyPoints : FALLBACK_POINTS;

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-midnight-50/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-gsap="reveal-x" data-dir="right" className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a192f]">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.15) 0%, transparent 60%)",
                }}
              />

              <div className="relative h-full flex flex-col justify-between p-10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-gold tracking-wider uppercase mb-2">
                    <span className="size-1 rounded-full bg-gold" />
                    Personal
                  </div>
                  <div className="font-display text-sm text-white/40">
                    Moshe Adri
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1] mb-3">
                    משה
                    <br />
                    אדרי.
                  </h3>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                    <Award className="size-5 text-gold" strokeWidth={2} />
                    <span className="text-white/80 text-sm font-medium">
                      11+ שנות ניסיון
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-gsap="reveal-x" data-dir="left">
            {data.eyebrow && (
              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-700 text-sm font-bold mb-4">
                {data.eyebrow}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-black text-midnight mb-6 leading-tight">
              {data.heading || "המומחה שמלווה אתכם לעסקה חכמה יותר"}
            </h2>
            <div className="prose prose-lg max-w-none text-midnight-700 leading-relaxed mb-8 [&>p]:mb-4">
              <PortableText value={body} />
            </div>

            <div
              data-gsap="stagger-children"
              className="grid sm:grid-cols-2 gap-4"
            >
              {keyPoints.map((p, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border-2 border-midnight-100 hover:border-gold transition-colors"
                  >
                    <div className="size-10 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                      <Icon className="size-5 text-midnight" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-midnight mb-1 text-sm">
                        {p.title}
                      </h4>
                      <p className="text-midnight-600 text-xs leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
