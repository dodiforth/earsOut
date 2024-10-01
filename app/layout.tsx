import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chakraPetch = localFont({
  src: "./fonts/Chakra_Petch/ChakraPetch-Regular.ttf", // Update the path and filename if different
  variable: "--font-chakra-petch",
  weight: "400", // Adjust based on your font files
});

const caveat = localFont({
  src: "./fonts/Caveat/static/Caveat-Regular.ttf", // Update the path and filename if different
  variable: "--font-caveat",
  weight: "400", // Adjust based on your font files
});

export const metadata: Metadata = {
  title: "Für Christine F.",
  description: "Welcome to the Club Christine ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}