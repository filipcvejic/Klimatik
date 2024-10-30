import ArticlePage from "@/components/ArticlePage/ArticlePage";

const Servis = () => {
  return (
    <ArticlePage
      mainTitle={`Servis i odrzavanje klima uredjaja`}
      sections={[
        {
          title: "Kompletan servis klima uredjaja",
          text: "Redovan __servis i odrzavanje klima uredjaja__ su kljucni za dugotrajan rad i optimalne performanse. Nas tim strucnjaka nudi uslugu detaljnog __ciscenja__ i provere svih komponenti __klima uredjaja__, ukljucujuci kompresor, filtere i ventilatore. __Odrzavanjem klima uredjaja__ osiguravate pouzdan rad, bolju energetsku efikasnost i cistiji vazduh u prostoru.",
        },
        {
          title: "Odrzavanje sistema",
          text: "Nas strucni tim vrsi _profesionalan __servis klima uredjaja__, fokusirajuci se na proaktivnu prevenciju kvarova i produzavanje radnog veka vaseg sistema. Bilo da vam je potreban sezonski pregled ili redovno odrzavanje, nasi tehnicari koriste vrhunsku opremu kako bi obezbedili efikasan rad klime i poboljsanu funkcionalnost. Nasa usluga ukljucuje sveobuhvatnu proveru uredjaja i zamenu potrebnih delova.",
          imgSrc: "/images/servisiImage1.jpg",
          imgAlt: "Slika servisa klima uređaja",
        },
        {
          title: "Redovno ciscenje i provera",
          text: "Za optimalan rad klima uredjaja tokom cele godine, vazno je redovno vrsiti ciscenje i proveru komponenti. Nas tim specijalizovan je za odrzavanje koje ukljucuje __ciscenje unutrasnjih i spoljasnjih jedinica__, uklanjanje prasine i zamenu filtera. Redovnim servisom sprecavate kvarove i produzavate trajanje vaseg klima uredjaja, uz osiguranje maksimalne efikasnosti i nizih troskova energije.",
        },
        {
          title: "Dugotrajan rad i pouzdanost",
          text: "Pravovremeno __servisiranje klima uredjaja__ znacajno smanjuje rizik od vecih kvarova i omogucava duzi vek trajanja sistema. Nasa usluga odrzavanja osigurava da vas klima uredjaj radi efikasno tokom cele godine, uz minimiziranje troskova popravki. Pored servisa, pruzamo korisne savete za pravilno koriscenje i odrzavanje, cime pomazemo u ocuvanju efikasnosti i dugovecnosti vaseg klima uredjaja.",
          imgSrc: "/images/servisiImage2.jpg",
          imgAlt: "Slika održavanja klima uređaja",
        },
      ]}
    />
  );
};

export default Servis;
