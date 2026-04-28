import { MessageCircleMore } from 'lucide-react';
import { siteConfig } from '@/lib/site';
export function WhatsAppFloat() {
  return <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-deep px-4 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-[1.03]" aria-label="Abrir WhatsApp"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-deep"><MessageCircleMore className="h-5 w-5" /></span><span className="hidden pr-1 sm:inline">WhatsApp</span></a>;
}
