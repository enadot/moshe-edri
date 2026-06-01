import { Suspense } from "react";
import { RenderBlocks, type Block } from "@/components/RenderBlocks";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";

const DEFAULT_BLOCKS: Block[] = [
  {
    _type: "heroBlock",
    _key: "hero-default",
    showQuickForm: true,
  } as Block,
  {
    _type: "trustBarBlock",
    _key: "trust-default",
  } as Block,
  {
    _type: "whoWeHelpBlock",
    _key: "who-default",
    eyebrow: "למי אנחנו עוזרים",
    heading: "נחנקתם מההחזרים? הבנק סגר לכם דלת?",
    description:
      "אנו מבינים את הקשיים הפיננסיים ואת התסכול מול המערכת הבנקאית. משה אדרי וצוותו מתמחים במתן פתרונות מותאמים אישית.",
  } as Block,
  {
    _type: "servicesGridBlock",
    _key: "services-default",
    eyebrow: "השירותים שלנו",
    heading: "פתרונות מימון מותאמים אישית לכל צורך",
    description:
      "אנו מאמינים שלכל בעיה פיננסית יש פתרון, ואנו כאן כדי למצוא אותו עבורכם.",
  } as Block,
  {
    _type: "wizardEdgeBlock",
    _key: "wizard-default",
    eyebrow: "למה משה אדרי?",
    heading: "דלת שנסגרת נפתחת",
    description:
      "11 שנות ניסיון, מקצוענות חסרת פשרות וקשרים ישירים עם מנכ\"לים ובכירים בעולם המימון",
  } as Block,
  {
    _type: "testimonialsBlock",
    _key: "test-default",
    eyebrow: "סיפורי הצלחה",
    heading: "ההוכחה החריגה: לקוחות מרוצים מספרים",
    description:
      "אין כמו לראות את החיוך חוזר לפנים של לקוחותינו. אנו גאים להציג חלק מסיפורי ההצלחה.",
  } as Block,
  {
    _type: "aboutBlock",
    _key: "about-default",
    eyebrow: "אודות משה אדרי",
    heading: "הקוסם הפיננסי שמאחורי ההצלחה שלכם",
  } as Block,
  {
    _type: "faqBlock",
    _key: "faq-default",
    eyebrow: "שאלות נפוצות",
    heading: "כל מה שרציתם לדעת על משכנתאות",
  } as Block,
  {
    _type: "ctaBlock",
    _key: "cta-default",
    heading: "הצעד הראשון לשקט כלכלי מתחיל כאן",
    description:
      "אל תחכו עוד רגע! צרו קשר עוד היום וקבלו ייעוץ ראשוני ללא עלות וללא התחייבות.",
    ctaLabel: "לקבלת ייעוץ חינם",
    style: "midnight",
  } as Block,
];

async function getHomePage() {
  try {
    const { data } = await sanityFetch({
      query: HOMEPAGE_QUERY,
      tags: ["page", "homepage"],
    });
    return data;
  } catch (error) {
    console.error("[HOME] Failed to fetch from Sanity, using fallback", error);
    return null;
  }
}

export default async function HomePage() {
  const page = await getHomePage();
  const blocks: Block[] = page?.blocks?.length ? page.blocks : DEFAULT_BLOCKS;

  return (
    <Suspense fallback={null}>
      <RenderBlocks blocks={blocks} />
    </Suspense>
  );
}
