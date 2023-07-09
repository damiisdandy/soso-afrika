import Wrapper from "@/components/navbar-wrapper";
import ReviewsCard from "@/components/reviews-card";
import ArrowDown from "@/assets/svg/arrow-down-long.svg";
import Seo from "@/components/seo";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  posts: Post[];
};

const CONTENT_PER_PAGE = 6;

const ReviewsPage = ({ title, description, posts }: Props) => {
  const [page, setPage] = useState(1);
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / CONTENT_PER_PAGE);

  const handleViewMore = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  return (
    <>
      <Seo title={title} description={description} />
      <Wrapper>
        <main className="max-w-[1320px] mx-auto  text-textColor dark:bg-main dark:text-white mb-8 mt-[7rem]">
          <h2 className="font-bold mx-4 sm:mx-10 text-2xl md:text-3xl uppercase border-b pb-4 md:pb-8 border-reviewsBorder dark:border-textColor ">
            {title}
          </h2>
          {posts.length ? (
            <section className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:gap-y-14 mx-4 sm:mx-10 gap-20">
              {posts
                .slice(0, CONTENT_PER_PAGE * page)
                .map(({ image, description, title, date, id, slug }) => (
                  <ReviewsCard
                    key={id}
                    img={image}
                    desc={description}
                    title={title}
                    date={date}
                    slug={slug}
                  />
                ))}
            </section>
          ) : (
            <div className="mx-4 sm:mx-10 mt-6">
              <h1 className="text-xl italic">
                Looks like there aren&apos;t any posts under this category, we
                are still cooking something so come back later
              </h1>
            </div>
          )}
          {page < totalPages && (
            <section
              onClick={handleViewMore}
              className="flex items-center justify-end gap-4 mt-12 sm:mt-[7rem] font-bold text-xl mx-10 cursor-pointer"
            >
              See Older Stories <ArrowDown className="dark:fill-white" />
            </section>
          )}
        </main>
      </Wrapper>
    </>
  );
};

export default ReviewsPage;
