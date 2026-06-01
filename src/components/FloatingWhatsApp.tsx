"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const link = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "כפתור צף"
  );

  return (
    <div className="fixed bottom-5 left-5 z-40 print:hidden">
      {open && (
        <div className="absolute bottom-16 left-0 w-72 bg-white rounded-2xl shadow-elevation border border-midnight-100 overflow-hidden animate-slide-in-up">
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <div className="size-9 rounded-full bg-white/15 flex items-center justify-center">
              <span className="font-display font-bold text-base">מ</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">משה אדרי</div>
              <div className="text-[11px] text-green-100/80">בדרך כלל זמין מיד</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="סגור"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-xl rounded-tr-sm p-3 max-w-[85%]">
              <p className="text-[13px] text-midnight">
                שלום, אשמח לסייע לכם במשכנתא. מה התחום הרלוונטי עבורכם?
              </p>
              <span className="text-[10px] text-midnight-400 block text-left mt-1">
                עכשיו
              </span>
            </div>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] text-white font-semibold text-center py-3 text-sm hover:bg-[#1ebe57] transition-colors"
          >
            התחילו שיחה
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="relative size-14 rounded-full bg-[#25D366] text-white shadow-elevation flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="צור קשר בוואטסאפ"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
