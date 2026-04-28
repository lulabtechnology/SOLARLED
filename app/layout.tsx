import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Preloader } from '@/components/preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarled-hcjz.vercel.app'),
  title: 'Solarled | Energía solar en Panamá',
  description: 'Solarled presenta soluciones de energía solar para hogares y negocios en Panamá, con enfoque en ahorro, productos certificados, instalación profesional y acompañamiento.',
  openGraph: {
    title: 'Solarled | Energía solar en Panamá',
    description: 'Conoce las soluciones solares de Solarled para hogares y negocios, con equipos certificados y una propuesta visual enfocada en calidad.',
    url: 'https://solarled-hcjz.vercel.app',
    siteName: 'Solarled', locale: 'es_PA', type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${inter.variable} ${space.variable}`}><body className="bg-ivory text-deep antialiased"><Preloader />{children}</body></html>;
}
