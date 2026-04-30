import Image from 'next/image';
import type { ReactNode } from 'react';
import { ArrowRight, Award, BadgeCheck, BatteryCharging, Building2, CheckCircle2, FileCheck2, House, Mail, MapPin, Phone, ShieldCheck, SunMedium, Zap } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { FAQItem } from '@/components/faq';
import { Reveal, Stagger } from '@/components/motion';
import { Navbar } from '@/components/navbar';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { faqs, processSteps, siteConfig } from '@/lib/site';

const heroFacts = ['Paneles solares', 'Instalación profesional', 'Equipos certificados'];

const highlights = [
  { title: 'Ahorro energético real', copy: 'Soluciones diseñadas para reducir la factura eléctrica con una propuesta clara, medible y adaptada al consumo de cada cliente.', icon: SunMedium },
  { title: 'Calidad respaldada', copy: 'Se priorizan equipos con certificaciones, garantías y fichas técnicas que ayudan a tomar una decisión segura.', icon: Award },
  { title: 'Instalación cuidada', copy: 'Cada montaje se trabaja con orden, criterio técnico y enfoque en una experiencia profesional de principio a fin.', icon: ShieldCheck }
];

const certifications = [
  {
    title: 'UL (Underwriters Laboratories)',
    copy: 'Certificación internacional que garantiza la seguridad de productos eléctricos. En Panamá es especialmente importante porque el país adopta el NFPA 70 (National Electrical Code – NEC 2020) como base de su Reglamento de Instalaciones Eléctricas, por lo que se requieren equipos que cumplan estándares reconocidos para su aprobación y uso seguro.',
    featured: true
  },
  { title: 'IEC 61215 / IEC 61730', copy: 'Referencias internacionales para desempeño, seguridad y confiabilidad de módulos fotovoltaicos.' },
  { title: 'CE / estándares eléctricos', copy: 'Equipos alineados a exigencias de seguridad eléctrica y fabricación responsable, según ficha técnica.' },
  { title: 'ISO 9001', copy: 'Respaldo de procesos de calidad en fabricantes y proveedores seleccionados para cada proyecto.' },
  { title: 'Garantías de producto', copy: 'Garantías de equipos y desempeño que refuerzan la durabilidad de la inversión solar.' }
];

const services = [
  { title: 'Sistemas residenciales', copy: 'Para casas, apartamentos y edificios que buscan transformar sus techos en una inversión de ahorro energético.', icon: House },
  { title: 'Sistemas comerciales', copy: 'Para empresas, locales y edificios con consumo alto que desean optimizar costos operativos.', icon: Building2 },
  { title: 'Suministro de equipos', copy: 'Paneles, inversores y componentes seleccionados por rendimiento, respaldo, certificaciones y compatibilidad.', icon: BatteryCharging },
  { title: 'Instalación y montaje', copy: 'Ejecución profesional para que el sistema se vea limpio, seguro y correctamente integrado.', icon: BadgeCheck },
  { title: 'Acompañamiento', copy: 'Orientación antes, durante y después de la instalación para que el cliente tenga claridad.', icon: CheckCircle2 }
];

