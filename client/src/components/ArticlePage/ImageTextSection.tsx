import { formatTextWithStrongTags } from "@/helpers";
import styles from "./ArticlePage.module.css";
import Image from "next/image";
import { CALL_BUTTON_SLOGAN, PHONE_NUMBER } from "@/constants";
import { averia_serif_libre } from "@/app/font";
import { ImageTextSectionProps } from "./ImageTextSectionProps";

function ImageTextSection({
  title,
  text,
  imgSrc,
  imgAlt,
  className,
}: ImageTextSectionProps) {
  return (
    <div className={className}>
      {imgSrc && (
        <div className={styles.imageTextSectionImageContainer}>
          <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className={styles.imageTextSectionContent}>
        <div className={styles.imageTextSectionTextContent}>
          <h2 className={styles.imageTextSectionTitle}>{title}</h2>
          <p className={styles.imageTextSectionParagraph}>
            {formatTextWithStrongTags(text)}
          </p>
        </div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className={`${styles.imageTextSectionPhoneButton} ${averia_serif_libre.className}`}
        >
          {CALL_BUTTON_SLOGAN}
        </a>
      </div>
    </div>
  );
}

export default ImageTextSection;
