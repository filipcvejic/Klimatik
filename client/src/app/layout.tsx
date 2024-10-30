import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";
import Script from "next/script";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Ugradnja i Servis Klima Novi Sad | 24/7 Popravke i Odrzavanje",
  description:
    "Ugradnja, popravka, servis, ciscenje i punjenje freonom klima uredjaja Novi Sad i okolina. Povoljne cene i brza usluga svih brendova. Pozovite odmah!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PCNGX645');`,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCNGX645"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <div className={`contentWrapper`}>{children}</div>
        <ContactForm />
        <InBetween text="Fiksna cena, bez skrivenih troskova." />
        <Footer />
      </body>
    </html>
  );
}
