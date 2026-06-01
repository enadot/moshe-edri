"use client";

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

export type TrustBarBlockData = {
  _type: "trustBarBlock";
  _key: string;
  heading?: string;
  logos?: Array<{ name?: string; image?: any }>;
};

export function TrustBarBlock({ data }: { data: TrustBarBlockData }) {
  const heading =
    data.heading || "אנחנו עובדים מול כל הבנקים וגופי המימון בישראל";
  const banks =
    data.logos && data.logos.length > 0
      ? data.logos.map((l) => l.name || "Bank")
      : DEFAULT_BANKS;

  return (
    <section className="py-12 md:py-16 bg-white border-y border-midnight-100">
      <div className="container mx-auto px-4">
        <p
          data-gsap="fade-in"
          className="text-center text-midnight-500 font-bold text-sm md:text-base mb-8 uppercase tracking-wide"
        >
          {heading}
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          <div
            data-gsap="stagger-children"
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {banks.map((bank, i) => (
              <div key={bank + i} className="group cursor-default">
                <div className="h-14 px-6 flex items-center justify-center rounded-xl bg-midnight-50 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-gold/10 group-hover:scale-105 transition-all duration-500">
                  <span className="font-extrabold text-midnight text-base md:text-lg whitespace-nowrap">
                    {bank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
