"use client";
import React from "react";
import styles from "./audiences.module.css";
import { audiences } from "../../lib/anim";
import { motion, useInView } from "framer-motion";
const projects = [
  {
    title: "Для бизнеса",
    description:
      " Корпоративное обучение для топ-менеджеров компаний, собственников бизнеса и их команд в соответствии с требованиями цифровой экономики.",
    src: "/images/For-business-Picsart-BackgroundRemover.webp",
    link: "",
    color: "",
  },
  {
    title: "Для госсектора",
    description:
      "Повышение квалификации представителей органов государственной власти и местного самоуправления, подведомственных организаций, а также подготовка регионов к цифровой трансформации.",
    src: "/images/For-the-public-sector-Picsart-BackgroundRemover.webp",
    link: "",
    color: "",
  },
  {
    title: "Для физических лиц",
    description:
      "Получение востребованной ИТ-специальности по программам повышения квалификации с выдачей официального документа установленного образца о профессиональной переподготовке.",
    src: "/images/Fox-individuals.webp",
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
                initial={{ y: 200, opacity: 1 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 1 }
                }
                transition={{
                  duration: 0.8,
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
