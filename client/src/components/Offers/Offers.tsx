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
import { PHONE_NUMBER } from "@/constants";

const Offers = () => {
  const offers = [
    {
      image: "/images/service1.jpg",
      text: "Zahvaljujuci nasem strucnom timu, osiguravamo brzu i efikasnu detekciju curenja rashladnih tecnosti. U nasem hladnjaku, nas servis je uspeo da otkrije i sanira curenje uz pomoc modernih detektora.",
      button: "Kontaktirajte nas",
    },
    {
      image: "/images/service2.jpg",
      text: "Nas profesionalni servis nudi resenja za sve vase potrebe u vezi sa klima uredjajima. Iskoristite nasu uslugu detekcije curenja kako biste produzili vek trajanja vasih uredjaja i ustedeli na energiji.",
      button: "Saznajte vise",
    },
    {
      image: "/images/service3.jpg",
      text: "Pruzamo sveobuhvatne usluge popravke i odrzavanja klima uredjaja. Nasa posvecenost kvalitetu usluge i zadovoljstvu kupaca garantuje da cete uvek biti zadovoljni nasim radom. Kontaktirajte nas za vise informacija.",
      button: "Zakazite servis",
    },
  ];

  return (
    <section className={`${styles.offersContainer} container`} id="services">
      <h2 className={`${styles.offersHeading} ${averia_serif_libre.className}`}>
        Nase usluge
      </h2>
      <Swiper
        style={{ padding: 20, paddingBottom: 40, height: 580 }}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        slidesPerView={3}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <article className={styles.offer}>
              <Image
                className={styles.offerImage}
                src={offer.image}
                alt="Klimatski uredjaj sa detektorom curenja"
                layout="responsive"
                width={400}
                height={200}
              />
              <p>{offer.text}</p>
              <a href={`tel:${PHONE_NUMBER}`} className={styles.offerButton}>
                {offer.button}
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Offers;
