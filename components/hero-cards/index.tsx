import { defaultBlurImage } from "@/config";
import Image from "next/image";
import Link from "next/link";

type HeroCardProps = {
  id: number;
  title: string;
  img: string;
};
const HeroCards: React.FC<HeroCardProps> = ({ img, title, id }) => {
  return (
    <Link
      href={`/`}
      className="block group relative h-fit hero-card flex-shrink-0 rounded-md overflow-hidden shadow-lg"
    >
      <Image
        src={img ? img : defaultBlurImage}
        alt={title}
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL={defaultBlurImage}
        className="w-[250px] h-[250px] filter brightness-100 group-hover:brightness-50 object-cover transition-all"
      />
      <h2 className="w-full p-3 bg-white dark:bg-darkBg dark:text-white text-black absolute bottom-0 z-20 text-sm">
        {title}
      </h2>
    </Link>
  );
};

export default HeroCards;
