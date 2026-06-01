"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-lg shadow-midnight/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={SITE_CONFIG.name}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gold-gradient text-midnight font-black text-2xl rounded-xl size-12 flex items-center justify-center shadow-gold">
              מ
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className={cn(
                "font-extrabold text-lg transition-colors",
                scrolled ? "text-white" : "text-midnight"
              )}
            >
              משה אדרי
            </span>
            <span
              className={cn(
                "text-xs font-medium",
                scrolled ? "text-gold" : "text-midnight-600"
              )}
            >
              יועץ משכנתאות
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:bg-gold/10 hover:text-gold",
                scrolled ? "text-white/90" : "text-midnight"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="orange"
            size="lg"
            className="hidden sm:inline-flex"
          >
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Phone className="size-5" />
              <span className="hidden md:inline">חייגו עכשיו</span>
              <span className="md:hidden">{SITE_CONFIG.phone}</span>
            </a>
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "lg:hidden size-12 rounded-xl flex items-center justify-center transition-colors",
              scrolled
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-midnight/10 text-midnight hover:bg-midnight/20"
            )}
            aria-label="תפריט"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 glass shadow-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-white font-bold hover:bg-gold/20 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-4 py-3 rounded-xl bg-orange text-white font-extrabold mt-2 flex items-center justify-center gap-2"
            >
              <Phone className="size-5" />
              {SITE_CONFIG.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
