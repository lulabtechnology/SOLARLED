import Image from 'next/image';
import { ArrowRight, BadgeCheck, Building2, Gauge, House, Mail, MapPin, Phone, ShieldCheck, SunMedium, Zap } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { FAQItem } from '@/components/faq';
import { Reveal, Stagger } from '@/components/motion';
import { Navbar } from '@/components/navbar';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { faqs, processSteps, services, siteConfig } from '@/lib/site';

const gallery = [
  {
    type: 'image' as const,
    src: '/images/gallery/rooftop-skyline.jpg',
    alt: 'Instalación de paneles solares en techo urbano en Panamá',
    title: 'Escala y proyección',
    copy: 'Un sistema solar bien planteado empieza por una visión clara del proyecto.'
  },
  {
    type: 'video' as const,
    src: '/videos/gallery/rooftop-vertical.mp4',
    alt: 'Video vertical de paneles solares en un rooftop',
    title: 'Recorrido real',
    copy: 'Recorrido visual de una instalación real para reforzar confianza.'
  },
  {
    type: 'image' as const,
    src: '/images/tech/inverter-wall.jpg',
    alt: 'Sistema técnico de paneles solares con inversor y baterías',
    title: 'Criterio técnico',
    copy: 'La instalación debe verse tan seria como la inversión que representa.'
  },
  {
    type: 'video' as const,
    src: '/videos/gallery/install-team.mp4',
    alt: 'Equipo instalando sistema solar',
    title: 'Ejecución profesional',
    copy: 'No se trata solo de vender un sistema: se trata de ejecutarlo bien.'
  },
  {
    type: 'image' as const,
    src: '/images/gallery/residential-roof.jpg',
    alt: 'Techo residencial con paneles solares',
    title: 'Solución residencial',
    copy: 'También hay espacio para decisiones inteligentes en el hogar.'
  },
  {
    type: 'video' as const,
    src: '/videos/gallery/installation-montage.mp4',
    alt: 'Montaje de instalaciones solares',
    title: 'Proceso vivo',
    copy: 'El trabajo en campo es parte de la credibilidad de la marca.'
  }
];

