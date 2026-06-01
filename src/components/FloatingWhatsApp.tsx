"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const link = buildWhatsAppLink(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappMessage,
    "כפתור צף"
  );

  return (
    <div className="fixed bottom-6 left-6 z-40 print:hidden">
      {open && (
        <div className="absolute bottom-20 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-midnight-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
            <div className="size-12 rounded-full bg-gold-gradient text-midnight font-black text-xl flex items-center justify-center">
              מ
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">משה אדרי</div>
              <div className="text-xs text-green-100">בדרך כלל זמין מיד</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="סגור"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="p-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iI2VmZWFlMiIgZD0iTTAgMGg0MHY0MEgweiIvPjwvc3ZnPg==')] bg-repeat">
            <div className="bg-white rounded-2xl rounded-tr-none p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-midnight">
                שלום! 👋 אני משה. איך אוכל לעזור לך לחסוך אלפי שקלים על המשכנתא?
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
            className="block bg-[#25D366] text-white font-bold text-center py-3 hover:bg-[#1ebe57] transition-colors"
          >
            התחל שיחה בוואטסאפ
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="relative size-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse-ring"
        aria-label="צור קשר בוואטסאפ"
      >
        {open ? <X className="size-7" /> : <MessageCircle className="size-7" />}
      </button>
    </div>
  );
}
