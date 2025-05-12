// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCube,
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

// import {Intro} from "@/components/index/Intro";
import { siteConfig } from "@/config/site";
import { Intro } from "@/components/index/Intro";

export const AboutSection = () => {
  return (
    <div
      className="pe-2 min-h-[40vh] relative mt-0"
      style={{
        backgroundImage: "url('./image/11.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute h-full w-full bg-mprimary opacity-75" />
      <h1
        className={
          "relative z-10 text-center font-semibold py-3 text-xl text-white border-b-1 mx-4"
        }
      >
        عن الشركة
      </h1>
      <Swiper
        pagination
        scrollbar
        autoplay={{
          delay: 4000,
        }}
        className={"max-w-2xl mb-3 pb-8"}
        effect={"cube"}
        loop={true}
        modules={[
          EffectCube,
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Grid,
        ]}
        slidesPerView={1}
        speed={900}
        translate={"yes"}
      >
        <SwiperSlide>
          <Intro description={siteConfig.intro} title={"من نحن؟"} />
        </SwiperSlide>
        <SwiperSlide>
          <Intro description={siteConfig.vision} title={"رؤيتنا"} />
        </SwiperSlide>
        <SwiperSlide>
          <Intro data={siteConfig.goals} title={"الأهداف"} />
        </SwiperSlide>
        <SwiperSlide>
          <Intro data={siteConfig.morals} title={"القيم و المبادئ"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
