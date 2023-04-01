import Head from "next/head";

import HeroCards from "@/components/hero-cards";
import { heroCards } from "@/utils/mockdata";
import Wrapper from "@/components/navbar-wrapper";
import { TwitterIcon, InstagramIcon, FaceBookIcon } from "@/assets";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOSO AFRIKA</title>
        <meta name="description" content="We Market Africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white ">
        <Wrapper>
          <section className="bg-[url('../assets/img/mobile-hero.png')] md:bg-[url('../assets/img/hero.png')] max-h-[100%] min-h-[100vh] bg-cover bg-no-repeat w-[100vw] ">
            <div className=" flex flex-col md:flex-row 2xl:max-w-[100rem] 2xl:h-fit 2xl:mx-auto ">
              <aside className="md:w-[4rem] flex md:flex-col justify-center gap-10 mt-[7rem] md:mt-0 md:gap-6 md:justify-end mx-10 mb-12">
                <InstagramIcon />
                <TwitterIcon />
                <FaceBookIcon />
              </aside>
              <div className="md:border-l border-homeBorder mt-4 md:mt-[12rem] md:overflow-x-hidden">
                <h1 className="text-header font-extrabold text-4xl md:text-6xl md:mt-[4rem] px-[1rem] sm:px-[3rem] text-center md:text-left">
                  WE SOKO AFRIKA
                </h1>
                <p className="mt-8 leading-7 uppercase text-md md:text-lg w-[100%] lg:w-[90%] px-[2rem] sm:px-[3rem] text-center md:text-left">
                  We Soko Afrika translates to We ‘Market’ Afrika. (Soko being
                  Swahili). Honestly? we are here to use every opportunity to
                  celebrate Afrika. Through her music, her culture, her people,
                  her food, her fashion, her entrepreneurs, her possibilities
                  and her passions!
                </p>
                <section className="flex pb-12 flex-col md:flex-row gap-2 mt-[7rem] sm:mt-[5rem] relative ml-4 md:ml-12 scrollbar-none">
                  <h2 className="font-bold text-2xl md:rotate-[270deg] h-fit w-[12rem] md:absolute top-[11.3rem] xl:top-[8.7rem] left-[-6rem] mb-6 md:mb-0">
                    Top Stories
                  </h2>
                  <div className="flex gap-4 xl:gap-6 md:ml-12 overflow-x-scroll scrollbar-none">
                    {heroCards.map((heroCard, id) => (
                      <HeroCards
                        key={id}
                        title={heroCard?.title ?? ""}
                        img={heroCard.img}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </Wrapper>
      </main>
    </>
  );
}
