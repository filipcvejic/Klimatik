import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";
import Script from "next/script";

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
        {children}
      </body>
    </html>
  );
}
