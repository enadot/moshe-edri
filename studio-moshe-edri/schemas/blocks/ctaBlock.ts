import { defineType, defineField } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA - קריאה לפעולה",
  type: "object",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "הצעד הראשון לשקט כלכלי מתחיל כאן",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 3,
      initialValue:
        "אל תחכו עוד רגע! צרו קשר עוד היום וקבלו ייעוץ ראשוני ללא עלות וללא התחייבות.",
    }),
    defineField({
      name: "ctaLabel",
      title: "טקסט הכפתור",
      type: "string",
      initialValue: "לקבלת ייעוץ חינם",
    }),
    defineField({
      name: "ctaHref",
      title: "קישור",
      type: "string",
      initialValue: "#contact",
    }),
    defineField({
      name: "style",
      title: "סגנון",
      type: "string",
      options: {
        list: [
          { title: "כהה (Midnight)", value: "midnight" },
          { title: "זהב (Gold)", value: "gold" },
          { title: "כתום (Orange)", value: "orange" },
        ],
      },
      initialValue: "midnight",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "CTA", subtitle: title }),
  },
});
