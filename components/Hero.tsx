import Image from "next/image";
import { portraitImage } from "@/lib/site-images";
import { BotanicalDecor } from "@/components/BotanicalDecor";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[min(100vh,920px)] overflow-hidden border-b border-gold/25 bg-marble pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <BotanicalDecor corner="tr" />
      <BotanicalDecor corner="bl" className="opacity-70" />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_-10%,rgba(201,169,110,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-xl flex-1 animate-fade-up">
          <p className="mb-4 inline-flex items-center rounded-full border border-gold/50 bg-cream/90 px-4 py-1.5 text-sm font-medium text-burgundy shadow-card backdrop-blur-sm">
            Dermatologie · Craiova, România
          </p>
          <h1 className="font-serif text-balance text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
            Îngrijirea pielii tale, cu calm și expertiză
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
            Dr. Alexandra Radu este medic dermatolog cu practică independentă în
            Craiova. O abordare caldă, personalizată, pentru sănătatea și
            frumusețea pielii
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#appointment" className="btn-luxury-primary">
              <span className="relative z-[1]">Programează-te</span>
            </a>
            <a href="#about" className="btn-luxury-secondary">
              <span className="relative z-[1]">Află mai multe</span>
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <div className="animate-float relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
              <div className="octagon-clip absolute inset-0 bg-gradient-to-br from-gold-light via-gold to-[#B8955A] p-[3px] shadow-gold-glow">
                <div className="octagon-clip relative h-full w-full overflow-hidden bg-cream">
                  <Image
                    src={portraitImage.src}
                    alt="Dr. Alexandra Radu, medic dermatolog în Craiova"
                    width={portraitImage.width}
                    height={portraitImage.height}
                    priority
                    sizes="(max-width: 1024px) 280px, 28rem"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 hidden max-w-[200px] rounded-2xl border border-gold/45 bg-cream/95 px-5 py-4 shadow-lift backdrop-blur-sm sm:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Consult personalizat
              </p>
              <p className="mt-1 font-serif text-sm font-semibold text-burgundy">
                Fiecare pacient contează
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
