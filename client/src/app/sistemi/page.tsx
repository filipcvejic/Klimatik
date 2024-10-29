import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import TextPage from "@/components/textPage/TextPage";
import React from "react";

const Sistemi = () => {
  return (
    <div>
      <Header />
      <TextPage
        mainTitle="Postavljanje ventilacionih sistema"
        text1="Kvalitetan ventilacioni sistem obezbeđuje čist vazduh i optimalnu cirkulaciju u vašem prostoru. Naš tim stručnjaka pruža kompletnu uslugu postavljanja ventilacionih sistema za stambene i poslovne objekte, uz poštovanje najviših standarda u industriji. Kroz stručnu instalaciju, osiguravamo optimalan protok vazduha, redukciju vlage i bolju energetsku efikasnost prostora."
        text2="
Bez obzira na specifične zahteve vašeg objekta, naši iskusni tehničari pružaju prilagođena rešenja za ventilaciju. Od procene prostora, izbora adekvatnog sistema, do same instalacije, naša usluga pokriva sve faze postavljanja ventilacionih sistema. Takođe, brinemo o pravilnom pozicioniranju i podešavanju sistema kako bi obezbedio maksimalne performanse i dugovečnost."
        text3="
Za zahtevnije projekte postavljanja ventilacije, nudimo detaljnu analizu prostora i identifikaciju svih potreba za ventilacijom. Naši stručnjaci koriste najnoviju tehnologiju kako bi obezbedili preciznu instalaciju koja doprinosi udobnosti i energetskoj efikasnosti vašeg prostora. Pravovremena instalacija ventilacionog sistema smanjuje mogućnost pojave vlage i zagušljivosti u zatvorenom prostoru."
        text4="
Postavljanje ventilacionih sistema je ključ za dugotrajnu efikasnost i pouzdanost sistema. Uz naše usluge, obezbeđujemo ventilaciju visokog kvaliteta koja poboljšava kvalitet vazduha u prostoru, eliminiše zagušljivost i smanjuje nivoe vlage. Naši tehničari pružaju i korisne savete za redovno održavanje ventilacionih sistema kako bi oni uvek funkcionisali bez smetnji."
        title1="Profesionalno postavljanje ventilacije"
        title2="Prilagođena rešenja za ventilaciju"
        title3="Detaljna analiza i instalacija"
        title4="Dugotrajna efikasnost sistema"
        img1={"/images/textPage6.jpg"}
        img2={"/images/textPage7.jpg"}
      />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
};

export default Sistemi;
