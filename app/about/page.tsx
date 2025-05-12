import { Intro } from "@/components/index/Intro";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div>
      {/* <h1 className={title()}>About</h1> */}

      {/* <div className="w-full h-full bg-slate-100">dddddddddddddddddddddddd</div> */}

      <div className="flex flex-col gap-3">
        <Intro
          className="animate__animated animate__fadeInRight delay-1 .5s"
          description={siteConfig.intro}
          title={"من نحن؟"}
        />
        <Intro
          className="animate__animated animate__fadeInRight delay-2 "
          description={siteConfig.vision}
          title={"رؤيتنا"}
        />
        <Intro
          className="animate__animated animate__fadeInRight delay-3 .5s"
          data={siteConfig.goals}
          title={"الأهداف"}
        />
        <Intro
          className="animate__animated animate__fadeInRight delay-4 "
          data={siteConfig.morals}
          title={"القيم و المبادئ"}
        />
      </div>
    </div>
  );
}
