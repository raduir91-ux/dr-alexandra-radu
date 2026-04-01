"use client";

import { FormEvent, useState } from "react";
import { BotanicalDecor } from "@/components/BotanicalDecor";

export function AppointmentBooking() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="appointment"
      className="relative overflow-hidden border-b border-gold/25 bg-marble-deep py-24 sm:py-32"
    >
      <BotanicalDecor corner="bl" className="opacity-35" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Programare
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
              Rezervă o consultație
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Completează formularul de mai jos. Vă vom contacta pentru
              confirmare. Acest site este demonstrativ — datele nu sunt trimise
              către un server.
            </p>
            <ul className="mt-8 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-xs font-bold text-burgundy">
                  1
                </span>
                <span>Trimiteți detaliile și preferința de dată.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-xs font-bold text-burgundy">
                  2
                </span>
                <span>
                  Primiți confirmarea programării pe e-mail sau la telefon.
                </span>
              </li>
            </ul>
          </div>

          <div className="card-luxury p-8 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-burgundy">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-serif text-xl font-semibold text-burgundy">
                  Mulțumim! În practică, ați fi contactat pentru confirmare.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="appt-name"
                    className="block text-sm font-medium text-burgundy"
                  >
                    Nume complet
                  </label>
                  <input
                    id="appt-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input-luxury mt-2"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-email"
                      className="block text-sm font-medium text-burgundy"
                    >
                      E-mail
                    </label>
                    <input
                      id="appt-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input-luxury mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-phone"
                      className="block text-sm font-medium text-burgundy"
                    >
                      Telefon
                    </label>
                    <input
                      id="appt-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="input-luxury mt-2"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="appt-date"
                    className="block text-sm font-medium text-burgundy"
                  >
                    Dată preferată
                  </label>
                  <input
                    id="appt-date"
                    name="preferredDate"
                    type="date"
                    className="input-luxury mt-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appt-message"
                    className="block text-sm font-medium text-burgundy"
                  >
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="appt-message"
                    name="message"
                    rows={4}
                    className="input-luxury mt-2 resize-y"
                    placeholder="Motivul consultației sau întrebări…"
                  />
                </div>
                <button type="submit" className="btn-luxury-primary w-full">
                  <span className="relative z-[1]">Programează-te</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
