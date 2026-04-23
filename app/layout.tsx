import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solarled-landing.vercel.app'),
  title: 'Solarled, S.A. | Paneles solares en Panamá',
  description:
    'Suministro e instalación de paneles solares en Panamá para hogares y negocios que quieren reducir su factura eléctrica con una solución moderna, confiable y profesional.',
  openGraph: {
    title: 'Solarled, S.A. | Invierte una vez. Ahorra durante años.',
    description:
      'Landing premium para captar leads, cotizaciones y reuniones de una empresa solar con atención en Panamá.',
    images: ['/images/og/solarled-og.jpg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-ink text-ivory antialiased`}>
        {children}
      </body>
    </html>
  );
}
