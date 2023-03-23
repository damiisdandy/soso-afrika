import Image, { StaticImageData } from "next/image";
import React from "react";

type HerocardProps = {
  title?: string;
  img: StaticImageData;
};
const HeroCards: React.FC<HerocardProps> = ({ img, title }) => {
  return (
    <div className="relative">
      <Image src={img} alt={`${title} image`} className="w[322px] h-[303px]" />
      <h2 className="w-[15rem] absolute bottom-20 left-10 font-bold">
        {title}
      </h2>
    </div>
  );
};

export default HeroCards;
