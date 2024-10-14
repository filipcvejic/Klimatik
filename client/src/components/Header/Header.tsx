import { EMAIL, PHONE_NUMBER } from "@/constants";
import Image from "next/image";
import styles from "./Header.module.css";
import HamburgerMenu from "../HamburgerMenu";
import { averia_serif_libre } from "@/app/font";

export default function Header() {
  const navigationLinks = [
    {
      label: "Početna",
      href: "home",
    },
    {
      label: "Uvod",
      href: "entry",
    },
    {
      label: "Usluge",
      href: "services",
    },
    {
      label: "O nama",
      href: "about",
    },
    {
      label: "Iskustva",
      href: "experiences",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topHeaderWrapper}>
        <div className={`${styles.topHeaderContent} container`}>
          <div className={styles.topHeaderContact}>
            <div className={styles.topHeaderInstagramContactWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
              </svg>
            </div>
            <p className={styles.topHeaderMail}>{EMAIL}</p>
          </div>
          <div className={styles.topHeaderPhoneContactWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#147DA9"
              className="size-6"
              height={30}
              width={30}
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>
        </div>
      </div>
      <div className={styles.mainHeaderWrapper}>
        <div className={`${styles.mainHeaderContent} container`}>
          <a href="#home" className={styles.logoWrapper}>
            <Image
              src="/images/logo.png"
              alt="Klimatik logo"
              height={50}
              width={50}
            />
            <h2 className={`${styles.logo} ${averia_serif_libre.className}`}>
              Klimatik
            </h2>
          </a>
          <nav className={styles.navBar}>
            <ul>
              {navigationLinks.map((navLink, index) => (
                <li key={index}>
                  <a className={styles.navLinkLabel} href={`#${navLink.href}`}>
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mainHeaderPhoneButton}>
            <a href={`tel:${PHONE_NUMBER}`}>pozovi</a>
          </div>
          <div className={styles.hamburgerMenu}>
            <HamburgerMenu navLinks={navigationLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
