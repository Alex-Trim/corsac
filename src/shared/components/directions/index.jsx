"use client";
import React from "react";

import styles from "./directions.module.css";
import { Card } from "../card";
import { useScroll, motion } from "framer-motion";

const projects = [
  {
    title: "Обучение студентов ВО",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit corporis repellat. Id dolores quisquam quis, ea exercitationem omnis ratione eaque corporis, excepturi nesciunt, pariatur natus fugit autem nam labore.",
    src: "",
    link: "",
    color: "",
  },
  {
    title: "Обучение по программам ДПО",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit corporis repellat. Id dolores quisquam quis, ea exercitationem omnis ratione eaque corporis, excepturi nesciunt, pariatur natus fugit autem nam labore.",
    src: "",
    link: "",
    color: "",
  },
  {
    title: "Обучение преподавателей",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit corporis repellat. Id dolores quisquam quis, ea exercitationem omnis ratione eaque corporis, excepturi nesciunt, pariatur natus fugit autem nam labore.",
    src: "",
    link: "",
    color: "",
  },
  {
    title: "Олимпиады",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit corporis repellat. Id dolores quisquam quis, ea exercitationem omnis ratione eaque corporis, excepturi nesciunt, pariatur natus fugit autem nam labore.",
    src: "",
    link: "",
    color: "",
  },
  {
    title: "Экзамены",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit corporis repellat. Id dolores quisquam quis, ea exercitationem omnis ratione eaque corporis, excepturi nesciunt, pariatur natus fugit autem nam labore.",
    src: "",
    link: "",
    color: "",
  },
];

export const Directions = () => {
  const container = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className={styles.directions}>
      <div className={styles.directions__titleWraper}>
        <h2 className={styles.directions__title}>
          Наши направления деятельности
        </h2>
        <p className={styles.directions__description}>
          Современное обучение. Разнообразие программ. Качество, проверенное
          практикой. Повышение квалификации.
        </p>
      </div>
      <div className={`container ${styles.directions__container}`}>
        <div
          ref={container}
          className={`list-reset ${styles.directions__list}`}
        >
          {projects.map((data, index) => {
            const targetScale = 1 - (projects.length - index) * 0.05;
            return (
              <Card
                key={index}
                i={index}
                {...data}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
