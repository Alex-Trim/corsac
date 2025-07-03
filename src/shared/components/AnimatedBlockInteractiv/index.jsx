"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useInView } from "framer-motion";
import styles from "./AnimatedBlockInteractiv.module.scss";

gsap.registerPlugin(useGSAP);

const AnimatedBlockInteractiv = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // margin для более раннего срабатывания
  const [position, setPosition] = React.useState({
    curX: 0,
    curY: 0,
    tgX: 0,
    tgY: 0,
  });

  const move = () => {
    setPosition((prev) => {
      const newX = prev.curX + (prev.tgX - prev.curX) / 20;
      const newY = prev.curY + (prev.tgY - prev.curY) / 20;
      return { ...prev, curX: newX, curY: newY };
    });
    requestAnimationFrame(move);
  };

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition((prev) => ({
        ...prev,
        tgX: event.clientX,
        tgY: event.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(move);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <div
          className={styles.interactive}
          style={{
            transform: `translate(${Math.round(position.curX)}px, ${Math.round(
              position.curY
            )}px)`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default AnimatedBlockInteractiv;
