import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradient-animation-effect";
import { GridGlobe } from "../custom/grid-globe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  titleClassName,
  img,
  imgClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string
  img?: string
  imgClassName?: string
  spareImg?: string,
  id?: number
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input border border-white/[0.1] order justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="h-full w-full absolute top-0 left-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-50 font-bold"/>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, id === 2 && "mb-10 md:mb-20",  "group-hover/bento:-translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-3 p-5 lg:p-10")}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 uppercase">{description}</div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">{title}</div>
          {id === 2 && (
            <GridGlobe />
          )}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3">
              <div className="flex flex-col gap-2 lg:gap-3">
                {['React.js', 'Next.js', 'React Native'].map((item) => (
                  <span className="py-2 lg:py-3 lg:px-3 px-2 text-xs opacity-500 lg:opacity-100 rounded lg:rounded-lg text-center bg-[#10132e] border border-transparent hover:border-white/[0.08] transition" key={item}>{item}</span>
                ))}
                <span className="py-4 lg:py-5 px-3 rounded lg:rounded-lg text-center bg-[#10132e] border border-transparent"/>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="py-4 lg:py-5 px-3 rounded lg:rounded-lg text-center bg-[#10132e] border border-transparent"/>
                {['React.js', 'Next.js', 'React Native'].map((item) => (
                  <span className="py-2 lg:py-3 lg:px-3 px-2 text-xs opacity-500 lg:opacity-100 rounded lg:rounded-lg text-center bg-[#10132e] border border-transparent hover:border-white/[0.08] transition" key={item}>{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
