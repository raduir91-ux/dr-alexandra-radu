import Image from "next/image";
import { portraitImage } from "@/lib/site-images";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-deep">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Dr. Alexandra Radu
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Portret profesional — fotografii suplimentare din cabinet pot fi
            adăugate aici.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <figure className="overflow-hidden rounded-3xl border border-rose-blush/40 bg-cream shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep sm:aspect-[16/10]">
              <Image
                src={portraitImage.src}
                alt="Dr. Alexandra Radu, medic dermatolog"
                width={portraitImage.width}
                height={portraitImage.height}
                sizes="(max-width: 768px) 100vw, 48rem"
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>
            <figcaption className="border-t border-rose-blush/30 px-6 py-4 text-center text-sm text-ink-muted">
              Medic specialist dermatologie · Craiova
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
