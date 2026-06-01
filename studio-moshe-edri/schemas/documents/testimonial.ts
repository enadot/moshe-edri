import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "המלצה",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "שם הלקוח",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "תיאור הלקוח (למשל: משפחת כהן, חיפה)",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "ציטוט",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "savings",
      title: 'סכום חיסכון (למשל: "270,000 ש"ח")',
      type: "string",
    }),
    defineField({
      name: "category",
      title: "קטגוריה",
      type: "string",
      options: {
        list: [
          { title: "מיחזור משכנתא", value: "refinance" },
          { title: "איחוד הלוואות", value: "consolidation" },
          { title: "מסורבי משכנתא", value: "rejected" },
          { title: "משכנתא ראשונה", value: "first" },
          { title: "מימון לעסקים", value: "business" },
        ],
      },
    }),
    defineField({
      name: "type",
      title: "סוג המלצה",
      type: "string",
      options: {
        list: [
          { title: "טקסט", value: "text" },
          { title: "וידאו", value: "video" },
          { title: "צילום מסך וואטסאפ", value: "whatsapp" },
        ],
        layout: "radio",
      },
      initialValue: "text",
    }),
    defineField({
      name: "videoUrl",
      title: "קישור לוידאו (YouTube/Vimeo)",
      type: "url",
      hidden: ({ document }) => document?.type !== "video",
    }),
    defineField({
      name: "image",
      title: "תמונה / צילום מסך",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "מומלץ (יוצג בעמוד הבית)",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
