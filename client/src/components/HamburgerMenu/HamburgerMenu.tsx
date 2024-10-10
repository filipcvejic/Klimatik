"use client";

import { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import { EMAIL, PHONE_NUMBER } from "@/constants";
import { HamburgerMenuProps } from "./HamburgerMenuProps";

export default function HamburgerMenu({ navLinks }: HamburgerMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const closeIcon = (
    <svg
      onClick={() => setIsOpened(false)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width={50}
      height={50}
      aria-label="Close menu"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  const openIcon = (
    <svg
      onClick={() => setIsOpened((prevValue) => !prevValue)}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={40}
      height={40}
      viewBox="0 0 50 50"
    >
      <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
    </svg>
  );

  return (
    <>
      {isOpened ? (
        <div className={styles.menuWrapper}>
          <div className={styles.menuHeading}>
            <a href={`tel:${PHONE_NUMBER}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fbd858"
                className="size-6"
                height={35}
                width={35}
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              {PHONE_NUMBER}
            </a>
            {closeIcon}
          </div>
          <div className={styles.menuInBetween}>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <ul className={styles.menuList}>
            {navLinks.map((navLink, index) => (
              <li className={styles.menuItem} key={index}>
                <a href={`#${navLink.href}`} onClick={() => setIsOpened(false)}>
                  <div className={styles.menuLabel}>
                    {navLink.icon}
                    <p>{navLink.label}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fbd858"
                    className="size-6"
                    height={35}
                    width={35}
                    aria-label="Navigate to section"
                  >
                    <path strokeLinecap="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        openIcon
      )}
    </>
  );
}
