'use client';

import { Menu, PhoneCall, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site';

const links = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="rounded-[1.45rem] border border-white/[0.14] bg-deep/[0.82] px-4 py-3 shadow-glow backdrop-blur-xl sm:px-5 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="min-w-0 shrink-0" aria-label="Ir al inicio"><Logo /></a>
            <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
              {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-white/80 transition hover:text-white">{link.label}</a>)}
            </nav>
            <div className="hidden shrink-0 xl:block">
              <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-3 text-sm font-bold text-deep transition hover:scale-[1.02]"><PhoneCall className="h-4 w-4" />Cotizar por WhatsApp</a>
            </div>
            <button type="button" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white xl:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Abrir menú">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 xl:hidden">
              <div className="flex flex-col gap-4">
                {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-white/85" onClick={() => setOpen(false)}>{link.label}</a>)}
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center rounded-full bg-leaf px-5 py-3 text-sm font-bold text-deep" onClick={() => setOpen(false)}>Cotizar por WhatsApp</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
