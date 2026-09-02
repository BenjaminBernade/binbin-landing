import type { Metadata } from 'next';
import { artistJsonLd, siteDescription, siteTitle, siteUrl } from './seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'BiNBiN',
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: '/photos/dj-1.jpg',
      width: 480,
      height: 480,
      alt: 'Black-and-white portrait of BiNBiN wearing a cap',
    }],
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: '/photos/dj-1.jpg',
      alt: 'Black-and-white portrait of BiNBiN wearing a cap',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(artistJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
