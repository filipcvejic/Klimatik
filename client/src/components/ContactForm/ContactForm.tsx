import { averia_serif_libre } from "@/app/font";
import Input from "../Input";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactFormContainer}>
      <div className={`${styles.contactFormContent} container`}>
        <div className={styles.contactFormDescriptionContent}>
          <span className={styles.contactFormDescriptionSubHeading}>
            Kontaktirajte nas!
          </span>
          <h2 className={styles.contactFormDescriptionHeading}>
            Klima uredjaji - Ugradnja, Servis i Odrzavanje
          </h2>
          <p className={styles.contactFormText}>
            Nudimo profesionalnu ugradnju klima uredjaja i redovan servis kako
            bi vas sistem radio besprekorno tokom cele godine. Nas tim
            strucnjaka pruza brzu i efikasnu uslugu prilagodjenu vasim
            potrebama, bilo da vam je potrebna nova klima, popravka ili godisnji
            pregled. Kontaktirajte nas za pouzdana resenja za hladjenje i
            klimatizaciju, jer nasa dugogodisnja iskustva garantuju kvalitet i
            pouzdanost.
          </p>
        </div>
        <div className={styles.contactFormSubmition}>
          <div className={styles.contactFormFields}>
            <div className={styles.nameAndSurnameFieldsWrapper}>
              <Input type="text" placeHolder="Ime" />
              <Input type="text" placeHolder="Prezime" />
            </div>
            <Input type="text" placeHolder="Email" />
            <Input type="text" placeHolder="Poruka" />
          </div>
          <button
            className={`${styles.contactFormButton} ${averia_serif_libre.className}`}
          >
            Posalji
          </button>
        </div>
      </div>
    </section>
  );
}
