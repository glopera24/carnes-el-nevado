"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const subjects = [
  "Pedido especial / cotización",
  "Información de productos",
  "Pedido para eventos",
  "Domicilios",
  "Otro",
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send via WhatsApp
    const message = encodeURIComponent(
      `*Mensaje desde el sitio web*\n\n` +
        `*Nombre:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Teléfono:* ${form.phone}\n` +
        `*Asunto:* ${form.subject}\n\n` +
        `*Mensaje:*\n${form.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/573107414835?text=${message}`, "_blank");
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-brand-black">
          ¡Mensaje enviado!
        </h3>
        <p className="text-brand-gray-warm max-w-sm">
          Su mensaje ha sido enviado por WhatsApp. Le responderemos a la
          brevedad posible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          className="btn-secondary mt-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-warm mb-2"
          >
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Su nombre"
            className="w-full border border-brand-cream-dark bg-brand-cream px-4 py-3 text-sm text-brand-black placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-warm mb-2"
          >
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="310 000 0000"
            className="w-full border border-brand-cream-dark bg-brand-cream px-4 py-3 text-sm text-brand-black placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-warm mb-2"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          className="w-full border border-brand-cream-dark bg-brand-cream px-4 py-3 text-sm text-brand-black placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-warm mb-2"
        >
          Asunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-brand-cream-dark bg-brand-cream px-4 py-3 text-sm text-brand-black outline-none focus:border-brand-red transition-colors"
        >
          <option value="">Seleccione un asunto</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-warm mb-2"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntenos qué necesita..."
          className="w-full border border-brand-cream-dark bg-brand-cream px-4 py-3 text-sm text-brand-black placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-4 disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          <>
            <Send size={16} />
            Enviar por WhatsApp
          </>
        )}
      </button>
      <p className="text-xs text-brand-gray-warm text-center">
        Al enviar, se abrirá WhatsApp con su mensaje listo para enviar.
      </p>
    </form>
  );
}
