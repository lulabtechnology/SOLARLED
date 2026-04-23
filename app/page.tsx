import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BatteryCharging,
  Building2,
  ChartNoAxesCombined,
  FileCheck2,
  Gauge,
  House,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SunMedium,
  Wallet,
  Zap
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { FAQItem } from '@/components/faq';
import { Reveal, Stagger } from '@/components/motion';
import { Navbar } from '@/components/navbar';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { faqs, processSteps, siteConfig } from '@/lib/site';

const highlights = [
  {
    title: 'Ahorro desde el primer objetivo',
    copy: 'Cada proyecto se enfoca en reducir el costo energético con una solución clara, bien calculada y pensada para rendir en el tiempo.',
    icon: Wallet
  },
  {
    title: 'Residencial y comercial',
    copy: 'Solar LED atiende hogares, negocios y propiedades que buscan una instalación confiable, ordenada y visualmente profesional.',
    icon: Building2
  },
  {
    title: 'Respaldo y confianza',
    copy: 'No se trata solo de vender paneles solares, sino de acompañar al cliente con criterio técnico y atención real.',
    icon: ShieldCheck
  }
];

const solutions = [
  {
    title: 'Soluciones residenciales',
    copy: 'Para familias que quieren bajar su factura eléctrica con una instalación limpia, moderna y adaptada a su propiedad.',
    image: '/images/gallery/residential-roof.jpg',
    alt: 'Techo residencial con paneles solares'
  },
  {
    title: 'Soluciones comerciales',
    copy: 'Para negocios, edificios y proyectos que requieren una propuesta de mayor escala con enfoque técnico y financiero.',
    image: '/images/gallery/rooftop-skyline.jpg',
    alt: 'Sistema de paneles solares en techo comercial'
  }
];

const proposalStats = [
  { label: 'Potencia propuesta', value: '37.2 kWp' },
  { label: 'Cobertura estimada', value: '124%' },
  { label: 'Retorno estimado', value: '23 meses' },
  { label: 'Ganancia proyectada', value: '1443%' }
];

