export const SITE_CONFIG = {
  name: "משה אדרי - יועץ משכנתאות",
  description:
    "נחנקים מהמשכנתא? מסורבים בבנק? משה אדרי - יועץ משכנתאות מוביל. ייעוץ חינם.",
  url: "https://mosheadri.co.il",
  phone: "077-340-2800",
  mobile: "052-716-1611",
  whatsapp: "972552623044",
  whatsappMessage:
    "היי, אשמח לקבל פרטים על ייעוץ המשכנתאות של משה אדרי",
  email: "info@mosheadri.co.il",
  founder: {
    name: "משה אדרי",
    title: "יועץ משכנתאות מומחה",
    experience: "11+ שנות ניסיון",
  },
} as const;

export const NAV_ITEMS = [
  { label: "בית", href: "/" },
  { label: "שירותים", href: "/services" },
  { label: "אודות", href: "/about" },
  { label: "המלצות", href: "/#testimonials" },
  { label: "בלוג", href: "/blog" },
  { label: "צור קשר", href: "/contact" },
] as const;
