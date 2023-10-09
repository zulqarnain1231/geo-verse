import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Hero = () => {
  return (
    <ComponentWrapper style="bg-transparent h-auto lg:h-[calc(100dvh-80px)] lg:mt-0 mt-10">
      <div className="w-full h-full grid lg:grid-cols-2 gap-8">
        <aside className="w-full h-full flex flex-col items-start justify-center gap-8">
          <h1 className="text-white-main sm:text-7xl text-5xl font-extrabold">
            The Gateway to Endless Realms
          </h1>
          <p className="text-white-off sm:text-lg text-base font-medium lg:w-[80%] w-full">
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
          <NextImage
            imageSrc="/Assets/Hero/Main.png"
            containerStyle="xl:w-[500px] sm:w-[400px] w-[340px] xl:h-[500px] sm:h-[400px] h-[320px]"
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
