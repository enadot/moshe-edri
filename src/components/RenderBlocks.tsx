import { HeroBlock, type HeroBlockData } from "./blocks/HeroBlock";
import { TrustBarBlock, type TrustBarBlockData } from "./blocks/TrustBarBlock";
import {
  ServicesGridBlock,
  type ServicesGridBlockData,
} from "./blocks/ServicesGridBlock";
import {
  WizardEdgeBlock,
  type WizardEdgeBlockData,
} from "./blocks/WizardEdgeBlock";
import {
  TestimonialsBlock,
  type TestimonialsBlockData,
} from "./blocks/TestimonialsBlock";
import { FaqBlock, type FaqBlockData } from "./blocks/FaqBlock";
import { CtaBlock, type CtaBlockData } from "./blocks/CtaBlock";
import { AboutBlock, type AboutBlockData } from "./blocks/AboutBlock";
import {
  WhoWeHelpBlock,
  type WhoWeHelpBlockData,
} from "./blocks/WhoWeHelpBlock";

export type Block =
  | HeroBlockData
  | TrustBarBlockData
  | ServicesGridBlockData
  | WizardEdgeBlockData
  | TestimonialsBlockData
  | FaqBlockData
  | CtaBlockData
  | AboutBlockData
  | WhoWeHelpBlockData;

const BLOCKS = {
  heroBlock: HeroBlock,
  trustBarBlock: TrustBarBlock,
  servicesGridBlock: ServicesGridBlock,
  wizardEdgeBlock: WizardEdgeBlock,
  testimonialsBlock: TestimonialsBlock,
  faqBlock: FaqBlock,
  ctaBlock: CtaBlock,
  aboutBlock: AboutBlock,
  whoWeHelpBlock: WhoWeHelpBlock,
} as const;

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block) => {
        const Component = BLOCKS[block._type] as React.ComponentType<{
          data: Block;
        }>;
        if (!Component) {
          console.warn(`Unknown block type: ${block._type}`);
          return null;
        }
        return <Component key={block._key} data={block} />;
      })}
    </>
  );
}
