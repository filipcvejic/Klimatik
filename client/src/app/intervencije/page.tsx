import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import TextPage from "@/components/textPage/TextPage";
import React from "react";

const Intervencije = () => {
  return (
    <div>
      <Header />
      <TextPage
        mainTitle="Hitna intervencija za klima uređaje"
        text1="Ako vam je potrebna hitna intervencija za ugradnju klime, naš tim je spreman da odgovori 24/7. U situacijama kada klima prestane da funkcioniše ili kada je nova instalacija neophodna što pre, pružamo brzu i pouzdanu montažu. Naši iskusni tehničari specijalizovani su za sve vrste klima uređaja, od split sistema do centralnih jedinica, i osiguravamo efikasno hlađenje vašeg prostora. Uz visok nivo profesionalizma, radimo temeljno i bezbedno, pružajući vam dugotrajne rezultate i udoban ambijent."
        text2="
Kada se suočavate sa hitnim kvarovima na klima uređaju, kao što su curenje, neispravan rad, ili potpuni prestanak rada, naš tim je tu da brzo interveniše. Nudimo kompletne usluge, uključujući zamenu, popravku i instalaciju novih uređaja, garantujući optimalnu funkcionalnost. Koristimo najnoviju opremu i tehnike, što omogućava visok nivo kvaliteta i pouzdanost u radu. Naša služba za hitne intervencije pokriva sve tipove klima sistema, osiguravajući vam brzo hlađenje i sigurnost."
        text3="
Za ozbiljnije probleme sa klimatizacijom, kao što su neispravni sistemi ili oštećene komponente, često je potrebna kompletna zamena klima sistema. Naša stručna ekipa obavlja detaljnu analizu vaših potreba i prostora, preporučujući najbolja rešenja za ugradnju. Proces obuhvata sve faze, od inicijalnog planiranja do završne montaže, uz poštovanje standarda kvaliteta. Ova usluga pruža vam pouzdan i dugotrajan sistem klimatizacije, posebno kada je važno da sve funkcioniše besprekorno, čak i tokom najvećih vrućina."
        text4="
Pravovremena montaža i održavanje klima uređaja ključni su za osiguravanje efikasnog rada i uštede energije. Naša hitna intervencija omogućava vam da brzo rešite sve probleme sa klimom, bilo da je u pitanju nova instalacija ili zamena postojećeg uređaja. Naši stručnjaci koriste samo vrhunske materijale i opremu, pružajući kvalitetnu uslugu i pouzdane rezultate. Redovno održavanje, kao i korisni saveti našeg tima, produžavaju vek trajanja vaše klime i smanjuju potrebu za budućim popravkama i dodatnim troškovima."
        title1="Brza i sigurna ugradnja klime"
        title2="Hitna popravka i zamena klima"
        title3="Kompletna zamena klima sistema"
        title4="Efikasna montaža i održavanje"
        img1={"/images/textPage0.jpg"}
        img2={"/images/textPage1.jpg"}
      />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
};

export default Intervencije;
