"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./platforms.module.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export const Platforms = () => {
  return (
    <section className={styles.platforms}>
      <div className={`container ${styles.platforms__container}`}>
        <Swiper
          className={styles.platforms__swiper}
          slidesPerView={1.5}
          spaceBetween={30}
          navigation={{
            prevEl: ".prevEl",
            nextEl: ".nextEl",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className={styles.platforms__slide}>
              <div className={styles.platforms__img_container}>
                <img
                  src="/images/f40bd389-99b0-44df-800a-f6097c40468c.webp"
                  alt=""
                />
              </div>
              <div className={styles.platforms__text}>
                <span>Образовательная цифровая платформа ВО</span>
                <a href="/" className={styles.platforms__link}>
                  Подробнее ⟶
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platforms__slide}>
              <div className={styles.platforms__img_container}>
                <img
                  src="/images/picture_a450423e076f46768109514263585d47.webp"
                  alt=""
                />
              </div>
              <div className={styles.platforms__text}>
                <span>Образовательная цифровая платформа ДПО</span>
                <a href="/" className={styles.platforms__link}>
                  Подробнее ⟶
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platforms__slide}>
              <div className={styles.platforms__img_container}>
                <img
                  src="/images/c78c7862-ad02-47c7-ba46-0c9787ddeae0.webp"
                  alt=""
                />
              </div>
              <div className={styles.platforms__text}>
                <span>Образовательная цифровая платформа EXAM</span>
                <a href="/" className={styles.platforms__link}>
                  Подробнее ⟶
                </a>
              </div>
            </div>
          </SwiperSlide>

          <div className={`prevEl ${styles.platforms__prev}`}></div>
          <div className={`nextEl ${styles.platforms__next}`}> </div>
        </Swiper>
      </div>
    </section>
  );
};
