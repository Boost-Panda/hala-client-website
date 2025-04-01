import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ChatWidget } from '@/components/website/Chat';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Associated Oral & Maxillofacial Surgeons',
  description: 'Excellence in Oral & Maxillofacial Surgery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ChatWidget orgId={process.env.NEXT_PUBLIC_PANDY_ORG_ID || ''} />
      </body>
    </html>
  );
}
