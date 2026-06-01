import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const article = defineType({
  name: "article",
  title: "מאמר בבלוג",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "כותרת",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "כתובת URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "תקציר",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "תמונת קאבר",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "תוכן",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "publishedAt",
      title: "תאריך פרסום",
      type: "datetime",
    }),
  ],
});
