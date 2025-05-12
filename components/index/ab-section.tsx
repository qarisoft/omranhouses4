// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCube, Grid, Navigation, Pagination, Scrollbar } from "swiper/modules";
// import {Intro} from "@/components/index/Intro";
import { siteConfig } from "@/config/site";
import { Intro } from "@/components/index/Intro";

export const AboutSection = () => {
    return (

        <div className="pe-2 min-h-[40vh] relative mt-0" style={{
            backgroundImage: "url('./image/11.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute h-full w-full bg-mprimary opacity-75">
            </div>
            <h1 className={'relative z-10 text-center font-semibold py-3 text-xl text-white border-b-1 mx-4'}>عن
                الشركة</h1>
            <Swiper className={'max-w-2xl mb-3 pb-8'}
                translate={'yes'}
                modules={[
                    EffectCube,
                    Autoplay,
                    Navigation, Pagination, Scrollbar, A11y, Grid
                ]}
                pagination
                scrollbar
                effect={'cube'}
                speed={900}
                loop={true}
                autoplay={{
                    delay: 4000,
                }}

                slidesPerView={1}>
                <SwiperSlide>

                    <Intro title={'من نحن؟'} description={siteConfig.intro} />
                </SwiperSlide>
                <SwiperSlide>
                    <Intro title={'رؤيتنا'} description={siteConfig.vision} />
                </SwiperSlide>
                <SwiperSlide>
                    <Intro title={'الأهداف'} data={siteConfig.goals} />
                </SwiperSlide>
                <SwiperSlide>
                    <Intro title={'القيم و المبادئ'} data={siteConfig.morals} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};