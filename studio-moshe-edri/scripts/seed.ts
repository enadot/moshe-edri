/* eslint-disable no-console */
import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env") });
config({ path: resolve(process.cwd(), ".env.local") });

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "480qx32k";
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "\n❌ Missing SANITY_WRITE_TOKEN.\n\n" +
      "1. Open https://www.sanity.io/manage/project/" +
      projectId +
      "/api\n" +
      "2. Create a new API token with 'Editor' permission\n" +
      "3. Add it to .env.local in studio-moshe-edri:\n\n" +
      "   SANITY_WRITE_TOKEN=sk...\n"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const ID = {
  siteSettings: "siteSettings",
  page: {
    home: "page-home",
  },
  service: {
    refinance: "service-refinance",
    rejected: "service-rejected",
    consolidation: "service-consolidation",
    purpose: "service-purpose",
    pricedwelling: "service-pricedwelling",
    business: "service-business",
  },
  testimonial: {
    cohen: "testimonial-cohen",
    levi: "testimonial-levi",
    rachelandyaakov: "testimonial-rachel",
    shemesh: "testimonial-shemesh",
    azoulay: "testimonial-azoulay",
    katz: "testimonial-katz",
  },
  faq: {
    refinance: "faq-refinance",
    rejected: "faq-rejected",
    consultant: "faq-consultant",
    cost: "faq-cost",
    consolidation: "faq-consolidation",
    time: "faq-time",
  },
};

type Doc = Record<string, unknown> & { _id: string; _type: string };

const block = (text: string) => ({
  _type: "block",
  _key: Math.random().toString(36).slice(2, 10),
  style: "normal",
  children: [
    {
      _type: "span",
      _key: Math.random().toString(36).slice(2, 10),
      text,
      marks: [],
    },
  ],
  markDefs: [],
});

