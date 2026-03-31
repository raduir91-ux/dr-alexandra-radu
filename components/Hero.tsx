export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[min(100vh,920px)] overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-rose-blush/90 via-cream-warm to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-rose-dust/30 via-rose-blush/40 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-deep/5 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-xl flex-1 animate-fade-up">
          <p className="mb-4 inline-flex items-center rounded-full border border-rose-blush/80 bg-white/60 px-4 py-1.5 text-sm font-medium text-rose-deep shadow-sm backdrop-blur-sm">
            Dermatologie · Craiova, România
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Îngrijirea pielii tale, cu calm și expertiză
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
            Dr. Alexandra Radu este medic dermatolog cu practică independentă în
            Craiova. O abordare caldă, personalizată, pentru sănătatea și
            frumusețea pielii — de la consult până la tratament.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-full bg-rose-deep px-8 py-3.5 text-base font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep/92 hover:shadow-lift"
            >
              Programează-te
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-rose-dust/50 bg-white/70 px-8 py-3.5 text-base font-semibold text-ink shadow-card backdrop-blur-sm transition-all duration-300 hover:border-rose-deep/40 hover:bg-white hover:shadow-lift"
            >
              Află mai multe
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="animate-float rounded-4xl border border-white/80 bg-gradient-to-br from-cream-warm via-white to-rose-blush/40 p-2 shadow-lift">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-b from-rose-blush/50 to-cream-deep">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/80 shadow-card">
                    <svg
                      className="h-14 w-14 text-rose-deep/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.25}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
                      Fotografie clinică
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">
                      Înlocuiți cu portret profesional
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/90 bg-white/95 px-5 py-4 shadow-card backdrop-blur-sm sm:block">
              <p className="text-xs font-medium uppercase tracking-wide text-rose-deep">
                Consult personalizat
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">
                Fiecare pacient contează
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
