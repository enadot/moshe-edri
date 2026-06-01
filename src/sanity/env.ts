export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "480qx32k",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = process.env.SANITY_API_READ_TOKEN;

export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
