import React from "react";
import styles from "./AboutUsSection.module.css";
export const AboutUsSection = () => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>О нас</h1>
        <p className={styles.description}>
          Корсак – современная среда электронного обучения, которая предлагает
          широкий спектр функционала для студентов, преподавателей и
          администраторов:
        </p>
        <ul className={styles.description}>
          <li>регистрация и управление пользователями;</li>
          <li>модульная структура управления курсами и контентом;</li>
          <li>обратная связь и оценка;</li>
          <li>отчеты и аналитика;</li>
          <li>коммуникация и групповые проекты; </li>
          <li>
            возможность интеграции с другими образовательными платформами,
            информационными системами.
          </li>
        </ul>
        <p className={styles.description}>
          Программно-технологическое сопровождение платформы организует отдел
          цифровых образовательных платформ центра информационных технологий
          Оренбургского государственного университета
        </p>
      </div>
    </section>
  );
};
