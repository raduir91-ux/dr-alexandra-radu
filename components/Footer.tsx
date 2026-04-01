export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/35 bg-gradient-to-b from-burgundy-deep to-burgundy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-xl font-semibold tracking-tight text-cream">
            Dr. Alexandra Radu
          </p>
          <p className="mt-1 text-sm tracking-wide text-gold/90">
            Medic specialist dermatologie
          </p>
        </div>
        <p className="text-sm text-cream/75">
          © {year} Dr. Alexandra Radu. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
