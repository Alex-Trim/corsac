import React from "react";
import style from "./menu.module.css";
import { Navbar } from "../navbar";
import Curve from "../curve";
import { motion } from "framer-motion";
import { menuSlide, menuContain } from "../anim";
export const Menus = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuContain}
      className={`${style.menu} ${style.menu_open}`}
    >
      <motion.div variants={menuSlide} className={`${style.menu__container}`}>
        <div className={`container ${style.menu__body}`}>
          <div className={`${style.menu__info}`}>
            <h3 className={`${style.menu__titel}`}></h3>
            <div className={`${style.menu__contact}`}>
              <p>Свяжитесь с нами:</p>
              <strong>
                <a href="email:exam@mail.osu.ru" className="link">
                  exam@mail.osu.ru
                </a>
              </strong>
              <strong>
                <a href="tel:+73532912194" className="link">
                  +7 (3532) 91-21-94
                </a>
              </strong>
              <a href="/" className="link">
                г.Оренбург, просп. Победы, д. 13
              </a>
            </div>
          </div>
          <Navbar />
        </div>
        <Curve />
      </motion.div>
    </motion.div>
  );
};
