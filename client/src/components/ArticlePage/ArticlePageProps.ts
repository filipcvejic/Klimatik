export interface ArticlePageProps {
  mainTitle: string;
  sections: {
    title: string;
    text: string;
    imgSrc?: string;
    imgAlt?: string;
  }[];
}
