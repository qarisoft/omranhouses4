"use client";

import { useState } from "react";

import { data, type PageItem } from "../config/data";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Shareholders } from "@/components/index/Shareholders";
import { Map } from "@/components/Map";

import "../styles/animate.css";
import { useIsMobile } from "@/config/use-mobile";
export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-[calc(100vh-90px)] w-full flex flex-col ">
        <HeroSection />
      </section>
      <About />
      <Power title={"لماذا القوة العقارية ؟"} />
      <Service title={"خدماتنا"} />
      <Achievements />
      <Shareholders />
      <Map />
    </main>
  );
}

function HeroSection() {
  const [activeIndex, setActive] = useState<number>(0);
  const active = data[activeIndex];

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setActive((a) => (a < data.length - 1 ? a + 1 : 0));
  //   }, 7000);

  //   return () => {
  //     clearInterval(timeOut);
  //   };
  // });

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

  const isMobile = useIsMobile();

  return (
    <div>
      <div
        key={"sm"}
        className=" absolute  top-0 left-0  h-[calc(100vh)] overflow-hidden w-full    "
      >
        {data.map((item, index) => {
          return (
            <div
              key={item.index + "sm"}
              className={
                "absolute top-0 left-0 bg-cover bg-no-repeat bg-black shrink-0  h-[calc(100vh)] w-screen animate-img" +
                " " +
                item.className +
                "" +
                (index == activeIndex ? " activ " : "" + getIndx(index))
              }
              style={{
                backgroundImage: `url(${isMobile ? item.mobileImgUrl : item.imgUrl})`,
                zIndex: getIndx(index),
              }}
            />
          );
        })}
      </div>

      {active && <TitleComponent active={active} />}
    </div>
  );
}

function TitleComponent({ active }: { active: PageItem }) {
  return (
    <div className="absolute top-1/2 left-0 flex justify-center w-full">
      <div
        key={active.index + "title"}
        className=" z-10 .animate__animated animate__fadeInDown"
      >
        <div className="p-5 bg-[#00000033]">
          <div className="text-gray-100 shadow-sm text-4xl">{active.title}</div>
          <div className="text-gray-100 shadow-sm text-2xl">
            {active.address}
          </div>
        </div>
      </div>
    </div>
  );
}
