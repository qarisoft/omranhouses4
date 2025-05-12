"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Shareholders } from "@/components/index/Shareholders";
import { Map } from "@/components/Map";
import "swiper/css/bundle";
import "../styles/animate.css";
interface PageItem {
  index: number;
  imgUrl: string;
  className: string;
  mobileImgUrl: string;
  title: string;
  address: string;
}
export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-[calc(100vh-80px)] w-full flex flex-col ">
        {/* <Navbar /> */}
        <HeroSection />
        {/* <div className="absolute top-0"></div> */}
      </section>
      {/* <div className="h-[500px] bg-red-50 w-full"></div> */}
      <About />
      <Power title={"لماذا القوة العقارية ؟"} />
      <Service title={"خدماتنا"} />
      <Achievements />
      <Shareholders />
      <Map />
    </main>
  );
}

const data2: PageItem[] = [
  {
    className: "",
    index: 0,
    imgUrl: "alnakheel/out/1.jpg",
    mobileImgUrl: "alnakheel/out/1.jpg",
    title: "مشروع منازل 102",
    address: "حي النخيل",
  },
  {
    className: "",
    index: 1,
    imgUrl: "morowa/out/1.jpg",
    mobileImgUrl: "morowa/out/1.m.jpg",
    title: "مشروع منازل المروة",
    address: "حي المروة",
  },
  {
    className: "",
    index: 2,
    imgUrl: "morowa/out/2.jpg",
    mobileImgUrl: "morowa/out/2.m.jpg",
    title: "مشروع منازل المروة",
    address: "حي المروة",
  },
  {
    className: "",
    index: 3,
    imgUrl: "morowa/out/3.jpg",
    mobileImgUrl: "morowa/out/3.m.jpg",
    title: "مشروع منازل المروة",
    address: "حي المروة",
  },
  // { className: "", index: 5, imgUrl: 'alnakheel/out/1.jpg', mobileImgUrl: 'alnakheel/out/1.jpg', title: 'مشروع منازل 102', address: 'حي النخيل' },
  // { className: "", index: 6, imgUrl: 'alnakheel/out/1.jpg', mobileImgUrl: 'alnakheel/out/1.jpg', title: 'مشروع منازل 102', address: 'حي النخيل' },
];

function HeroSection() {
  const [data, setData] = useState<PageItem[]>(data2);
  const [activeIndex, setActive] = useState<number>(0);
  const active = data[activeIndex];
  const previous =
    activeIndex > 0 ? data[activeIndex - 1] : data[data.length - 1];
  const doShift = () => {
    const d = data;
    const d2 = d.shift() as PageItem;

    d.push(d2);

    return d;
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setActive((a) => (a < data.length - 1 ? a + 1 : 0));
    }, 7000);

    return () => {
      clearInterval(timeOut);
    };
  });
  function getIndx(params: number) {
    if (params == activeIndex) {
      return 6;
    }

    if (activeIndex === data.length - 1) {
      if (params == 0) {
        return 5;
      }
    } else {
      if (activeIndex + 1 === params) {
        return 5;
      }
    }

    return 0;
  }

  return (
    <AnimatePresence>
      <div
        key={"sm"}
        className=" absolute md:hidden top-0 left-0  h-[calc(100vh)] overflow-hidden w-full    "
      >
        {data.map((item, index) => {
          return (
            <motion.div
              key={item.index + "sm"}
              className={
                "absolute top-0 left-0 bg-cover bg-no-repeat bg-black shrink-0  h-[calc(100vh)] w-screen animate-img an   " +
                " " +
                item.className +
                "" +
                (index == activeIndex ? " active " : "" + getIndx(index))
              }
              style={{
                backgroundImage: `url(${item.mobileImgUrl})`,
                zIndex: getIndx(index),
              }}
            >
              <div className="">{item.address}</div>
            </motion.div>
          );
        })}
      </div>

      <div
        key={"lg"}
        className="hidden md:block absolute top-0 left-0  h-[calc(100vh)] overflow-hidden w-full    "
      >
        {data.map((item, index) => {
          return (
            <motion.div
              key={item.index + item.address + item.imgUrl + "lg"}
              className={
                "absolute top-0 left-0 bg-cover bg-no-repeat bg-black shrink-0  h-[calc(100vh)] w-screen animate-img an   " +
                " " +
                item.className +
                "" +
                (index == activeIndex ? " active " : "" + getIndx(index))
              }
              style={{
                backgroundImage: `url(${item.imgUrl})`,
                zIndex: getIndx(index),
              }}
            />
          );
        })}
      </div>
      {active && (
        <div
          key={active.index + "title"}
          className="absolute top-1/2 left-1/2 z-10 .animate__animated animate__fadeInDown"
        >
          <div className="p-5 bg-[#00000033]">
            <div className="text-gray-100 shadow-sm text-4xl">
              {active.title}
            </div>
            <div className="text-gray-100 shadow-sm text-2xl">
              {active.address}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
