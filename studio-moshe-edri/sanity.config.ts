import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure, SINGLETONS } from "./structure";

export default defineConfig({
  name: "default",
  title: "Moshe Adri - Mortgage Studio",

  projectId: "480qx32k",
  dataset: "production",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (option) => !SINGLETONS.includes(option.templateId)
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (SINGLETONS.includes(schemaType)) {
        return prev.filter(
          ({ action }) =>
            action && !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
