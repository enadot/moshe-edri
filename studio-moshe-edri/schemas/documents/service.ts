import { defineType, defineField } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "שירות",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      title: "שם השירות",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "כתובת URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "icon",
      title: "אייקון (Lucide name)",
      type: "string",
      description: "שם אייקון מ-Lucide: home, banknote, refresh-cw, users וכו'",
      initialValue: "home",
    }),
    defineField({
      name: "shortDescription",
      title: "תיאור קצר",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "longDescription",
      title: "תיאור מלא",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "highlights",
      title: "נקודות מרכזיות",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "סדר תצוגה",
      type: "number",
      initialValue: 0,
    }),
  ],
});
