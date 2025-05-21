"use client";

// import Tween = gsap.core.Tween;
// import {type Tween} from "gsap";
import { useState } from "react";
import { Image } from "@heroui/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { Button } from "@heroui/button";
import gsap from "gsap";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Map } from "@/components/Map";

import "../styles/animate.css";
import { Link } from "@heroui/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  // const a = useRef(null);
  const [hover, setHover] = useState(false);

  useGSAP(() => {
    const tween = gsap.to(
      ".hero",

      {
        ease: "power1.inOut",

        scale: 1.2,
        duration: 4,
      },
    );

    Observer.create({
      target: ".overlay",

      onHover: () => {
        if (!hover) {
          tween.reverse();
          setHover(true);
        }
      },
      onHoverEnd: () => {
        // if ()
        // console.log(tween.progress());
        tween.play();

        setHover(false);
        // if (hover) {
        // }
      },
    });
  });

  return (
    <div className="">
      <div className=" w-screen h-[calc(100dvh-120px)] overflow-clip">
        <Image
          className="hidden md:block w-screen h-[calc(100dvh-120px)] hero"
          radius="none"
          src="./back.jpg"
        />
        <Image
          className="md:hidden w-screen h-full       hero"
          radius="none"
          src="./bg.m.png"
        />
        <div className=" absolute top-0 left-0 w-screen h-screen bg-black opacity-40 z-10 flex flex-col justify-center items-cente" />

        <div className="overlay hidden  absolute top-0 left-0 w-screen h-screen z-30 md:flex flex-col justify-center p-4  text-white">
          <div className="max-w-7xl w-full  mx-auto">
            <div className="h-10" />
            <div className="text-5xl md:text-7xl font-bold text-[#27377d] hero-title">
              منازل العمران
            </div>
            <div className="h-10" />
            <Link href="/projects">
              <Button className="w-fit px-6 bg-[#f7942e]">مشاريعنا</Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden  absolute top-0 left-0 w-screen h-screen z-30 flex flex-col justify-center p-4  text-white">
          <div className="max-w-4xl  mx-auto">
            <div className="h-10" />
            <div className="text-5xl md:text-7xl font-bold text-[#27377d] hero-title">
              منازل العمران
            </div>
            <div className="h-10" />
            <Link href="/projects">
              <Button className="w-fit px-6 bg-[#f7942e]">مشاريعنا</Button>
            </Link>
          </div>
        </div>
      </div>
      {/*<div className="h-[calc(100vh-120px)]" />*/}

      <About />
      <Power title={"لماذا القوة العقارية ؟"} />
      <Service title={"خدماتنا"} />
      <Achievements />

      <div className="h-2" />
      <Map />
    </div>
  );
}
