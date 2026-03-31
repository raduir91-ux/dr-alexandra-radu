"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Acasă" },
  { href: "#about", label: "Despre" },
  { href: "#services", label: "Servicii" },
  { href: "#appointment", label: "Programare" },
  { href: "#testimonials", label: "Recenzii" },
  { href: "#gallery", label: "Galerie" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-rose-blush/40 bg-cream/85 py-3 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex items-baseline gap-2 transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="text-lg font-semibold tracking-tight text-ink">
            Dr. Alexandra Radu
          </span>
          <span className="hidden text-sm font-medium text-rose-deep/90 sm:inline">
            Dermatologie
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:bg-rose-blush/50 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="hidden rounded-full bg-rose-deep px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep/90 hover:shadow-lift sm:inline-flex"
          >
            Programează-te
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-blush/60 bg-cream/80 text-ink shadow-card transition hover:border-rose-dust lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Meniu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-200`}
      >
        <div
          className="absolute inset-x-0 top-full border-b border-rose-blush/40 bg-cream/95 px-4 py-4 shadow-soft backdrop-blur-md"
          id="mobile-nav"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:bg-rose-blush/60"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#appointment"
                className="block rounded-full bg-rose-deep py-3 text-center text-sm font-semibold text-white shadow-card"
                onClick={() => setOpen(false)}
              >
                Programează-te
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
