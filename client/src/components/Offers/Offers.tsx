"use client";

import React from "react";
import Image from "next/image";
import styles from "./Offers.module.css";
import { averia_serif_libre } from "@/app/font";

const Offers = () => {
  const offers = [
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
    <div className={`${styles.offersContainer} container`}>
      <h2 className={`${styles.offersHeading} ${averia_serif_libre.className}`}>
        Nase usluge
      </h2>
      <div className={styles.offersContent}>
        {offers.map((offer, index) => (
          <div className={styles.offer} key={index}>
            <Image
              className={styles.offerImage}
              src={offer.image}
              alt="slika sa klimom"
              layout="responsive"
              width={400}
              height={200}
            />

            <p className={styles.offerDescription}>{offer.text}</p>
            <button className={styles.offerButton}>{offer.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
