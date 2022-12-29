import React from "react";
import { moviesList } from "../../../data/data";
import classes from "./movies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function MovieList() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={30}
      slidesPerView="2.5"
      modules={[Pagination]}
    >
      <ul className={classes.list}>
        {moviesList.slice(0, 3).map((item) => (
          <li>
            <SwiperSlide>
              <div className={classes.image}>
                <img alt="movie" src={item.image} />
              </div>
            </SwiperSlide>
          </li>
        ))}
      </ul>
    </Swiper>
  );
}
