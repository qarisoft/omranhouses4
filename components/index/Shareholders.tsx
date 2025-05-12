import { Swiper, SwiperSlide } from 'swiper/react';
// import {Card, Skeleton} from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";
export const Shareholders = () => {
    const data=[
        './image/show/show1.jpeg',
        './image/show/show2.jpeg',
        './image/show/show3.jpeg',
        './image/show/show4.jpeg',
        './image/hero/rabwa/1.jpeg',
        './image/hero/rabwa/2.jpeg',
        './image/hero/rabwa/3.jpeg',
        './image/hero/rabwa/4.jpeg',
        './image/hero/rabwa/5.jpeg',
        './image/hero/rabwa/6.jpeg',

    ]

    return (
        <>
            <Swiper
                className={ ' w-[90%] md:w-[80%]  m-3 px-10'}
                watchSlidesProgress
                breakpoints={{
                    '@0.75': {
                        slidesPerView: 1,
                        spaceBetween:20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween:100,
                    },
                    // '@1.5': {
                    //     slidesPerView: 2,
                    // },
                }}
                // slidesPerView={1}

                autoplay={{
                    delay: 7000
                }}
                pagination={{clickable:true}}
                scrollbar
                modules={[Autoplay,Navigation,Pagination,A11y,Scrollbar]}
                onTouchStart={(swiper) => swiper.autoplay.pause()}
                onTouchEnd={(swiper) => swiper.autoplay.resume()}
                loop
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={''}>
                            <div className="w-full h-full ">

                                <img src={item} alt={'image'}/>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>
    );
};


