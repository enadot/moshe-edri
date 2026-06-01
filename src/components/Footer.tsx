import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "פוטר אתר"
  );

  return (
    <footer className="bg-midnight-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 inset-x-0 h-1 bg-gold-gradient" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold-gradient text-midnight font-black text-2xl rounded-xl size-12 flex items-center justify-center shadow-gold">
                מ
              </div>
              <div>
                <div className="font-extrabold text-xl">משה אדרי</div>
                <div className="text-gold text-sm">יועץ משכנתאות</div>
              </div>
            </div>
            <p className="text-midnight-100 leading-relaxed text-sm">
              הקוסם הפיננסי שיציל לכם את הכסף והשקט הנפשי. 11+ שנות ניסיון
              במציאת פתרונות יצירתיים.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold text-lg mb-4 text-gold">ניווט</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-midnight-100 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-lg mb-4 text-gold">שירותים</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-midnight-100">מיחזור משכנתא</li>
              <li className="text-midnight-100">משכנתא למסורבים</li>
              <li className="text-midnight-100">איחוד הלוואות</li>
              <li className="text-midnight-100">משכנתא לכל מטרה</li>
              <li className="text-midnight-100">מחיר למשתכן</li>
              <li className="text-midnight-100">מימון לעסקים</li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-lg mb-4 text-gold">צור קשר</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-midnight-100 hover:text-gold transition-colors"
                >
                  <Phone className="size-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.mobile}`}
                  className="flex items-center gap-2 text-midnight-100 hover:text-gold transition-colors"
                >
                  <Phone className="size-4" />
                  {SITE_CONFIG.mobile}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-midnight-100 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="size-4" />
                  שלח וואטסאפ
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-midnight-100 hover:text-gold transition-colors"
                >
                  <Mail className="size-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-midnight-100">
                <MapPin className="size-4" />
                ישראל
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-midnight-200">
          <p>© 2026 משה אדרי - יועץ משכנתאות. כל הזכויות שמורות.</p>
          <p className="text-xs text-midnight-300">
            האמור באתר אינו מהווה ייעוץ פיננסי. אנא היוועצו עם יועץ מוסמך לפני
            קבלת החלטות.
          </p>
        </div>
      </div>
    </footer>
  );
}
