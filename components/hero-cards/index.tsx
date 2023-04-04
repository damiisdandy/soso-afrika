import Image, { StaticImageData } from "next/image";

type HeroCardProps = {
  title?: string;
  img: StaticImageData;
};
const HeroCards: React.FC<HeroCardProps> = ({ img, title }) => {
  return (
    <div className="relative h-fit">
      <Image
        src={img}
        alt={`${title} image`}
        className="min-w-[250px] min-h-[250px]  sm:min-w-[300px] sm:h-[300px] xl:h-[250px] h-[250px] filter brightness-75"
      />
      <h2 className="p-3 absolute bottom-20 left-6 font-bold">{title}</h2>
    </div>
  );
};

export default HeroCards;
