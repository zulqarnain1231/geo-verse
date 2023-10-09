import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import * as Icons from "@/constants/Svg/Icons";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Procedural map generation",
      icon: <Icons.Map fill="" stroke="" ClassName="h-[64px] w-[64px]" />,
      detail:
        "Geoverse revolutionizes exploration through dynamic procedural map generation. Picture an ever-unfolding world, tailored uniquely for each path. Traditional games rely on pre-designed maps, limiting your journey.",
    },
    {
      title: "Multilayered Exploration",
      icon: <Icons.Stack fill="" stroke="" ClassName="h-[64px] w-[64px]" />,
      detail:
        "Geoverse introduces a multi-dimensional adventure by incorporating layers within the game map. Players can venture into intricate cave systems, explore vast landscapes, and navigate within various buildings.",
    },
    {
      title: "Skill Mastery",
      icon: <Icons.Skill fill="" stroke="" ClassName="h-[64px] w-[64px]" />,
      detail:
        "Unleash your potential by mastering skills like woodcutting, mining, and crafting. Each skill not only elevates your gameplay but holds a unique place in our expansive world.  Forge your destiny.",
    },
  ];
  return (
    <ComponentWrapper id="features" style="lg:py-16 py-12">
      <div className="w-full h-full grid lg:grid-cols-3 gap-10">
        {features.map((item: any, index: number) => (
          <FeatureCard
            key={index}
            title={item.title}
            icon={item.icon}
            detail={item.detail}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Features;
