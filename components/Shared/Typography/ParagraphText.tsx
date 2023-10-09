import React from "react";

type Props = {
  text: string;
  alignment?: string;
  width?: string;
};

const ParagraphText: React.FC<Props> = ({
  text,
  alignment = "text-center",
  width = "w-full",
}: Props) => {
  return (
    <p className={`text-white-off text-lg ${width} font-medium ${alignment}`}>
      {text}
    </p>
  );
};

export default ParagraphText;
