import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";

const Followers = () => {
  return (
    <ComponentWrapper
      id="followers"
      style="lg:py-20 py-12 bg-[url('/Assets/Follower/Particles.png')] bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full h-full flex sm:flex-row flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-start gap-4">
          <SectionHeading text="11" />
          <p className="text-white-off sm:text-2xl text-xl text-center font-medium">
            Players Created
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <SectionHeading text="20.8k" />
          <p className="text-white-off sm:text-2xl text-xl text-center font-medium">
            Tiles Discovered
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <SectionHeading text="5.6k" />
          <p className="text-white-off sm:text-2xl text-xl text-center font-medium">
            GEO Minted
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Followers;
