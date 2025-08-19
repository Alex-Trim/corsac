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
              <div>
                {/* <img src="/f40bd389-99b0-44df-800a-f6097c40468c.png" alt="" /> */}
              </div>
              <span>Картинка modle.osu.ru</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platforms__slide}>
              <span>Картинка dpo.osu.ru</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platforms__slide}>
              <span>Картинка exam.osu.ru</span>
            </div>
          </SwiperSlide>

          <div className={`prevEl ${styles.platforms__prev}`}></div>
          <div className={`nextEl ${styles.platforms__next}`}> </div>
        </Swiper>
      </div>
    </section>
  );
};
