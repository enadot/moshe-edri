import type { Metadata } from "next";
import { AboutBlock } from "@/components/blocks/AboutBlock";
import { WizardEdgeBlock } from "@/components/blocks/WizardEdgeBlock";
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock";
import { CtaBlock } from "@/components/blocks/CtaBlock";

export const metadata: Metadata = {
  title: "אודות משה אדרי - יועץ משכנתאות מוביל עם 11+ שנות ניסיון",
  description:
    "הכירו את משה אדרי - יועץ משכנתאות מומחה עם 11+ שנות ניסיון, מומחיות בתיקים מורכבים וקשרים ישירים עם בכירי הבנקים. הסיפור שלי, הפילוסופיה והערכים.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-midnight-gradient text-white py-16 md:py-24 relative overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-4">
            אודות
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-gold-gradient">משה אדרי</span>
            <br />
            יועץ משכנתאות מוביל
          </h1>
        </div>
      </section>

      <AboutBlock
        data={{
          _type: "aboutBlock",
          _key: "about-page",
        }}
      />

      <WizardEdgeBlock
        data={{
          _type: "wizardEdgeBlock",
          _key: "wizard-about",
          eyebrow: "היתרונות שלנו",
          heading: "למה לקוחות בוחרים בנו",
        }}
      />

      <TestimonialsBlock
        data={{
          _type: "testimonialsBlock",
          _key: "test-about",
          eyebrow: "מה אומרים עלינו",
          heading: "סיפורי ההצלחה שלנו",
        }}
      />

      <CtaBlock
        data={{
          _type: "ctaBlock",
          _key: "cta-about",
          heading: "מוכן להפוך לסיפור ההצלחה הבא?",
          style: "midnight",
        }}
      />
    </>
  );
}
