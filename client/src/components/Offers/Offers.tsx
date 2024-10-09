"use client";

import React from "react";
import Image from "next/image";
import styles from "./Offers.module.css";

const Offers = () => {
  const OffersData = [
    {
      image: "/images/Offers.png",
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku.",
      button: "Aleksandar",
    },
    {
      image: "/images/Offers.png",
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku.",
      button: "Aleksandar",
    },
    {
      image: "/images/Offers.png",
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati  curenje u našem hladnjaku.",
      button: "Aleksandar",
    },
  ];

  return (
    <div className={`${styles.offers} container`}>
      <p className={styles.offersTitle}>Nase usluge</p>

      <ul className={styles.offersWrapper}>
        {OffersData.map((OfferData) => (
          <li className={styles.offersItem}>
            <Image
              className={styles.offersImage}
              src={OfferData.image}
              alt="slika sa klimom"
              layout="responsive"
              width={400}
              height={200}
            ></Image>

            <p>{OfferData.text}</p>
            <button className={styles.offersButton}>{OfferData.button}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
