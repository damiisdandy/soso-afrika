import HeroCards from "@/components/hero-cards";
import { heroCards } from "@/utils/mockdata";
import config from "@/config";
import Seo from "@/components/seo";
import Image from "next/image";
import heroImage from "@/assets/img/hero.png";
import ExternalLink from "@/components/external-link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Seo title="Home" description="We Market Africa" />
      <main className="text-white ">
        <section>
          <div className="fixed overflow-hidden bg-[rgba(100,100,100,0.3)] backdrop-blur-[5px] dark:bg-[rgba(0,0,0,0.3)] -z-10 h-screen w-screen"></div>
          <div className="fixed overflow-hidden -z-20 h-screen w-screen">
            <Image
              src={heroImage}
              className="w-screen h-screen object-cover origin-center"
              alt="woman wearing trad smiling"
              placeholder="blur"
            />
          </div>
          <div className="relative z-20 flex flex-col md:flex-row h-screen">
            <aside className="md:w-[4rem] hidden md:flex md:flex-col items-center justify-center gap-10 mt-[7rem] md:mt-0 md:gap-8 md:justify-end mx-10 mb-12 text-xl md:text-2xl">
              <ExternalLink href={config.social.instagram}>
                <BsInstagram />
              </ExternalLink>
              <ExternalLink href={config.social.twitter.url}>
                <BsTwitter />
              </ExternalLink>
              <ExternalLink href={config.social.email}>
                <MdEmail />
              </ExternalLink>
            </aside>
            <div className="md:border-l border-[#888] dark:border-[#444] mt-4 h-full md:overflow-x-hidden flex flex-col justify-end">
              <h1 className="text-header font-extrabold text-4xl md:text-6xl md:mt-4rem px-[1rem] sm:px-[3rem] text-center md:text-left">
                WE SOKO AFRIKA
              </h1>
              <p className="mt-8 md:leading-10 text-md md:text-xl w-[100%] lg:w-[75%] px-[2rem] sm:px-[3rem] text-center md:text-left">
                We Soko Afrika translates to We &apos;Market&apos; Afrika, (Soko
                being Swahili). <br /> Honestly? we are here to use every
                opportunity to celebrate Afrika. Through her music, her culture,
                her people, her food, her fashion, her entrepreneurs, her
                possibilities and her passions!
              </p>
              <div className="flex md:hidden justify-center items-center my-6 text-2xl gap-6">
                <ExternalLink href={config.social.instagram}>
                  <BsInstagram />
                </ExternalLink>
                <ExternalLink href={config.social.twitter.url}>
                  <BsTwitter />
                </ExternalLink>
                <ExternalLink href={config.social.email}>
                  <MdEmail />
                </ExternalLink>
              </div>
              <section className="flex pb-12 flex-col md:flex-row md:items-end gap-4 mt-2 sm:mt-[5rem] relative ml-4 md:ml-12 scrollbar-none">
                <h2 className="font-bold mt-14 md:mt-auto text-xl md:text-2xl md:rotate-[270deg] origin-left w-[200px]">
                  Top Stories
                </h2>
                <div className="flex gap-5 xl:gap-6 overflow-x-scroll scrollbar-none md:-ml-28">
                  {heroCards.map((heroCard, id) => (
                    <HeroCards
                      key={id}
                      title={heroCard.title}
                      img={heroCard.img}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
