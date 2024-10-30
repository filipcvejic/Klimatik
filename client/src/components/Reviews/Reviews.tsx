import { averia_serif_libre } from "@/app/font";
import styles from "./Reviews.module.css";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      picture: "/images/handsomeMan.png",
      text: "“Vrlo smo zadovoljni uslugom ugradnje klime. Tim je bio efikasan, ljubazan i precizan, a klima uredjaj je postavljen bez ikakvih zastoja. Sve preporuke za ovaj strucni tim!”",
      name: "Marko Petrovic",
    },
    {
      picture: "/images/handsomeWoman.png",
      text: "“Ugradnja klime je prosla brzo i bez problema. Tim je bio profesionalan, a rezultat je odlican. Sada uzivamo u prijatnoj temperaturi tokom cele godine.”",
      name: "Ana Jovanovic",
    },
    {
      picture: "/images/fatMan.png",
      text: "“Ekipa za ugradnju klime je stigla na vreme, radila profesionalno i sve objasnila detaljno. Postavili su klimu brzo, bez ikakvih problema. Topla preporuka.”",
      name: "Milan Nikolic",
    },
    {
      picture: "/images/fatWoman.png",
      text: "“Odlicna usluga! Ugradnja klime je bila brza i jednostavna, a klima radi savrseno. Tim je bio ljubazan i vrlo profesionalan. Hvala vam!”",
      name: "Ivana Stojanovic",
    },
  ];

  return (
    <section className={styles.reviewsContainer} id="experiences">
      <div className={`${styles.reviewsContentWrapper} container`}>
        <h2
          className={`${styles.reviewsHeading} ${averia_serif_libre.className}`}
        >
          Iskustva
        </h2>
        <div className={styles.reviewsContent}>
          {reviews.map((review, index) => (
            <article className={styles.review} key={index}>
              <Image
                src={review.picture}
                width={100}
                height={100}
                alt={`Profilna slika korisnika ${review.name}`}
              />
              <blockquote>
                <p>{review.text}</p>
                <strong>- {review.name}</strong>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
