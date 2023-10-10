import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import ParagraphText from "../Shared/Typography/ParagraphText";
import NextImage from "../Shared/Image/NextImage";

const Experience = () => {
  return (
    <ComponentWrapper
      id="experience"
      style="lg:py-16 py-10 bg-[url('/Assets/Experience/Earth.png')] bg-no-repeat bg-cover bg-top"
    >
      <div className="w-full flex flex-col items-center justify-start gap-6">
        <div className="w-full grid lg:grid-cols-[2fr,1fr] gap-8">
          <SectionHeading
            text="Experience the Gameplay, Discover a New World of Adventure"
            alignment="text-left"
          />
          <ParagraphText
            alignment="text-left"
            text="Embark on a grand quest in a realm where skills and exploration are the linchpins to unlocking boundless treasures. The Geoverse, our expansive game world, hides seven ancient keys, each a testament to a hero's valor and intellect. As a player, your journey begins with honing skills that are quintessential to navigating the challenges that lie ahead."
          />
        </div>
        <NextImage
          imageSrc="/Assets/Experience/Game.gif"
          imageStyle="object-fill rounded-[40px]"
          containerStyle="w-full lg:h-[530px] sm:h-[300px] md:h-[400px] h-[200px] rounded-[40px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default Experience;
