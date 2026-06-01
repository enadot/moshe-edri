import { defineType, defineField } from "sanity";

export const differentiator = defineType({
  name: "differentiator",
  title: "יתרון",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "אייקון (Lucide name)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "כותרת",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 2,
    }),
  ],
});
