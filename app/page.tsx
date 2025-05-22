"use client";

// import Tween = gsap.core.Tween;
// import {type Tween} from "gsap";
import { forwardRef, useState } from "react";
import { Image } from "@heroui/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { Button } from "@heroui/button";
import gsap from "gsap";
import { Link } from "@heroui/react";
import { motion } from "framer-motion";

import { AboutSection as About } from "@/components/index/ab-section";
import { Power } from "@/components/index/Power";
import { Service } from "@/components/index/Service";
import { Achievements } from "@/components/index/Achements";
import { Map } from "@/components/Map";

import "../styles/animate.css";

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
    <div>
      <div className=" w-screen h-[calc(100dvh-120px)] overflow-clip">
        <Image
          className="hidden md:block w-screen h-[calc(100dvh-120px)] hero"
          radius="none"
          src="./back.jpg"
        />
        <Image
          className="md:hidden w-screen h-[calc(100dvh-120px)] hero"
          radius="none"
          src="./back.m.jpg"
        />
        {/*<div*/}
        {/*  className="md:hidden w-screen h-full bg-no-repeat bg-cover bg-center       "*/}
        {/*  style={{ backgroundImage: `url(./back.jpg)` }}*/}
        {/*  // radius="none"*/}
        {/*  // src="./bg.m.png"*/}
        {/*/>*/}
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
      <motion.div>
        <About />
        <Samantha />

        <Power title={"لماذا القوة العقارية ؟"} />
        <Service title={"خدماتنا"} />
        <div className="h-10" />
        <Achievements />

        <div className="h-10" />
        <Map />
        <div className="h-10" />
      </motion.div>
    </div>
  );
}
type Thaman = {
  des: string;
  id: number;
  text: string;
  icon: string;
};
const data: Thaman[] = [
  {
    des: "اتحاد ملاك",
    id: 0,
    text: "1 سنة واحدة",
    icon: "./icons/tham/3.svg",
  },
  {
    des: "سباكة وكهرباء",
    id: 1,
    text: "5 سنوات",
    icon: "./icons/tham/4.svg",
  },
  { des: "هياكل وبناء", id: 2, text: "15 سنة", icon: "./icons/tham/1.svg" },
  { des: "قواطع وافياش", id: 3, text: "25 سنة", icon: "./icons/tham/2.svg" },
];

const Samantha = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={"flex my-12 p-2"}>
      <motion.div
        animate="hidden"
        className="flex-1 max-w-5xl mx-auto bg-gray500"
        initial="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.15, ease: "easeOut" } },
          hidden: {
            transition: { staggerChildren: 0.15, staggerDirection: -1 },
          },
        }}
        viewport={{ amount: 0.7, once: true }}
        whileInView="visible"
      >
        <div className="relative w-fit">
          <motion.div
            className=""
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            <h1 className={"text-4xl md:text-5xl font-bold  w-fit"}>
              الضمانات
            </h1>
            <div className="absolute -bottom-2 w-full h-[4px] bg-mprimary" />
          </motion.div>
        </div>
        <div className="h-5" />

        <div className="borde p-3 flex  gap-5 flex-col md:flex-row  justify-between">
          {data.map((a, i) => (
            <CardItem key={a.id} item={a} />
          ))}
        </div>
        <div className="h-10" />
      </motion.div>
    </div>
  );
});

Samantha.displayName = "Samantha";

function CardItem({ item }: { item: Thaman }) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
      className="border rounded-lg p-4 px-6 shadow-md drop-shadow text-center w-fit mx-auto  "
      // style={{ animationDelay: `${i * 0.4}s` }}
    >
      <Image className="size-40 mx-auto" src={item.icon} />
      <div className="text-center text-2xl font-bold text-mprimary">
        {item.des}
      </div>
    </motion.div>
  );
}

// const A = motion()
