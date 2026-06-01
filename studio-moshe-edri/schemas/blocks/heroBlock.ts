import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero - בלוק פתיחה",
  type: "object",
  icon: StarIcon,
  fields: [
    defineField({
      name: "headline",
      title: "כותרת ראשית",
      type: "string",
      initialValue: "נחנקים מהמשכנתא?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "טקסט מודגש בזהב",
      type: "string",
      initialValue: "אנחנו נדאג שתחסכו.",
    }),
    defineField({
      name: "subheadline",
      title: "כותרת משנה",
      type: "text",
      rows: 3,
      initialValue:
        "מאות משפחות בישראל כבר חסכו מאות אלפי שקלים בעזרת ייעוץ מקצועי. בואו לבדוק כמה אתם יכולים לחסוך.",
    }),
    defineField({
      name: "floatingBadge",
      title: "באדג' צף (חיסכון השבוע)",
      type: "string",
      initialValue: 'השבוע נחסך ללקוח: ₪270,000',
    }),
    defineField({
      name: "ctaPrimary",
      title: "כפתור ראשי",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "טקסט הכפתור" },
        { name: "href", type: "string", title: "קישור" },
      ],
      initialValue: {
        label: "בדוק כמה אתה יכול לחסוך עכשיו",
        href: "#quick-form",
      },
    }),
    defineField({
      name: "ctaSecondary",
      title: "כפתור משני (וואטסאפ)",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "טקסט הכפתור" },
      ],
      initialValue: { label: "שלח וואטסאפ" },
    }),
    defineField({
      name: "portrait",
      title: "תמונת משה אדרי (PNG עם רקע שקוף)",
      description: "תמונת דיוקן חתוכה עם רקע שקוף. מומלץ 800×1040.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "showQuickForm",
      title: "הצג טופס בדיקת בריאות משכנתא",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "stats",
      title: "סטטיסטיקות",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "ערך" },
            { name: "label", type: "string", title: "תווית" },
          ],
        },
      ],
      initialValue: [
        { value: "11+", label: "שנות ניסיון" },
        { value: "500+", label: "לקוחות מרוצים" },
        { value: "₪50M+", label: "נחסך ללקוחות" },
      ],
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Hero", subtitle: title }),
  },
});
