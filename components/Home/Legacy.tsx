import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import ParagraphText from "../Shared/Typography/ParagraphText";
import NextImage from "../Shared/Image/NextImage";

const Legacy = () => {
  return (
    <ComponentWrapper id="legacy" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading text=" Forge Your Legacy" />
        <ParagraphText
          width="lg:w-[60%] w-full"
          text="The wilderness is vast and the caves deep, each a realm of mysteries and guarded by creatures of old. The path to discovering the keys is laden with challenges that test your wit, courage, and the skills you've honed. Every cave explored, every puzzle solved, and every foe vanquished is a step towards the coveted keys."
        />
        <ParagraphText
          width="lg:w-[60%] w-full"
          text="So, gear up, sharpen your skills, and set forth on an epic quest of exploration and discovery to find the ancient keys that unlock the heart of Geoverse. Your legend awaits!"
        />
        <div className="w-full grid lg:grid-cols-3 gap-8">
          <NextImage
            imageSrc="/Assets/Legacy/1.gif"
            imageStyle="rounded-[32px] object-fill"
            containerStyle="h-[520px] w-full rounded-[32px]"
          />
          <div className="w-full h-full flex flex-col items-center justify-start gap-8">
            <NextImage
              imageSrc="/Assets/Legacy/2.gif"
              imageStyle="rounded-[32px] object-fill"
              containerStyle="h-[240px] w-full rounded-[32px]"
            />
            <NextImage
              imageSrc="/Assets/Legacy/3.png"
              imageStyle="rounded-[32px] object-fill"
              containerStyle="h-[240px] w-full rounded-[32px]"
            />
          </div>

          <NextImage
            imageSrc="/Assets/Legacy/4.gif"
            imageStyle="rounded-[32px] object-cover object-center"
            containerStyle="h-[520px] w-full rounded-[32px]"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Legacy;
