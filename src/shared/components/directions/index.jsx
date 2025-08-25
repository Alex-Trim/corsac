"use client";
import React from "react";

import styles from "./directions.module.css";
import { Card } from "../card";
import { useScroll } from "framer-motion";

const projects = [
  {
    title: "Обучение студентов ВО",
    description: `Реализация основных образовательных программ высшего образования с использованием электронной информационно-образовательной среды Университета. Цифровая платформа Moodle (moodle.osu.ru) обеспечивает управление пользователями, хранение и систематизацию учебно-методических ресурсов, организацию учебного процесса с применением дистанционных технологий, взаимодействие участников и мониторинг учебного процесса.`,
    src: "/images/mobile-application.svg",
    link: "",
    color: "",
  },
  {
    title: "Обучение по программам ДПО",
    description: `Реализация программ профессиональной переподготовки и курсов повышения квалификации в Институте непрерывного профессионального образования Оренбургского государственного университета на цифровой образовательной платформе dpo.osu.ru`,
    src: "/images/building.svg",
    link: "",
    color: "",
  },
  {
    title: "Обучение преподавателей",
    description:
      "Доступное и качественное образование для педагогических работников вузов, колледжей и школ Оренбуржья по программам повышения квалификации и профессиональной подготовки с применением дистанционных образовательных технологий в Институте развития образования Оренбургского государственного университета на цифровой образовательной платформе moodle.osu.ru",
    src: "/images/business-office.svg",
    link: "",
    color: "",
  },
  {
    title: "Олимпиады",
    description:
      "Проведение областных, межрегиональных и международных олимпиад для обучающихся среднего общего, среднего профессионального и высшего образования на базе Оренбургского государственного университета с применением дистанционных образовательных технологи на цифровой образовательной платформе moodle.osu.ru",
    src: "/images/office.svg",
    link: "",
    color: "",
  },
  {
    title: "Экзамены",
    description:
      "Проведение творческого конкурса вступительных испытаний по правилам Оренбургского государственного университета в режиме онлайн в период ежегодной приемной кампании на цифровой образовательной платформе exam.osu.ru",
    src: "/images/living-room.svg",
    link: "",
    color: "",
  },
  {
    title: "Анкетирование",
    description:
      "Проведение анонимного социально-психологического анкетирования студентов Оренбургского государственного университета с применением дистанционных образовательных технологи на цифровой образовательной платформе moodle.osu.ru",
    src: "/images/calendar.svg",
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