const experienceVideos = [
  {
    eyebrow: 'Residencial · Casas',
    title: 'Techos residenciales con más paneles visibles.',
    copy: 'La intención es que el visitante vea casas reales, techos amplios y sistemas solares que comunican ahorro, experiencia y confianza desde el primer vistazo.',
    src: '/videos/gallery/residencial-casas.mp4'
  },
  {
    eyebrow: 'Residencial · Edificios',
    title: 'Edificios residenciales con instalaciones limpias y funcionales.',
    copy: 'Este bloque refuerza que Solarled también puede atender propiedades verticales, edificios y espacios con alto potencial de generación solar.',
    src: '/videos/gallery/residencial-edificios.mp4'
  },
  {
    eyebrow: 'Comercial',
    title: 'Soluciones comerciales para negocios que consumen más energía.',
    copy: 'Los proyectos comerciales se presentan con video amplio, sin velo oscuro, para que se aprecien mejor los techos, la escala y la experiencia de la marca.',
    src: '/videos/gallery/comercial-paneles.mp4'
  }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="inicio" className="overflow-x-hidden">
        <HeroSection />
        <CertificationSection />
        <FullVisualSection
          id="beneficios"
          eyebrow="Energía que se ve y se siente"
          title="Paneles solares como protagonistas, sin recuadros ni cortes innecesarios."
          copy="La nueva presentación visual de Solarled usa fotos y videos como fondos amplios para que el visitante vea el alcance real de las instalaciones y conecte rápido con la calidad del servicio."
          image="/images/gallery/residential-roof.jpg"
          alt="Techo residencial con paneles solares"
          align="left"
        />
        <OverviewSection />
        <ExperienceVideosSection />
        <ServicesSection />
        <InstallationSection />
        <ProcessSection />
        <StrategicExperienceSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-deep text-white">
      <video className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-md" src="/videos/hero/video-1-hero.mp4" poster="/images/hero/video-1-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      <video className="absolute inset-0 h-full w-full object-contain" src="/videos/hero/video-1-hero.mp4" poster="/images/hero/video-1-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-label="Instalación Solarled sobre techo con paneles solares" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,26,0.96)_0%,rgba(5,32,26,0.72)_42%,rgba(5,32,26,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,32,26,0.16)_0%,rgba(5,32,26,0.2)_40%,rgba(5,32,26,0.95)_100%)]" />
      <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-10 pt-32 sm:pb-14 lg:pb-16">
        <div className="max-w-5xl">
          <Reveal><span className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md"><Zap className="h-3.5 w-3.5 text-leaf" />Energía solar en Panamá</span></Reveal>
          <h1 className="mt-6 max-w-5xl text-balance text-[3rem] font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[6.3rem]"><span className="hero-word block">Ahorro solar</span><span className="hero-word hero-word-delay-1 block text-leaf">con respaldo</span><span className="hero-word hero-word-delay-2 block">certificado.</span></h1>
          <Reveal className="mt-6 max-w-2xl"><p className="text-base leading-8 text-white/[0.86] sm:text-lg lg:text-xl">Solarled diseña, suministra e instala sistemas fotovoltaicos para hogares y negocios que buscan bajar su factura eléctrica con equipos de calidad y una ejecución profesional.</p></Reveal>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf px-7 text-sm font-bold text-deep shadow-[0_18px_40px_rgba(141,198,63,0.35)] transition hover:scale-[1.02]">Solicitar evaluación</a>
            <a href="#certificaciones" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.24] bg-white/[0.12] px-7 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/[0.45]">Ver certificaciones<ArrowRight className="h-4 w-4" /></a>
          </Reveal>
          <Stagger className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">{heroFacts.map((item) => <Reveal key={item} className="rounded-3xl border border-white/[0.14] bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur-md">{item}</Reveal>)}</Stagger>
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  return (
    <section id="certificaciones" className="relative bg-ivory py-16 text-deep lg:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <span className="section-kicker">Certificaciones de productos</span>
            <h2 className="section-title mt-4 max-w-3xl">UL y estándares técnicos que elevan la confianza del proyecto.</h2>
            <p className="section-copy mt-5 max-w-2xl">Para Solarled, no basta con instalar paneles: es importante trabajar con productos respaldados por certificaciones, estándares de seguridad, garantías y documentación técnica verificable.</p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {certifications.map((item) => (
              <Reveal key={item.title} className={`panel-card p-5 ${item.featured ? 'border-leaf/35 bg-white sm:col-span-2' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.featured ? 'bg-leaf text-deep' : 'bg-leaf/[0.14] text-leaf'}`}><FileCheck2 className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-steel">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function FullVisualSection({ id, eyebrow, title, copy, image, video, alt = '', align = 'left' }: { id?: string; eyebrow: string; title: string; copy: string; image?: string; video?: string; alt?: string; align?: 'left' | 'right'; }) {
  const contentAlign = align === 'right' ? 'lg:ml-auto' : '';
  return (
    <section id={id} className="relative min-h-[82svh] overflow-hidden bg-deep text-white">
      {image ? <><Image src={image} alt="" fill className="scale-110 object-cover opacity-45 blur-md" sizes="100vw" aria-hidden="true" /><Image src={image} alt={alt} fill className="object-contain" sizes="100vw" /></> : null}
      {video ? <><video className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-md" src={video} autoPlay muted loop playsInline preload="auto" aria-hidden="true" /><video className="absolute inset-0 h-full w-full object-contain" src={video} autoPlay muted loop playsInline preload="auto" /></> : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,26,0.94)_0%,rgba(5,32,26,0.64)_46%,rgba(5,32,26,0.20)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,32,26,0.20)_0%,rgba(5,32,26,0.18)_45%,rgba(5,32,26,0.90)_100%)]" />
      <div className="section-shell relative z-10 flex min-h-[82svh] items-end py-12 lg:py-16">
        <Reveal className={`max-w-2xl ${contentAlign}`}>
          <span className="section-kicker text-leaf">{eyebrow}</span>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">{title}</h2>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="bg-white py-16 text-deep lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl"><span className="section-kicker">Por qué elegir Solarled</span><h2 className="section-title mt-4 max-w-4xl">Una instalación solar debe verse bien, funcionar bien y estar respaldada por calidad.</h2><p className="section-copy mt-5 max-w-3xl">El rediseño enfoca la marca en lo que más vende: paneles solares visibles, mensajes claros, confianza técnica y evidencia de calidad en productos e instalación.</p></Reveal>
        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => { const Icon = item.icon; return <Reveal key={item.title} className="panel-card p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf/[0.14] text-leaf"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-xl font-bold text-deep">{item.title}</h3><p className="mt-3 text-sm leading-7 text-steel">{item.copy}</p></Reveal>; })}
        </Stagger>
      </div>
    </section>
  );
}

function ExperienceVideosSection() {
  return (
    <section id="experiencia" className="bg-ivory py-16 text-deep lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">Instalaciones reales</span>
          <h2 className="section-title mt-4 max-w-5xl">Más experiencia visible: casas, edificios y comercios con techos llenos de paneles.</h2>
          <p className="section-copy mt-5 max-w-3xl">Los videos se colocaron en ancho completo, sin velo oscuro encima, para que el cliente vea directamente la escala de los proyectos y conecte con la experiencia de Solarled.</p>
        </Reveal>
      </div>
      <div className="mt-10 space-y-12 lg:mt-14 lg:space-y-16">
        {experienceVideos.map((item) => <WideVideoFeature key={item.title} {...item} />)}
      </div>
    </section>
  );
}

function WideVideoFeature({ eyebrow, title, copy, src }: { eyebrow: string; title: string; copy: string; src: string }) {
  return (
    <Reveal>
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-deep">
        <video className="h-[62svh] min-h-[430px] w-full object-cover sm:h-[70svh] lg:min-h-[560px]" src={src} autoPlay muted loop playsInline preload="metadata" />
      </div>
      <div className="section-shell pt-5 sm:pt-6">
        <div className="max-w-3xl">
          <span className="section-kicker">{eyebrow}</span>
          <h3 className="mt-3 text-balance text-3xl font-bold tracking-[-0.04em] text-deep sm:text-4xl">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-steel sm:text-base sm:leading-8">{copy}</p>
        </div>
      </div>
    </Reveal>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-16 text-deep lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl"><span className="section-kicker">Servicios</span><h2 className="section-title mt-4 max-w-4xl">Instalaciones residenciales y comerciales para ahorrar con seguridad.</h2><p className="section-copy mt-5 max-w-3xl">La comunicación ahora es más directa: qué hace Solarled, para quién trabaja y por qué sus equipos certificados elevan la confianza del proyecto.</p></Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => { const Icon = service.icon; return <Reveal key={service.title} className="panel-card flex min-h-[190px] items-start gap-4 p-5"><div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf/[0.14] text-leaf"><Icon className="h-5 w-5" /></div><div><h3 className="text-lg font-bold text-deep">{service.title}</h3><p className="mt-2 text-sm leading-7 text-steel">{service.copy}</p></div></Reveal>; })}
        </Stagger>
      </div>
    </section>
  );
}

function InstallationSection() {
  return (
    <section id="instalaciones" className="bg-deep py-16 text-white lg:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <span className="section-kicker text-leaf">Instalación y montaje</span>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl">La parte técnica también debe verse limpia, ordenada y profesional.</h2>
            <p className="mt-5 text-base leading-8 text-white/75">Se agregó el video de instalación en una posición estratégica para reforzar que Solarled no solo vende paneles: también ejecuta, integra equipos y cuida el montaje.</p>
          </Reveal>
          <Reveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-glow">
            <video className="h-[620px] max-h-[78svh] w-full object-cover" src="/videos/gallery/instalacion-profesional.mp4" autoPlay muted loop playsInline preload="metadata" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proceso" className="bg-white py-16 text-deep lg:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <Reveal><span className="section-kicker">Cómo trabajamos</span><h2 className="section-title mt-4">Un proceso simple para una decisión más segura.</h2><p className="section-copy mt-5">La energía solar se entiende mejor cuando el cliente sabe qué pasa en cada etapa. Por eso el flujo debe ser claro, visual y fácil de seguir.</p></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">{processSteps.map((step, index) => <Reveal key={step.title} className="panel-card p-5"><div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep text-sm font-bold text-white">{index + 1}</div><h3 className="mt-4 text-xl font-bold text-deep">{step.title}</h3><p className="mt-3 text-sm leading-7 text-steel">{step.description}</p></Reveal>)}</Stagger>
        </div>
      </div>
    </section>
  );
}

