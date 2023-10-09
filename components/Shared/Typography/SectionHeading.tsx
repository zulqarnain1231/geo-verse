import React from "react";

type Props = {
  text: string;
  alignment?: string;
};
const SectionHeading: React.FC<Props> = ({
  text,
  alignment = "text-center",
}: Props) => {
  return (
    <h2
      className={`text-white-main sm:text-6xl text-[40px] font-semibold capitalize ${alignment}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
