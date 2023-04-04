import Wrapper from "@/components/navbar-wrapper";
import ReviewsCard from "@/components/reviews-card";
import { reviewCardsContent } from "@/utils/mockdata";
import ArrowDown from "@/assets/svg/arrow-down-long.svg";
import NewsLetterInput from "@/components/news-letter-input";
import Head from "next/head";
import Seo from "@/components/seo";

const ReviewsPage = () => {
  return (
    <>
      <Seo title="Reviews" description="TODO: Review Text Goes Here" />
      <Wrapper>
        <main className="max-w-[1320px] mx-auto  text-textColor dark:bg-main dark:text-white mb-8 mt-[7rem]">
          <h2 className="font-bold mx-4 sm:mx-10 text-2xl border-b pb-8 border-reviewsBorder dark:border-textColor ">
            Reviews
          </h2>
          <section className="mt-12 flex lg:gap-8 xl:gap-0 justify-center flex-wrap gap-y-16 xl:gap-y-14">
            {reviewCardsContent?.map((cardContent, idx) => (
              <ReviewsCard
                key={idx}
                img={cardContent.img}
                creator={cardContent.creator}
                desc={cardContent.desc}
                title={cardContent.title}
              />
            ))}
          </section>
          <section className="flex items-center justify-end gap-4 mt-12 sm:mt-[7rem] font-bold text-xl mx-10">
            See Older Stories <ArrowDown className="dark:fill-white" />
          </section>
          <section>
            <h2 className="font-bold text-2xl border-b pb-4 mx-4 sm:mx-10 border-reviewsBorder dark:border-textColor  mt-12">
              Subscribe
            </h2>
            <h3 className="text-center text-xl sm:text-2xl font-bold uppercase mt-14">
              Sign up to new letter pop up
            </h3>
            <NewsLetterInput />
          </section>
        </main>
      </Wrapper>
    </>
  );
};

export default ReviewsPage;
