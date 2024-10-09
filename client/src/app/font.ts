import { Montserrat, Averia_Serif_Libre } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "600", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const averia_serif_libre = Averia_Serif_Libre({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});
