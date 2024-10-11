"use client";

import React from "react";
import Image from "next/image";
import styles from "./Offers.module.css";
import { averia_serif_libre } from "@/app/font";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Offers = () => {
  const offers = [
    {
      image: "/images/Offers.png",
      text: "Zahvaljujuci nasem strucnom timu, osiguravamo brzu i efikasnu detekciju curenja rashladnih tecnosti. U nasem hladnjaku, nas servis je uspeo da otkrije i sanira curenje uz pomoc modernih detektora. Nasa usluga je idealna za sve koji zele ocuvati svoj uredjaj i smanjiti troskove.",
      button: "Kontaktirajte nas",
    },
    {
      image: "/images/Offers.png",
      text: "Nas profesionalni servis nudi resenja za sve vase potrebe u vezi sa klima uredjajima. Iskoristite nasu uslugu detekcije curenja kako biste produzili vek trajanja vasih uredjaja i ustedeli na energiji. Nas tim je tu da vam pomogne.",
      button: "Saznajte vise",
    },
    {
      image: "/images/Offers.png",
      text: "Pruzamo sveobuhvatne usluge popravke i odrzavanja klima uredjaja. Nasa posvecenost kvalitetu usluge i zadovoljstvu kupaca garantuje da cete uvek biti zadovoljni nasim radom. Kontaktirajte nas za vise informacija.",
      button: "Zakazite servis",
    },
  ];

  return (
    <div className={`${styles.offersContainer} container`} id="services">
      <h2 className={`${styles.offersHeading} ${averia_serif_libre.className}`}>
        Nase usluge klimatskih uredjaja
      </h2>
      <Swiper
        style={{ padding: 20, paddingBottom: 40, height: "72vh" }}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Pagination, Scrollbar, A11y, Autoplay]} // Ensure modules are included
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className={styles.offer}>
              <Image
                className={styles.offerImage}
                src={offer.image}
                alt="Klimatski uređaj sa detektorom curenja"
                layout="responsive"
                width={400}
                height={200}
              />
              <p>{offer.text}</p>
              <button className={styles.offerButton}>{offer.button}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
