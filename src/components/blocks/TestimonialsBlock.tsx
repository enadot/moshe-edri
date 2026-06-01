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
      "משה אדרי פשוט הציל אותנו! לא האמנו שאפשר לצאת מהמצב הזה. אחרי שניים מהבנקים סירבו, משה השיג לנו אישור תוך 3 ימים בתנאים מצוינים.",
    savings: "₪270,000",
    category: "refinance",
    type: "text",
  },
  {
    _id: "t2",
    name: "דוד לוי",
    role: "ירושלים",
    quote:
      "היו לי 7 הלוואות שונות והייתי נחנק. משה עשה איחוד חכם והוריד לי את ההחזר החודשי ב-3,500 ₪. הוא קוסם!",
    savings: "₪3,500 לחודש",
    category: "consolidation",
    type: "text",
  },
  {
    _id: "t3",
    name: "רחל ויעקב",
    role: "חיפה",
    quote:
      "בנינו עם משה את התמהיל הראשון של המשכנתא. ההכוונה והליווי היו מעבר לכל דמיון. הרגשנו שיש לנו 'איש פנימי' בבנק.",
    savings: "אישור חריג",
    category: "first",
    type: "video",
    videoUrl: "https://example.com/video1",
  },
  {
    _id: "t4",
    name: "אבי שמש",
    role: "פתח תקווה",
    quote:
      "סורבתי בשלושה בנקים. משה לקח את התיק, ותוך שבועיים קיבלתי אישור על משכנתא ב-90% מימון. עד היום לא מאמין שזה אמיתי.",
    savings: "אישור 90%",
    category: "rejected",
    type: "whatsapp",
  },
  {
    _id: "t5",
    name: "משפחת אזולאי",
    role: "באר שבע",
    quote:
      'מיחזרנו את המשכנתא עם משה והוא חסך לנו 180,000 ש"ח על כל התקופה. שירות הפתחה, מקצועיות, ואכפתיות אמיתית.',
    savings: "₪180,000",
    category: "refinance",
    type: "text",
  },
  {
    _id: "t6",
    name: "יואב כץ",
    role: "ראשון לציון",
    quote:
      "ייעוץ מקצועי, אישי, ומדויק. משה תפר לנו פתרון שאף יועץ אחר לא חשב עליו. ממליצים בחום!",
    savings: "מומלץ",
    category: "first",
    type: "text",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  const isVideo = t.type === "video";
  const isWhatsapp = t.type === "whatsapp";

  return (
    <div className="relative bg-white rounded-3xl border-2 border-midnight-100 p-6 md:p-7 hover:border-gold transition-all hover:shadow-xl hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className="size-12 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
          <Quote className="size-6 text-midnight" />
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} className="size-4 fill-gold text-gold" />
          ))}
        </div>
      </div>

      {isVideo && (
        <div className="absolute top-4 left-4 size-10 rounded-full bg-orange flex items-center justify-center shadow-orange cursor-pointer group-hover:scale-110 transition-transform">
          <Play className="size-5 text-white fill-white mr-0.5" />
        </div>
      )}

      {isWhatsapp && (
        <div className="absolute top-4 left-4 size-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
          <MessageCircle className="size-5 text-white" />
        </div>
      )}

      <blockquote className="text-midnight-700 leading-relaxed mb-5 text-sm md:text-base">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center justify-between pt-4 border-t border-midnight-100">
        <div>
          <div className="font-extrabold text-midnight">{t.name}</div>
          {t.role && <div className="text-xs text-midnight-500">{t.role}</div>}
        </div>
        {t.savings && (
          <div className="bg-orange/10 border border-orange/30 px-3 py-1 rounded-full">
            <span className="text-orange font-extrabold text-sm">
              חסך {t.savings}
            </span>
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
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
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
            {data.heading || "ההוכחה החריגה: לקוחות מרוצים מספרים"}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t._id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
