import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import TextPage from "@/components/textPage/TextPage";
import React from "react";

const Servis = () => {
  return (
    <div>
      <Header />
      <TextPage
        mainTitle="Servis i održavanje klima uređaja"
        text1="Redovan servis i održavanje klima uređaja su ključni za dugotrajan rad i optimalne performanse. Naš tim stručnjaka nudi uslugu detaljnog čišćenja i provere svih komponenti klima uređaja, uključujući kompresor, filtere i ventilatore. Održavanjem klima uređaja osiguravate pouzdan rad, bolju energetsku efikasnost i čistiji vazduh u prostoru."
        text2="
Naš stručni tim vrši profesionalan servis klima uređaja, fokusirajući se na proaktivnu prevenciju kvarova i produžavanje radnog veka vašeg sistema. Bilo da vam je potreban sezonski pregled ili redovno održavanje, naši tehničari koriste vrhunsku opremu kako bi obezbedili efikasan rad klime i poboljšanu funkcionalnost. Naša usluga uključuje sveobuhvatnu proveru uređaja i zamenu potrebnih delova."
        text3="
Za optimalan rad klima uređaja tokom cele godine, važno je redovno vršiti čišćenje i proveru komponenti. Naš tim specijalizovan je za održavanje koje uključuje čišćenje unutrašnjih i spoljašnjih jedinica, uklanjanje prašine i zamenu filtera. Redovnim servisom sprečavate kvarove i produžavate trajanje vašeg klima uređaja, uz osiguranje maksimalne efikasnosti i nižih troškova energije."
        text4="
Pravovremeno servisiranje klima uređaja značajno smanjuje rizik od većih kvarova i omogućava duži vek trajanja sistema. Naša usluga održavanja osigurava da vaš klima uređaj radi efikasno tokom cele godine, uz minimiziranje troškova popravki. Pored servisa, pružamo korisne savete za pravilno korišćenje i održavanje, čime pomažemo u očuvanju efikasnosti i dugovečnosti vašeg klima uređaja."
        title1="Kompletan servis klima uređaja"
        title2="Održavanje sistema"
        title3="Redovno čišćenje i provera"
        title4="Dugotrajan rad i pouzdanost"
        img1={"/images/textPage2.jpg"}
        img2={"/images/textPage5.jpg"}
      />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
};

export default Servis;
