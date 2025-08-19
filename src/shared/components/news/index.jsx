"use client";
import React from "react";
import styles from "./news.module.css";

const newsData = [
  {
    title: "Новость 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 6",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Новость 7",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
];

const eventsData = [
  {
    title: "Мероприятие 1",
    description:
      "Описание мероприятия 1, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Мероприятие 2",
    description:
      "Описание мероприятия 2, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Мероприятие 3",
    description:
      "Описание мероприятия 3, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Мероприятие 4",
    description:
      "Описание мероприятия 4, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
  {
    title: "Мероприятие 5",
    description:
      "Описание мероприятия 5, adipisicing elit. Nobis, unde! Quo voluptatem aut accusantium deleniti rem quos quis. Perferendis consequatur ad adipisci officiis. Hic consequuntur sint quisquam quibusdam, natus earum?",
  },
];

export const News = () => {
  const [category, setCategory] = React.useState("news");

  const dataToDisplay = category === "news" ? newsData : eventsData;

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <section className={styles.news}>
      <div className={`container ${styles.news__container}`}>
        {/* <h2 className={styles.news__titel}>Новости</h2> */}
        <div className={styles.news__type}>
          <label className={styles.news__btn}>
            <span className="text">Новости</span>
            <input
              type="radio"
              name="value-radio"
              value="news"
              checked={category === "news"}
              onChange={handleChange}
            />
          </label>
          <label className={styles.news__btn}>
            <span className="text">Мероприятия</span>
            <input
              type="radio"
              name="value-radio"
              value="events"
              checked={category === "events"}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.news__body}>
          <div className={styles.news__slide}>
            {dataToDisplay.map((item, i) => (
              <article
                key={i}
                className={`${styles.news__line} ${styles.line}`}
              >
                <div className={styles.line__left}>
                  <h3 className={styles.line__titel}>{item.title}</h3>
                </div>
                {/* <div className={styles.line__right}>
                  <p className={styles.line__description}>{item.description}</p>
                </div> */}
                <span className={styles.line__img}>
                  <svg
                    className={styles.line__icon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
