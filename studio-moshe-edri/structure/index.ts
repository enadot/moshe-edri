import type { StructureBuilder, StructureResolver } from "sanity/structure";
import {
  CogIcon,
  DocumentIcon,
  DocumentTextIcon,
  HelpCircleIcon,
  PackageIcon,
  UserIcon,
} from "@sanity/icons";

const SINGLETONS = ["siteSettings"];

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title("תוכן")
    .items([
      S.listItem()
        .title("הגדרות אתר")
        .icon(CogIcon)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      S.listItem()
        .title("עמודים")
        .icon(DocumentIcon)
        .schemaType("page")
        .child(S.documentTypeList("page").title("עמודים")),

      S.listItem()
        .title("שירותים")
        .icon(PackageIcon)
        .schemaType("service")
        .child(
          S.documentTypeList("service")
            .title("שירותים")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      S.listItem()
        .title("המלצות")
        .icon(UserIcon)
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("המלצות")),

      S.listItem()
        .title("שאלות נפוצות")
        .icon(HelpCircleIcon)
        .schemaType("faqItem")
        .child(
          S.documentTypeList("faqItem")
            .title("שאלות נפוצות")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      S.listItem()
        .title("בלוג / מאמרים")
        .icon(DocumentTextIcon)
        .schemaType("article")
        .child(
          S.documentTypeList("article")
            .title("מאמרים")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "siteSettings",
            "page",
            "service",
            "testimonial",
            "faqItem",
            "article",
          ].includes(item.getId() ?? "")
      ),
    ]);

export { SINGLETONS };
