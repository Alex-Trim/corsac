import React from "react";
import styles from "./spacing.module.css";
import { ParticlesCanvas } from "../particlesConvas";
export const Spacing = () => {
  return (
    <div className={styles.spacing}>
      <ParticlesCanvas src="/fox-color.jpg" />
    </div>
  );
};
