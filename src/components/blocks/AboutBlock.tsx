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
        text: "משה אדרי הוא יועץ משכנתאות ומומחה מימון בעל שם ומוניטין, עם למעלה מ-11 שנות ניסיון בתחום. משה ידוע ביכולתו יוצאת הדופן לאשר תיקים מורכבים, למצוא פתרונות יצירתיים גם במקרים שנראים אבודים, ולחסוך ללקוחותיו מאות אלפי שקלים.",
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
        text: "הוא בנה רשת קשרים ענפה עם בכירי המערכת הבנקאית וחברות המימון, מה שמאפשר לו להשיג תנאים מועדפים ואישורים חריגים. משה מאמין שלכל אדם מגיע שקט כלכלי, והוא מחויב ללוות כל לקוח באופן אישי, במקצועיות חסרת פשרות ובשירות בוטיק.",
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
            <div className="absolute -inset-4 bg-gold-gradient rounded-3xl blur-2xl opacity-20" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-gold/30 bg-gradient-to-br from-midnight to-midnight-700 shadow-2xl">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="size-40 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center text-8xl shadow-gold">
                    👨‍💼
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2">
                    משה אדרי
                  </h3>
                  <p className="text-gold font-bold text-lg">
                    יועץ משכנתאות מומחה
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold">
                    <Award className="size-4 text-gold" />
                    11+ שנות ניסיון
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
              {data.heading || "הקוסם הפיננסי שמאחורי ההצלחה שלכם"}
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
