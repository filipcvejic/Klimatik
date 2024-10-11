import { averia_serif_libre } from "@/app/font";
import styles from "./Reviews.module.css";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      picture: "/images/user.png",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, lorem ac scelerisque volutpat,',
    },
    {
      picture: "/images/user.png",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, lorem ac scelerisque volutpat,',
    },
    {
      picture: "/images/user.png",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, lorem ac scelerisque volutpat,',
    },
    {
      picture: "/images/user.png",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, lorem ac scelerisque volutpat,',
    },
  ];

  return (
    <div className={`${styles.reviewsContainer} container`} id="experiences">
      <h2
        className={`${styles.reviewsHeading} ${averia_serif_libre.className}`}
      >
        Recenzije
      </h2>
      <div className={styles.reviewsContent}>
        {reviews.map((review, index) => (
          <div className={styles.review} key={index}>
            <Image
              src={review.picture}
              width={100}
              height={100}
              alt="User picture"
            />
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
