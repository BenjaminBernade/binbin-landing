// Use the production origin for local and preview builds too.
export const siteUrl = 'https://binbin-music.vercel.app/';
export const siteTitle = 'BiNBiN — House, Deep House & Disco DJ in Montpellier';
export const siteDescription =
  'BiNBiN is a Montpellier-based DJ playing House, Deep House and Disco. Listen to his mixes and book a DJ set for rooftops, bars, clubs and private events.';

export const artistJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': new URL('#artist', siteUrl).href,
  name: 'BiNBiN',
  jobTitle: 'DJ',
  description: siteDescription,
  url: siteUrl,
  image: new URL('photos/dj-1.jpg', siteUrl).href,
  // Existing profile link and account used by the SoundCloud embeds.
  sameAs: [
    'https://www.instagram.com/binbin.dj',
    'https://soundcloud.com/djbinbin',
  ],
};
