"use client";
import React from "react";
import { Menus } from "../menu";
import styles from "./header.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { logoText } from "../anim";
import { useSmoothScroller } from "../ScrollContext";

export const Header = () => {
  const lenis = useSmoothScroller();
  const [menuState, setMenuState] = React.useState(false);
  const buttonRef = React.useRef(null);

  const animateTextChange = (target, newText) => {
    const currentText = target.innerText;
    let i = currentText.length;

    // Фаза 1: Стирание
    const eraseInterval = setInterval(() => {
      if (i > 0) {
        target.innerText = currentText.substring(0, i - 1);
        i--;
      } else {
        clearInterval(eraseInterval);

        // Фаза 2: Набор нового текста
        let j = 0;
        const writeInterval = setInterval(() => {
          if (j <= newText.length) {
            target.innerText = newText.substring(0, j);
            j++;
          } else {
            clearInterval(writeInterval);
          }
        }, 50);
      }
    }, 30);
  };

  React.useEffect(() => {
    if (buttonRef.current) {
      const newText = menuState ? "Закрыть" : "Меню";
      animateTextChange(buttonRef.current, newText);
    }
  }, [menuState]);

  React.useEffect(() => {
    if (lenis) {
      console.log(lenis);
      if (menuState) {
        lenis.stop();
        document.body.classList.add("no-scroll");
      } else {
        lenis.start();
        document.body.classList.remove("no-scroll");
      }
    }
  }, [menuState, lenis]);
  return (
    <header
      data-scroll-section
      className={`${styles.header} ${menuState ? styles.header_open : ""}`}
    >
      <div className={`container ${styles.header__container}`}>
        <div className={styles.logo__link}>
          <img src="/corsac.png" alt="Корсак лого" />
          <AnimatePresence mode="wait">
            {menuState && (
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={logoText}
              >
                <h3 className={styles.logo__text_strong}>
                  Цифровая образовательная платформа Корсак
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          className={styles.header__btn}
          onClick={() => {
            setMenuState(!menuState);
          }}
          ref={buttonRef}
        >
          <span> {menuState ? "Закрыть" : "Меню"}</span>
        </button>
        <AnimatePresence mode="wait">{menuState && <Menus />}</AnimatePresence>
      </div>
    </header>
  );
};
