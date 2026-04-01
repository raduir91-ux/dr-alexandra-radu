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
          ? "border-b border-gold/30 bg-cream/80 py-3 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-cream/40 py-5 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex flex-col transition-opacity duration-300 hover:opacity-90"
        >
          <span className="font-serif text-xl font-semibold tracking-tight text-burgundy sm:text-2xl">
            Dr. Alexandra Radu
          </span>
          <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold sm:text-xs">
            Dermatologie
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="btn-luxury-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            <span className="relative z-[1]">Programează-te</span>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-cream text-burgundy shadow-card transition hover:border-gold lg:hidden"
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
          className="absolute inset-x-0 top-full border-b border-gold/35 bg-cream/95 px-4 py-4 shadow-lift backdrop-blur-xl"
          id="mobile-nav"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl border border-transparent px-3 py-3 text-base font-medium text-ink transition hover:border-gold/30 hover:bg-gold/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#appointment"
                className="btn-luxury-primary block w-full !py-3 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                <span className="relative z-[1]">Programează-te</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
