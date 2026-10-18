import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Tu Nombre · Portfolio", template: "%s | Tu Nombre" },
  description: "Portfolio de Tu Nombre: diseño, desarrollo y productos digitales.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
