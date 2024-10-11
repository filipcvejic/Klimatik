import { averia_serif_libre } from "@/app/font";
import styles from "./In-between.module.css";
import { CALL_BUTTON_SLOGAN, PHONE_NUMBER } from "@/constants";

export default function InBetween({ text }: { text: string }) {
  return (
    <div className={styles.inBetweenContainer}>
      <div
        className={`${styles.inBetweenContent} ${averia_serif_libre.className} container`}
      >
        <p className={styles.inBetweenText}>{text}</p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className={`${styles.inBetweenCallButton} ${averia_serif_libre.className}`}
          aria-label={`Pozovite ${PHONE_NUMBER}`} // Dodato za pristupačnost
        >
          {CALL_BUTTON_SLOGAN}
        </a>
      </div>
    </div>
  );
}
