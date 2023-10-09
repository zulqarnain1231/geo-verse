import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  detail: string;
};
const FeatureCard: React.FC<Props> = ({ title, detail, icon }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4">
      {icon}
      <p className="text-center text-white-main text-2xl font-semibold">
        {title}
      </p>
      <p className="text-white-off text-center text-base font-medium">
        {detail}
      </p>
    </div>
  );
};

export default FeatureCard;
