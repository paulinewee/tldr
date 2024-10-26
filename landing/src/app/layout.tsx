import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ApercuRegular = localFont({
  src: "./fonts/Apercu-Regular.otf",
});
const MacItalic = localFont({
  src: "./fonts/Mackinac-Italic.otf",
});
const MacRegular = localFont({
  src: "./fonts/Mackinac-Regular.otf",
});

export const metadata: Metadata = {
  title: "tldr",
  description: "the long distance relationship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ApercuRegular.className} ${MacItalic.className} ${MacRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
