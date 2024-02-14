import type { Metadata } from 'next';
import './globals.css';
import { vt2323 } from './fonts';

export const metadata: Metadata = {
  title: 'Dice Sheet',
  description: 'Roll, count, repeat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={vt2323.className}>{children}</body>
    </html>
  );
}
