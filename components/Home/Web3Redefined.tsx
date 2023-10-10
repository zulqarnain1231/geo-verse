import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import ParagraphText from "../Shared/Typography/ParagraphText";

const Web3Redefined = () => {
  return (
    <ComponentWrapper
      id=""
      style="lg:py-20 3xl:py-60 py-12 lg:-mt-16 bg-[url('/Assets/Web3/Wave.png')] bg-cover bg-no-repeat bg-top"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 pt-36">
        <SectionHeading text="web3 gaming: redefined" />
        <ParagraphText
          text="   Geoverse is a fully onchain, top-down RPG built on Solana. It offers
          an immersive gaming experience where players can explore a dynamic and
          procedurally generated universe. Geoverse incorporates multiple layers
          within its maps, including caves, landscapes, and buildings, allowing
          for a rich and diverse gameplay environment."
          width="lg:w-[60%] w-full"
        />
      </div>
    </ComponentWrapper>
  );
};

export default Web3Redefined;
