import { defaultBlurImage } from "@/config";
import { imageResizer } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

type HeroCardProps = {
  title: string;
  img: string;
  slug: string;
};
const HeroCards: React.FC<HeroCardProps> = ({ img, title, slug }) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="block group relative h-fit flex-shrink-0 rounded-md overflow-hidden shadow-lg"
    >
      <Image
        src={img ? imageResizer(img, 700, 700) : defaultBlurImage}
        alt={title}
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL={imageResizer(img, 50, 50)}
        className="w-[250px] h-[250px] filter brightness-100 group-hover:brightness-50 object-cover transition-all"
      />
      <h2
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className="w-full group-hover:bottom-[0%] transition-all p-3 bg-white dark:bg-[#141414] dark:text-white text-black absolute bottom-0 md:-bottom-full z-20 text-sm"
      ></h2>
    </Link>
  );
};

export default HeroCards;
