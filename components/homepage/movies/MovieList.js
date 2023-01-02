import React from "react";
import { moviesList } from "../../../data/data";
import classes from "./movies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useRouter } from "next/router";

export default function MovieList() {
  const router = useRouter();
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
          <li onClick={() => router.push(`/movies/${item.id}`)}>
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
