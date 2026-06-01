"use client";

import {
  Home,
  RefreshCw,
  Banknote,
  XCircle,
  Layers,
  Briefcase,
  Users,
  ArrowLeft,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  "refresh-cw": RefreshCw,
  banknote: Banknote,
  "x-circle": XCircle,
  layers: Layers,
  briefcase: Briefcase,
  users: Users,
};

type Service = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  icon?: string;
  shortDescription?: string;
  highlights?: string[];
};

export type ServicesGridBlockData = {
  _type: "servicesGridBlock";
  _key: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  services?: Service[];
};

const FALLBACK_SERVICES: Service[] = [
  {
    _id: "s1",
    title: "מיחזור משכנתא",
    icon: "refresh-cw",
    shortDescription:
      "ניתוח המשכנתא הקיימת, השוואה לתנאי השוק העדכניים ובניית תמהיל שיחסוך לכם עשרות עד מאות אלפי שקלים על פני התקופה.",
    highlights: ["ניתוח מקצועי", "השוואת תנאים", "תמהיל מותאם אישית"],
  },
  {
    _id: "s2",
    title: "משכנתא למסורבים",
    icon: "x-circle",
    shortDescription:
      "התמחות במציאת פתרונות מימון למקרים מורכבים. כשבנק אחד סירב - יש דרכים נוספות, ואנחנו יודעים איך לבנות את התיק נכון.",
    highlights: ["פתרונות מותאמים", "ניסיון בתיקים מורכבים", "ליווי צמוד"],
  },
  {
    _id: "s3",
    title: "איחוד הלוואות",
    icon: "layers",
    shortDescription:
      "איחוד מספר הלוואות להלוואה אחת בתנאים טובים יותר. הפחתת ההחזר החודשי, חיסכון בעלויות מימון ושקט נפשי.",
    highlights: ["הפחתת החזר חודשי", "תנאים משופרים", "סדר פיננסי"],
  },
  {
    _id: "s4",
    title: "משכנתא לכל מטרה",
    icon: "banknote",
    shortDescription:
      "מימון עבור שיפוץ, הרחבה, רכישה נוספת או כל מטרה אחרת, תוך ניצול הנכס הקיים בתנאים אטרקטיביים.",
    highlights: ["מימון גמיש", "תנאים אטרקטיביים", "מהיר ויעיל"],
  },
  {
    _id: "s5",
    title: "מחיר למשתכן",
    icon: "home",
    shortDescription:
      "ליווי מקצועי לרוכשי דירות במסגרת תוכנית מחיר למשתכן - משלב ההגרלה ועד קבלת המפתח.",
    highlights: ["מההגרלה למפתח", "ליווי מקצועי", "ניסיון מוכח"],
  },
  {
    _id: "s6",
    title: "מימון לעסקים",
    icon: "briefcase",
    shortDescription:
      "פתרונות מימון מותאמים אישית לעסקים קטנים ובינוניים, להגשמת היעדים העסקיים והצמיחה.",
    highlights: ["אשראי מותאם", "ליווי מקצועי", "פתרונות יצירתיים"],
  },
];

export function ServicesGridBlock({ data }: { data: ServicesGridBlockData }) {
  const services =
    data.services && data.services.length > 0 ? data.services : FALLBACK_SERVICES;

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          {data.eyebrow && (
            <div data-gsap="fade-up" className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-700">
                <span className="size-1.5 rounded-full bg-gold" />
                {data.eyebrow}
              </span>
            </div>
          )}
          <h2
            data-gsap="fade-up"
            className="font-display text-display-lg text-midnight mb-5"
          >
            {data.heading || "פתרונות מימון מותאמים אישית"}
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-midnight-500 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight-100 rounded-3xl overflow-hidden border border-midnight-100"
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon || "home"] || Home;
            return (
              <div
                key={service._id}
                className="group relative bg-white p-8 md:p-10 hover:bg-midnight-50/30 transition-colors duration-300"
              >
                <div className="size-12 rounded-xl bg-midnight text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-midnight mb-3">
                  {service.title}
                </h3>
                <p className="text-midnight-600 leading-relaxed mb-6 text-sm">
                  {service.shortDescription}
                </p>
                {service.highlights && service.highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-midnight-700"
                      >
                        <Check className="size-4 text-gold shrink-0" strokeWidth={2.5} />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={
                    service.slug?.current
                      ? `/services/${service.slug.current}`
                      : "#quick-form"
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight group-hover:text-orange transition-colors"
                >
                  קרא עוד
                  <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        <div data-gsap="fade-up" className="text-center mt-14">
          <Button asChild variant="orange" size="xl" className="rounded-full">
            <a href="#quick-form">
              לקבלת ייעוץ אישי
              <ArrowLeft className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
