import React from "react";
import styles from "./LmsWoSection.module.css";

export const LmsWoSection = () => {
  return (
    <div className={`container  ${styles.container}`}>
      <h1 className={styles["title--main"]}>
        LMS ВО ОГУ Добро пожаловать на цифровую образовательную платформу
      </h1>
      <h2 className={styles.title}>
        Высшего образования Оренбургского государственного университета
      </h2>
      <div className={styles.text}>
        <p> Возможности платформы:</p>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <p>
              четкая структуризация и наглядное представление учебного
              материала;
            </p>
          </li>
          <li className={styles.list__item}>
            <p>
              составление индивидуальной траектории обучения, выбор темпа,
              времени и места аудиторной и внеаудиторной работы;
            </p>
          </li>
          <li className={styles.list__item}>
            <p>
              возможность проверки знаний и контроля успеваемости обучающихся;
            </p>
          </li>
          <li className={styles.list__item}>
            <p>хранение портфолио выполненных работ обучающимися;</p>
          </li>
          <li className={styles.list__item}>
            <p>наличие журнала учебных достижений обучающихся;</p>
          </li>
          <li className={styles.list__item}>
            <p>
              возможность ведения журнала посещаемости и активности обучающихся;
            </p>
          </li>
          <li className={styles.list__item}>
            <p>
              организация информационного взаимодействия субъектов
              образовательного процесса, расширение сотрудничества в процессе
              обучения.
            </p>
          </li>
        </ul>
      </div>
      <ul className={`list-reset ${styles.list_indicators}`}>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>7000 +</span> <p>Активных пользователей</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>4500 +</span> <p>Электронных курсов ВО</p>
          </div>
        </li>
        <li className={styles.list_indicators__item}>
          <div className={styles.indicators}>
            <span>92 %</span>{" "}
            <p>Слушателей удовлетворены качеством работы платформы</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
