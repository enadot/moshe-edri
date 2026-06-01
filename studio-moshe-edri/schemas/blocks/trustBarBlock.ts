import { defineType, defineField } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons";

export const trustBarBlock = defineType({
  name: "trustBarBlock",
  title: "TrustBar - לוגואי בנקים",
  type: "object",
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "אנחנו עובדים מול כל הבנקים וגופי המימון בישראל",
    }),
    defineField({
      name: "logos",
      title: "לוגואי בנקים",
      type: "array",
      of: [{ type: "bankLogo" }],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "TrustBar", subtitle: title }),
  },
});
