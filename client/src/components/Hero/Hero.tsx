import { PHONE_NUMBER } from "@/constants";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/hero.png"
        alt="Ugradnja klime - Hero image"
        fill
        className={styles.heroImage}
        quality={100}
      />
      <div className={`${styles.heroContent} container`}>
        <p>
          <span>Klimatik</span> pouzdana instalacija klime
        </p>
        <h1 className={styles.heroHeading}>Popravka & Ugradnja Klime</h1>
        <a href={`tel:${PHONE_NUMBER}`} className={styles.heroPhoneButton}>
          {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );
}
