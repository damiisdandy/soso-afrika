import { Ellipse, ArrowRight } from "@/assets";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type ReviewsCardProps = {
  img: StaticImageData;
  title: string;
  desc: string;
  creator: string;
};

const ReviewsCard = ({ img, title, desc, creator }: ReviewsCardProps) => {
  const router = useRouter();

  return (
    <div className="px-6 w-[45rem]  md:w-[23rem] lg:w-[30rem] xl:w-[39rem]">
      <Image src={img} alt={title + "info"} className="w-[35rem] mx-auto" />
      <h3 className="font-extrabold mt-4 ">{title}</h3>
      <h4 className="font-bold mt-3">-{creator}</h4>
      <p className="italic font-light">{desc}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="flex items-center gap-3 font-light">
          <Ellipse className="dark:fill-white" /> August 30,2022
        </span>
        <h5
          className="flex items-center gap-3 font-semibold text-header cursor-pointer"
          onClick={() => router.push("/reviews/1")}
        >
          Continue Reading
          <ArrowRight />
        </h5>
      </div>
    </div>
  );
};

export default ReviewsCard;
