export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-blush/50 bg-ink text-cream-warm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Dr. Alexandra Radu</p>
          <p className="mt-1 text-sm text-cream-deep/90">
            Medic specialist dermatologie
          </p>
        </div>
        <p className="text-sm text-cream-deep/80">
          © {year} Dr. Alexandra Radu. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
