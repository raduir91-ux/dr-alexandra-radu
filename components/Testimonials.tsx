const testimonials = [
  {
    name: "Maria P.",
    text: "Am fost primită cu multă empatie. Explicațiile au fost clare, iar tratamentul pentru acnee chiar a dat rezultate. Recomand cu încredere.",
    rating: 5,
  },
  {
    name: "Andrei T.",
    text: "Cabinetul este liniștitor, fără grabă. Dr. Radu a verificat o aluniță care mă îngrijora și m-a lăsat cu mintea împăcată.",
    rating: 5,
  },
  {
    name: "Elena V.",
    text: "Îmi place abordarea naturală pentru îngrijirea pielii. Simt că pielea mea arată mai bine fără să exagereze cu proceduri.",
    rating: 5,
  },
] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} din 5 stele`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? "text-amber-500" : "text-cream-deep"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-cream to-cream-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
            Păreri
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ce spun pacienții
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Mărturii exemplificative despre grijă și profesionalism.
          </p>
        </div>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-rose-blush/40 bg-white/90 p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Stars count={t.rating} />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-rose-blush/40 pt-6 text-sm font-semibold text-rose-deep">
                  {t.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
