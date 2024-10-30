import ArticlePage from "@/components/ArticlePage/ArticlePage";

const Sistemi = () => {
  return (
    <ArticlePage
      mainTitle={`Postavljanje ventilacionih sistema`}
      sections={[
        {
          title: "Brza i sigurna ugradnja klime",
          text: "Kvalitetan __ventilacioni sistem__ obezbedjuje cist vazduh i optimalnu cirkulaciju u vasem prostoru. Nas tim strucnjaka pruza kompletnu uslugu __postavljanja ventilacionih sistema__ za stambene i poslovne objekte, uz postovanje najvisih standarda u industriji. Kroz strucnu __instalaciju__, osiguravamo optimalan protok vazduha, redukciju vlage i bolju energetsku efikasnost prostora.",
        },
        {
          title: "Profesionalno postavljanje ventilacije",
          text: "Bez obzira na specificne zahteve vaseg objekta, nasi iskusni tehnicari pruzaju prilagodjena __resenja za ventilaciju__. Od procene prostora, izbora adekvatnog sistema, do same instalacije, nasa usluga pokriva sve faze postavljanja ventilacionih sistema. Takodje, brinemo o pravilnom pozicioniranju i podesavanju sistema kako bi obezbedio maksimalne performanse i dugovecnost.",
          imgSrc: "/images/sistemiImage1.jpg",
          imgAlt: "Slika postavljanja ventilacije",
        },
        {
          title: "Detaljna analiza i instalacija",
          text: "Za zahtevnije projekte postavljanja ventilacije, nudimo detaljnu analizu prostora i identifikaciju svih potreba za ventilacijom. Nasi strucnjaci koriste najnoviju tehnologiju kako bi obezbedili preciznu instalaciju koja doprinosi udobnosti i energetskoj efikasnosti vaseg prostora. Pravovremena instalacija ventilacionog sistema smanjuje mogucnost pojave vlage i zagusljivosti u zatvorenom prostoru.",
        },
        {
          title: "Dugotrajna efikasnost sistema",
          text: "__Postavljanje ventilacionih sistema__ je kljuc za dugotrajnu efikasnost i pouzdanost sistema. Uz nase usluge, obezbedjujemo ventilaciju visokog kvaliteta koja poboljsava kvalitet vazduha u prostoru, eliminise zagusljivost i smanjuje nivoe vlage. Nasi tehnicari pruzaju i korisne savete za redovno odrzavanje ventilacionih sistema kako bi oni uvek funkcionisali bez smetnji.",
          imgSrc: "/images/sistemiImage2.jpg",
          imgAlt: "Slika efikasnog ventilacionog sistema",
        },
      ]}
    />
  );
};

export default Sistemi;
