"use client";

import { useState } from "react";
import { BotanicalDecor } from "@/components/BotanicalDecor";

const services = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c-1.8 3-5 4.5-8 4.5a9 9 0 008 13.5A9 9 0 0020 7.5C17 7.5 13.8 6 12 3z"
      />
    ),
    title: "Tratament acnee",
    subtitle: "Acnee juvenilă și adultă",
    description:
      "Evaluăm în detaliu tipul și severitatea acneei tale pentru a construi un plan terapeutic personalizat, cu urmărire atentă la fiecare pas al tratamentului.",
    bullets: [
      "Evaluare dermatoscopică a leziunilor",
      "Tratament topic personalizat (retinoizi, peroxid de benzoil, antibiotice)",
      "Terapie sistemică la nevoie (antibiotice orale, isotretinoin)",
      "Peelinguri chimice pentru textura pielii",
      "Tratament cicatrici post-acneice",
      "Plan de îngrijire acasă și recomandări de cosmetice",
    ],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    ),
    title: "Anti-îmbătrânire",
    subtitle: "Riduri, fermitate și textură",
    description:
      "Abordăm îmbătrânirea pielii cu metode dovedite clinic, adaptate nevoilor tale specifice, pentru un aspect odihnit și natural, fără exagerare.",
    bullets: [
      "Evaluare completă a tipului de piele și a semnelor de îmbătrânire",
      "Retinoizi topici și tratamente cu vitamina C",
      "Acid hialuronic și fillers pentru volum pierdut",
      "Toxina botulinică pentru riduri de expresie",
      "Peelinguri chimice de adâncime medie",
      "Sfaturi de fotoprotecție și rutină anti-aging",
    ],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565"
      />
    ),
    title: "Excizie alunițe",
    subtitle: "Leziuni pigmentare și nevi",
    description:
      "Evaluăm cu atenție fiecare leziune pigmentară folosind dermatoscopul, și intervenim chirurgical atunci când există indicație medicală clară.",
    bullets: [
      "Examinare dermatoscopică detaliată",
      "Fotodocumentare și urmărire în timp",
      "Biopsie excizională sau shave conform indicației",
      "Trimitere histopatologică de rutină",
      "Îngrijire postoperatorie și sutura estetică",
      "Educație pentru auto-examinare regulată",
    ],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M15.803 15.803A7.5 7.5 0 105.196 5.196"
      />
    ),
    title: "Depistare cancer de piele",
    subtitle: "Screening și diagnostic precoce",
    description:
      "Screeningul dermatoscopic regulat este cel mai eficient instrument de depistare precoce a cancerului de piele. O consultație poate face diferența.",
    bullets: [
      "Examinare corporală totală cu dermatoscopul",
      "Mapare și fotodocumentare leziuni suspecte",
      "Evaluare risc individual (fototip, expunere UV, istoric)",
      "Diagnosticare melanom, carcinom bazocelular și spinocelular",
      "Trimitere urgentă la chirurgie oncologică când e cazul",
      "Plan de monitoring și interval de screening personalizat",
    ],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
    title: "Tratamente laser",
    subtitle: "Proceduri selectate pe tipul tău de piele",
    description:
      "Folosim tehnologie laser modernă pentru a trata o varietate de afecțiuni cutanate, cu rezultate vizibile și timp de recuperare minim.",
    bullets: [
      "Laser pentru vase de sânge și rozacee",
      "Fotorejuvenare și reducerea petelor pigmentare",
      "Laser fracțional pentru cicatrici și pori dilatați",
      "Epilare definitivă laser",
      "Tratament keratoze seboreice și leziuni benigne",
      "Consiliere pre și post-procedurală personalizată",
    ],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    ),
    title: "Dermatologie estetică",
    subtitle: "Proceduri minim invazive",
    description:
      "Îmbunătățim aspectul pielii prin proceduri estetice sigure, realizate în cadru medical, cu rezultate naturale și fără recuperare lungă.",
    bullets: [
      "Toxină botulinică pentru riduri de mișcare",
      "Fillers cu acid hialuronic (buze, obraz, contur)",
      "Mezoterapie și bio-revitalizare",
      "Peelinguri chimice superficiale și medii",
      "Microneeding pentru textură și pori",
      "Consultație estetică și plan de tratament integrat",
    ],
  },
] as const;

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-gold/25 bg-marble py-24 sm:py-32"
    >
      <BotanicalDecor corner="tr" className="opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <ul className="mt-16 flex flex-col gap-3">
          {services.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.title} className="card-luxury overflow-hidden">
                {/* Header row — always visible */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-7 py-5 text-left transition-colors duration-200 hover:bg-gold/5"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-gold bg-burgundy text-gold"
                        : "border-gold/40 bg-gold/10 text-burgundy"
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      {item.icon}
                    </svg>
                  </div>

                  {/* Title + subtitle */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-lg font-semibold text-burgundy">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-muted">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expandable body */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gold/20 px-7 pb-7 pt-5">
                      <p className="text-base leading-relaxed text-ink-muted">
                        {item.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-ink-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        <a
                          href="#programare"
                          className="btn-luxury-primary text-sm px-6 py-3"
                        >
                          Programează consultația
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
