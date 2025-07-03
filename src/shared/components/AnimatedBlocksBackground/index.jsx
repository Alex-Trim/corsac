"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AnimatedBlocksBackground.module.scss";

const AnimatedBlocksBackground = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // margin для более раннего срабатывания
  return (
    <motion.div
      ref={ref}
      className={styles.gradient_bg}
      initial={{ opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: "linear",
        delay: 0.3,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradients_container}>
        <div className={styles.g1}></div>
        <div className={styles.g2}></div>
        <div className={styles.g3}></div>
        <div className={styles.g4}></div>
        <div className={styles.g5}></div>
      </div>
    </motion.div>
  );
};

export default AnimatedBlocksBackground;
