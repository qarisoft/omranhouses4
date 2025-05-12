import { Intro } from "@/components/index/Intro";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div>
      {/* <h1 className={title()}>About</h1> */}

      {/* <div className="w-full h-full bg-slate-100">dddddddddddddddddddddddd</div> */}

      <div className="flex flex-col gap-3">

        <Intro className="animate__animated animate__fadeInRight delay-1 .5s" title={'من نحن؟'} description={siteConfig.intro} />
        <Intro className="animate__animated animate__fadeInRight delay-2 " title={'رؤيتنا'} description={siteConfig.vision} />
        <Intro className="animate__animated animate__fadeInRight delay-3 .5s" title={'الأهداف'} data={siteConfig.goals} />
        <Intro className="animate__animated animate__fadeInRight delay-4 " title={'القيم و المبادئ'} data={siteConfig.morals} />

      </div>
    </div>
  );
}
