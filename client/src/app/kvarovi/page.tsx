import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import TextPage from "@/components/textPage/TextPage";
import React from "react";

const Kvarovi = () => {
  return (
    <div>
      <Header />
      <TextPage
        mainTitle="Dijagnostika kvarova i popravka"
        text1="Kada klima uređaj iznenada prestane da radi ili pokazuje znake kvara, brza intervencija je ključna za udobnost vašeg prostora. Naš tim stručnjaka dostupan je 24/7 kako bi brzo i efikasno rešio svaki problem, bilo da je reč o neispravnom hlađenju, curenju vode ili kvarovima u sistemu ventilacije. Pružamo sveobuhvatne usluge popravke klima uređaja, uz vrhunske delove i opremu, osiguravajući dugotrajan rad vašeg uređaja."
        text2="
Kada vaša klima uređaj ne funkcioniše kako bi trebalo, naša hitna služba za popravke klima uređaja osigurava brzu dijagnostiku i kvalitetnu popravku. Bilo da se suočavate sa problemima poput nepravilnog rada kompresora, curenja rashladnog fluida ili blokada u sistemu, naši iskusni tehničari pružaju pouzdana rešenja koja obnavljaju optimalnu funkcionalnost vašeg klima uređaja. Svi naši popravci uključuju visokokvalitetne delove koji produžavaju vek trajanja uređaja."
        text3="
Za kompleksnije kvarove na klima uređaju, naš tim nudi detaljnu procenu kako bi se identifikovao uzrok problema i osigurao dugotrajan popravak. Naši stručnjaci koriste najnoviju tehnologiju i alate kako bi dijagnostikovali i rešili problem efikasno. Uz pravovremenu intervenciju, izbegavate dodatne troškove i neprijatnosti koje mogu proizaći iz neispravnosti sistema."
        text4="
Pravovremena popravka klima uređaja pomaže u prevenciji ozbiljnijih kvarova i produžava njegov radni vek. Naša stručna služba za popravku klima uređaja pruža brzu i kvalitetnu uslugu za sve vrste kvarova, od manjih problema do ozbiljnih neispravnosti. Uz korisne savete za održavanje, pomažemo vam da vaša klima uređaj radi efikasno i pouzdano, uz uštedu na budućim popravkama."
        title1="Popravka klima uređaja"
        title2="Brza dijagnostika i popravka"
        title3="Detaljna procena kvarova"
        title4="Pouzdano održavanje i popravka"
        img1={"/images/textPage4.jpg"}
        img2={"/images/textPage3.jpg"}
      />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
};

export default Kvarovi;
