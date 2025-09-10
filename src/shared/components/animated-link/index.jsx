import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, child } from "../../lib/anim";

import styles from "./style.module.css";

export const AnimatedLink = ({ data, closeMenu }) => {
  const { title, href, index } = data;
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };
  return (
    <motion.div className={styles.link}>
      <Link href={href} onClick={handleClick}>
        <div className={styles.link__line}>
          <span style={{ backgroundColor: "#b087ff" }}></span>
          <span style={{ backgroundColor: "#ffd074" }}></span>
          <span style={{ backgroundColor: "#17f1d1" }}></span>
        </div>
        <div className={styles.link__cotainer}>
          {title.split("").map((letter, index) => (
            <motion.span
              custom={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
              key={index}
              style={{ marginRight: "5px", display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};
