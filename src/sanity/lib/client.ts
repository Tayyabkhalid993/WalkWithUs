import { createClient } from 'next-sanity'
import  ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId:'t4bxh0kj',
  dataset:'production',
  apiVersion:'v2024-10-26',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = ImageUrlBuilder(client);

export function urlFor(source:any){
  return builder.image(source);
}