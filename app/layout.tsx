import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";

import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Love Chat",
  description: "nosso cantinho ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={pixelify.className}>
        {children}
      </body>
    </html>
  );
}