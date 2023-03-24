import Image, { StaticImageData } from "next/image";
import React from "react";
import Ellipse from "../../assets/svg/ellipse.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";

type ReviewsCardProps = {
  img: StaticImageData;
  title: string;
  desc: string;
  creator: string;
};

const ReviewsCard = ({ img, title, desc, creator }: ReviewsCardProps) => {
  return (
    <div className="w-[39rem]">
      <Image src={img} alt={title + "info"} className="w-[35rem] mx-auto" />
      <h3 className="font-extrabold mt-4 ">{title}</h3>
      <h4 className="font-bold mt-3">-{creator}</h4>
      <p className="italic font-light">{desc}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="flex items-center gap-3 font-light">
          <Ellipse className="dark:fill-[#fff]" /> August 30,2022
        </span>
        <h5 className="flex items-center gap-3 font-semibold text-header">
          Continue Reading
          <ArrowRight />
        </h5>
      </div>
    </div>
  );
};

export default ReviewsCard;
