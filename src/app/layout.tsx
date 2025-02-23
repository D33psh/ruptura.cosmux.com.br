import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruptura",
  description: "Um trabalho misterioso e importante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="h-screen w-screen bg-slate-950 text-zinc-100 flex items-center justify-center text-center">
        {children}
      </body>
    </html>
  );
}
