import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const aboutBlock = defineType({
  name: "aboutBlock",
  title: "About - אודות משה אדרי",
  type: "object",
  icon: UserIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "אודות משה אדרי",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "המומחה שמלווה אתכם לעסקה חכמה יותר",
    }),
    defineField({
      name: "body",
      title: "תוכן",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "תמונה",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "keyPoints",
      title: "נקודות מרכזיות",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "כותרת" },
            { name: "description", type: "string", title: "תיאור" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "About", subtitle: title }),
  },
});
