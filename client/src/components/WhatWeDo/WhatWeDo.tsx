import styles from "./WhatWeDo.module.css";
import Image from "next/image";

import React from "react";

const WhatWeDo = () => {
  return (
    <div className={`${styles.WhatWeDoWrapper} `}>
      <div className={`${styles.WhatWeDoContainer} container`}>
        <p className={styles.WhatWeDoTitle}>Sta mi radimo</p>
        <div className={styles.WhatWeDoTextWrapper}>
          <p className={styles.WhatWeDoLeftText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula, lorem ac scelerisque volutpat, orci mauris placerat orci,
            non gravida velit risus sed orci. Integer et nibh vel odio
            condimentum tincidunt non nec erat. Praesent fringilla risus vel
            felis suscipit, ac interdum leo facilisis. Suspendisse potenti.
            Phasellus interdum, magna at
          </p>
          <p className={styles.WhatWeDoLeftText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
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
