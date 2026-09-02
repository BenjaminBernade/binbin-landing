import type { MetadataRoute } from 'next';
import { siteUrl } from './seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Sections and the client-side language toggle are not separate URLs.
  return [{ url: siteUrl }];
}
