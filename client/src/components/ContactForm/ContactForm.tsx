import { averia_serif_libre } from "@/app/font";
import Input from "../Input";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactFormContainer}>
      <div className={`${styles.contactFormContent} container`}>
        <div className={styles.contactFormDescription}>
          <span>Naslov nes kao klima</span>
          <h3>Naslov nes kao klima Naslov nes kao klima</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula, lorem ac scelerisque volutpat, orci mauris placerat orci,
            non gravida velit risus sed orci. Integer et nibh vel odio
            condimentum tincidunt non nec erat. Praesent fringilla risus vel
            felis suscipit, ac interdum leo facilisis. Suspendisse potenti.
            Phasellus interdum, magna at
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
