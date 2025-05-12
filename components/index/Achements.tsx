import { PropsWithChildren } from "react";

export const Achievements = () => {
  const achievements = "";

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1  md:grid-cols-3 w-full  space-y-2 gap-6  max-w-5xl  mt-5    bg-[#F6F6F696]">
        <ItemContainer key={"power-1"}>
          <svg
            className="size-28 text-center mx-auto text-[#a76d16]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-3xl font-medium ">100+</h1>
          <h1 className="text-3xl font-medium ">متر مربع تم تطويرة</h1>
        </ItemContainer>
        <ItemContainer key={"power-2"}>
          <span
            className={"icon-investment text-[#a76d16]"}
            style={{ fontSize: "100px" }}
          />
          <h1 className="text-3xl font-semibold ">100+</h1>
          <h1 className="text-3xl font-normal ">مبنى تم انشائة</h1>
        </ItemContainer>
        <ItemContainer key={"power-3"}>
          <svg
            className="size-28 text-center mx-auto text-[#a76d16]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-3xl font-semibold ">100+</h1>
          <h1 className="text-3xl font-normal ">وحدة سكنية</h1>
        </ItemContainer>
      </div>
    </div>
  );
};

interface ItemProps {
  txt: string;
  number: number;
  svg: any;
}

const ItemContainer = ({ children }: PropsWithChildren) => {
  return (
    <div
      className=" text-center  p-6  "
      style={{
        backgroundImage: `url('./image/back.png')`,
        backgroundBlendMode: "saturation",
      }}
    >
      {children}
    </div>
  );
};

const Item = ({ txt, number }: ItemProps) => {
  return (
    <>
      <div className="  ">
        {/*<span className="icon icon-healthcare font-medium text-6xl"></span>*/}

        <svg
          className="size-28 text-center mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-3xl font-medium ">{number}+</h1>
        <h1 className="text-3xl font-medium ">{txt}</h1>
      </div>
    </>
  );
};
