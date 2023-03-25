import Image, { StaticImageData } from "next/image";
import React from "react";

type HerocardProps = {
  title?: string;
  img: StaticImageData;
};
const HeroCards: React.FC<HerocardProps> = ({ img, title }) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt={`${title} image`}
        // className="w-full h-auto"
        className="min-w-[322px] h-[303px] xl:h-[254px]"
      />
      <h2 className="p-3 absolute bottom-20 left-6 font-bold">{title}</h2>
    </div>
  );
};

export default HeroCards;
