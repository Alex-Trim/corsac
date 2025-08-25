"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = React.useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.article
        className={`${styles.card} ${i % 2 === 0 ? styles.is_even : ""}`}
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <div className={styles.card__description}>
            {description.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
        <div
          className={styles.card__img}
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
      </motion.article>
    </div>
  );
};