function StrategicExperienceSection() {
  return (
    <section className="bg-ivory py-16 text-deep lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-4xl"><span className="section-kicker">Experiencia Solarled</span><h2 className="section-title mt-4 max-w-5xl">El proyecto se vende mejor cuando se muestra la experiencia completa.</h2><p className="section-copy mt-5 max-w-3xl">Este video se dejó como cierre visual antes de las dudas frecuentes para reforzar confianza, instalaciones reales y capacidad de ejecución.</p></Reveal>
      </div>
      <div className="mt-10">
        <WideVideoFeature eyebrow="Evidencia visual" title="Más paneles, más contexto y una imagen más cercana a proyectos reales." copy="La sección ayuda a que el visitante no solo lea sobre Solarled, sino que vea el tipo de trabajo y la escala que puede esperar." src="/videos/gallery/experiencia-solarled.mp4" />
      </div>
    </section>
  );
}

function FAQSection() {
  return <section id="faq" className="bg-deep py-16 text-white lg:py-24"><div className="section-shell grid gap-8 xl:grid-cols-[0.82fr_1.18fr]"><Reveal><span className="section-kicker text-leaf">Preguntas frecuentes</span><h2 className="mt-4 text-balance text-4xl font-bold text-white sm:text-5xl">Respuestas rápidas antes de solicitar una evaluación.</h2><p className="mt-5 text-base leading-8 text-white/[0.72]">La información está pensada para resolver dudas comunes y llevar al visitante directo a una conversación por WhatsApp.</p></Reveal><Stagger className="grid gap-3">{faqs.map((faq) => <Reveal key={faq.question}><FAQItem question={faq.question} answer={faq.answer} /></Reveal>)}</Stagger></div></section>;
}

