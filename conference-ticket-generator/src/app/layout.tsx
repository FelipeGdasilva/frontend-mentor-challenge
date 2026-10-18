import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inconsolata',
});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={inconsolata.variable}>
      <body className="font-inconsolata bg-neutral-900 text-neutral-0 antialiased">{children}</body>
    </html>
  );
}
