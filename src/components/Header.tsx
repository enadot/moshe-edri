"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full transition-all duration-300 px-3 md:px-5",
            scrolled
              ? "glass py-2 shadow-elevation"
              : "bg-white/[0.02] backdrop-blur-sm py-2 border border-white/5"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={SITE_CONFIG.name}
          >
            <Image
              src={SITE_CONFIG.logoMark}
              alt=""
              width={40}
              height={40}
              className="size-10 sm:hidden"
              priority
            />
            <Image
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              width={200}
              height={56}
              className="hidden sm:block h-10 w-auto text-white"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-white/75 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="orange"
              size="sm"
              className="hidden sm:inline-flex rounded-full"
            >
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="size-4" />
                <span className="hidden md:inline">חייגו עכשיו</span>
                <span className="md:hidden">התקשרו</span>
              </a>
            </Button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden size-10 rounded-full flex items-center justify-center bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="תפריט"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-3xl shadow-elevation overflow-hidden animate-slide-in-up">
          <nav className="p-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-white/80 hover:text-white font-medium hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-2 px-4 py-3 rounded-2xl bg-orange text-white font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="size-4" />
              {SITE_CONFIG.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
