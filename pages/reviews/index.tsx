import Wrapper from "@/components/navbar-wrapper";
import ReviewsCard from "@/components/reviews-card";
import { reviewCardsContent } from "@/utils/mockdata";
import ArrowDown from "../../assets/svg/arrow-down-long.svg";
import React from "react";

const ReviewsPage = () => {
  return (
    <Wrapper>
      <main className="max-w-[1320px] mx-auto  text-textColor dark:bg-main dark:text-[#fff]">
        <h2 className="font-bold text-2xl border-b pb-8 border-[#E7E7E7] dark:border-textColor ">
          Reviews
        </h2>
        <section className="mt-12 flex gap-8 justify-between flex-wrap gap-y-14">
          {reviewCardsContent.map((cardContent, idx) => (
            <ReviewsCard
              key={idx}
              img={cardContent.img}
              creator={cardContent.creator}
              desc={cardContent.desc}
              title={cardContent.title}
            />
          ))}
        </section>
        <section className="flex items-center justify-end gap-4 mt-12 font-bold text-xl">
          See Older Stories <ArrowDown className="dark:fill-[#fff]" />
        </section>
        <section>
          <h2 className="font-bold text-2xl border-b pb-4 border-[#E7E7E7] dark:border-textColor ">
            Subscribe
          </h2>
          <h3 className="text-center text-2xl font-bold uppercase mt-10">
            Sign up to new letter pop up
          </h3>
        </section>
      </main>
    </Wrapper>
  );
};

export default ReviewsPage;
