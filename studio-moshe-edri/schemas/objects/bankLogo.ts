import { defineType, defineField } from "sanity";

export const bankLogo = defineType({
  name: "bankLogo",
  title: "לוגו בנק",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "שם הבנק",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "לוגו (SVG/PNG)",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "קישור (אופציונלי)",
      type: "url",
    }),
  ],
});
