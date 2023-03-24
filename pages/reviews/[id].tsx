import HeroCards from "@/components/hero-cards";
import Wrapper from "@/components/navbar-wrapper";
import NewsLetterInput from "@/components/news-letter-input";
import { reviewEachPageDetails, heroCards } from "@/utils/mockdata";
import { GetStaticProps } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";

export const getStaticPaths = async () => {
  //some asynchronous operation to a backend service maybe if available to get the amount of review on the data
  const data = ["1", "2", "3", "4"];

  // map data to an array of path objects with params (id)
  const paths = data.map((path) => {
    return {
      params: { id: path }
    };
  });

  return {
    paths,
    fallback: false
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
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
      <main className="max-w-[1320px] mx-auto  text-textColor dark:bg-main dark:text-[#fff] mb-8">
        <h1 className="font-extrabold text-xl mb-4 ">{content.title}</h1>
        <section className="flex justify-center mb-6">
          <Image
            src={content.img}
            alt={`illustrator for  ${content.title} `}
            className="w-[70rem] h-[35rem]"
          />
        </section>
        <section className="">
          <h2 className="font-bold text-xl mb-8">-{content.creator}</h2>
          <p className="font-normal text-lg">{content.desc1}</p>
        </section>
        <section className="flex gap-6 mb-10">
          <p className="text-lg self-end">{content.desc2}</p>
          <Image
            src={content.img}
            alt={`video to illustrate  ${content.title}`}
            className="w-[80%]"
          />
        </section>
        <section className="text-lg">{content.desc3}</section>
        <section className="my-24">
          <h2 className="font-bold text-2xl border-b pb-4 border-[#E7E7E7] dark:border-textColor  mt-12">
            More Stories
          </h2>
          <div className="flex gap-8 mt-8">
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
          <h2 className="font-bold text-2xl border-b pb-4 border-[#E7E7E7] dark:border-textColor  mt-12">
            Subscribe
          </h2>
          <h3 className="text-center text-2xl font-bold uppercase mt-10">
            Sign up to new letter pop up
          </h3>
          <NewsLetterInput />
        </section>
      </main>
    </Wrapper>
  );
};

export default ReviewsDetailsPage;
