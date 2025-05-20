"use client";

import { useEffect, useRef, useState } from "react";

import { data, type PageItem } from "../config/data";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Map } from "@/components/Map";
import { Image } from "@heroui/image";
import { motion, useScroll } from "framer-motion"
import "../styles/animate.css";
import { useIsMobile } from "@/config/use-mobile";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CustomEase, CustomBounce, Observer } from "gsap/all";
import { Button } from "@heroui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {

  const a = useRef(null)

  useGSAP(() => {

    const tween = gsap.fromTo('.hero', { scale: 1.3 }, {
      ease: "expoScale(0.5,7,none)",

      scale: 1,
      duration: 7,
      scrollTrigger: {
        toggleActions: 'play pause resume reverse'
      }
    })
    Observer.create({
      target: '.overlay',

      onHover: () => {
        console.log('hover');
        tween.reverse().then((aa) => {
          aa.restart()
        })

      },
      onHoverEnd: () => {
        tween.play()
        console.log('hover end');
      }
    })

  })
  return (
    <div className="">

      <div className="absolute top-0 left-0 w-screen h-screen overflow-clip">

        <Image className="hidden md:block w-screen h-screen hero" radius="none" src="./bg.png" />
        <Image className="md:hidden w-screen h-screen       hero" radius="none" src="./bg.m.png" />
        <div className=" absolute top-0 left-0 w-screen h-screen bg-black opacity-40 z-10 flex flex-col justify-center items-cente" />

        <div className="overlay hidden  absolute top-0 left-0 w-screen h-screen z-30 md:flex flex-col justify-center p-4  text-white">
          <div className="max-w-7xl w-full  mx-auto">

            <div className="h-10"></div>
            <div className="text-5xl md:text-7xl font-bold text-[#27377d] hero-title">منازل العمران </div>
            <div className="h-10"></div>
            <Button className="w-fit px-6 bg-[#f7942e]">مشاريعنا</Button>
          </div>
        </div>

        <div className="md:hidden  absolute top-0 left-0 w-screen h-screen z-30 flex flex-col justify-center p-4  text-white">
          <div className="max-w-4xl  mx-auto">

            <div className="h-10"></div>
            <div className="text-5xl md:text-7xl font-bold text-[#27377d] hero-title">منازل العمران </div>
            <div className="h-10"></div>
            <Button className="w-fit px-6 bg-[#f7942e]">مشاريعنا</Button>
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh-120px)]"></div>



      <About />
      <Power title={"لماذا القوة العقارية ؟"} />
      <Service title={"خدماتنا"} />
      <Achievements />

      <div className="h-2" />
      <Map />
    </div >
  );
}

function A() {
  return (
    <main className="flex flex-col">
      <div className="h-[calc(100vh-120px)]"></div>
      <section className="absolute top-0 left-0 h-screen w-full flex flex-col bg-slate-400">
        <Hero />
      </section>
      <About />
      <Power title={"لماذا القوة العقارية ؟"} />
      <Service title={"خدماتنا"} />
      <Achievements />

      <div className="h-2" />
      <Map />
    </main>
  )
}
const Hero = () => {

  // const { scrollYProgress, scrollY } = useScroll()
  // console.log();

  useGSAP(() => {

    gsap.to('.hero-img', {
      scale: 1.1,
      ease: "power2.out",

      scrollTrigger: {
        trigger: '.hero-img',
        toggleActions: 'restart puse resume puse',
        markers: true
      }
      //   start: 100,
      //   // end: 300,
      //   // scrub: true
      //   // start: 'top bottom',
      //   // end: 'center center',
      //   // scrub: true
      // }
      // ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1"),
    })

  })

  return (
    <div className="w-screen h-screen overflow-clip">
      <Image src="./bg.png" className="hidden md:block w-screen h-screen hero-img" />
      <Image src="./bg.m.png" className="md:hidden w-screen h-screen     hero-img" />
      {/* {scrollY.get()} */}

    </div>
  )
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
