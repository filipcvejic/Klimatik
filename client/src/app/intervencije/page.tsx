import ArticlePage from "@/components/ArticlePage/ArticlePage";

const Intervencije = () => {
  return (
    <ArticlePage
      mainTitle={`Hitna intervencija za klima uređaje`}
      sections={[
        {
          title: "Brza i sigurna ugradnja klime",
          text: "Ako vam je potrebna hitna intervencija za __ugradnju klime__, naš tim je spreman da odgovori 24/7. U situacijama kada klima prestane da funkcioniše ili kada je nova __instalacija__ neophodna što pre, pružamo brzu i pouzdanu __montažu__. Naši iskusni tehničari specijalizovani su za sve vrste klima uređaja, od __split sistema__ do __centralnih jedinica__, i osiguravamo efikasno hlađenje vašeg prostora. Uz visok nivo profesionalizma, radimo temeljno i bezbedno, pružajući vam dugotrajne rezultate i udoban ambijent.",
        },
        {
          title: "Hitna popravka i zamena klima",
          text: "Kada se suočavate sa hitnim kvarovima na klima uređaju, kao što su __curenje__, __neispravan rad__, ili potpuni prestanak rada, naš tim je tu da brzo interveniše. Nudimo kompletne usluge, uključujući __zamenu__, __popravku__ i instalaciju novih uređaja, garantujući optimalnu funkcionalnost. Koristimo najnoviju opremu i tehnike, što omogućava visok nivo kvaliteta i pouzdanost u radu. Naša služba za hitne intervencije pokriva sve tipove klima sistema, osiguravajući vam brzo hlađenje i sigurnost.",
          imgSrc: "/images/intervencijeImage1.jpg",
          imgAlt: "Slika hitne popravke klima uređaja",
        },
        {
          title: "Kompletna zamena klima sistema",
          text: "Za ozbiljnije probleme sa klimatizacijom, kao što su __neispravni sistemi__ ili __oštećene komponente__, često je potrebna kompletna __zamena klima sistema__. Naša stručna ekipa obavlja detaljnu analizu vaših potreba i prostora, preporučujući najbolja rešenja za ugradnju. Proces obuhvata sve faze, od inicijalnog planiranja do završne __montaže__, uz poštovanje standarda kvaliteta. Ova usluga pruža vam pouzdan i dugotrajan sistem klimatizacije, posebno kada je važno da sve funkcioniše besprekorno, čak i tokom najvećih vrućina.",
        },
        {
          title: "Efikasna montaža i održavanje",
          text: "Pravovremena montaža i održavanje klima uređaja ključni su za osiguravanje efikasnog rada i uštede energije. Naša hitna intervencija omogućava vam da brzo rešite sve probleme sa klimom, bilo da je u pitanju nova __instalacija__ ili __zamena__ postojećeg uređaja. Naši stručnjaci koriste samo vrhunske materijale i opremu, pružajući kvalitetnu uslugu i pouzdane rezultate. Redovno održavanje, kao i korisni saveti našeg tima, produžavaju vek trajanja vaše klime i smanjuju potrebu za budućim __popravkama__ i dodatnim troškovima.",
          imgSrc: "/images/intervencijeImage2.jpg",
          imgAlt: "Slika montaže i održavanja klima uređaja",
        },
      ]}
    />
  );
};

export default Intervencije;
