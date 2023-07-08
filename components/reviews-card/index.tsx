import { Ellipse, ArrowRight } from "@/assets";
import { defaultBlurImage } from "@/config";
import Image from "next/image";
import { useRouter } from "next/router";

type ReviewsCardProps = {
  img: string;
  title: string;
  desc: string;
  slug: string;
  date: string;
};

const ReviewsCard = ({ img, title, desc, date }: ReviewsCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/reviews/1")}
      className="cursor-pointer px-6 w-[45rem]  md:w-[23rem] lg:w-[30rem] xl:w-[39rem]"
    >
      <Image
        alt={title}
        src={img ? img : defaultBlurImage}
        width={350}
        height={350}
        placeholder="blur"
        blurDataURL={defaultBlurImage}
        className="w-[35rem] h-[350px] mx-auto rounded-lg object-cover"
      />
      <h3 className="font-extrabold mt-4 ">{title}</h3>
      <p className="italic font-light">{desc}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="flex items-center gap-3 font-light">
          <Ellipse className="dark:fill-white" /> {date}
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
