import { averia_serif_libre } from "@/app/font";
import Input from "../Input";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactFormContainer}>
      <div className={`${styles.contactFormContent} container`}>
        <div className={styles.contactFormDescription}>
          <span>Kontaktirajte nas!</span>
          <h3>Klima uređaji - Ugradnja, Servis i Održavanje</h3>
          <p className={styles.contactFormText}>
            Nudimo profesionalnu ugradnju klima uređaja i redovan servis kako bi
            vaš sistem radio besprekorno tokom cele godine. Naš tim stručnjaka
            pruža brzu i efikasnu uslugu prilagođenu vašim potrebama, bilo da
            vam je potrebna nova klima, popravka ili godišnji pregled.
            Kontaktirajte nas za pouzdana rešenja za hlađenje i klimatizaciju,
            jer naša dugogodišnja iskustva garantuju kvalitet i pouzdanost.
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
    </div>
  );
}
