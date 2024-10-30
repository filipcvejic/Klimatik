import ArticlePage from "@/components/ArticlePage/ArticlePage";

const Sistemi = () => {
  return (
    <ArticlePage
      mainTitle={`Postavljanje ventilacionih sistema`}
      sections={[
        {
          title: "Brza i sigurna ugradnja klime",
          text: "Kvalitetan __ventilacioni sistem__ obezbeđuje čist vazduh i optimalnu cirkulaciju u vašem prostoru. Naš tim stručnjaka pruža kompletnu uslugu __postavljanja ventilacionih sistema__ za stambene i poslovne objekte, uz poštovanje najviših standarda u industriji. Kroz stručnu __instalaciju__, osiguravamo optimalan protok vazduha, redukciju vlage i bolju energetsku efikasnost prostora.",
        },
        {
          title: "Profesionalno postavljanje ventilacije",
          text: "Bez obzira na specifične zahteve vašeg objekta, naši iskusni tehničari pružaju prilagođena __rešenja za ventilaciju__. Od procene prostora, izbora adekvatnog sistema, do same instalacije, naša usluga pokriva sve faze postavljanja ventilacionih sistema. Takođe, brinemo o pravilnom pozicioniranju i podešavanju sistema kako bi obezbedio maksimalne performanse i dugovečnost.",
          imgSrc: "/images/sistemiImage1.jpg",
          imgAlt: "Slika postavljanja ventilacije",
        },
        {
          title: "Detaljna analiza i instalacija",
          text: "Za zahtevnije projekte postavljanja ventilacije, nudimo detaljnu analizu prostora i identifikaciju svih potreba za ventilacijom. Naši stručnjaci koriste najnoviju tehnologiju kako bi obezbedili preciznu instalaciju koja doprinosi udobnosti i energetskoj efikasnosti vašeg prostora. Pravovremena instalacija ventilacionog sistema smanjuje mogućnost pojave vlage i zagušljivosti u zatvorenom prostoru.",
        },
        {
          title: "Dugotrajna efikasnost sistema",
          text: "__Postavljanje ventilacionih sistema__ je ključ za dugotrajnu efikasnost i pouzdanost sistema. Uz naše usluge, obezbeđujemo ventilaciju visokog kvaliteta koja poboljšava kvalitet vazduha u prostoru, eliminiše zagušljivost i smanjuje nivoe vlage. Naši tehničari pružaju i korisne savete za redovno održavanje ventilacionih sistema kako bi oni uvek funkcionisali bez smetnji.",
          imgSrc: "/images/sistemiImage2.jpg",
          imgAlt: "Slika efikasnog ventilacionog sistema",
        },
      ]}
    />
  );
};

export default Sistemi;
