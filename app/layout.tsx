import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BiNBiN | DJ • Groove • With Intention',
  description:
    'BiNBiN — House, disco and beyond. DJ sets with groove, taste and intention.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}