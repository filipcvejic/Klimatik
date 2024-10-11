import { averia_serif_libre } from "@/app/font";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDoContainer} id="about">
      <div className={`${styles.whatWeDoContentWrapper} container`}>
        <h2
          className={`${styles.whatWeDoHeading} ${averia_serif_libre.className}`}
        >
          O nama
        </h2>

        <div className={styles.whatWeDoTextWrapper}>
          <div className={styles.section}>
            <h3>Naša stručnost</h3>
            <p>
              Naša kompanija specijalizovana je za{" "}
              <strong>profesionalnu ugradnju klima uređaja</strong>, pružajući
              vam najbolje rešenje za efikasno hlađenje i klimatizaciju vašeg
              prostora. Bilo da vam je potrebna{" "}
              <strong>instalacija novih klima uređaja</strong>
              ili zamena postojećih sistema, nudimo{" "}
              <strong>brzu i pouzdanu uslugu</strong> prilagođenu vašim
              potrebama. Naš stručni tim osigurava kvalitetnu montažu kako biste
              uštedeli energiju i smanjili troškove.
            </p>
          </div>
          <div className={styles.section}>
            <h3>Naša misija</h3>
            <p>
              Sa dugogodišnjim iskustvom u{" "}
              <strong>ugradnji klima uređaja</strong> za stambene i poslovne
              objekte, garantujemo maksimalnu udobnost i{" "}
              <strong>optimalnu temperaturu</strong> tokom cele godine. Naša
              rešenja uključuju najmoderniju opremu, kao i{" "}
              <strong>redovno održavanje</strong> kako biste osigurali dug vek
              trajanja vašeg sistema. Kontaktirajte nas već danas i saznajte
              više o našim <strong>uslugama klimatizacije</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
