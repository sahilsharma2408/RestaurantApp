import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'mnvgcdog',
    dataset: 'production',
    apiVersion: '2022-10-26', // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;