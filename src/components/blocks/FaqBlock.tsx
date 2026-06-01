"use client";

import { HelpCircle } from "lucide-react";
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
      'מיחזור משכנתא הוא תהליך שבו אנו "סוגרים" את המשכנתא הקיימת ולוקחים חדשה בתנאים אטרקטיביים יותר. כדאי לבצע מיחזור כשיש שינוי בריביות בשוק, שינוי ביכולות הפיננסיות שלכם, או כשרוצים לקצר/להאריך תקופה. בדיקת ההיתכנות אצלנו - חינם!',
  },
  {
    _id: "f2",
    question: "האם ניתן לקבל משכנתא גם אם סורבתי בבנק אחר?",
    answer:
      "בהחלט כן! זו אחת המומחיות המרכזיות שלנו. בזכות קשרים ישירים עם בכירי המערכת הבנקאית וחברות המימון, אנו פותחים דלתות שנסגרו ומציאים פתרונות יצירתיים גם למקרים מורכבים. מאות לקוחות שסורבו קיבלו אצלנו אישור.",
  },
  {
    _id: "f3",
    question: "מה ההבדל בין יועץ משכנתאות פרטי ליועץ בנקאי?",
    answer:
      'יועץ בנקאי מייצג את הבנק ומציע את המוצרים של אותו בנק בלבד. יועץ פרטי כמוני מייצג אתכם - מנהל מו"מ מול כל הבנקים, משווה תנאים, ומשיג עבורכם את התמהיל הטוב ביותר. החסכון הוא לרוב עשרות עד מאות אלפי שקלים.',
  },
  {
    _id: "f4",
    question: "כמה עולה ייעוץ משכנתאות אצל משה אדרי?",
    answer:
      "הייעוץ הראשוני - חינם וללא התחייבות. רק לאחר שנציג לכם בדיוק כמה אפשר לחסוך, נדבר על תמורה. שיטת העבודה שלנו מבוססת על הצלחה - אם לא חסכנו לכם כסף, לא תשלמו.",
  },
  {
    _id: "f5",
    question: "מהו איחוד הלוואות ואיך הוא יכול לעזור לי?",
    answer:
      "איחוד הלוואות הוא תהליך שבו כל ההלוואות הקטנות שלכם (אשראי, הלוואות בנקאיות, חוב כרטיסי אשראי) הופכות להלוואה אחת בתנאים טובים יותר. התוצאה: החזר חודשי נמוך משמעותית, חיסכון בעלויות מימון, ושקט נפשי.",
  },
  {
    _id: "f6",
    question: "כמה זמן לוקח התהליך?",
    answer:
      "תלוי בסוג הבקשה. ייעוץ ראשוני - שיחה של 30 דקות. ניתוח תיק מלא - 2-3 ימי עבודה. אישור עקרוני - בדרך כלל תוך שבוע. סגירת תהליך מלא של מיחזור - 4-6 שבועות בממוצע. אנו מלווים אתכם בכל שלב.",
  },
];

export function FaqBlock({ data }: { data: FaqBlockData }) {
  const items =
    data.items && data.items.length > 0 ? data.items : FALLBACK_FAQ;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-midnight-50/30 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div
            data-gsap="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 text-gold-700 text-sm font-bold mb-4"
          >
            <HelpCircle className="size-4" />
            {data.eyebrow || "שאלות נפוצות"}
          </div>
          <h2
            data-gsap="fade-up"
            className="text-3xl md:text-5xl font-black text-midnight leading-tight"
          >
            {data.heading || "כל מה שרציתם לדעת"}
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
          <p className="text-midnight-600 mb-4">לא מצאת תשובה לשאלתך?</p>
          <Button asChild variant="orange" size="lg">
            <a href="#quick-form">צור קשר עכשיו</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
