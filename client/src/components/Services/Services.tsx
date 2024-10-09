import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      text: "Krindzara mala",
      subText: "Stefan",
      image: "/images/wind.png",
    },
    {
      text: "Krindzara mala",
      subText: "Stefan",
      image: "/images/wind.png",
    },
    {
      text: "Krindzara mala",
      subText: "Stefan",
      image: "/images/wind.png",
    },
    {
      text: "Krindzara mala",
      subText: "Stefan",
      image: "/images/wind.png",
    },
    {
      text: "Krindzara mala",
      subText: "Stefan",
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
          <p>
            {service.text}
            <br />
            {service.subText}
          </p>
        </div>
      ))}
    </div>
  );
}
