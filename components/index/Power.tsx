import { Card, CardBody, CardHeader } from "@heroui/react";

import { siteConfig } from "@/config/site";

interface PowerProps {
  title: string;
  description?: string;
  data?: string[];
}

export const Power = ({ title }: PowerProps) => {
  return (
    <>
      <div className="text-center bg-gray-0 relative px-2 pt-3  ">
        <div className="       ">
          <div className={"textwhite  font-bold text-2xl mx-auto   my-3"}>
            {title}
          </div>
          <div className="  gap-9  max-w-5xl  mx-auto mb-5">
            <div className="flex overflow-auto">
              {siteConfig.power.map((value, index) => (
                <Card
                  key={value.title + value.description}
                  className="w-[30rem] flex-shrink-0  m-2"
                  dir="rtl"
                >
                  <CardBody className=" " dir="rtl">
                    <CardHeader>
                      <h1 className={"font-semibold text-xl "}>
                        {value.title}
                      </h1>
                    </CardHeader>
                    <div
                      key={index}
                      className={" bg-slate-100 p-2 h-full  shadow rounded  "}
                      dir="rtl"
                    >
                      <p className={" text-right"} dir="rtl">
                        {value.description}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
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
