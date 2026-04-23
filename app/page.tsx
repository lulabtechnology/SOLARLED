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
  Play,
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
import { faqs, processSteps, services, siteConfig } from '@/lib/site';

const highlights = [
  {
    title: 'Menos presión mensual',
    copy: 'La propuesta está diseñada para ayudarte a bajar el peso de tu factura eléctrica con una solución bien planteada.',
    icon: Wallet
  },
  {
    title: 'Residencial y comercial',
    copy: 'Se atienden hogares, comercios y proyectos que necesitan una solución seria, bien presentada y bien ejecutada.',
    icon: Building2
  },
  {
    title: 'Respaldo técnico',
    copy: 'El proyecto no termina con la instalación. También importa el criterio técnico, el monitoreo y el acompañamiento.',
    icon: ShieldCheck
  }
];

const solutions = [
  {
    title: 'Soluciones residenciales',
    copy: 'Para hogares que quieren empezar a ahorrar con una instalación limpia, moderna y pensada para rendir bien con el paso del tiempo.',
    image: '/images/gallery/residential-roof.jpg',
    alt: 'Techo residencial con paneles solares'
  },
  {
    title: 'Soluciones comerciales',
    copy: 'Para negocios y propiedades que necesitan una propuesta de mayor escala con criterio financiero, técnico y operativo.',
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
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero/hero-vertical.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,23,0.45)_0%,rgba(2,7,23,0.58)_26%,rgba(2,7,23,0.82)_74%,rgba(2,7,23,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(7,87,194,0.34),transparent_28%),radial-gradient(circle_at_top_left,rgba(14,33,81,0.28),transparent_30%)]" />

      <div className="section-shell relative z-10 flex w-full items-end pb-8 pt-28 sm:pb-10 lg:pb-14">
        <div className="grid w-full gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <Reveal className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 text-cyan" />
              Energía solar con criterio en Panamá
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.9rem] font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              Haz que tu techo <span className="text-cyan">trabaje</span> para bajar tu factura.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/80 sm:text-lg lg:text-[1.1rem]">
              Suministro e instalación de paneles solares para hogares y negocios que quieren una solución moderna, visualmente confiable y pensada para ahorrar durante años.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#04112d] transition hover:scale-[1.02]"
              >
                Solicitar evaluación
              </a>
              <a
                href="#propuesta"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/35"
              >
                Ver propuesta visual
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal className="xl:justify-self-end xl:self-end">
            <div className="glass-panel max-w-[30rem] rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Lo que más vende</p>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-[2rem]">Paneles solares reales, vistos desde el primer scroll.</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white">
                  <Play className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Esta landing se replantea para que el video sea protagonista: tomas aéreas, techos con paneles y una percepción más fuerte de marca desde el primer segundo.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Hero full screen', 'Visual premium', 'Enfoque en ahorro', 'Marca más sólida'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/86">
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
          <h2 className="section-title mt-4 max-w-4xl">Una web que vende mejor cuando transmite ahorro, confianza y ejecución real.</h2>
          <p className="section-copy mt-5 max-w-3xl">
            El centro del mensaje es simple: la energía solar no se ve como un gasto adicional, sino como una decisión más inteligente para controlar mejor el costo energético y proyectar una operación más fuerte a largo plazo.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="panel-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.copy}</p>
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
            <span className="section-kicker">Más claridad comercial</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">La marca debe dejar claro que puede adaptarse tanto al hogar como al negocio.</h2>
            <p className="mt-5 text-base leading-8 text-white/74">
              La narrativa visual se apoya en soluciones reales y en un lenguaje mucho más vendedor: ahorro, desempeño, respaldo técnico y una propuesta clara de valor para distintos tipos de cliente.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <House className="h-5 w-5 text-cyan" />
              <p className="mt-3 text-lg font-semibold text-white">Residencial</p>
              <p className="mt-2 text-sm leading-7 text-white/72">Ideal para bajar el peso de la factura y convertir el techo en una inversión útil.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <Building2 className="h-5 w-5 text-cyan" />
              <p className="mt-3 text-lg font-semibold text-white">Comercial</p>
              <p className="mt-2 text-sm leading-7 text-white/72">Pensado para negocios que necesitan escala, control y una propuesta mejor estructurada.</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/95 via-[#020817]/38 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{solution.title.includes('residenciales') ? 'Hogar' : 'Negocio'}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{solution.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/78">{solution.copy}</p>
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
          <span className="section-kicker">Propuesta y presentación</span>
          <h2 className="section-title mt-4">También se aprovecha el material del PDF para reforzar seriedad y metodología.</h2>
          <p className="section-copy mt-5 max-w-3xl">
            Como la marca no tiene demasiadas imágenes adicionales, esta sección convierte parte de la presentación comercial en una muestra visual útil: análisis, cobertura estimada, retorno y condiciones generales presentadas de forma clara.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="panel-card overflow-hidden p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/86">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <BarChart3 className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Análisis del consumo</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">La propuesta muestra cómo se calcula la cobertura y la producción esperada del sistema.</p>
                </div>
                <div>
                  <ChartNoAxesCombined className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Retorno de inversión</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">Se hace visible el ROI estimado para ayudar al cliente a entender mejor la decisión.</p>
                </div>
                <div>
                  <BadgeCheck className="h-5 w-5 text-cyan" />
                  <p className="mt-3 font-semibold text-white">Garantías y alcance</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">También se refuerza la percepción de confianza mostrando condiciones, garantías y servicios incluidos.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {['/images/proposal/proposal-page-1.png', '/images/proposal/proposal-page-2.png', '/images/proposal/proposal-page-3.png'].map((src, index) => (
              <Reveal key={src} className="panel-card overflow-hidden p-3">
                <div className="relative aspect-[5/6] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#081020]">
                  <Image
                    src={src}
                    alt={`Vista previa de la propuesta comercial Solarled ${index + 1}`}
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
          <Reveal className="panel-card relative min-h-[420px] overflow-hidden rounded-[2rem] p-0">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/gallery/rooftop-vertical.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/92 via-[#020817]/42 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="section-kicker">Video como fondo</span>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold text-white sm:text-4xl">La idea es que la web se sienta viva, como si estuvieras sobrevolando techos con paneles solares.</h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-white/76">
                Por eso aquí el video no funciona como una simple miniatura: entra como parte del ambiente visual principal y refuerza lo que la cliente sí quiere mostrar.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal className="max-w-3xl">
              <span className="section-kicker">Proceso de trabajo</span>
              <h2 className="section-title mt-4">La conversación comercial se vuelve más clara cuando el proceso también se ve claro.</h2>
              <p className="section-copy mt-5 max-w-2xl">
                Además del impacto visual, la estructura del sitio presenta el camino lógico del cliente: entender la oportunidad, recibir una propuesta, ejecutar la instalación y acompañar el resultado.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} className="panel-card p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{step.description}</p>
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
          <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">Una propuesta más fuerte también necesita explicar mejor lo que incluye.</h2>
          <p className="mt-5 text-base leading-8 text-white/74">
            El contenido se reorganiza para presentar la oferta con mayor claridad: suministro, instalación, evaluación técnica, acompañamiento y soluciones orientadas a bajar el costo energético de manera sostenida.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <SunMedium className="h-5 w-5 text-cyan" />
              <p className="mt-3 font-semibold text-white">Ahorro</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Orientado a reducir la presión de la factura con una solución bien estructurada.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
              <BatteryCharging className="h-5 w-5 text-cyan" />
              <p className="mt-3 font-semibold text-white">Tecnología</p>
              <p className="mt-2 text-sm leading-7 text-white/70">Equipos, componentes y un enfoque técnico que refuerza la seriedad del proyecto.</p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service} className="panel-card flex min-h-[170px] items-start gap-4 p-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-cyan">
                <BadgeCheck className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{service}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Presentado dentro de una estructura más clara, más premium y más orientada a conversión.
                </p>
              </div>
            </Reveal>
          ))}
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
          <h2 className="section-title mt-4">Resolver dudas también ayuda a vender mejor.</h2>
          <p className="section-copy mt-5">
            Esta parte se mantiene, pero con un entorno visual más sólido y coherente con el rediseño general del sitio.
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
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">Solicita una evaluación y empieza a ver cómo podría bajar tu factura.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              El formulario sigue enviando la información por WhatsApp para mantener un flujo simple y rápido. También se mantiene la opción de escribir por correo.
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
            <Reveal className="video-card relative min-h-[330px] overflow-hidden rounded-[2rem]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/hero/hero-vertical.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/94 via-[#020817]/38 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Video 01</p>
                <h3 className="mt-3 text-2xl font-bold text-white">Impacto inmediato al abrir la web</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Un bloque de video dominante refuerza la sensación de escala y hace que el producto se vea más deseable.
                </p>
              </div>
            </Reveal>

            <Reveal className="video-card relative min-h-[330px] overflow-hidden rounded-[2rem]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/gallery/rooftop-vertical.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/94 via-[#020817]/38 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Video 02</p>
                <h3 className="mt-3 text-2xl font-bold text-white">Paneles solares por todos lados, pero con orden visual</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Esta segunda pieza acompaña el cierre de conversión y mantiene vivo el lenguaje visual basado en techos y paneles reales.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]">
      <div className="section-shell py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Image
              src="/images/brand/solarled-logo-clean.png"
              alt="Solarled"
              width={950}
              height={285}
              className="h-auto w-[210px] sm:w-[260px] lg:w-[320px]"
            />
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/66">
              Soluciones de energía solar para hogares y negocios en Panamá, con una propuesta más fuerte, más visual y mejor enfocada en ahorro, confianza y conversión.
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
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/82">
      <span className="text-cyan">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
