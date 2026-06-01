import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "הגדרות אתר",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "שם האתר",
      type: "string",
      initialValue: "משה אדרי - יועץ משכנתאות",
    }),
    defineField({
      name: "phone",
      title: "טלפון משרד",
      type: "string",
      initialValue: "077-340-2800",
    }),
    defineField({
      name: "mobile",
      title: "נייד",
      type: "string",
      initialValue: "052-716-1611",
    }),
    defineField({
      name: "whatsappNumber",
      title: "מספר וואטסאפ (כולל קידומת בינלאומית ללא +)",
      type: "string",
      initialValue: "972552623044",
    }),
    defineField({
      name: "whatsappMessage",
      title: "הודעת ברירת מחדל לוואטסאפ",
      type: "text",
      rows: 2,
      initialValue:
        "היי, אשמח לקבל פרטים על ייעוץ המשכנתאות של משה אדרי. הגעתי דרך האתר.",
    }),
    defineField({
      name: "logo",
      title: "לוגו",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogImage",
      title: "תמונת שיתוף ברשתות (Open Graph)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
