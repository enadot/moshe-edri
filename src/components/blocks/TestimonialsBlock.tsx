"use client";

import { Quote, Star, Play, MessageCircle } from "lucide-react";

type Testimonial = {
  _id: string;
  name?: string;
  role?: string;
  quote?: string;
  savings?: string;
  category?: string;
  type?: "text" | "video" | "whatsapp";
  videoUrl?: string;
};

export type TestimonialsBlockData = {
  _type: "testimonialsBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
};

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "t1",
    name: "משפחת כהן",
    role: "תל אביב",
    quote:
      "ייעוץ מקצועי ויעיל. אחרי ששני בנקים סירבו, משה השיג לנו אישור תוך 3 ימים בתנאים טובים יותר ממה שציפינו.",
    savings: "₪270,000",
    category: "refinance",
    type: "text",
  },
  {
    _id: "t2",
    name: "דוד לוי",
    role: "ירושלים",
    quote:
      "היו לי 7 הלוואות שונות והרגשתי לחוץ. משה ביצע איחוד חכם והוריד את ההחזר החודשי ב-3,500 ₪. שירות מעולה.",
    savings: "₪3,500/חודש",
    category: "consolidation",
    type: "text",
  },
  {
    _id: "t3",
    name: "רחל ויעקב",
    role: "חיפה",
    quote:
      "בנינו עם משה את התמהיל הראשון של המשכנתא. ההכוונה והליווי היו ברמה גבוהה - תמיד הרגשנו שיש מי שמטפל בנו.",
    savings: "תמהיל אופטימלי",
    category: "first",
    type: "video",
    videoUrl: "https://example.com/video1",
  },
  {
    _id: "t4",
    name: "אבי שמש",
    role: "פתח תקווה",
    quote:
      "סורבתי בשלושה בנקים. משה לקח את התיק, ותוך שבועיים קיבלתי אישור על משכנתא ב-90% מימון. ממליץ בחום.",
    savings: "אישור 90%",
    category: "rejected",
    type: "whatsapp",
  },
  {
    _id: "t5",
    name: "משפחת אזולאי",
    role: "באר שבע",
    quote:
      "מיחזרנו את המשכנתא עם משה ונחסכו לנו 180,000 ש\"ח לאורך התקופה. תהליך נעים, מקצועי וענייני.",
    savings: "₪180,000",
    category: "refinance",
    type: "text",
  },
  {
    _id: "t6",
    name: "יואב כץ",
    role: "ראשון לציון",
    quote:
      "ייעוץ אישי, ענייני ומדויק. משה הציע פתרון שלא חשבנו עליו. תוצאות עסקיות שיוצרות הבדל אמיתי.",
    savings: "פתרון מותאם",
    category: "first",
    type: "text",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  const isVideo = t.type === "video";
  const isWhatsapp = t.type === "whatsapp";

  return (
    <div className="relative bg-white rounded-3xl border border-midnight-100 p-7 hover:border-gold/40 hover:shadow-soft transition-all duration-300 group">
      <div className="flex items-start justify-between mb-5">
        <Quote className="size-7 text-gold/30" strokeWidth={1.5} />
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              className="size-3.5 fill-gold text-gold"
            />
          ))}
        </div>
      </div>

      {isVideo && (
        <div className="absolute top-5 left-5 size-9 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center">
          <Play
            className="size-3.5 text-orange fill-orange mr-0.5"
            strokeWidth={2}
          />
        </div>
      )}

      {isWhatsapp && (
        <div className="absolute top-5 left-5 size-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
          <MessageCircle className="size-4 text-[#25D366]" strokeWidth={2} />
        </div>
      )}

      <blockquote className="text-midnight-700 leading-relaxed mb-6 text-[15px]">
        {t.quote}
      </blockquote>

      <div className="flex items-center justify-between pt-5 border-t border-midnight-100">
        <div>
          <div className="font-semibold text-midnight text-sm">{t.name}</div>
          {t.role && (
            <div className="text-xs text-midnight-500 mt-0.5">{t.role}</div>
          )}
        </div>
        {t.savings && (
          <div className="text-left">
            <div className="text-[10px] text-midnight-500 uppercase tracking-wide">
              חסכון
            </div>
            <div className="text-gold-700 font-bold text-sm">{t.savings}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TestimonialsBlock({ data }: { data: TestimonialsBlockData }) {
  const testimonials =
    data.testimonials && data.testimonials.length > 0
      ? data.testimonials
      : FALLBACK_TESTIMONIALS;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
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
            {data.heading || "לקוחות מספרים"}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t._id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
