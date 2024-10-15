import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";

export const metadata: Metadata = {
  title: "Ugradnja i Servis Klima Novi Sad | 24/7 Popravke i Održavanje",
  description:
    "Ugradnja, popravka, servis, čišćenje i punjenje freonom klima uređaja Novi Sad i okolina. Povoljne cene i brza usluga svih brendova. Pozovite odmah!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
