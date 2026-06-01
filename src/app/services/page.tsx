import type { Metadata } from "next";
import { ServicesGridBlock } from "@/components/blocks/ServicesGridBlock";
import { CtaBlock } from "@/components/blocks/CtaBlock";
import { WhoWeHelpBlock } from "@/components/blocks/WhoWeHelpBlock";
import { TrustBarBlock } from "@/components/blocks/TrustBarBlock";

export const metadata: Metadata = {
  title: "השירותים שלנו - מיחזור משכנתא, איחוד הלוואות ופתרונות למסורבי בנק",
  description:
    "משה אדרי מציע מגוון רחב של שירותי ייעוץ פיננסי: מיחזור משכנתא, איחוד הלוואות, פתרונות למסורבי משכנתא, מימון לעסקים ועוד. גלו איך אנחנו יכולים לעזור.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-midnight-gradient text-white py-16 md:py-24 relative overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-4">
            השירותים שלנו
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-gold-gradient">פתרונות מימון</span>
            <br />
            מותאמים אישית לכל צורך
          </h1>
          <p className="text-lg md:text-xl text-midnight-100 max-w-2xl mx-auto">
            לכל בעיה פיננסית יש פתרון. אנחנו כאן כדי למצוא אותו עבורכם.
          </p>
        </div>
      </section>

      <ServicesGridBlock
        data={{
          _type: "servicesGridBlock",
          _key: "services-page",
          eyebrow: "מה אנחנו עושים",
          heading: "השירותים שלנו במלואם",
        }}
      />

      <TrustBarBlock
        data={{ _type: "trustBarBlock", _key: "trust-services" }}
      />

      <WhoWeHelpBlock
        data={{
          _type: "whoWeHelpBlock",
          _key: "who-services",
          eyebrow: "למי אנחנו מתאימים",
          heading: "האם השירות שלנו מתאים לך?",
        }}
      />

      <CtaBlock
        data={{
          _type: "ctaBlock",
          _key: "cta-services",
          heading: "מצא את הפתרון שלך עוד היום",
          description:
            "ייעוץ ראשוני חינם וללא התחייבות. נחזור אליך תוך שעה!",
          style: "midnight",
        }}
      />
    </>
  );
}
