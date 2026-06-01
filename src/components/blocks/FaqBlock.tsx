"use client";

import { PortableText, type PortableTextBlock } from "@portabletext/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type FaqItem = {
  _id: string;
  question?: string;
  answer?: PortableTextBlock[] | string;
};

export type FaqBlockData = {
  _type: "faqBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  items?: FaqItem[];
};

const FALLBACK_FAQ: FaqItem[] = [
  {
    _id: "f1",
    question: "מהו מיחזור משכנתא ומתי כדאי לבצע אותו?",
    answer:
      "מיחזור משכנתא הוא תהליך שבו סוגרים את המשכנתא הקיימת ולוקחים חדשה בתנאים אטרקטיביים יותר. כדאי לשקול מיחזור כשיש שינוי בריביות בשוק, שינוי ביכולות הפיננסיות, או רצון לקצר או להאריך תקופה. בדיקת ההיתכנות אצלנו - ללא עלות.",
  },
  {
    _id: "f2",
    question: "האם ניתן לקבל משכנתא גם אם סורבתי בבנק אחר?",
    answer:
      "כן, זוהי אחת ההתמחויות שלנו. בזכות עבודה ישירה עם בכירי המערכת הבנקאית וחברות המימון, אנו מצליחים למצוא פתרונות יצירתיים גם למקרים מורכבים. לקוחות רבים שסורבו קיבלו אצלנו אישור.",
  },
  {
    _id: "f3",
    question: "מה ההבדל בין יועץ משכנתאות פרטי ליועץ בנקאי?",
    answer:
      'יועץ בנקאי מייצג את הבנק ומציע את המוצרים של אותו בנק בלבד. יועץ פרטי מייצג אתכם - מנהל מו"מ מול כל הבנקים, משווה תנאים, ומשיג את התמהיל המתאים ביותר עבורכם.',
  },
  {
    _id: "f4",
    question: "כמה עולה ייעוץ משכנתאות?",
    answer:
      "הייעוץ הראשוני ללא עלות וללא התחייבות. רק לאחר שנציג את פוטנציאל החיסכון, נציג גם את התמורה למתן השירות.",
  },
  {
    _id: "f5",
    question: "מהו איחוד הלוואות ואיך הוא יכול לעזור?",
    answer:
      "איחוד הלוואות הוא תהליך שבו מספר הלוואות (אשראי, הלוואות בנקאיות, חוב כרטיסי אשראי) הופכות להלוואה אחת בתנאים טובים יותר. התוצאה: החזר חודשי נמוך משמעותית, חיסכון בעלויות מימון, וסדר פיננסי.",
  },
  {
    _id: "f6",
    question: "כמה זמן לוקח התהליך?",
    answer:
      "ייעוץ ראשוני - שיחה של כ-30 דקות. ניתוח תיק מלא - 2-3 ימי עבודה. אישור עקרוני - בדרך כלל תוך שבוע. סגירת תהליך מלא של מיחזור - 4-6 שבועות בממוצע, בליווי בכל שלב.",
  },
];

export function FaqBlock({ data }: { data: FaqBlockData }) {
  const items =
    data.items && data.items.length > 0 ? data.items : FALLBACK_FAQ;

  return (
    <section className="py-24 md:py-32 bg-midnight-50/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14 max-w-2xl mx-auto">
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
            className="font-display text-display-lg text-midnight"
          >
            {data.heading || "שאלות נפוצות"}
          </h2>
        </div>

        <div data-gsap="fade-up">
          <Accordion type="single" collapsible defaultValue={items[0]?._id}>
            {items.map((item) => (
              <AccordionItem key={item._id} value={item._id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : (
                    <PortableText value={item.answer || []} />
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div data-gsap="fade-up" className="text-center mt-10">
          <p className="text-midnight-500 text-sm mb-4">
            לא מצאתם תשובה לשאלתכם?
          </p>
          <Button asChild variant="default" size="lg" className="rounded-full">
            <a href="#quick-form">צרו קשר</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
