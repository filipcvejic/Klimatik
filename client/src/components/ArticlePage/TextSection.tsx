import { formatTextWithStrongTags } from "@/helpers";
import styles from "./ArticlePage.module.css";

function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.textSection}>
      <h2 className={styles.textSectionTitle}>{title}</h2>
      <p className={styles.textSectionParagraph}>
        {formatTextWithStrongTags(text)}
      </p>
    </div>
  );
}

export default TextSection;
