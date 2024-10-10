import React from "react";
import Image from "next/image";
import styles from "./EntryDescription.module.css";

const EntryDescription = () => {
  return (
    <section className={`${styles.entryDescriptionContainer} container`}>
      <Image
        src="/images/smartHome.png"
        width={600}
        height={600}
        quality={90}
        alt="home with smart air conditioning"
      />
      <div className={styles.entryDescriptionTextWrapper}>
        <p className={styles.entryDescriptionSubHeading}>
          Ključne Prednosti Ugradnje Klima Uređaja
        </p>
        <h1 className={styles.entryDescriptionHeading}>
          Postavljanje Klima Uređaja: Uživajte u Savršenoj Klimi
        </h1>
        <p className={styles.entryDescriptionText}>
          U današnje vreme, klima uređaji su postali neophodni za održavanje
          prijatnog ambijenta u vašem domu ili kancelariji. Naš tim stručnjaka
          pruža profesionalnu ugradnju klima uređaja koja osigurava optimalan
          rad i poboljšanje kvaliteta vazduha.
        </p>
        <p className={styles.entryDescriptionText}>
          Naša usluga uključuje besplatnu procenu i savetovanje o najboljim
          rešenjima za vaš prostor. Kontaktirajte nas i saznajte kako možemo
          poboljšati vašu udobnost!
        </p>
        <button className={styles.entryDescriptionButton}>Pozovi nas</button>
      </div>
    </section>
  );
};

export default EntryDescription;
