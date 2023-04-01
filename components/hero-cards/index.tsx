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
        className="min-w-[250px] min-h-[200px]  sm:min-w-[322px] sm:h-[303px] xl:h-[254px] h-[200px]"
      />
      <h2 className="p-3 absolute bottom-20 left-6 font-bold">{title}</h2>
    </div>
  );
};

export default HeroCards;
