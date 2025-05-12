import { siteConfig } from "@/config/site";
interface PowerProps {
  title: string;
  description?: string;
  data?: string[];
}
export const Power = ({ title, description, data }: PowerProps) => {
  return (
    <>
      <div className="text-center bg-gray-100 relative pt-3 ">
        <div className="    bg-mprimar  justify-center  ">
          <div className={"textwhite  font-bold text-2xl mx-auto   my-3"}>
            {title}
          </div>
          <div className="h-5" />
          <div className=" flex  w-screen  px-4 lg:w-[90vw] mx-auto  overflow-auto pb-2">
            {/* <Swiper>

                                </Swiper> */}
            {siteConfig.power.map((value, index) => (
              <div
                key={index}
                className={
                  " min-w-[95vw]  px-[5vw] m-[3vw] md:px-[3vw] md:mx-[1vw] md:min-w-[37vw] flex-1   shadow rounded "
                }
              >
                <h1 className={"font-semibold text-xl "}>{value.title}</h1>
                <div className="h-0.5 bg-mprimary w-full my-2" />

                <p className={"pb-2"}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PowerItem = ({ title, description, data }: PowerProps) => {
  // @ts-ignore
  return (
    <div className="war overflow-hidden text-center">
      <div className="  h-36  sm:w-[300px] md:w-[500px] flex m-auto ">
        <div className=" ">
          <div className=" flex justify-center bg-white">
            <div className="m-auto">
              {/*<span className="icon icon-healthcare font-medium"></span>*/}
              <h1 className={"font-bold text-2xl"}>{title}</h1>
            </div>
          </div>
          <div
            className="  bg-mprimar  text-whit flex "
            style={{ direction: "rtl" }}
          >
            <div className="m-auto text-en my-auto align-middle flex p-2 ">
              {description && (
                <div className={"text-center"}>{description}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
