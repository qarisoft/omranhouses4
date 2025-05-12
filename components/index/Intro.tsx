interface IntroProps {
  title: string;
  description?: string;
  data?: string[];
  className?: string;
}
export const Intro = ({ title, description, data, className }: IntroProps) => {
  return (
    <>
      <div
        className={
          " intro bg-white bg-cover bg-no-repeat  p-4 m-2  border shadow h-full relative ms-3 me-1 md:max-w-2xl  md:mx-auto " +
          " " +
          className
        }
        style={{ backgroundImage: "url('./image/back2.png')" }}
      >
        <div className="text max-w-2xl md:p-6  mt-12 md:mt-6 ">
          <h1 className="font-bold text-2xl mb-2  absolute top-3 right-0 bg-[#f7942e] w-fit rounded-e-2xl p-1 pe-9">
            {title}
          </h1>
          {description && (
            <p className="font-medium leading-loose ps-4">{description}</p>
          )}

          <ul className="mt-5 list-disc ps-8 leading-7">
            {data && data.map((value, index) => <li key={index}>{value}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};
