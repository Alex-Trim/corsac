import React from "react";
import styles from "./LmsDpoSection.module.css";

export const LmsDpoSection = () => {
  return (
    <div className={`container  ${styles.container}`}>
      <h1 className={styles["title--main"]}>
        LMS ДПО ОГУ Добро пожаловать на цифровую образовательную платформу
      </h1>
      <h2 className={styles.title}>
        Дополнительного профессионального образования Оренбургского
        государственного университета
      </h2>
      <div className={styles.text}>
        <p>
          В соответствии с целевыми запросами заказчиков ведется разработка и
          реализация программ повышения квалификации и профессиональной
          подготовки по техническим, гуманитарным, естественно-научным и другим
          специальностям и направлениям подготовки согласно лицензии и
          свидетельству государственной аккредитации ОГУ.
        </p>
        <p>
          Программы реализуются по очной, очно-заочной и заочной форме с
          использованием системы электронного обучения и дистанционных
          образовательных технологий.
        </p>
      </div>
      <ul className={`list-reset ${styles.list_indicators}`}>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>2000 +</span> <p>Активных пользователей</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>92 %</span>
            <p>Слушателей удовлетворены качеством работы платформы</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>4500 +</span>
            <p>Электронных курсов ВО</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
