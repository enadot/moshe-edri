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
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MagneticButton } from "@/components/animations/MagneticButton";

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
      "אל תהיו פראיירים של הריביות! בדקו כמה מיחזור חכם יכול לחסוך לכם. אנו ננתח את המשכנתא הקיימת, נשווה לתנאי השוק העדכניים ונבנה תמהיל שיחסוך עשרות ומאות אלפי שקלים.",
    highlights: ["ניתוח משכנתא קיימת", "השוואת תנאים", "תמהיל מותאם"],
  },
  {
    _id: "s2",
    title: "משכנתא למסורבים",
    icon: "x-circle",
    shortDescription:
      "קיבלתם סירוב מהבנק? אל תרימו ידיים! משה אדרי מתמחה במציאת פתרונות מימון גם למקרים מורכבים. בזכות קשרים ענפים אנו פותחים דלתות שנסגרו.",
    highlights: [
      "פתרונות יצירתיים",
      "קשרים ישירים",
      "אישור גם לתיקים מורכבים",
    ],
  },
  {
    _id: "s3",
    title: "איחוד הלוואות",
    icon: "layers",
    shortDescription:
      "נחנקים מהחזרי הלוואות חודשיים? מאות אנשים כבר קיבלו אצלנו אישור חריג לאיחוד הלוואות שסידר להם את החיים. הלוואה אחת נוחה בתנאים מצוינים.",
    highlights: ["הפחתת החזר חודשי", "תנאים טובים יותר", "שקט נפשי"],
  },
  {
    _id: "s4",
    title: "משכנתא לכל מטרה",
    icon: "banknote",
    shortDescription:
      "צריכים מימון לשיפוץ, הרחבה, חתונה או כל מטרה אחרת? אנו נסייע לכם לקבל משכנתא בתנאים אטרקטיביים, תוך ניצול הנכס הקיים שלכם.",
    highlights: ["מימון גמיש", "ניצול הנכס הקיים", "תנאים אטרקטיביים"],
  },
  {
    _id: "s5",
    title: "מחיר למשתכן",
    icon: "home",
    shortDescription:
      "ליווי מקצועי לרוכשי דירות במסגרת תוכנית מחיר למשתכן, החל משלב ההגרלה ועד קבלת המפתח.",
    highlights: ["ליווי מההגרלה", "עד קבלת המפתח", "מקצועיות וניסיון"],
  },
  {
    _id: "s6",
    title: "מימון לעסקים",
    icon: "briefcase",
    shortDescription:
      "פתרונות מימון מותאמים אישית לעסקים קטנים ובינוניים, שיסייעו לכם להגשים את היעדים העסקיים שלכם.",
    highlights: ["מימון לעסקים", "אשראי מותאם", "ליווי מקצועי"],
  },
];

export function ServicesGridBlock({ data }: { data: ServicesGridBlockData }) {
  const services =
    data.services && data.services.length > 0 ? data.services : FALLBACK_SERVICES;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-midnight-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && (
            <span
              data-gsap="fade-up"
              className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-600 text-sm font-bold mb-4"
            >
              {data.eyebrow}
            </span>
          )}
          <h2
            data-gsap="fade-up"
            className="text-3xl md:text-5xl font-black text-midnight mb-4 leading-tight"
          >
            {data.heading || "פתרונות מימון מותאמים אישית לכל צורך"}
          </h2>
          {data.description && (
            <p
              data-gsap="fade-up"
              className="text-lg text-midnight-600 leading-relaxed"
            >
              {data.description}
            </p>
          )}
        </div>

        <div
          data-gsap="stagger-children"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon || "home"] || Home;
            return (
              <div key={service._id}>
                <Card className="h-full group relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-6 md:p-8">
                    <div className="size-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform">
                      <Icon className="size-7 text-midnight" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-midnight mb-3 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-midnight-600 leading-relaxed mb-5 text-sm">
                      {service.shortDescription}
                    </p>
                    {service.highlights && service.highlights.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {service.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-midnight-700"
                          >
                            <span className="size-1.5 rounded-full bg-gold" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button
                      asChild
                      variant="link"
                      className="text-orange hover:text-orange-600 p-0 h-auto font-extrabold"
                    >
                      <a
                        href={
                          service.slug?.current
                            ? `/services/${service.slug.current}`
                            : "#quick-form"
                        }
                      >
                        קרא עוד
                        <ArrowLeft className="size-4 mr-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div data-gsap="fade-up" className="text-center mt-12">
          <MagneticButton strength={0.3}>
            <Button asChild variant="orange" size="xl">
              <a href="#quick-form">
                לפרטים נוספים וקבלת ייעוץ אישי
                <ArrowLeft className="size-5" />
              </a>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
