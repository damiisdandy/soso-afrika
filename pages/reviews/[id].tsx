import HeroCards from "@/components/hero-cards";
import MusicPlaylist from "@/components/music-component";
import Wrapper from "@/components/navbar-wrapper";
import NewsLetterInput from "@/components/news-letter-input";
import { reviewEachPageDetails, heroCards } from "@/utils/mockdata";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //some asynchronous operation to a backend service maybe if available
  return { props: { content: reviewEachPageDetails } };
};

type ReviewsDetailsPageProps = {
  content: {
    img: StaticImageData;
    title: string;
    creator: string;
    desc1: string;
    desc2: string;
    desc3: string;
  };
};

const ReviewsDetailsPage = ({ content }: ReviewsDetailsPageProps) => {
  console.log(content);
  return (
    <Wrapper>
      <Head>
        <title>SOSO AFRIKA -Reviews Details</title>
      </Head>
      <main className="max-w-[1320px] mx-auto px-4 text-textColor dark:bg-main dark:text-white mb-8 mt-[7rem]">
        <h1 className="font-extrabold text-xl mb-4 ">{content.title}</h1>
        <section className="flex justify-center mb-6">
          <Image
            src={content.img}
            alt={`illustrator for  ${content.title} `}
            className=" w-[35rem] sm:w-[50rem] xl:w-[70rem] h-[15rem] sm:h-[25rem] md:h-[35rem]"
          />
        </section>
        <section className="md:mb-4 lg:mb-0 ">
          <h2 className="font-bold text-xl mb-8">-{content.creator}</h2>
          <p className="font-normal text-lg leading-7">{content.desc1}</p>
        </section>
        <section className="flex gap-6 mb-6 flex-col md:flex-row">
          <p className="text-lg self-end leading-7">{content.desc2}</p>
          <Image
            src={content.img}
            alt={`video to illustrate  ${content.title}`}
            className="lg:w-[80%] lg:h-[15rem] md:w-[24rem] md:h-[20rem] mx-auto"
          />
        </section>
        <section className="text-lg leading-7">{content.desc3}</section>
        <MusicPlaylist img={content.img} title={content.title} />
        <section className="my-24">
          <h2 className="font-bold text-2xl border-b pb-4 border-reviewsBorder dark:border-textColor  mt-12">
            More Stories
          </h2>
          <div className="flex gap-8 mt-8 text-white overflow-scroll scrollbar-none">
            {heroCards.map((heroCard, id) => (
              <HeroCards
                key={id}
                title={heroCard?.title ?? ""}
                img={heroCard.img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-2xl border-b pb-4 border-reviewsBorder dark:border-textColor  mt-12">
            Subscribe
          </h2>
          <h3 className="text-center text-xl md:text-2xl font-bold uppercase mt-10">
            Sign up to new letter pop up
          </h3>
          <NewsLetterInput />
        </section>
      </main>
    </Wrapper>
  );
};

export default ReviewsDetailsPage;
