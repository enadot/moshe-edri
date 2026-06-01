import { defineType, defineField } from "sanity";

export const quickFormConfig = defineType({
  name: "quickFormConfig",
  title: "הגדרות טופס מהיר",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "בדיקת בריאות משכנתא - חינם",
    }),
    defineField({
      name: "submitLabel",
      title: "טקסט הכפתור",
      type: "string",
      initialValue: "בדוק כמה אני יכול לחסוך",
    }),
    defineField({
      name: "successMessage",
      title: "הודעת הצלחה",
      type: "string",
      initialValue: "תודה! ניצור עמך קשר בהקדם",
    }),
  ],
});
