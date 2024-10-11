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
      text: "Zahvaljujući našem stručnom timu, osiguravamo brzu i efikasnu detekciju curenja rashladnih tečnosti. U našem hladnjaku, naš servis je uspeo da otkrije i sanira curenje uz pomoć modernih detektora.",
      button: "Kontaktirajte nas",
    },
    {
      image: "/images/Offers.png",
      text: "Naš profesionalni servis nudi rešenja za sve vaše potrebe u vezi sa klima uređajima. Iskoristite našu uslugu detekcije curenja kako biste produžili vek trajanja vaših uređaja i uštedeli na energiji.",
      button: "Saznajte više",
    },
    {
      image: "/images/Offers.png",
      text: "Pružamo sveobuhvatne usluge popravke i održavanja klima uređaja. Naša posvećenost kvalitetu usluge i zadovoljstvu kupaca garantuje da ćete uvek biti zadovoljni našim radom. Kontaktirajte nas za više informacija.",
      button: "Zakažite servis",
    },
  ];

  return (
    <section className={`${styles.offersContainer} container`} id="services">
      <h2 className={`${styles.offersHeading} ${averia_serif_libre.className}`}>
        Naše usluge
      </h2>
      <Swiper
        style={{ padding: 20, paddingBottom: 40, height: "72vh" }}
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
                alt="Klimatski uređaj sa detektorom curenja"
                layout="responsive"
                width={400}
                height={200}
              />
              <p>{offer.text}</p>
              <button className={styles.offerButton}>{offer.button}</button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Offers;
