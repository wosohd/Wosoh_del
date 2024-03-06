import  SanityClient  from "@sanity/client";
import  ImageBuilder from "@sanity/image-url";

const client = sanityClient ({
    projectId: '',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2021-10-21',
})

const builder = ImageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;

// sanity cors add http://localhost:3333/