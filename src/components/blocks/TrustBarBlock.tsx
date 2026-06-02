"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const DEFAULT_BANKS = [
  "בנק לאומי",
  "בנק הפועלים",
  "בנק דיסקונט",
  "מזרחי טפחות",
  "הבינלאומי",
  "בנק יהב",
  "הראל",
  "מנורה מבטחים",
];

type SanityImage = {
  asset?: {
    url?: string;
    _id?: string;
    metadata?: { dimensions?: { width?: number; height?: number } };
  };
} | null;

type BankLogo = {
  _key?: string;
  name?: string;
  url?: string;
  image?: SanityImage;
};

export type TrustBarBlockData = {
  _type: "trustBarBlock";
  _key: string;
  heading?: string;
  logos?: BankLogo[];
};

function logoUrl(image?: SanityImage): string | null {
  if (!image?.asset) return null;
  if (image.asset._id) {
    try {
      return urlFor(image).height(80).fit("max").url();
    } catch {
      // fall back to direct url
    }
  }
  return image.asset.url ?? null;
}

export function TrustBarBlock({ data }: { data: TrustBarBlockData }) {
  const heading =
    data.heading || "אנחנו עובדים מול כל הבנקים וגופי המימון בישראל";
  const hasCustomLogos = !!data.logos?.length;

  return (
    <section className="py-12 md:py-16 bg-white border-y border-midnight-100">
      <div className="container mx-auto px-4">
        <p
          data-gsap="fade-in"
          className="text-center text-midnight-500 font-medium text-sm md:text-base mb-10 tracking-wide"
        >
          {heading}
        </p>

        <div className="relative">
          <div
            data-gsap="stagger-children"
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14"
          >
            {hasCustomLogos
              ? data.logos!.map((logo, i) => {
                  const url = logoUrl(logo.image);
                  const Wrapper = ({ children }: { children: React.ReactNode }) =>
                    logo.url ? (
                      <a
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={logo.name || "Bank"}
                      >
                        {children}
                      </a>
                    ) : (
                      <>{children}</>
                    );

                  return (
                    <Wrapper key={logo._key || i}>
                      <div className="group cursor-default">
                        {url ? (
                          <div className="relative h-10 md:h-12 w-auto">
                            <Image
                              src={url}
                              alt={logo.name || ""}
                              width={
                                logo.image?.asset?.metadata?.dimensions
                                  ?.width || 160
                              }
                              height={
                                logo.image?.asset?.metadata?.dimensions
                                  ?.height || 48
                              }
                              className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                          </div>
                        ) : (
                          <span className="font-display font-bold text-midnight-400 group-hover:text-midnight text-base md:text-lg whitespace-nowrap transition-colors">
                            {logo.name}
                          </span>
                        )}
                      </div>
                    </Wrapper>
                  );
                })
              : DEFAULT_BANKS.map((bank) => (
                  <div key={bank} className="group cursor-default">
                    <span className="font-display font-bold text-midnight-300 group-hover:text-midnight text-base md:text-lg whitespace-nowrap transition-colors">
                      {bank}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
