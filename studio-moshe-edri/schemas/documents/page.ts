import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const page = defineType({
  name: "page",
  title: "עמוד",
  type: "document",
  icon: DocumentIcon,
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
      name: "seoTitle",
      title: "כותרת SEO",
      type: "string",
      description: "מומלץ עד 60 תווים",
    }),
    defineField({
      name: "seoDescription",
      title: "תיאור SEO",
      type: "text",
      rows: 3,
      description: "מומלץ עד 160 תווים",
    }),
    defineField({
      name: "blocks",
      title: "בלוקים של תוכן",
      type: "array",
      of: [
        { type: "heroBlock" },
        { type: "trustBarBlock" },
        { type: "servicesGridBlock" },
        { type: "wizardEdgeBlock" },
        { type: "testimonialsBlock" },
        { type: "faqBlock" },
        { type: "ctaBlock" },
        { type: "aboutBlock" },
        { type: "whoWeHelpBlock" },
      ],
    }),
  ],
});