function ContactSection() {
  return <section id="contacto" className="relative overflow-hidden bg-[#06241f] py-16 text-white lg:py-24"><div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-leaf/[0.18] blur-3xl" /><div className="absolute bottom-[-8rem] right-[-8rem] h-72 w-72 rounded-full bg-cyan/[0.18] blur-3xl" /><div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><Reveal><span className="section-kicker text-leaf">Contacto</span><h2 className="mt-4 text-balance text-4xl font-bold text-white sm:text-5xl">Solicita una evaluación para tu hogar o negocio.</h2><p className="mt-5 text-base leading-8 text-white/75">Comparte tu ubicación, tipo de propiedad y consumo aproximado. Con eso se puede iniciar una conversación más clara sobre tu proyecto solar.</p><div className="mt-8 grid gap-4 text-sm text-white/[0.76]"><InfoLine icon={<Phone className="h-5 w-5" />} text={siteConfig.whatsappDisplay} /><InfoLine icon={<Mail className="h-5 w-5" />} text={siteConfig.email} /><InfoLine icon={<MapPin className="h-5 w-5" />} text={siteConfig.address} /></div></Reveal><Reveal className="rounded-[2rem] border border-white/[0.12] bg-white/[0.06] p-5 shadow-glow backdrop-blur-xl sm:p-7"><ContactForm /></Reveal></div></section>;
}

