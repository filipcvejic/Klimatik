import React from "react";
import styles from "./ArticlePage.module.css";
import ImageTextSection from "./ImageTextSection";
import TextSection from "./TextSection";
import { ArticlePageProps } from "./ArticlePageProps";
import { averia_serif_libre } from "@/app/font";

const ArticlePage = ({ mainTitle, sections }: ArticlePageProps) => {
  return (
    <div className={styles.articlePageContiner}>
      <div className={styles.articlePageIntroduction}>
        <h1
          className={`${styles.articlePageHeading} ${averia_serif_libre.className}`}
        >
          {mainTitle}
        </h1>
      </div>
      <div className={`${styles.articlePageContent} container`}>
        {sections.map((section, index) => {
          if (section.imgSrc) {
            const isReversed = index % 4 === 3;
            return (
              <ImageTextSection
                key={index}
                title={section.title}
                text={section.text}
                imgSrc={section.imgSrc}
                imgAlt={section.imgAlt || ""}
                className={
                  isReversed
                    ? styles.imageTextSectionReversed
                    : styles.imageTextSection
                }
              />
            );
          } else {
            return (
              <TextSection
                key={index}
                title={section.title}
                text={section.text}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ArticlePage;
