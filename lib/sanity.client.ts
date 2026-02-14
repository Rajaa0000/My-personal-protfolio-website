import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// 1. Import the specific type for Sanity images
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "i6zxeocz", 
  dataset: "production", 
  useCdn: false, 
  apiVersion: "2023-01-01" 
});

const builder = imageUrlBuilder(client);

// 2. Apply the type to the 'source' parameter
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}