import { BotanicalDecor } from "@/components/BotanicalDecor";

const services = [
  {
    title: "Tratament acnee",
    description:
      "Evaluare și plan terapeutic pentru acnee juvenilă și adultă, cu urmărire atentă.",
  },
  {
    title: "Anti-îmbătrânire",
    description:
      "Îngrijire pentru riduri fine, pierdere de fermitate și textură a pielii.",
  },
  {
    title: "Excizie alunițe",
    description:
      "Evaluare leziuni pigmentare și proceduri atunci când este indicat.",
  },
  {
    title: "Depistare cancer de piele",
    description:
      "Examinare dermatoscopică și informare pentru depistarea precoce.",
  },
  {
    title: "Tratamente laser",
    description:
      "Proceduri laser selectate, adaptate tipului tău de piele și obiectivelor tale.",
  },
  {
    title: "Dermatologie estetică",
    description:
      "Proceduri minim invazive pentru un aspect natural, în siguranță medicală.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-gold/25 bg-marble py-24 sm:py-32"
    >
      <BotanicalDecor corner="tr" className="opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Servicii
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            Ce putem trata împreună
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            O gamă completă de servicii dermatologice, cu accent pe siguranță și
            rezultate naturale.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <li key={item.title}>
              <article className="card-luxury group h-full p-8 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-burgundy transition group-hover:border-gold group-hover:bg-burgundy group-hover:text-gold">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-burgundy">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
