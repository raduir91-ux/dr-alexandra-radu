type Corner = "tl" | "tr" | "bl" | "br";

const positionClass: Record<Corner, string> = {
  tl: "left-0 top-0 -translate-x-1/4 -translate-y-1/4",
  tr: "right-0 top-0 translate-x-1/4 -translate-y-1/4",
  bl: "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  br: "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
};

/** Frunze stilizate pentru colțuri — accent discret, lux */
export function BotanicalDecor({
  corner,
  className = "",
}: {
  corner: Corner;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-0 h-40 w-40 text-gold/25 sm:h-52 sm:w-52 ${positionClass[corner]} ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
        <path
          d="M100 20C88 45 65 62 40 68c28 8 48 28 58 52 10-24 30-44 58-52-25-6-48-23-56-48z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M165 95c-18 12-28 32-30 55 18-10 38-14 58-12-8-18-14-38-28-43z"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M35 95c18 12 28 32 30 55-18-10-38-14-58-12 8-18 14-38 28-43z"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M100 120c-8 22-6 48 4 68 12-16 20-36 18-58-8 8-16 8-22-10z"
          stroke="currentColor"
          strokeWidth="0.7"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <ellipse
          cx="100"
          cy="155"
          rx="3"
          ry="10"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
}

/** Bandă decorativă orizontală subțire cu motiv vegetal simplu */
export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-2 text-gold/40 ${className}`}
      aria-hidden
    >
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold/50" />
      <svg
        className="h-6 w-10 shrink-0"
        viewBox="0 0 40 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <path d="M20 2c-4 8-12 12-18 10M20 2c4 8 12 12 18 10M20 22c-3-6-8-10-14-10M20 22c3-6 8-10 14-10" />
        <path
          d="M20 6v12"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