const benefits = [
  {
    icon: SunMedium,
    title: 'Ahorro con visión de largo plazo',
    copy: 'La decisión no es solo tecnológica: es financiera. Inviertes hoy para respirar mejor durante años.'
  },
  {
    icon: Gauge,
    title: 'Menor presión en la factura',
    copy: 'La promesa central es clara: bajar el peso de tu factura eléctrica con una solución bien planteada.'
  },
  {
    icon: Building2,
    title: 'Más valor para la propiedad o negocio',
    copy: 'Un sistema solar bien instalado transmite modernidad, previsión y capacidad de largo plazo.'
  },
  {
    icon: ShieldCheck,
    title: 'Tranquilidad y respaldo',
    copy: 'Experiencia, calidad y atención rápida para tomar una decisión con menos dudas y más claridad.'
  }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <HeroSection />
        <TrustRibbon />
        <BenefitsSection />
        <ProcessSection />
        <ServicesSection />
        <GallerySection />
        <AuthoritySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade grid-fade opacity-[0.08]" />
      <div className="section-shell relative grid items-center gap-8 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-10">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            <Zap className="h-3.5 w-3.5" />
            Energía solar premium en Panamá
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-[2.65rem] font-bold leading-[0.93] text-white sm:text-6xl lg:text-7xl">
            Invierte una vez. <span className="text-ember">Ahorra durante años.</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-8 text-white/78 sm:text-lg">
            Suministro e instalación de paneles solares para hogares y negocios que quieren reducir su factura eléctrica con una solución moderna, confiable y profesional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ember px-6 text-sm font-semibold text-ink transition hover:scale-[1.01]"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white/88 transition hover:border-white/20"
            >
              Solicitar evaluación
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Atención de proyectos desde Colón hasta Chiriquí',
              'Soluciones residenciales y comerciales',
              'Experiencia, calidad y atención rápida'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-ember/15 blur-3xl" />
          <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="panel relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-navy">
              <Image
                src="/images/hero/hero-desktop.jpg"
                alt="Techo con paneles solares y skyline urbano"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-sm font-medium text-white/92">Haz que tu techo trabaje a tu favor.</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/72">
                  Diseño visual enfocado en ahorro, confianza y una percepción corporativa de alto valor.
                </p>
              </div>
            </div>

            <div className="flex gap-4 lg:flex-col">
              <div className="panel relative flex-1 overflow-hidden rounded-[2rem] bg-[#09133d]">
                <div className="relative aspect-[3/4] min-h-[230px] sm:min-h-[280px] lg:min-h-[250px]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/videos/hero/hero-vertical.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm font-semibold text-white">Instalaciones reales</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-white shadow-glow">
                <div className="flex items-center gap-2 text-sm font-semibold text-ember">
                  <BadgeCheck className="h-4 w-4" />
                  Menos presión mes a mes
                </div>
                <p className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Convierte tu factura eléctrica en una decisión más inteligente.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustRibbon() {
  return (
    <section className="pb-8 lg:pb-16">
      <div className="section-shell">
        <div className="panel grid items-center gap-6 overflow-hidden rounded-[2.2rem] p-5 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] bg-white/5">
            <Image
              src="/images/tech/inverter-wall.jpg"
              alt="Instalación técnica con baterías e inversor"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Confianza y seriedad</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
              Instalaciones pensadas para durar, rendir y responder bien.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
              La percepción correcta aquí no es “algo eléctrico más”, sino una solución moderna que se instala con orden, atención al detalle y criterio técnico. Eso es lo que ayuda a que la inversión se sienta seria desde el primer vistazo.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Instalación profesional', 'Atención rápida', 'Acompañamiento claro', 'Enfoque en ahorro duradero'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/82">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="beneficios" className="py-14 lg:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Beneficios principales</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-5xl">
            Tu factura no tiene que seguir marcando el ritmo.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/74 sm:text-lg">
            La energía solar ayuda a transformar un gasto recurrente en una inversión estratégica. El mensaje central de la marca debe sentirse así: menos presión mensual, más control y más tranquilidad a largo plazo.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/74">{benefit.copy}</p>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proceso" className="py-14 lg:py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Cómo funciona</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
            Un proceso claro, rápido y profesional.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/74">
            La experiencia de compra también debe sentirse premium. Por eso la landing se apoya en un flujo simple, entendible y visualmente sólido.
          </p>
          <div className="mt-8 space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-ink/40 p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">Paso {index + 1}</div>
                <div className="mt-2 text-xl font-bold text-white">{step.title}</div>
                <p className="mt-2 text-sm leading-7 text-white/72">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2">
          <VideoCard src="/videos/gallery/install-team.mp4" title="Instalación en sitio" copy="Prueba visual directa de ejecución y equipo humano." />
          <VideoCard src="/videos/gallery/equipment-move.mp4" title="Logística real" copy="El proyecto no es teoría: es trabajo real en campo." />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow sm:col-span-2">
            <div className="relative aspect-[16/10] min-h-[290px] overflow-hidden">
              <Image
                src="/images/gallery/residential-roof.jpg"
                alt="Techo residencial con paneles solares"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-sm font-semibold text-white">Residencial o comercial</div>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/74">
                  La estructura visual del sitio deja claro que la propuesta puede adaptarse tanto a hogares como a negocios.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="py-14 lg:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Servicios</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-5xl">
            Lo que la marca ofrece debe verse tan claro como contundente.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 shadow-glow">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold text-ember">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{service}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Bloque construido con peso visual para reforzar la propuesta de valor sin recurrir a elementos genéricos o vacíos.
              </p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="py-14 lg:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Galería / evidencia visual</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-5xl">
            Curaduría visual pensada para vender confianza, no para llenar espacio.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/74">
            El material real se ordena con intención editorial para que la marca se perciba seria, actual y bien ejecutada.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal
              key={`${item.title}-${index}`}
              className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10] md:aspect-[18/10]' : 'aspect-[4/5] md:aspect-[4/3]'}`}>
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    sizes={index === 0 ? '(max-width: 1280px) 100vw, 66vw' : '(max-width: 1280px) 100vw, 33vw'}
                  />
                ) : (
                  <video
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan/95">{item.title}</div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/78">{item.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Confianza / autoridad</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
              Energía limpia con una presencia corporativa fuerte y cercana.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
              Esta landing se construyó para convencer a alguien que sí puede invertir: menos promesa vacía, más claridad, más evidencia visual y una sensación de marca que inspire seguridad desde el primer vistazo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Stat label="Cobertura" value="Colón a Chiriquí" icon={MapPin} />
              <Stat label="Contacto directo" value="WhatsApp y evaluación" icon={Phone} />
              <Stat label="Enfoque" value="Ahorro de largo plazo" icon={SunMedium} />
              <Stat label="Aplicación" value="Hogar y negocio" icon={House} />
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0c1d61] to-[#060f34] p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ember">Cierre racional + emocional</div>
            <p className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Haz que tu próxima factura se sienta más liviana.
            </p>
            <p className="mt-4 text-base leading-8 text-white/74">
              Una solución solar bien instalada puede ayudarte a bajar la presión del gasto eléctrico y a tomar una decisión más inteligente para tu propiedad o negocio.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ember px-6 text-sm font-semibold text-ink transition hover:scale-[1.01]"
            >
              Quiero mi evaluación
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-14 lg:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Preguntas frecuentes</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
            Dudas habituales antes de dar el paso.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-white/74">
            Esta sección reduce fricción comercial y ayuda a que más personas pasen de la curiosidad a la conversación directa.
          </p>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="py-14 lg:py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0c1d61] to-[#060f34] p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Contacto / cotización</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
              Solicita una evaluación y empieza a bajar el peso de tu factura.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/74">
              El formulario está pensado para convertir mejor: recoge lo justo para iniciar una conversación real por WhatsApp o correo sin fricción innecesaria.
            </p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-white/78">
              <InfoLine icon={Phone} label="Teléfono" value={siteConfig.phone} />
              <InfoLine icon={Mail} label="Correo" value={siteConfig.email} />
              <InfoLine icon={MapPin} label="Dirección" value={siteConfig.address} />
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.brand} · {siteConfig.coverage}</p>
        <p>{siteConfig.email} · WhatsApp {siteConfig.whatsappDisplay}</p>
      </div>
    </footer>
  );
}

function Stat({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: string;
  icon: typeof MapPin;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
      <Icon className="h-5 w-5 text-ember" />
      <div className="mt-4 text-sm uppercase tracking-[0.24em] text-white/48">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function InfoLine({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-ember" />
      <div>
        <div className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</div>
        <div className="mt-1 text-white/88">{value}</div>
      </div>
    </div>
  );
}

function VideoCard({ src, title, copy }: { src: string; title: string; copy: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow">
      <div className="relative aspect-[4/5] min-h-[320px] overflow-hidden sm:aspect-[4/3]">
        <video className="absolute inset-0 h-full w-full object-cover" src={src} autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-sm font-semibold text-white">{title}</div>
          <p className="mt-2 text-sm leading-6 text-white/74">{copy}</p>
        </div>
      </div>
    </div>
  );
}
