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
      initialValue: "נחנקים מהמשכנתא? מסורבים בבנק?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "טקסט מודגש בזהב",
      type: "string",
      initialValue: "משה אדרי: הקוסם הפיננסי",
    }),
    defineField({
      name: "subheadline",
      title: "כותרת משנה",
      type: "text",
      rows: 3,
      initialValue:
        "אל תהיו פראיירים של הבנק! מאות משפחות כבר חסכו מאות אלפי שקלים וקיבלו אישור גם כשכולם אמרו לא.",
    }),
    defineField({
      name: "floatingBadge",
      title: "באדג' צף (חיסכון השבוע)",
      type: "string",
      initialValue: 'חסכתי 270,000 ש"ח השבוע!',
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
      name: "image",
      title: "תמונה של משה אדרי",
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
