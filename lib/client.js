import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "0a7e81tg",
  dataset: "production",
  apiVersion: "2022-06-22",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);