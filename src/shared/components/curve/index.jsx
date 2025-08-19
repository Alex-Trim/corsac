import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

export default function Index() {
  const svgWidth = window.innerWidth;

  // Начальная форма (почти ровная линия, без изгиба)
  const initialPath = `M0 0 L0 0  Q${
    svgWidth / 2
  } 200 ${svgWidth} 0 L${svgWidth} 0`;

  // Целевая форма (с изгибом вниз в пределах 100px)
  const targetPath = `M0 0 L0 0  Q${
    svgWidth / 2
  } 0  ${svgWidth} 0  L${svgWidth} 0`;

  // Целевая форма (с изгибом вниз в пределах 100px)
  const endвPath = `M0 0 L0 100  Q${
    svgWidth / 2
  }  0 ${svgWidth} 100 L${svgWidth} 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: endвPath,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
