import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/bundle";
import { Image } from "@heroui/image";

export const Shareholders = () => {
  const data = [
    "./image/show/show1.jpeg",
    "./image/show/show2.jpeg",
    "./image/show/show3.jpeg",
    "./image/show/show4.jpeg",
    "./image/hero/rabwa/1.jpeg",
    "./image/hero/rabwa/2.jpeg",
    "./image/hero/rabwa/3.jpeg",
    "./image/hero/rabwa/4.jpeg",
    "./image/hero/rabwa/5.jpeg",
    "./image/hero/rabwa/6.jpeg",
  ];

  return (
    <div className="max-w-5xl flex mx-auto">
      <Swiper
        loop
        scrollbar
        watchSlidesProgress
        autoplay={{
          delay: 7000,
        }}
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        className={" "}
        modules={[Autoplay, Navigation, Pagination, A11y, Scrollbar]}
        pagination={{ clickable: true }}
        onTouchEnd={(swiper) => swiper.autoplay.resume()}
        onTouchStart={(swiper) => swiper.autoplay.pause()}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={""}>
            <div className="w-full h-full ">
              <Image alt={"image"} src={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
