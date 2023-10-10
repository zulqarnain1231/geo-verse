import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Hero = () => {
  return (
    <ComponentWrapper style="bg-transparent h-auto lg:h-[calc(100dvh-80px)] lg:pt-36 pt-32">
      <div className="w-full h-full grid lg:grid-cols-2 gap-8">
        <aside className="w-full h-full flex flex-col items-start justify-center sm:gap-8 gap-10">
          <h1 className="text-white-main sm:text-7xl text-5xl font-extrabold">
            The Gateway to Endless Realms
          </h1>
          <p className="text-white-off text-lg font-medium lg:w-[80%] w-full">
            Geoverse is an ever expanding universe of interconnected adventures
            and experiences, crafted for limitless exploration.
          </p>
          <div className="w-full flex items-center justify-start gap-6">
            <button className="h-[66px] sm:w-[196px] w-[175px] bg-brand-main rounded-2xl text-white-main text-[22px] font-bold shadow-main ">
              Create Player
            </button>
            <button className="text-white-main text-[22px] font-bold">
              Learn More
            </button>
          </div>
        </aside>
        <aside className="w-full h-full flex items-center lg:justify-end justify-center">
          <div className="xl:w-[500px] sm:w-[400px] w-[320px] xl:h-[500px] sm:h-[400px] h-[320px] relative">
            <div className="absolute top-0 left-0">
              <NextImage
                imageSrc="/Assets/Hero/1.gif"
                containerStyle="xl:h-[390px] sm:h-[360px] h-[260px] w-[260px] xl:w-[390px] sm:w-[360px] rounded-[40px]"
                imageStyle="object-fill rounded-[40px]"
              />
            </div>
            <div className="absolute xl:bottom-0 sm:-bottom-10 -bottom-6 -right-5 sm:-right-8 xl:right-0">
              <NextImage
                imageSrc="/Assets/Hero/2.png"
                containerStyle="xl:h-[290px] sm:h-[260px] h-[210px] w-[210px] sm:w-[260px] xl:w-[290px] rounded-[40px]"
                imageStyle="object-fill rounded-[40px]"
              />
            </div>
            <div className="absolute xl:bottom-16 sm:bottom-2 bottom-6 left-24  xl:left-28">
              <NextImage
                imageSrc="/Assets/Hero/1.gif"
                containerStyle="xl:h-[160px] sm:h-[130px] h-[90px] w-[90px] sm:w-[130px] xl:w-[160px] rounded-[26px] sm:rounded-[40px] shadow-secondary"
                imageStyle="object-fill rounded-[26px] sm:rounded-[40px]"
              />
            </div>
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
