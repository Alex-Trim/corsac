"use client";
import React from "react";
import styles from "./audiences.module.css";
import { audiences } from "../anim";
import { motion, useInView } from "framer-motion";
const projects = [
  {
    title: "Для бизнеса",
    description:
      " Корпоративное обучение для топ-менеджеров компаний, собственников бизнеса и их команд в соответствии с требованиями цифровой экономики.",
    src: "/For-business-Picsart-BackgroundRemover.png",
    link: "",
    color: "",
  },
  {
    title: "Для госсектора",
    description:
      "Повышение квалификации представителей органов государственной власти и местного самоуправления, подведомственных организаций, а также подготовка регионов к цифровой трансформации.",
    src: "/For-the-public-sector-Picsart-BackgroundRemover.png",
    link: "",
    color: "",
  },
  {
    title: "Для физических лиц",
    description:
      "Получение востребованной ИТ-специальности по программам повышения квалификации с выдачей официального документа установленного образца о профессиональной переподготовке.",
    src: "/Fox-individuals.png",
    link: "",
    color: "",
  },
];

export const Audiences = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75%" }); // margin для более раннего срабатывания

  return (
    <section className={styles.audiences}>
      <div className={`container ${styles.audiences__container}`}>
        <div ref={ref} className={`list-reset  ${styles.audiences__list}`}>
          {projects.map((data, index) => {
            return (
              <motion.article
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 * index,
                }}
                key={index}
                className={styles.audiences__card}
              >
                <div
                  className={styles.audiences__card_img}
                  style={{ backgroundImage: `url(${data.src})` }}
                ></div>
                <div className={styles.audiences__card_info}>
                  <h3 className={styles.audiences__card_title}>{data.title}</h3>
                  <p className={styles.audiences__card_description}>
                    {data.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
