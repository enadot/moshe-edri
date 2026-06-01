import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiStepQuiz } from "@/components/MultiStepQuiz";
import { SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "צור קשר - משה אדרי יועץ משכנתאות | ייעוץ חינם",
  description:
    "ייעוץ ראשוני חינם וללא התחייבות. צרו קשר עם משה אדרי - בטלפון, וואטסאפ, או דרך הטופס המהיר.",
};

export default function ContactPage() {
  const whatsappLink = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "עמוד צור קשר"
  );

  return (
    <>
      <section className="bg-midnight-gradient text-white py-16 md:py-24 relative overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-gold-gradient">הצעד הראשון</span>
            <br />
            לשקט כלכלי מתחיל כאן
          </h1>
          <p className="text-lg md:text-xl text-midnight-100 max-w-2xl mx-auto">
            אל תחכו עוד רגע. ייעוץ ראשוני חינם וללא התחייבות.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div data-gsap="reveal-x" data-dir="right">
              <h2 className="text-3xl font-black text-midnight mb-6">
                בואו נדבר
              </h2>
              <p className="text-midnight-600 leading-relaxed mb-8">
                אנחנו כאן כדי להקשיב, להבין ולמצוא עבורכם את הפתרון הפיננסי הטוב
                ביותר. בחרו את הדרך הנוחה לכם ליצור קשר.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-midnight-100 hover:border-orange transition-all hover:shadow-lg group"
                >
                  <div className="size-14 rounded-2xl bg-orange-gradient flex items-center justify-center shadow-orange group-hover:scale-110 transition-transform">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-midnight">משרד</div>
                    <div className="text-orange font-bold text-lg">
                      {SITE_CONFIG.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.mobile}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-midnight-100 hover:border-gold transition-all hover:shadow-lg group"
                >
                  <div className="size-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Phone className="size-6 text-midnight" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-midnight">משה - נייד</div>
                    <div className="text-gold-600 font-bold text-lg">
                      {SITE_CONFIG.mobile}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-midnight-100 hover:border-[#25D366] transition-all hover:shadow-lg group"
                >
                  <div className="size-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="size-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-midnight">וואטסאפ</div>
                    <div className="text-[#25D366] font-bold text-lg">
                      שלח הודעה עכשיו
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-midnight-100 hover:border-midnight transition-all hover:shadow-lg group"
                >
                  <div className="size-14 rounded-2xl bg-midnight flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="size-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-midnight">אימייל</div>
                    <div className="text-midnight font-bold text-lg">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gold/10 border-2 border-gold/30">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="size-5 text-gold-700" />
                  <h3 className="font-extrabold text-midnight">שעות פעילות</h3>
                </div>
                <ul className="space-y-1 text-sm text-midnight-700">
                  <li className="flex justify-between">
                    <span>ראשון - חמישי</span>
                    <span className="font-bold">08:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>שישי</span>
                    <span className="font-bold">08:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>שבת</span>
                    <span className="font-bold">סגור</span>
                  </li>
                </ul>
              </div>
            </div>

            <div data-gsap="reveal-x" data-dir="left">
              <MultiStepQuiz source="עמוד צור קשר" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
