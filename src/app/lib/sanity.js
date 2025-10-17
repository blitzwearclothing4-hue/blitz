import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export default client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: '2025-10-16',
    useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source){
    return builder.image(source)
}
