import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "t4bxh0kj",
  dataset: "production",
  apiVersion: "v2024-10-26",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource | string) {
  // If caller passed a raw URL string, return a thin wrapper that provides url()
  if (typeof source === "string") {
    return {
      url() {
        return source;
      },
    } as { url: () => string };
  }

  return builder.image(source as SanityImageSource);
}
