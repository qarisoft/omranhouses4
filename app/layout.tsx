import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Image } from "@heroui/image";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Social } from "@/components/Social";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="ar">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="">
            <Navbar />
            {/* <main className=""> */}
            {children}
            {/* </main> */}
            {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer> */}
            <footer className={"flex-1 pt-5 border-t "}>
              <div className="md:flex justify-between md:max-w-5xl mx-auto pb-3 gap-3">
                <div className=" md:flex flex-col   text-center md:text-start gap-1 text-large">
                  <h1 className="font-extrabold">روابط هامة</h1>
                  <div className="font-medium">الرئيسية</div>
                  <div className="font-medium">عن الشركة</div>
                  <div className="font-medium">مشاريعنا</div>
                  <div className="font-medium">خدماتنا</div>
                  <div className="font-medium">اتصل بنا</div>
                  <div className="font-medium">المساعدة</div>
                  <div className="font-medium">سياسة الخصوصية</div>
                </div>

                <div className="b  flex flex-col justify-center gap-4 p-2 md:px-10 mt-3">
                  <div className=" flex justify-center">
                    <Image
                      alt="NextUI hero Image"
                      src="./image/logo-big.png"
                      width={300}
                    />
                  </div>

                  <div className="   justify-center mt-1 md:mt-0">
                    <div className="bg-blue-6000 w-fit mx-auto text-center">
                      <h1
                        className={
                          "text-large font-extrabold text-center divide-y-2 divide-amber-400"
                        }
                      >
                        {" "}
                        شركة منازل العمران للتطوير والاستثمار العقاري
                      </h1>
                      <div className="h-[3px] bg-[#c19455] mx-2" />
                      <div className="font-[600] pt-1">
                        <h1>MANAZEL ALOMRAN FOR DEVELOPMENT AND REAL ESTATE</h1>
                        <h1>INVESTMENT COMPANY</h1>
                      </div>
                    </div>
                  </div>
                  <p className={"max-w-xl text-center"}>
                    منذ لحظة تأسيسها، وعلى مدار 40 عاماً من خـبرات مؤسسيهــا في
                    مجــال العقار والاستثمــار العقـاري تواكـب الشركة النهضة
                    العمرانيـة التي تشهدها المملكـة العربية السعـــودية
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-center text-large ">
                  <a
                    className="font-extrabold"
                    href={
                      "https://maps.google.com/maps/dir//%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D9%86%D8%A7%D8%B2%D9%84+%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D8%A7%D9%86+%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1+%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1+%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A+%D8%A8%D8%B1%D8%AC+WA+Prince+Mohammed+Bin+Abdulaziz+St,+Al-Safa+Jeddah+13451,+Saudi+Arabia%E2%80%AD/@21.5670296,39.2247743,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x15c3d107b0405037:0x20e3c5c1ae2d7034"
                    }
                  >
                    {" "}
                    تواصل معنا
                    <div className="flex text-center align-middle   justify-center gap-2">
                      <img
                        alt={"dsda"}
                        className=""
                        src="./image/1.jpg"
                        width={70}
                      />
                    </div>
                  </a>
                  <div className="">هاتف</div>
                  <p className="left" style={{ direction: "ltr" }}>
                    +966 533307024
                  </p>
                  <Social />
                </div>
              </div>

              <div className="bg-mprimary text-white text-center p-2 py-4 ">
                جميع الحقوق محفوظة © 2024 - شركة منازل العمران للتطوير
                والاستثمار العقاري
              </div>
            </footer>
          </div>
          <Link
            className="fixed bg- text-center flex justify-center  bottom-0 z-10  h-12 w-12 rounded-full m-3"
            href={"https://wa.me/966533307024"}
          >
            <WhatsAppIcon size={50} />
          </Link>
        </Providers>
      </body>
    </html>
  );
}
