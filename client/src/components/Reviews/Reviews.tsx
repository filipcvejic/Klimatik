import { averia_serif_libre } from "@/app/font";
import styles from "./Reviews.module.css";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      picture: "/images/handsomeMan.png",
      text: "“Vrlo smo zadovoljni uslugom ugradnje klime. Tim je bio efikasan, ljubazan i precizan, a klima uređaj je postavljen bez ikakvih zastoja. Sve preporuke za ovaj stručni tim!”",
      name: "Marko Petrović",
    },
    {
      picture: "/images/handsomeWoman.png",
      text: "“Ugradnja klime je prošla brzo i bez problema. Tim je bio profesionalan, a rezultat je odličan. Sada uživamo u prijatnoj temperaturi tokom cele godine.”",
      name: "Ana Jovanović",
    },
    {
      picture: "/images/fatMan.png",
      text: "“Ekipa za ugradnju klime je stigla na vreme, radila profesionalno i sve objasnila detaljno. Postavili su klimu brzo, bez ikakvih problema. Topla preporuka.”",
      name: "Milan Nikolić",
    },
    {
      picture: "/images/fatWoman.png",
      text: "“Odlična usluga! Ugradnja klime je bila brza i jednostavna, a klima radi savršeno. Tim je bio ljubazan i vrlo profesionalan. Hvala vam!”",
      name: "Ivana Stojanović",
    },
  ];
  return (
    <div className={`${styles.reviewsContainer} container`} id="experiences">
      <h2
        className={`${styles.reviewsHeading} ${averia_serif_libre.className}`}
      >
        Iskustva
      </h2>
      <div className={styles.reviewsContent}>
        {reviews.map((review, index) => (
          <div className={styles.review} key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
