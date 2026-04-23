'use client';

import { Menu, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site';

const links = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="min-w-0 shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block shrink-0">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember px-5 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
          >
            <PhoneCall className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#08133d] px-4 py-4 xl:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/82"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-ember/40 bg-ember px-5 py-3 text-sm font-semibold text-ink"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
