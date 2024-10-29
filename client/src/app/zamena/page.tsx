import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InBetween from "@/components/In-between";
import TextPage from "@/components/textPage/TextPage";
import React from "react";

const Zamena = () => {
  return (
    <div>
      <Header />
      <TextPage
        mainTitle="Zamena starih klima sistema"
        text1="Ako vaš stari klima uređaj više ne funkcioniše kako bi trebalo ili troši previše energije, zamena sistema može biti najbolja opcija. Naš stručni tim nudi profesionalnu uslugu zamene starih klima sistema sa najnovijim i energetski efikasnijim modelima. Time obezbeđujemo bolje hlađenje, niže račune za struju i značajno poboljšanu udobnost u vašem prostoru."
        text2="
Zamena starog klima uređaja nije samo u pitanju komfora, već i uštede. Naši tehničari analiziraju vaše potrebe i preporučuju sistem koji će najbolje odgovarati vašem prostoru. Proces zamene obuhvata demontažu starog sistema i instalaciju novog uređaja, uz brzu i efikasnu uslugu koja osigurava optimalnu efikasnost rada. Novi sistemi nude savremene funkcije i smanjenu potrošnju energije."
        text3="
Kada je vreme za zamenu klima uređaja, naš tim stručnjaka osigurava besprekornu uslugu zamene kako biste uživali u svim prednostima novog sistema. Analiziramo vaš trenutni sistem, preporučujemo optimalno rešenje i pružamo celokupan servis zamene, uključujući čišćenje prostora i proveru funkcionalnosti novog uređaja. Naš cilj je da vam omogućimo dugoročno rešenje koje poboljšava kvalitet života i štedi energiju."
        text4="
Pravovremena zamena starog klima uređaja pomaže u prevenciji skupih popravki i poboljšava udobnost vašeg doma ili kancelarije. Novi klima sistemi pružaju bolje hlađenje, tiši rad i niže troškove energije. Uz naše stručne savete i profesionalnu ugradnju, uživaćete u optimalnim performansama i dugotrajnom radu novog sistema. Naš tim je ovde da osigura brz i jednostavan prelazak na novi klima uređaj."
        title1="Efikasna zamena klima uređaja"
        title2="Moderni i energetski efikasni sistemi"
        title3="Profesionalna instalacija i savetovanje"
        title4="Dugoročna ušteda i udobnost"
        img1={"/images/textPage8.jpg"}
        img2={"/images/textPage9.jpg"}
      />
      <ContactForm />
      <InBetween text="Fiksna cena, bez skrivenih troškova." />
      <Footer />
    </div>
  );
};

export default Zamena;
