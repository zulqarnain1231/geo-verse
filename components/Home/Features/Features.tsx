import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import * as Icons from "@/constants/Svg/Icons";
const Features = () => {
  return (
    <ComponentWrapper id="features" style="lg:py-16 py-12">
      <div className="w-full h-full grid grid-cols-3 gap-10">
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <Icons.Map fill="" stroke="" ClassName="h-[64px] w-[64px]" />
          <p className="text-center text-white-main text-2xl font-semibold">
            Procedural map generation
          </p>
          <p className="text-white-off text-center text-base font-medium">
            Geoverse revolutionizes exploration through dynamic procedural map
            generation. Picture an ever-unfolding world, tailored uniquely for
            each path. Traditional games rely on pre-designed maps, limiting
            your journey.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Features;
