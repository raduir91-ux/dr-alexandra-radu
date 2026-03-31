import Image from "next/image";
import { portraitImage } from "@/lib/site-images";

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
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={portraitImage.src}
                  alt="Dr. Alexandra Radu — portret profesional"
                  width={portraitImage.width}
                  height={portraitImage.height}
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="h-full w-full object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
                />
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
