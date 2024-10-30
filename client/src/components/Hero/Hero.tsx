import { PHONE_NUMBER } from "@/constants";
import styles from "./Hero.module.css";
import Image from "next/image";
import { averia_serif_libre } from "@/app/font";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/hero.jpg"
        alt="Ugradnja klime - Hero image"
        fill
        className={styles.heroImage}
        quality={90}
      />
      <div className={`${styles.heroContent} container`}>
        <p className={styles.heroSubtitle}>
          <span>Klimatik</span> pouzdana ugradnja klime
        </p>
        <h1 className={`${styles.heroHeading} ${averia_serif_libre.className}`}>
          Montaza, Servis i Popravka Klime
        </h1>
        <a href={`tel:${PHONE_NUMBER}`} className={styles.heroPhoneButton}>
          {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );
}
