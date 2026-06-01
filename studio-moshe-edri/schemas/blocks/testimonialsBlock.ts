import { defineType, defineField } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const testimonialsBlock = defineType({
  name: "testimonialsBlock",
  title: "Testimonials - קיר הוכחות",
  type: "object",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "סיפורי הצלחה והמלצות",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "ההוכחה החריגה: לקוחות מרוצים מספרים",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 3,
      initialValue:
        "אין כמו לראות את החיוך חוזר לפנים של לקוחותינו. אנו גאים להציג חלק מסיפורי ההצלחה.",
    }),
    defineField({
      name: "testimonials",
      title: "המלצות מומלצות",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    defineField({
      name: "showAll",
      title: "הצג את כל ההמלצות (במקום הבחירה הידנית)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Testimonials", subtitle: title }),
  },
});
