"use client";

import { FormEvent, useState } from "react";

const addressLines = [
  "Cabinet medical independent",
  "Craiova, județul Dolj",
  "România",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative border-t border-rose-blush/40 bg-gradient-to-b from-cream-warm/80 to-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Scrieți-ne
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Întrebări generale sau detalii înainte de programare.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="rounded-4xl border border-rose-blush/50 bg-white/90 p-8 shadow-lift sm:p-10">
              <h3 className="text-lg font-semibold text-ink">Adresă cabinet</h3>
              <address className="mt-4 not-italic leading-relaxed text-ink-muted">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-6 text-sm text-ink-muted">
                Adresă provizorie — înlocuiți cu strada, numărul, puncte de
                reper și programul cabinetului.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-4xl border border-rose-blush/50 bg-white/90 p-8 shadow-card sm:p-10">
              {sent ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-ink">
                    Mesajul a fost înregistrat (demonstrativ).
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold text-rose-deep underline-offset-4 hover:underline"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-ink"
                    >
                      Nume
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-cream/50 px-4 py-3 text-ink outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-ink"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-cream/50 px-4 py-3 text-ink outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-ink"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full resize-y rounded-2xl border border-rose-blush/60 bg-cream/50 px-4 py-3 text-ink outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                      placeholder="Cum vă putem ajuta?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-rose-deep py-4 text-base font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep/92"
                  >
                    Trimite mesajul
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
