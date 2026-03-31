"use client";

import { FormEvent, useState } from "react";

export function AppointmentBooking() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="appointment"
      className="relative border-y border-rose-blush/40 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
              Programare
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Rezervă o consultație
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Completează formularul de mai jos. Echipa va reveni cu un apel sau
              mesaj pentru confirmare. Acest site este demonstrativ — nu se
              trimit date către un server.
            </p>
            <ul className="mt-8 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-blush text-xs font-bold text-rose-deep">
                  1
                </span>
                <span>Trimiteți detaliile și preferința de dată.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-blush text-xs font-bold text-rose-deep">
                  2
                </span>
                <span>Primiți confirmarea programării pe email sau telefon.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-4xl border border-rose-blush/50 bg-cream/90 p-8 shadow-lift sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-blush text-rose-deep">
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
                <p className="text-xl font-semibold text-ink">
                  Mulțumim! În practică, ați fi contactat pentru confirmare.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-rose-deep underline-offset-4 hover:underline"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="appt-name"
                    className="block text-sm font-medium text-ink"
                  >
                    Nume complet
                  </label>
                  <input
                    id="appt-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-email"
                      className="block text-sm font-medium text-ink"
                    >
                      E-mail
                    </label>
                    <input
                      id="appt-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-phone"
                      className="block text-sm font-medium text-ink"
                    >
                      Telefon
                    </label>
                    <input
                      id="appt-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="appt-date"
                    className="block text-sm font-medium text-ink"
                  >
                    Dată preferată
                  </label>
                  <input
                    id="appt-date"
                    name="preferredDate"
                    type="date"
                    className="mt-2 w-full rounded-2xl border border-rose-blush/60 bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appt-message"
                    className="block text-sm font-medium text-ink"
                  >
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="appt-message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y rounded-2xl border border-rose-blush/60 bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/20"
                    placeholder="Motivul consultației sau întrebări…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-rose-deep py-4 text-base font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep/92"
                >
                  Programează-te
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
