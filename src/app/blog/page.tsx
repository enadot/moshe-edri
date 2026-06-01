import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBlock } from "@/components/blocks/CtaBlock";

export const metadata: Metadata = {
  title: "בלוג - טיפים, מאמרים וידע על משכנתאות",
  description:
    "מאמרים מקצועיים על מיחזור משכנתא, איחוד הלוואות, פתרונות למסורבי בנק ועוד. ידע ששווה לכם מיליונים.",
};

const articles = [
  {
    slug: "save-270000-shekels-with-refinance",
    title: "אולי זכית ב-270,000 שקל?! איך מיחזור משכנתא מדויק יכול להדהים גם את הבנק?",
    excerpt:
      'סיפור אמיתי על איך חסכנו ללקוח 270 אלף ש"ח דרך מיחזור חכם. המהלך שעשינו, הטעויות שלמדנו ואיך גם אתם יכולים ליהנות מחיסכון דרמטי.',
    date: "2025-12-20",
    readTime: "5 דק׳",
  },
  {
    slug: "rejected-mortgage-solutions",
    title: "מסורב משכנתא? לא אצלנו! הדרך לאישור חריג גם כשכולם אומרים לא",
    excerpt:
      "טכניקות וכלים שמשתמשים בהם כדי לפתור תיקים שסורבו. מתי כדאי לערער, איך לבנות תיק חזק, ולמה הקשרים שלנו עושים את ההבדל.",
    date: "2025-12-15",
    readTime: "7 דק׳",
  },
  {
    slug: "loan-consolidation-guide",
    title: "נחנקים מהלוואות? המדריך המלא לאיחוד הלוואות שיחזיר לכם את השקט",
    excerpt:
      "כל מה שצריך לדעת על איחוד הלוואות: מתי זה כדאי, איך לעשות את זה נכון, ואיך לחסוך אלפי שקלים בחודש.",
    date: "2025-12-10",
    readTime: "8 דק׳",
  },
  {
    slug: "renovation-mortgage",
    title: "משכנתא לשיפוץ והרחבה: כל מה שצריך לדעת לפני שמתחילים",
    excerpt:
      "מימון לשיפוץ הבית. ההבדלים בין משכנתא רגילה למשכנתא לשיפוץ, התנאים האופטימליים, וטיפים לחסכון.",
    date: "2025-12-05",
    readTime: "6 דק׳",
  },
  {
    slug: "price-for-resident-guide",
    title: "מחיר למשתכן: המדריך המלא לזכאים ולרוכשים",
    excerpt:
      "תוכנית מחיר למשתכן הסבר מלא: מי זכאי, איך להירשם להגרלה, ומה השלבים מההכנה ועד קבלת המפתח.",
    date: "2025-11-28",
    readTime: "10 דק׳",
  },
  {
    slug: "fixed-vs-variable-interest",
    title: "האם כדאי לקחת משכנתא עם ריבית קבועה או משתנה?",
    excerpt:
      "הדילמה הקלאסית של כל מי שלוקח משכנתא. ניתוח מעמיק של היתרונות והחסרונות של כל אופציה במציאות הנוכחית.",
    date: "2025-11-20",
    readTime: "6 דק׳",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-midnight-gradient text-white py-16 md:py-24 relative overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-4">
            בלוג
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-gold-gradient">כסף חכם</span>
            <br />
            ידע ששווה לכם מיליונים
          </h1>
          <p className="text-lg md:text-xl text-midnight-100 max-w-2xl mx-auto">
            מאמרים מקצועיים, טיפים מעשיים וניתוחים מעמיקים על עולם המשכנתאות
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            data-gsap="stagger-children"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-3xl border-2 border-midnight-100 overflow-hidden hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-midnight to-midnight-700 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    📰
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-midnight-500 mb-3">
                    <Calendar className="size-4" />
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-midnight mb-3 leading-tight group-hover:text-orange transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-midnight-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-orange font-extrabold">
                    <Link href={`/blog/${article.slug}`}>
                      קרא עוד
                      <ArrowLeft className="size-4 mr-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        data={{
          _type: "ctaBlock",
          _key: "cta-blog",
          heading: "ידע זה כוח - אבל פעולה היא כסף",
          description:
            "קרא, למד, ואז קח את הצעד הבא. ייעוץ ראשוני חינם וללא התחייבות.",
          style: "midnight",
        }}
      />
    </>
  );
}