const docs: Doc[] = [
  {
    _id: ID.siteSettings,
    _type: "siteSettings",
    siteName: "משה אדרי - יועץ משכנתאות",
    phone: "077-340-2800",
    mobile: "052-716-1611",
    whatsappNumber: "972552623044",
    whatsappMessage:
      "היי, אשמח לקבל פרטים על ייעוץ המשכנתאות של משה אדרי. הגעתי דרך האתר.",
  },

  {
    _id: ID.service.refinance,
    _type: "service",
    title: "מיחזור משכנתא",
    slug: { _type: "slug", current: "refinance" },
    icon: "refresh-cw",
    order: 1,
    shortDescription:
      "ניתוח המשכנתא הקיימת, השוואה לתנאי השוק העדכניים ובניית תמהיל שיחסוך לכם עשרות עד מאות אלפי שקלים על פני התקופה.",
    highlights: ["ניתוח מקצועי", "השוואת תנאים", "תמהיל מותאם אישית"],
  },
  {
    _id: ID.service.rejected,
    _type: "service",
    title: "משכנתא למסורבים",
    slug: { _type: "slug", current: "rejected" },
    icon: "x-circle",
    order: 2,
    shortDescription:
      "התמחות במציאת פתרונות מימון למקרים מורכבים. כשבנק אחד סירב - יש דרכים נוספות, ואנחנו יודעים איך לבנות את התיק נכון.",
    highlights: ["פתרונות מותאמים", "ניסיון בתיקים מורכבים", "ליווי צמוד"],
  },
  {
    _id: ID.service.consolidation,
    _type: "service",
    title: "איחוד הלוואות",
    slug: { _type: "slug", current: "consolidation" },
    icon: "layers",
    order: 3,
    shortDescription:
      "איחוד מספר הלוואות להלוואה אחת בתנאים טובים יותר. הפחתת ההחזר החודשי, חיסכון בעלויות מימון ושקט נפשי.",
    highlights: ["הפחתת החזר חודשי", "תנאים משופרים", "סדר פיננסי"],
  },
  {
    _id: ID.service.purpose,
    _type: "service",
    title: "משכנתא לכל מטרה",
    slug: { _type: "slug", current: "purpose" },
    icon: "banknote",
    order: 4,
    shortDescription:
      "מימון עבור שיפוץ, הרחבה, רכישה נוספת או כל מטרה אחרת, תוך ניצול הנכס הקיים בתנאים אטרקטיביים.",
    highlights: ["מימון גמיש", "תנאים אטרקטיביים", "מהיר ויעיל"],
  },
  {
    _id: ID.service.pricedwelling,
    _type: "service",
    title: "מחיר למשתכן",
    slug: { _type: "slug", current: "price-for-resident" },
    icon: "home",
    order: 5,
    shortDescription:
      "ליווי מקצועי לרוכשי דירות במסגרת תוכנית מחיר למשתכן - משלב ההגרלה ועד קבלת המפתח.",
    highlights: ["מההגרלה למפתח", "ליווי מקצועי", "ניסיון מוכח"],
  },
  {
    _id: ID.service.business,
    _type: "service",
    title: "מימון לעסקים",
    slug: { _type: "slug", current: "business" },
    icon: "briefcase",
    order: 6,
    shortDescription:
      "פתרונות מימון מותאמים אישית לעסקים קטנים ובינוניים, להגשמת היעדים העסקיים והצמיחה.",
    highlights: ["אשראי מותאם", "ליווי מקצועי", "פתרונות יצירתיים"],
  },

  {
    _id: ID.testimonial.cohen,
    _type: "testimonial",
    name: "משפחת כהן",
    role: "תל אביב",
    quote:
      "ייעוץ מקצועי ויעיל. אחרי ששני בנקים סירבו, משה השיג לנו אישור תוך 3 ימים בתנאים טובים יותר ממה שציפינו.",
    savings: "₪270,000",
    category: "refinance",
    type: "text",
    featured: true,
  },
  {
    _id: ID.testimonial.levi,
    _type: "testimonial",
    name: "דוד לוי",
    role: "ירושלים",
    quote:
      "היו לי 7 הלוואות שונות והרגשתי לחוץ. משה ביצע איחוד חכם והוריד את ההחזר החודשי ב-3,500 ₪. שירות מעולה.",
    savings: "₪3,500/חודש",
    category: "consolidation",
    type: "text",
    featured: true,
  },
  {
    _id: ID.testimonial.rachelandyaakov,
    _type: "testimonial",
    name: "רחל ויעקב",
    role: "חיפה",
    quote:
      "בנינו עם משה את התמהיל הראשון של המשכנתא. ההכוונה והליווי היו ברמה גבוהה - תמיד הרגשנו שיש מי שמטפל בנו.",
    savings: "תמהיל אופטימלי",
    category: "first",
    type: "video",
    featured: true,
  },
  {
    _id: ID.testimonial.shemesh,
    _type: "testimonial",
    name: "אבי שמש",
    role: "פתח תקווה",
    quote:
      "סורבתי בשלושה בנקים. משה לקח את התיק, ותוך שבועיים קיבלתי אישור על משכנתא ב-90% מימון. ממליץ בחום.",
    savings: "אישור 90%",
    category: "rejected",
    type: "whatsapp",
    featured: true,
  },
  {
    _id: ID.testimonial.azoulay,
    _type: "testimonial",
    name: "משפחת אזולאי",
    role: "באר שבע",
    quote:
      'מיחזרנו את המשכנתא עם משה ונחסכו לנו 180,000 ש"ח לאורך התקופה. תהליך נעים, מקצועי וענייני.',
    savings: "₪180,000",
    category: "refinance",
    type: "text",
    featured: true,
  },
  {
    _id: ID.testimonial.katz,
    _type: "testimonial",
    name: "יואב כץ",
    role: "ראשון לציון",
    quote:
      "ייעוץ אישי, ענייני ומדויק. משה הציע פתרון שלא חשבנו עליו. תוצאות עסקיות שיוצרות הבדל אמיתי.",
    savings: "פתרון מותאם",
    category: "first",
    type: "text",
    featured: true,
  },

  {
    _id: ID.faq.refinance,
    _type: "faqItem",
    question: "מהו מיחזור משכנתא ומתי כדאי לבצע אותו?",
    answer: [
      block(
        "מיחזור משכנתא הוא תהליך שבו סוגרים את המשכנתא הקיימת ולוקחים חדשה בתנאים אטרקטיביים יותר. כדאי לשקול מיחזור כשיש שינוי בריביות בשוק, שינוי ביכולות הפיננסיות, או רצון לקצר או להאריך תקופה. בדיקת ההיתכנות אצלנו - ללא עלות."
      ),
    ],
    category: "refinance",
    order: 1,
  },
  {
    _id: ID.faq.rejected,
    _type: "faqItem",
    question: "האם ניתן לקבל משכנתא גם אם סורבתי בבנק אחר?",
    answer: [
      block(
        "כן, זוהי אחת ההתמחויות שלנו. בזכות עבודה ישירה עם בכירי המערכת הבנקאית וחברות המימון, אנו מצליחים למצוא פתרונות יצירתיים גם למקרים מורכבים. לקוחות רבים שסורבו קיבלו אצלנו אישור."
      ),
    ],
    category: "rejected",
    order: 2,
  },
  {
    _id: ID.faq.consultant,
    _type: "faqItem",
    question: "מה ההבדל בין יועץ משכנתאות פרטי ליועץ בנקאי?",
    answer: [
      block(
        'יועץ בנקאי מייצג את הבנק ומציע את המוצרים של אותו בנק בלבד. יועץ פרטי מייצג אתכם - מנהל מו"מ מול כל הבנקים, משווה תנאים, ומשיג את התמהיל המתאים ביותר עבורכם.'
      ),
    ],
    category: "general",
    order: 3,
  },
  {
    _id: ID.faq.cost,
    _type: "faqItem",
    question: "כמה עולה ייעוץ משכנתאות?",
    answer: [
      block(
        "הייעוץ הראשוני ללא עלות וללא התחייבות. רק לאחר שנציג את פוטנציאל החיסכון, נציג גם את התמורה למתן השירות."
      ),
    ],
    category: "general",
    order: 4,
  },
  {
    _id: ID.faq.consolidation,
    _type: "faqItem",
    question: "מהו איחוד הלוואות ואיך הוא יכול לעזור?",
    answer: [
      block(
        "איחוד הלוואות הוא תהליך שבו מספר הלוואות הופכות להלוואה אחת בתנאים טובים יותר. התוצאה: החזר חודשי נמוך משמעותית, חיסכון בעלויות מימון, וסדר פיננסי."
      ),
    ],
    category: "consolidation",
    order: 5,
  },
  {
    _id: ID.faq.time,
    _type: "faqItem",
    question: "כמה זמן לוקח התהליך?",
    answer: [
      block(
        "ייעוץ ראשוני - שיחה של כ-30 דקות. ניתוח תיק מלא - 2-3 ימי עבודה. אישור עקרוני - בדרך כלל תוך שבוע. סגירת תהליך מלא של מיחזור - 4-6 שבועות בממוצע, בליווי בכל שלב."
      ),
    ],
    category: "general",
    order: 6,
  },

  {
    _id: ID.page.home,
    _type: "page",
    title: "עמוד הבית",
    slug: { _type: "slug", current: "home" },
    seoTitle: "משה אדרי - יועץ משכנתאות מוביל בישראל",
    seoDescription:
      "ייעוץ משכנתאות, מיחזור, איחוד הלוואות ופתרונות לתיקים מורכבים. 11+ שנות ניסיון. ייעוץ ראשוני חינם.",
    blocks: [
      {
        _type: "heroBlock",
        _key: "hero1",
        headline: "נחנקים מהמשכנתא?",
        highlightText: "אנחנו נדאג שתחסכו.",
        subheadline:
          "מאות משפחות בישראל כבר חסכו מאות אלפי שקלים בעזרת ייעוץ מקצועי. בואו לבדוק כמה אתם יכולים לחסוך.",
        floatingBadge: "השבוע נחסך ללקוח: ₪270,000",
        ctaPrimary: { label: "בדיקת חיסכון חינם", href: "#quick-form" },
        ctaSecondary: { label: "שלחו וואטסאפ" },
        showQuickForm: true,
        stats: [
          { value: "11+", label: "שנות ניסיון" },
          { value: "500+", label: "תיקים שטופלו" },
          { value: "₪50M+", label: "סך חיסכון ללקוחות" },
        ],
      },
      {
        _type: "trustBarBlock",
        _key: "trust1",
        heading: "אנחנו עובדים מול כל הבנקים וגופי המימון בישראל",
      },
      {
        _type: "whoWeHelpBlock",
        _key: "who1",
        eyebrow: "למי השירות מתאים",
        heading: "נחנקים מההחזרים? הבנק סגר דלת?",
        description:
          "אנו מבינים את הקשיים הפיננסיים ואת התסכול מול המערכת הבנקאית. משה אדרי וצוותו מתמחים במתן פתרונות מותאמים אישית.",
      },
      {
        _type: "servicesGridBlock",
        _key: "services1",
        eyebrow: "השירותים שלנו",
        heading: "פתרונות מימון מותאמים אישית",
        description:
          "לכל בעיה פיננסית יש פתרון. אנחנו כאן כדי למצוא אותו עבורכם.",
        services: Object.values(ID.service).map((id) => ({
          _type: "reference",
          _ref: id,
          _key: id,
        })),
      },
      {
        _type: "wizardEdgeBlock",
        _key: "wizard1",
        eyebrow: "למה דווקא איתנו",
        heading: "ניסיון, קשרים ושירות אישי",
        description:
          "11+ שנות ניסיון בייעוץ משכנתאות, עבודה ישירה מול בכירי הבנקים, וליווי אישי לכל לקוח.",
      },
      {
        _type: "testimonialsBlock",
        _key: "test1",
        eyebrow: "לקוחות מספרים",
        heading: "ההוכחה: לקוחות שחסכו",
        description: "סיפורי הצלחה אמיתיים של לקוחות שעבדו איתנו.",
        testimonials: Object.values(ID.testimonial).map((id) => ({
          _type: "reference",
          _ref: id,
          _key: id,
        })),
      },
      {
        _type: "aboutBlock",
        _key: "about1",
        eyebrow: "אודות",
        heading: "המומחה שמלווה אתכם לעסקה חכמה יותר",
        body: [
          block(
            "משה אדרי הוא יועץ משכנתאות ומומחה מימון עם למעלה מ-11 שנות ניסיון בתחום. הוא מתמחה באישור תיקים מורכבים, מציאת פתרונות מותאמים אישית גם במקרים מאתגרים, וחיסכון משמעותי ללקוחות במיחזור משכנתאות."
          ),
          block(
            "משה בנה קשרים מקצועיים עם בכירי המערכת הבנקאית וחברות המימון, מה שמאפשר לו להשיג תנאים מועדפים ללקוחותיו. הוא מאמין בליווי אישי, מקצועיות ושקיפות מלאה לכל אורך הדרך."
          ),
        ],
        keyPoints: [
          {
            title: "11+ שנות ניסיון",
            description: "מומחיות במימון ומשכנתאות",
          },
          {
            title: "פילוסופיה אישית",
            description: "לכל בעיה פיננסית יש פתרון",
          },
          {
            title: "הישגים מוכחים",
            description: "מאות אלפי שקלים שנחסכו",
          },
          {
            title: "ערכים",
            description: "מקצועיות, יושרה, שירות אישי",
          },
        ],
      },
      {
        _type: "faqBlock",
        _key: "faq1",
        eyebrow: "שאלות נפוצות",
        heading: "כל מה שרציתם לדעת",
        items: Object.values(ID.faq).map((id) => ({
          _type: "reference",
          _ref: id,
          _key: id,
        })),
      },
      {
        _type: "ctaBlock",
        _key: "cta1",
        heading: "הצעד הראשון לעסקה חכמה",
        description:
          "ייעוץ ראשוני ללא עלות וללא התחייבות. נחזור אליכם תוך שעה.",
        ctaLabel: "לקבלת ייעוץ חינם",
        ctaHref: "#quick-form",
        style: "midnight",
      },
    ],
  },
];

async function run() {
  console.log(
    `\n🌱 Seeding ${docs.length} documents to ${projectId}/${dataset}...\n`
  );

  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc as never);
  }

  try {
    await tx.commit();
    console.log("✅ Seed complete!\n");
    console.log(
      `   Open the studio: http://localhost:3333\n` +
        `   Visit your site:  http://localhost:3000\n`
    );
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
}

run();
