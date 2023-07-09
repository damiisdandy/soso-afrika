import { ArrowRight } from "@/assets";
import { defaultBlurImage } from "@/config";
import { imageResizer } from "@/utils/api";
import Image from "next/image";
import { useRouter } from "next/router";

type ReviewsCardProps = {
  img: string;
  title: string;
  desc: string;
  slug: string;
  date: string;
};

const ReviewsCard = ({ img, title, desc, slug, date }: ReviewsCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/posts/${slug}`)}
      className="cursor-pointer"
    >
      <div className="overflow-hidden group rounded-lg">
        <Image
          alt={title}
          src={img ? imageResizer(img, 1000, 1000) : defaultBlurImage}
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={imageResizer(img, 90, 90)}
          className="w-[35rem] h-[350px] mx-auto rounded-lg object-cover group-hover:scale-110 transition-all"
        />
      </div>
      <h3
        className="font-extrabold mt-4 text-xl mb-2"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></h3>
      <p
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
        className="italic font-light line-clamp-2"
      ></p>
      <div className="flex items-center justify-between mt-4 px-2 md:px-0">
        <span className="flex items-center gap-3 font-bold">{date}</span>
        <h5
          className="flex items-center gap-3 font-semibold text-header cursor-pointer text-md"
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
