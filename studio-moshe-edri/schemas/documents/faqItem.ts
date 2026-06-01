import { defineType, defineField } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faqItem = defineType({
  name: "faqItem",
  title: "שאלה נפוצה",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      title: "שאלה",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "תשובה",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "קטגוריה",
      type: "string",
      options: {
        list: [
          { title: "כללי", value: "general" },
          { title: "מיחזור משכנתא", value: "refinance" },
          { title: "מסורבי בנק", value: "rejected" },
          { title: "איחוד הלוואות", value: "consolidation" },
        ],
      },
      initialValue: "general",
    }),
    defineField({
      name: "order",
      title: "סדר תצוגה",
      type: "number",
      initialValue: 0,
    }),
  ],
});
