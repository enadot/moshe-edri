import { defineType, defineField } from "sanity";
import { SparklesIcon } from "@sanity/icons";

export const wizardEdgeBlock = defineType({
  name: "wizardEdgeBlock",
  title: "Wizard Edge - היתרונות שלנו",
  type: "object",
  icon: SparklesIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "למה משה אדרי?",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "דלת שנסגרת נפתחת: התוצאות שאחרים לא מכירים",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 4,
      initialValue:
        "משה אדרי הוא לא עוד יועץ משכנתאות. עם 11 שנות ניסיון, מקצוענות חסרת פשרות וקשרים ישירים עם מנכ\"לים ובכירים בעולם המימון, הוא משיג ללקוחותיו תנאים ואישורים שאחרים יכולים רק לחלום עליהם.",
    }),
    defineField({
      name: "differentiators",
      title: "יתרונות מרכזיים",
      type: "array",
      of: [{ type: "differentiator" }],
      initialValue: [
        {
          icon: "calendar-check",
          title: "11 שנות ניסיון",
          description: "מקצוענות מוכחת ומוניטין של הצלחות",
        },
        {
          icon: "link",
          title: "קשרים ישירים",
          description: 'גישה לבכירי הבנקים ומנכ"לי חברות המימון',
        },
        {
          icon: "key",
          title: "אין מסורבים",
          description: "פתרונות יצירתיים גם לתיקים המורכבים ביותר",
        },
        {
          icon: "trending-up",
          title: "חיסכון אדיר",
          description: "מאות אלפי שקלים שנשארים בכיס שלכם",
        },
        {
          icon: "shield-check",
          title: "שירות בוטיק",
          description: "ליווי אישי וצמוד לכל אורך התהליך",
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Wizard Edge", subtitle: title }),
  },
});