const serviceCards = [
  {
    title: 'Suministro de paneles solares',
    copy: 'Equipos y componentes para proyectos residenciales y comerciales con enfoque en eficiencia y durabilidad.',
    icon: SunMedium
  },
  {
    title: 'Instalación profesional',
    copy: 'Montaje e implementación del sistema con orden, seguridad y una ejecución alineada al proyecto.',
    icon: BadgeCheck
  },
  {
    title: 'Evaluación técnica',
    copy: 'Revisión del consumo, la propiedad y la viabilidad del sistema para proponer una solución más acertada.',
    icon: Gauge
  },
  {
    title: 'Asesoría para hogares',
    copy: 'Orientación para familias que desean transformar su techo en una herramienta de ahorro energético.',
    icon: House
  },
  {
    title: 'Asesoría para negocios',
    copy: 'Acompañamiento para comercios y empresas que buscan optimizar costos y fortalecer su operación.',
    icon: Building2
  },
  {
    title: 'Monitoreo y respaldo',
    copy: 'Seguimiento y acompañamiento para que el cliente tenga claridad sobre el desempeño de su inversión.',
    icon: BatteryCharging
  }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="inicio" className="overflow-x-hidden">
        <HeroSection />
        <OverviewSection />
        <SolutionsSection />
        <ProposalSection />
        <ProcessSection />
        <ServicesSection />
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
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#071440]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/gallery/installation-montage.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,31,0.28)_0%,rgba(4,9,31,0.44)_28%,rgba(4,9,31,0.82)_78%,rgba(4,9,31,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,92,214,0.28),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(17,33,93,0.22),transparent_30%)]" />

      <div className="section-shell relative z-10 flex w-full items-end pb-8 pt-28 sm:pb-10 lg:pb-14">
        <div className="grid w-full gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
          <Reveal className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 text-cyan" />
              Energía solar en Panamá
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.9rem] font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.45rem]">
              Convierte tu techo en <span className="text-cyan">ahorro real</span> con energía solar.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/80 sm:text-lg lg:text-[1.1rem]">
              Solar LED diseña, suministra e instala sistemas de paneles solares para hogares y negocios que buscan reducir su factura eléctrica con una solución confiable, moderna y bien ejecutada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Solicitar evaluación
              </a>
              <a
                href="#propuesta"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/35"
              >
                Ver propuesta
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal className="xl:justify-self-end xl:self-end">
            <div className="glass-panel max-w-[30rem] rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Solar LED</p>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-[2rem]">Soluciones solares bien pensadas para cada tipo de proyecto.</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white">
                  <Gauge className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Desde la evaluación inicial hasta la instalación, el objetivo es ofrecer una experiencia clara, profesional y enfocada en resultados medibles.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Ahorro energético', 'Atención en Panamá', 'Instalación profesional', 'Propuesta a medida'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="beneficios" className="relative py-14 lg:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="section-kicker">Beneficios principales</span>
          <h2 className="section-title mt-4 max-w-4xl">Una solución solar bien planteada empieza por confianza, claridad y buen acompañamiento.</h2>
          <p className="section-copy mt-5 max-w-3xl">
            La propuesta de valor de Solar LED gira alrededor de tres ideas simples: ahorrar mejor, instalar con criterio técnico y acompañar al cliente para que tome una decisión segura.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="panel-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.copy}</p>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="pb-14 lg:pb-20">
      <div className="section-shell grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="panel-card flex flex-col justify-between p-6 sm:p-7">
          <div>
            <span className="section-kicker">Soluciones</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">Solar LED ofrece soluciones adaptadas al hogar y al negocio.</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Cada proyecto se estudia para proponer una solución acorde al tipo de propiedad, al nivel de consumo y al objetivo de ahorro del cliente.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <House className="h-5 w-5 text-cyan" />
              <p className="mt-3 text-lg font-semibold text-white">Residencial</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Para hogares que desean optimizar su consumo y convertir el techo en una inversión inteligente.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <Building2 className="h-5 w-5 text-cyan" />
              <p className="mt-3 text-lg font-semibold text-white">Comercial</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Para empresas y propiedades que requieren una solución robusta y bien estructurada.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => (
            <Reveal key={solution.title} className="video-card relative min-h-[420px] overflow-hidden rounded-[2rem]">
              <Image
                src={solution.image}
                alt={solution.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04091f]/95 via-[#04091f]/34 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{solution.title.includes('residenciales') ? 'Hogar' : 'Negocio'}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{solution.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{solution.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProposalSection() {
  return (
    <section id="propuesta" className="py-14 lg:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="section-kicker">Propuesta comercial</span>
          <h2 className="section-title mt-4">El contenido del PDF ahora refuerza la presentación de la marca dentro de la web.</h2>
          <p className="section-copy mt-5 max-w-3xl">
            Se incorporó material del documento compartido para mostrar un caso referencial con datos claros, respaldo visual y una presentación más completa de la propuesta solar.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="panel-card overflow-hidden p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
                <FileCheck2 className="h-4 w-4 text-cyan" />
                Caso referencial
              </span>
              <span className="rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                Proyecto La Marquesa
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proposalStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <BarChart3 className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Análisis del consumo</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">Se muestra el estudio del proyecto para dimensionar correctamente el sistema y proyectar su rendimiento.</p>
                </div>
                <div>
                  <ChartNoAxesCombined className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Retorno estimado</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">El material presenta la cobertura estimada y el retorno para ayudar a visualizar la inversión.</p>
                </div>
                <div>
                  <BadgeCheck className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Garantías y alcance</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">También se integran servicios incluidos, garantías y alcance del proyecto de forma más clara.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {['/proposal/proposal-page-1.png', '/proposal/proposal-page-2.png', '/proposal/proposal-page-3.png'].map((src, index) => (
              <Reveal key={src} className="panel-card overflow-hidden p-3">
                <div className="relative aspect-[5/6] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#081020]">
                  <Image
                    src={src}
                    alt={`Vista previa de la propuesta comercial Solar LED ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proceso" className="py-14 lg:py-20">
      <div className="section-shell">
        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <Reveal className="panel-card relative min-h-[460px] overflow-hidden rounded-[2rem] p-0">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/gallery/equipment-move.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04091f]/92 via-[#04091f]/38 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="section-kicker">Proceso de trabajo</span>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold text-white sm:text-4xl">Un proyecto solar funciona mejor cuando cada etapa se comunica con claridad.</h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-white/75">
                Solar LED acompaña al cliente desde la evaluación hasta la instalación, manteniendo el foco en ahorro, seguridad y confianza.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Cómo trabajamos</span>
              <h2 className="section-title mt-4">Un camino claro ayuda a tomar mejores decisiones.</h2>
              <p className="section-copy mt-5 max-w-2xl">
                El proceso se organiza en pasos simples para que el cliente entienda cómo se analiza el proyecto, cómo se plantea la propuesta y cómo se ejecuta la instalación.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} className="panel-card p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{step.description}</p>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="py-14 lg:py-20">
      <div className="section-shell grid gap-5 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
        <Reveal className="panel-card p-6 sm:p-7">
          <span className="section-kicker">Servicios</span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">Servicios enfocados en ahorro, instalación y acompañamiento.</h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            Solar LED presenta su oferta con mayor claridad para que el visitante entienda rápidamente qué hace la empresa y cómo puede ayudarle a reducir su gasto energético.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <SunMedium className="h-5 w-5 text-cyan" />
              <p className="mt-3 font-semibold text-white">Ahorro sostenible</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Soluciones pensadas para generar un impacto real en la factura eléctrica.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <BatteryCharging className="h-5 w-5 text-cyan" />
              <p className="mt-3 font-semibold text-white">Respaldo técnico</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Asesoría y acompañamiento durante el proceso de evaluación, instalación y seguimiento.</p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} className="panel-card flex min-h-[190px] items-start gap-4 p-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">{service.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-14 lg:py-20">
      <div className="section-shell grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="max-w-xl">
          <span className="section-kicker">Preguntas frecuentes</span>
          <h2 className="section-title mt-4">Resuelve dudas antes de tomar la decisión.</h2>
          <p className="section-copy mt-5">
            Estas respuestas ayudan a que el visitante comprenda mejor el proceso y se anime a solicitar una evaluación para su proyecto.
          </p>
        </Reveal>
        <div className="grid gap-4">
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
        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal className="panel-card p-6 sm:p-7 lg:p-8">
            <span className="section-kicker">Contacto</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">Solicita una evaluación y descubre el potencial de tu proyecto.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              El formulario envía la información por WhatsApp para mantener una atención rápida y directa. También puedes escribir por correo si prefieres ese canal.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <InfoPill icon={<Phone className="h-4 w-4" />} text={siteConfig.phone} />
              <InfoPill icon={<Mail className="h-4 w-4" />} text={siteConfig.email} />
              <InfoPill icon={<MapPin className="h-4 w-4" />} text="Costa del Este, Panamá" />
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="panel-card overflow-hidden p-3">
              <div className="relative min-h-[330px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#081020]">
                <Image
                  src="/proposal/proposal-page-1.png"
                  alt="Vista previa de propuesta Solar LED"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04091f]/96 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Caso referencial</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">Presentación comercial incorporada a la web</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Parte del PDF entregado ahora se aprovecha visualmente para reforzar la propuesta y la credibilidad de la marca.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="panel-card flex flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">¿Qué puedes enviar?</p>
                <h3 className="mt-4 text-2xl font-bold text-white">Mientras más información compartas, mejor será la evaluación.</h3>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Puedes escribir con tu ubicación, el tipo de propiedad, una referencia de tu factura y cualquier duda inicial sobre el proyecto.
                </p>
              </div>
              <div className="mt-6 grid gap-3">
                {['Ubicación del proyecto', 'Tipo de propiedad', 'Factura o consumo estimado', 'Objetivo principal de ahorro'].map((item) => (
                  <div key={item} className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="pb-14 lg:pb-20">
      <div className="section-shell">
        <Reveal className="panel-card relative min-h-[420px] overflow-hidden rounded-[2.2rem] p-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/gallery/install-team.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,31,0.92)_0%,rgba(4,9,31,0.76)_42%,rgba(4,9,31,0.54)_100%)]" />
          <div className="relative z-10 flex min-h-[420px] items-end p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="section-kicker">Solicita tu evaluación</span>
              <h2 className="mt-4 text-balance text-4xl font-bold text-white sm:text-5xl lg:text-[3.6rem]">
                Dale a tu propiedad una solución solar seria, bien pensada y lista para ahorrar.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Si quieres conocer una propuesta para tu hogar o tu negocio, escríbenos por WhatsApp y cuéntanos un poco sobre tu proyecto.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/35"
                >
                  Escribir por correo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04091f]">
      <div className="section-shell py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Image
              src="/brand/solarled-logo-clean.png"
              alt="Solar LED"
              width={1086}
              height={376}
              className="h-auto w-[210px] sm:w-[260px] lg:w-[320px]"
            />
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/66">
              Soluciones de energía solar para hogares y negocios en Panamá, enfocadas en ahorro, confianza y una ejecución profesional.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Contacto</p>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p>{siteConfig.phone}</p>
                <p>{siteConfig.whatsappDisplay}</p>
                <p className="break-all">{siteConfig.email}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Ubicación</p>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p>{siteConfig.address}</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white transition hover:text-cyan"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InfoPill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/80">
      <span className="text-cyan">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
