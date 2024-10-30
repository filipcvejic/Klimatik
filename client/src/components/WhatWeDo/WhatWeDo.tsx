import { averia_serif_libre } from "@/app/font";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className={styles.whatWeDoContainer} id="about">
      <div className={`${styles.whatWeDoContentWrapper} container`}>
        <h2
          className={`${styles.whatWeDoHeading} ${averia_serif_libre.className}`}
        >
          O nama
        </h2>
        <div className={styles.whatWeDoTextWrapper}>
          <article className={styles.whatWeDoTextSection}>
            <h3 className={styles.whatWeDoTextSectionHeading}>
              Nasa strucnost
            </h3>
            <p className={styles.whatWeDoTextSectionContent}>
              Nasa kompanija specijalizovana je za{" "}
              <strong>profesionalnu ugradnju klima uredjaja</strong>, pruzajuci
              vam najbolje resenje za efikasno hladjenje i klimatizaciju vaseg
              prostora. Bilo da vam je potrebna{" "}
              <strong>ugradnja novih klima uredjaja</strong> ili zamena
              postojecih sistema, nudimo <strong>brzu i pouzdanu uslugu</strong>{" "}
              prilagodjenu vasim potrebama. Nas strucni tim osigurava kvalitetnu
              montazu kako biste ustedeli energiju i troskove.
            </p>
          </article>
          <article className={styles.whatWeDoTextSection}>
            <h3 className={styles.whatWeDoTextSectionHeading}>Nasa misija</h3>
            <p className={styles.whatWeDoTextSectionContent}>
              Sa dugogodisnjim iskustvom u{" "}
              <strong>ugradnji klima uredjaja</strong> za stambene i poslovne
              objekte, garantujemo maksimalnu udobnost i{" "}
              <strong>optimalnu temperaturu</strong> tokom cele godine. Nasa
              resenja ukljucuju najmoderniju opremu, kao i{" "}
              <strong>redovno odrzavanje</strong> kako biste osigurali dug vek
              trajanja vaseg sistema. Kontaktirajte nas vec danas i saznajte
              vise o nasim <strong>uslugama klimatizacije</strong>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
