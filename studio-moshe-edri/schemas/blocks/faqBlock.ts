import { defineType, defineField } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faqBlock = defineType({
  name: "faqBlock",
  title: "FAQ - שאלות נפוצות",
  type: "object",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "שאלות נפוצות",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "כל מה שרציתם לדעת על משכנתאות ומימון",
    }),
    defineField({
      name: "items",
      title: "שאלות",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqItem" }] }],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "FAQ", subtitle: title }),
  },
});
