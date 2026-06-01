import { page } from "./documents/page";
import { siteSettings } from "./documents/siteSettings";
import { testimonial } from "./documents/testimonial";
import { service } from "./documents/service";
import { faqItem } from "./documents/faqItem";
import { article } from "./documents/article";

import { heroBlock } from "./blocks/heroBlock";
import { trustBarBlock } from "./blocks/trustBarBlock";
import { servicesGridBlock } from "./blocks/servicesGridBlock";
import { wizardEdgeBlock } from "./blocks/wizardEdgeBlock";
import { testimonialsBlock } from "./blocks/testimonialsBlock";
import { faqBlock } from "./blocks/faqBlock";
import { ctaBlock } from "./blocks/ctaBlock";
import { aboutBlock } from "./blocks/aboutBlock";
import { whoWeHelpBlock } from "./blocks/whoWeHelpBlock";

import { bankLogo } from "./objects/bankLogo";
import { differentiator } from "./objects/differentiator";
import { quickFormConfig } from "./objects/quickFormConfig";

export const schemaTypes = [
  page,
  siteSettings,
  testimonial,
  service,
  faqItem,
  article,

  heroBlock,
  trustBarBlock,
  servicesGridBlock,
  wizardEdgeBlock,
  testimonialsBlock,
  faqBlock,
  ctaBlock,
  aboutBlock,
  whoWeHelpBlock,

  bankLogo,
  differentiator,
  quickFormConfig,
];
