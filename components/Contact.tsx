"use client";

import { FormEvent, useState } from "react";
import { BotanicalDecor } from "@/components/BotanicalDecor";

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
      className="relative overflow-hidden border-b border-gold/25 bg-marble py-24 sm:py-32"
    >
      <BotanicalDecor corner="tr" className="opacity-25" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            Scrieți-ne
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Întrebări generale sau detalii înainte de programare.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="card-luxury p-8 sm:p-10">
              <h3 className="font-serif text-lg font-semibold text-burgundy">
                Adresă cabinet
              </h3>
              <address className="mt-4 not-italic leading-relaxed text-ink-muted">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-6 border-t border-gold/25 pt-6 text-sm text-ink-muted">
                Adresă provizorie — înlocuiți cu strada, numărul, puncte de
                reper și programul cabinetului.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-luxury p-8 sm:p-10">
              {sent ? (
                <div className="py-8 text-center">
                  <p className="font-serif text-lg font-semibold text-burgundy">
                    Mesajul a fost înregistrat (demonstrativ).
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-burgundy"
                    >
                      Nume
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="input-luxury mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-burgundy"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input-luxury mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-burgundy"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      className="input-luxury mt-2 resize-y"
                      placeholder="Cum vă putem ajuta?"
                    />
                  </div>
                  <button type="submit" className="btn-luxury-primary w-full">
                    <span className="relative z-[1]">Trimite mesajul</span>
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
