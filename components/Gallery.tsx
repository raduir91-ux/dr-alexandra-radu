import Image from "next/image";
import { portraitImage } from "@/lib/site-images";
import { BotanicalDecor } from "@/components/BotanicalDecor";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-b border-gold/25 bg-marble-deep py-24 sm:py-32"
    >
      <BotanicalDecor corner="br" className="opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Galerie
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            Dr. Alexandra Radu
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Portret profesional — fotografii suplimentare din cabinet pot fi
            adăugate aici.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <figure className="card-luxury overflow-hidden p-1 transition duration-500 hover:-translate-y-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.35rem] bg-cream-warm sm:aspect-[16/10]">
              <Image
                src={portraitImage.src}
                alt="Dr. Alexandra Radu, medic dermatolog"
                width={portraitImage.width}
                height={portraitImage.height}
                sizes="(max-width: 768px) 100vw, 48rem"
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>
            <figcaption className="border-t border-gold/30 px-6 py-4 text-center text-sm text-ink-muted">
              Medic specialist dermatologie · Craiova
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
