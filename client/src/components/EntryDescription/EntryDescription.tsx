import React from "react";
import Image from "next/image";
import styles from "./EntryDescription.module.css";

const EntryDescription = () => {
  return (
    <div className={`${styles.entryDescriptionContainer} container`}>
      <Image
        src="/images/smartHome.png"
        width={600}
        height={600}
        quality={90}
        alt="home with smart aircondition"
      />
      <div className={`${styles.entryDescriptionTextWrapper} `}>
        <p className={styles.entryDescriptionSubHeading}>
          Naslov nes kao klima
        </p>
        <h3 className={styles.entryDescriptionHeading}>
          Naslov nes kao klima Naslov nes kao klimaNaslov nes kao klima
        </h3>
        <p className={styles.entryDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vehicula, lorem ac scelerisque volutpat, orci mauris placerat orci,
          non gravida velit risus sed orci. Integer et nibh vel odio condimentum
          tincidunt non nec erat. Praesent fringilla risus vel felis suscipit,
          ac interdum leo facilisis. Suspendisse potenti. Phasellus interdum, da
          velit risus sed orci. Integer et nibh vel odio condimentum tincidunt
          non nec erat. Praesent fringilla risus vel felis suscipit, ac interdum
          leo facilisis. Suspendisse potenti.
        </p>
        <button className={styles.entryDescriptionButton}>pozovi</button>
      </div>
    </div>
  );
};

export default EntryDescription;
