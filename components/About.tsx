export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-rose-blush/50 bg-white/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
            Despre medic
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Dr. Alexandra Radu
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Medic specialist dermatologie — practică independentă, Craiova
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-4xl border border-rose-blush/60 bg-cream-warm shadow-card transition duration-500 hover:shadow-lift">
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-blush via-cream-deep to-cream-warm">
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <div className="rounded-full bg-white/90 p-6 shadow-soft transition duration-300 group-hover:scale-105">
                    <svg
                      className="h-16 w-16 text-rose-deep/75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-ink-muted">
                    Fotografie profesională
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              <p>
                Dr. Alexandra Radu oferă consultanță și tratamente dermatologice
                într-un mediu discret și primitor. Credem că o piele sănătoasă
                începe cu ascultare, explicații clare și un plan adaptat
                nevoilor tale.
              </p>
              <p>
                Indiferent că te confrunți cu acnee, semne ale îmbătrânirii sau
                ai nevoie de screening pentru leziuni pigmentare, vei primi
                aceeași atenție și rigoare medicală.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-blush/50 bg-cream/80 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <dt className="text-sm font-medium text-rose-deep">
                  Calificări
                </dt>
                <dd className="mt-2 text-base font-semibold text-ink">
                  Medic specialist dermatovenerologie
                </dd>
              </div>
              <div className="rounded-2xl border border-rose-blush/50 bg-cream/80 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <dt className="text-sm font-medium text-rose-deep">
                  Experiență
                </dt>
                <dd className="mt-2 text-base font-semibold text-ink">
                  Peste 10 ani în practica clinică
                </dd>
              </div>
              <div className="rounded-2xl border border-rose-blush/50 bg-cream/80 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:col-span-2">
                <dt className="text-sm font-medium text-rose-deep">Locație</dt>
                <dd className="mt-2 text-base font-semibold text-ink">
                  Craiova, județul Dolj, România — cabinet independent
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
