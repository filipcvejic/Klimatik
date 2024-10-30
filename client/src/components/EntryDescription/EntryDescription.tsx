import React from "react";
import Image from "next/image";
import styles from "./EntryDescription.module.css";
import { PHONE_NUMBER } from "@/constants";
import { averia_serif_libre } from "@/app/font";

const EntryDescription = () => {
  return (
    <section className={styles.entryDescriptionContainer} id="entry">
      <h2
        className={`${styles.entryDescriptionTitle} ${averia_serif_libre.className}`}
      >
        Prednosti Klime
      </h2>
      <div className={`${styles.entryDescriptionContentWrapper} container`}>
        <Image
          src="/images/smartHome.png"
          height={600}
          width={600}
          quality={90}
          alt="home with smart air conditioning"
          className={styles.entryDescriptionImage}
        />
        <div className={styles.entryDescriptionTextWrapper}>
          <h3 className={styles.entryDescriptionHeading}>
            Postavljanje Klima Uredjaja: Uzivajte u Savrsenoj Klimi
          </h3>
          <p className={styles.entryDescriptionText}>
            U danasnje vreme, klima uredjaji su postali neophodni za odrzavanje
            prijatnog ambijenta u vasem domu ili kancelariji. Nas tim strucnjaka
            pruza profesionalnu ugradnju klima uredjaja koja osigurava optimalan
            rad i poboljsanje kvaliteta vazduha.
            <br />
            Nasa usluga ukljucuje besplatnu procenu i savetovanje o najboljim
            resenjima za vas prostor. Kontaktirajte nas i saznajte kako mozemo
            poboljsati vasu udobnost!
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={styles.entryDescriptionButton}
          >
            pozovi
          </a>
        </div>
      </div>
    </section>
  );
};

export default EntryDescription;
