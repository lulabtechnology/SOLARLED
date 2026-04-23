'use client';

import { FormEvent, useMemo, useState } from 'react';
import { siteConfig } from '@/lib/site';

const initialState = {
  nombre: '',
  telefono: '',
  correo: '',
  ubicacion: '',
  propiedad: 'Residencial',
  factura: '',
  mensaje: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);

  const message = useMemo(() => {
    return [
      'Hola Solarled, quiero solicitar una evaluación.',
      `Nombre: ${form.nombre || '-'}`,
      `Teléfono: ${form.telefono || '-'}`,
      `Correo: ${form.correo || '-'}`,
      `Ubicación: ${form.ubicacion || '-'}`,
      `Tipo de propiedad: ${form.propiedad || '-'}`,
      `Factura o consumo aproximado: ${form.factura || '-'}`,
      `Mensaje: ${form.mensaje || '-'}`
    ].join('\n');
  }, [form]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Nombre" value={form.nombre} onChange={(value) => setForm({ ...form, nombre: value })} />
      <Field label="Teléfono" value={form.telefono} onChange={(value) => setForm({ ...form, telefono: value })} />
      <Field label="Correo" type="email" value={form.correo} onChange={(value) => setForm({ ...form, correo: value })} />
      <Field label="Ubicación" value={form.ubicacion} onChange={(value) => setForm({ ...form, ubicacion: value })} />
      <label className="space-y-2 text-sm text-white/72">
        <span>Tipo de propiedad</span>
        <select
          value={form.propiedad}
          onChange={(event) => setForm({ ...form, propiedad: event.target.value })}
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-cyan/70"
        >
          <option className="text-ink">Residencial</option>
          <option className="text-ink">Comercial</option>
          <option className="text-ink">Otro</option>
        </select>
      </label>
      <Field
        label="Factura o consumo aproximado"
        value={form.factura}
        onChange={(value) => setForm({ ...form, factura: value })}
      />
      <label className="space-y-2 text-sm text-white/72 sm:col-span-2">
        <span>Mensaje</span>
        <textarea
          rows={5}
          value={form.mensaje}
          onChange={(event) => setForm({ ...form, mensaje: event.target.value })}
          className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-cyan/70"
          placeholder="Cuéntanos un poco sobre tu propiedad o lo que deseas evaluar."
        />
      </label>
      <div className="sm:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ember px-6 text-sm font-semibold text-ink transition hover:scale-[1.01]"
        >
          Enviar por WhatsApp
        </button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white/85 transition hover:border-white/25"
        >
          Escribir por correo
        </a>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function Field({ label, value, onChange, type = 'text' }: FieldProps) {
  return (
    <label className="space-y-2 text-sm text-white/72">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-cyan/70"
      />
    </label>
  );
}
