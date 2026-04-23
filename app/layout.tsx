import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Preloader } from '@/components/preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solarled-landing.vercel.app'),
  title: 'Solar LED | Energía solar en Panamá',
  description:
    'Solar LED presenta soluciones de energía solar para hogares y negocios en Panamá, con enfoque en ahorro, instalación profesional y acompañamiento.',
  openGraph: {
    title: 'Solar LED | Energía solar en Panamá',
    description:
      'Conoce las soluciones solares de Solar LED para hogares y negocios, junto con su propuesta comercial y vías de contacto.',
    url: 'https://solarled-landing.vercel.app',
    siteName: 'Solar LED',
    locale: 'es_PA',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-ink text-white antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
