"use client";

import { useEffect, useState } from "react";

import { data, type PageItem } from "../config/data";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Map } from "@/components/Map";
import { Image } from "@heroui/image";

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

      <div className="h-2" />
      <Map />
    </main>
  );
}

function HeroSection() {
  const [activeIndex, setActive] = useState<number>(0);
  const active = data[activeIndex];

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




  const classname = 'absolute top-0 left-0 bg-cover bg-no-repeat  h-[calc(100vh)] w-screen animate-img'
  return (
    <div>
      <div
        key={"sm"}
        className=" absolute  top-0 left-0  h-[calc(100vh)] overflow-hidden w-full    "
      >
        {data.map((item, index) => {

          const activeClass = index == activeIndex ? " active " : "" + getIndx(index)
          const classNames = classname + activeClass

          return (
            <div key={item.index + "container"}>
              <div
                key={item.index + "sm"}
                className={classNames + 'hidden sm:hidden md:block  '}
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                  zIndex: getIndx(index),
                }}
              >


              </div>


              <div className={'md:hidden absolute top-0 left-0 bg-cover bg-no-repeat  h-[calc(100vh)] w-screen'} key={item.index + "smimg"}>

                <Image
                  src={item.mobileImgUrl}
                  style={{ zIndex: getIndx(index), }}
                  className={'h-screen w-screen animate-img  ' + activeClass}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60" style={{ zIndex: 12 }}></div>

      {active && <TitleComponent active={active} />}
    </div>
  );
}

function TitleComponent({ active }: { active: PageItem }) {
  return (
    <div className="absolute top-1/2 left-0 flex justify-center w-full" style={{ zIndex: 13 }}>
      <div
        key={active.index + "title"}
        className=" z-10 .animate__animated animate__fadeInDown"
      >
        <div className="p-5 bgl-[#00000060]">
          <div className=" text-6xl font-bold tex-[#e4e9ff] hero-title">{active.title}</div>
          <div className="text-gray-100 shadow-sm text-2xl">
            {active.address}
          </div>
        </div>
      </div>
    </div>
  );
}