function FinalCTASection() {
  return <section className="relative min-h-[78svh] overflow-hidden bg-deep text-white"><video className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-md" src="/videos/gallery/install-team.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" /><video className="absolute inset-0 h-full w-full object-contain" src="/videos/gallery/install-team.mp4" autoPlay muted loop playsInline preload="auto" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,26,0.95)_0%,rgba(5,32,26,0.68)_45%,rgba(5,32,26,0.18)_100%)]" /><div className="section-shell relative z-10 flex min-h-[78svh] items-end py-12 lg:py-16"><Reveal className="max-w-3xl"><span className="section-kicker text-leaf">Cotiza tu sistema</span><h2 className="mt-4 text-balance text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.4rem]">Energía solar con imagen premium, calidad visible y respaldo técnico.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.78] sm:text-lg">Escríbele a Solarled y da el primer paso para evaluar tu propiedad, conocer una propuesta y reducir tu factura eléctrica.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf px-7 text-sm font-bold text-deep transition hover:scale-[1.02]">Cotizar por WhatsApp</a><a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.22] bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/40">Escribir por correo</a></div></Reveal></div></section>;
}

function Footer() {
  return <footer className="bg-deep text-white"><div className="section-shell py-8 sm:py-10 lg:py-12"><div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div><Image src="/brand/solarled-logo-color.png" alt="Solarled" width={1280} height={228} className="h-auto w-[220px] sm:w-[280px] lg:w-[350px]" /><p className="mt-5 max-w-xl text-sm leading-8 text-white/[0.66]">Soluciones de energía solar para hogares y negocios en Panamá, enfocadas en ahorro, calidad certificada y una ejecución profesional.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-leaf">Contacto</p><div className="mt-4 space-y-3 text-sm text-white/75"><p>{siteConfig.phone}</p><p>{siteConfig.whatsappDisplay}</p><p className="break-all">{siteConfig.email}</p></div></div><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-leaf">Ubicación</p><div className="mt-4 space-y-3 text-sm text-white/75"><p>{siteConfig.address}</p><a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-white">Hablar por WhatsApp<ArrowRight className="h-4 w-4" /></a></div></div></div></div><div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/[0.45] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Solarled. Todos los derechos reservados.</p><p>Diseño enfocado en energía solar, calidad y confianza.</p></div></div></footer>;
}

function InfoLine({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.05] p-4"><span className="text-leaf">{icon}</span><span>{text}</span></div>;
}
