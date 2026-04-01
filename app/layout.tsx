import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Alexandra Radu — Medic dermatolog | Craiova, România",
  description:
    "Practică independentă de dermatologie în Craiova. Îngrijire personalizată a pielii, dermatologie medicală și estetică — Dr. Alexandra Radu.",
  openGraph: {
    title: "Dr. Alexandra Radu — Medic dermatolog",
    description:
      "Dermatologie în Craiova, județul Dolj, România — cabinet independent.",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
