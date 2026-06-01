import { defineType, defineField } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export const servicesGridBlock = defineType({
  name: "servicesGridBlock",
  title: "Services Grid - השירותים שלנו",
  type: "object",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "השירותים שלנו",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "פתרונות מימון מותאמים אישית לכל צורך",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 3,
      initialValue:
        "אנו מאמינים שלכל בעיה פיננסית יש פתרון, ואנו כאן כדי למצוא אותו עבורכם.",
    }),
    defineField({
      name: "services",
      title: "שירותים",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Services Grid", subtitle: title }),
  },
});
