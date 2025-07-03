"use client";
import React from "react";

import styles from "./hero.module.css";
import { motion, useInView } from "framer-motion";
export const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // margin для более раннего срабатывания

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <h1 ref={ref} className={styles.hero__titel}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 0.3,
            }}
          >
            Единая цифровая образовательная платформа
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 0.4,
            }}
          >
            Оренбургского государственного университета
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 0.5,
            }}
          >
            Корсак
          </motion.span>
        </h1>
      </div>
    </section>
  );
};
