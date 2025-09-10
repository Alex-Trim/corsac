import React from "react";
import styles from "./LmsEsamSection.module.css";

export const LmsEsamSection = () => {
  return (
    <div className={`container  ${styles.container}`}>
      <h1 className={styles["title--main"]}>
        <span>LMS ЭКЗАМЕНЫ ОГУ</span>
        <span>Добро пожаловать на цифровую образовательную платформу</span>
      </h1>
      <h2 className={styles.title}>
        Творческих экзаменационных испытаний Оренбургского государственного
        университета
      </h2>
      <div className={styles.text}>
        <p>
          Платформа предназначена для сопровождения процедуры проведения
          творческих экзаменационных испытаний с использованием дистанционных
          образовательных технологий.
        </p>
        <p>
          Ежегодно абитуриенты проходят творческие вступительные испытания на
          платформе exam.osu.ru в дистанционном режиме: получают необходимые
          методические рекомендации, загружают выполненные по индивидуальным
          вариантам работы, переходят на платформу видеоконференцсвязи для
          проведения собеседования.{" "}
        </p>
        <p>
          Платформа exam.osu.ru позволяет пройти вступительные испытания
          абитуриентам дистанционно независимо от их местонахождения, расширяет
          географию обучающихся университета.
        </p>
      </div>
      <ul className={`list-reset ${styles.list_indicators}`}>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>500 +</span> <p>Абитуриентов</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>150 +</span>{" "}
            <p>Электронных курсов для вступительных испытаний</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>6 лет </span>
            <p>
              опыта творческих экзаменационных испытаний в дистанционном формате
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
