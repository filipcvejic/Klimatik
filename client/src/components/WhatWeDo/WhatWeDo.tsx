import { averia_serif_libre } from "@/app/font";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDoContainer} id="about">
      <div className={`${styles.whatWeDoContentWrapper} container`}>
        <h2
          className={`${styles.whatWeDoHeading} ${averia_serif_libre.className}`}
        >
          Sta mi radimo
        </h2>
        <div className={styles.whatWeDoTextWrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula, lorem ac scelerisque volutpat, orci mauris placerat orci,
            non gravida velit risus sed orci. Integer et nibh vel odio
            condimentum tincidunt non nec erat. Praesent fringilla risus vel
            felis suscipit, ac interdum leo facilisis. Suspendisse potenti.
            Phasellus interdum, magna at
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula, lorem ac scelerisque volutpat, orci mauris placerat orci,
            non gravida velit risus sed orci. Integer et nibh vel odio
            condimentum tincidunt non nec erat. Praesent fringilla risus vel
            felis suscipit, ac interdum leo facilisis. Suspendisse potenti.
            Phasellus interdum, magna at
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
