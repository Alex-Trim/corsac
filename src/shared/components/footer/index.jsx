"use client";
import React from "react";
import styles from "./footer.module.css";
import { motion } from "framer-motion";
import WolfAnimation from "../wolf-animation";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.logo}>
            <a
              className={styles.logo__link}
              to="http://www.osu.ru/"
              title="Оренбургский государственный университет"
            >
              <svg
                className={styles.logo__icon}
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="160.000000pt"
                height="380.000000pt"
                viewBox="0 0 160.000000 380.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,380.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M691 3562 c-51 -25 -73 -61 -74 -119 -1 -63 25 -109 76 -136 38 -20
                  39 -20 84 -1 105 44 113 202 12 256 -42 22 -55 22 -98 0z m101 -75 c47 -59
                  -10 -152 -76 -127 -51 19 -63 94 -20 136 29 30 68 27 96 -9z"
                  />
                  <path
                    d="M550 3168 c0 -225 20 -260 153 -274 l67 -6 0 161 0 161 30 0 c20 0
                  30 5 30 15 0 12 -13 15 -60 15 l-60 0 0 -140 0 -140 -28 0 c-16 0 -37 6 -48
                  14 -17 13 -19 30 -22 185 l-3 171 -30 0 -29 0 0 -162z"
                  />
                  <path
                    d="M867 3323 c-4 -3 -7 -102 -7 -218 0 -201 -1 -214 -23 -256 -33 -63
                  -92 -92 -170 -84 l-58 6 3 -28 c3 -27 5 -28 68 -31 87 -4 131 10 173 57 58 64
                  67 114 67 353 l0 208 -23 0 c-13 0 -27 -3 -30 -7z"
                  />
                  <path
                    d="M362 2254 c3 -748 5 -832 20 -864 53 -113 89 -125 368 -125 203 0
                  218 1 261 23 31 15 53 35 70 65 23 41 24 50 30 322 9 370 11 1410 3 1402 -4
                  -3 -19 -293 -35 -644 -31 -707 -30 -693 -101 -746 -54 -40 -92 -47 -250 -47
                  -127 0 -154 3 -186 19 -46 24 -87 66 -103 106 -7 19 -22 266 -40 669 -16 351
                  -31 641 -34 644 -3 3 -4 -367 -3 -824z"
                  />
                  <path
                    d="M234 1805 c4 -621 6 -727 20 -771 23 -75 55 -116 111 -144 l50 -25
                  335 0 c367 0 363 -1 422 62 58 61 61 80 69 533 10 586 10 1066 1 1054 -5 -5
                  -21 -271 -36 -591 -15 -320 -32 -597 -37 -617 -13 -48 -55 -95 -104 -117 -36
                  -17 -70 -19 -313 -19 -172 0 -290 4 -318 11 -57 15 -108 62 -123 114 -6 22
                  -23 294 -37 605 -14 311 -29 579 -34 595 -6 18 -8 -250 -6 -690z"
                  />
                  <path
                    d="M106 1778 c-16 -609 -22 -1115 -14 -1157 12 -65 48 -114 105 -142
                  l48 -24 495 0 495 0 48 23 c53 27 89 78 106 151 10 45 -11 1377 -22 1388 -11
                  10 -17 -89 -37 -597 -12 -283 -26 -536 -31 -561 -13 -57 -60 -116 -113 -140
                  -38 -17 -73 -19 -436 -19 -230 0 -410 4 -431 10 -42 12 -93 59 -119 111 -17
                  32 -22 102 -46 610 -14 316 -30 578 -34 582 -4 5 -11 -101 -14 -235z"
                  />
                  <path
                    d="M1477 1420 c-4 -52 -9 -255 -12 -451 -3 -196 -10 -385 -16 -419 -17
                  -109 -65 -174 -149 -207 -39 -14 -93 -17 -382 -21 -186 -2 -338 -7 -338 -11 0
                  -4 168 -32 373 -64 317 -48 378 -55 412 -46 60 17 104 55 133 117 l25 55 -13
                  536 c-13 553 -21 687 -33 511z"
                  />
                </g>
              </svg>
              <div
                className={`${styles.logo__description} ${styles.logo__description_osu}`}
              >
                <p className={styles.logo__text}>
                  Оренбургский государственный
                </p>
                <p
                  className={`${styles.logo__text} ${styles.logo__text_strong}`}
                >
                  Университет
                </p>
              </div>
            </a>
          </div>
          <WolfAnimation />
        </div>
        <div className={styles.footer__body}>
          <div className={`${styles.info} ${styles.info__contacts}`}>
            <p className={styles.info__titel}>Контакты</p>
            <div className={styles.info__body}>
              <p className={`staples`}>
                <span>Телефон</span>
              </p>
              <span>:</span>
              <a href="tel:+73532375391" className="link">
                +7 (3532) 37-53-91
              </a>
              <p className={`staples`}>
                <span>E-mail</span>
              </p>
              <span>:</span>
              <a href="email:corsac@mail.osu.ru" className="link">
                corsac@mail.osu.ru
              </a>
              <p className={`staples`}>
                <span>Адрес</span>
              </p>
              <span>:</span>
              <a className="link">
                460018, г. Оренбург, пр. Победы, д. 13, корпус 1 , 1319, 1320,
                1324 ауд.
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.info__titel}>Страницы</p>
            <nav className={styles.info__body}>
              <ul
                className={`list-reset ${styles.info__list}  ${styles.info__list_min}`}
              >
                <li>
                  <a href="" className="link">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="" className="link">
                    LMS ВО
                  </a>
                </li>
                <li>
                  <a href="" className="link">
                    LMS ДПО
                  </a>
                </li>
                <li>
                  <a href="" className="link">
                    LMS Экзамены
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.titleWriper}>
        <motion.div
          className={styles.title}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 90,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <h2 key={i}>Цифровая образовательная платформа Корсак-</h2>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
