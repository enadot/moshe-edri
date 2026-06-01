import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const whoWeHelpBlock = defineType({
  name: "whoWeHelpBlock",
  title: "Who We Help - למי אנחנו עוזרים",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "טקסט מעל הכותרת",
      type: "string",
      initialValue: "למי אנחנו עוזרים",
    }),
    defineField({
      name: "heading",
      title: "כותרת",
      type: "string",
      initialValue: "נחנקתם מההחזרים? הבנק סגר לכם דלת? משה אדרי כאן בשבילכם",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 3,
      initialValue:
        "אנו מבינים את הקשיים הפיננסיים ואת התסכול מול המערכת הבנקאית. משה אדרי וצוותו מתמחים במתן פתרונות מותאמים אישית למגוון רחב של מצבים.",
    }),
    defineField({
      name: "audiences",
      title: "קהלי יעד",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "אייקון (Lucide)" },
            { name: "title", type: "string", title: "כותרת" },
            { name: "description", type: "text", rows: 2, title: "תיאור" },
          ],
        },
      ],
      initialValue: [
        {
          icon: "heart",
          title: "זוגות צעירים ורוכשי דירה ראשונה",
          description: "ליווי צמוד לקבלת המשכנתא בתנאים הטובים ביותר",
        },
        {
          icon: "home",
          title: "משפחות שרוצות לשדרג דיור",
          description: "מיחזור משכנתא חכם ומשכנתא לשיפוץ והרחבה",
        },
        {
          icon: "x-circle",
          title: "מסורבי בנקים",
          description: "מציאת פתרונות מימון גם לאחר שקיבלתם סירוב",
        },
        {
          icon: "layers",
          title: "בעלי הלוואות רבות",
          description: "איחוד הלוואות שיחזיר לכם את השקט הכלכלי",
        },
        {
          icon: "briefcase",
          title: "יזמים ועסקים",
          description: "מימון לעסקים ופתרונות אשראי מותאמים",
        },
        {
          icon: "arrow-up-right",
          title: "משפרי דיור",
          description: "ייעוץ וליווי בתהליכי מכירה ורכישה במקביל",
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Who We Help", subtitle: title }),
  },
});
