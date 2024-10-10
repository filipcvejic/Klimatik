import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      text: "Servis i održavanje klima opreme",
      image: "/images/wind.png",
    },
    {
      text: "Hitna intervencija za klima uređaje",
      image: "/images/wind.png",
    },
    {
      text: "Dijagnostika kvarova i popravka",
      image: "/images/wind.png",
    },
    {
      text: "Zamena starih klima uređaja",
      image: "/images/wind.png",
    },
    {
      text: "Postavljanje ventilacionih sistema",
      image: "/images/wind.png",
    },
  ];

  return (
    <div className={`${styles.servicesContainer} container`}>
      {services.map((service, index) => (
        <div className={styles.serviceContent} key={index}>
          <Image
            src={service.image}
            width={150}
            height={150}
            alt="Wind image"
          />
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  );
}
