import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type HeroCardProps = {
  title: string;
  img: StaticImageData;
};
const HeroCards: React.FC<HeroCardProps> = ({ img, title }) => {
  return (
    <Link
      href="/reviews/1"
      className="block relative h-fit hero-card flex-shrink-0"
    >
      <Image
        src={img}
        alt={`${title} image`}
        className="w-[250px] h-[250px] filter brightness-100 hover:brightness-50"
      />
      <h2 className="w-3/4 left-1/2 top-1/2 transform -translate-x-1/2 font-semibold  line-clamp-2 absolute overflow-hidden text-sm bottom-20 transition-all">
        {title}
      </h2>
    </Link>
  );
};

export default HeroCards;
