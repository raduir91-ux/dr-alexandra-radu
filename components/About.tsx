import Image from "next/image";
import { portraitImage } from "@/lib/site-images";
import { BotanicalDecor, BotanicalDivider } from "@/components/BotanicalDecor";

const procedures = [
  "Tratamente avansate pentru acnee și cicatrici post-acneice.",
  "Proceduri de rejuvenare: peeling-uri chimice, microneedling și protocoale personalizate anti-aging.",
  "Terapii injectabile și mezoterapie: pentru hidratare profundă și refacerea structurii cutante.",
  "Managementul hiperpigmentărilor: soluții concrete pentru petele solare sau post-inflamatorii.",
] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-gold/25 bg-marble-deep py-20 sm:py-28 lg:py-32"
    >
      <BotanicalDecor corner="tl" className="opacity-50" />
      <BotanicalDecor corner="br" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold lg:text-left">
          Despre medic
        </p>

        <div className="mt-4 space-y-3 text-center lg:text-left">
          <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            Bună, sunt Dr. Alexandra Radu
          </h2>
          <p className="text-base font-medium leading-snug text-burgundy-light sm:text-lg">
            Medic Specialist Dermatovenerolog | Craiova
          </p>
        </div>

        <BotanicalDivider className="my-8 lg:hidden" />

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                Sunt de părere că o piele sănătoasă nu este doar un obiectiv
                estetic, ci rezultatul unui proces care începe cu ascultarea
                atentă a pacientului. În cabinetul meu din Craiova, am creat un
                spațiu discret unde rigoarea medicală se îmbină cu soluții
                personalizate pentru nevoile tale specifice.
              </p>
              <p>
                Cu o experiență de peste 6 ani în practica clinică, misiunea
                mea este să îți ofer explicații clare și tratamente fundamentate
                științific, fie că gestionăm o afecțiune cronică sau lucrăm la
                îmbunătățirea aspectului tenului.
              </p>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-xs sm:max-w-sm lg:order-1 lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="card-luxury group overflow-hidden p-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem]">
                <Image
                  src={portraitImage.src}
                  alt="Dr. Alexandra Radu — portret profesional"
                  width={portraitImage.width}
                  height={portraitImage.height}
                  sizes="(max-width: 1024px) min(100vw - 2rem, 24rem), 380px"
                  className="h-full w-full object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="card-luxury p-6 sm:p-8 lg:p-10">
            <h3 className="font-serif text-xl font-semibold tracking-tight text-burgundy sm:text-2xl">
              Expertiză și Proceduri
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Dincolo de consultul dermatologic clasic și screening-ul
              leziunilor pigmentare (controlul alunițelor), am integrat în
              practica mea o gamă vastă de proceduri dermato-estetice menite să
              mențină sănătatea și vitalitatea pielii:
            </p>
            <ul className="mt-6 space-y-0 divide-y divide-gold/25 rounded-2xl border border-gold/35 bg-cream/80">
              {procedures.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 px-4 py-4 first:rounded-t-2xl last:rounded-b-2xl sm:gap-4 sm:px-5 sm:py-5"
                >
                  <span
                    className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold sm:mt-2"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed text-ink sm:text-[1.05rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="relative mt-10 border-l-[3px] border-gold pl-5 sm:mt-12 sm:pl-8">
            <p className="font-serif text-lg font-medium italic leading-relaxed text-burgundy sm:text-xl">
              „Cred că fiecare plan de tratament trebuie să fie la fel de unic
              precum pielea pe care o îngrijesc.”
            </p>
            <footer className="mt-3 text-sm font-medium text-gold">
              — Dr. Alexandra Radu
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
