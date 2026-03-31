const placeholders = [
  { label: "Recepție", tone: "from-rose-blush/80 to-cream-warm" },
  { label: "Consult", tone: "from-cream-deep to-rose-dust/50" },
  { label: "Cabinet", tone: "from-rose-dust/40 to-rose-blush" },
  { label: "Detalii", tone: "from-cream-warm to-white" },
  { label: "Atmosferă", tone: "from-rose-deep/20 to-rose-blush/70" },
  { label: "Îngrijire", tone: "from-white to-cream-deep" },
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Spațiul cabinetului
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Imagini demonstrative — înlocuiți cu fotografii reale ale clinicii.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item, i) => (
            <li key={item.label}>
              <div className="group overflow-hidden rounded-3xl border border-rose-blush/40 bg-cream shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${item.tone}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="rounded-full bg-white/85 px-4 py-1.5 text-sm font-medium text-ink shadow-sm backdrop-blur-sm">
                      {item.label}
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-ink-muted backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
