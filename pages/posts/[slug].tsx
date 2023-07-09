import HeroCards from "@/components/hero-cards";
import Wrapper from "@/components/navbar-wrapper";
import Seo from "@/components/seo";
import { getPostBySlug, imageResizer } from "@/utils/api";
import { GetServerSideProps } from "next";
import Image from "next/image";

type Prop = {
  post: PostWithRelated;
};

const ReviewsDetailsPage = ({ post }: Prop) => {
  return (
    <Wrapper>
      <Seo
        title={post.title}
        description={post.description}
        image={{
          url: post.image,
        }}
      />
      <main className="max-w-[1320px] mx-auto px-4 text-textColor dark:bg-main dark:text-white mb-8 mt-[7rem]">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-4 ">
          {post.title}
        </h1>
        <section className="flex justify-center my-3">
          <Image
            src={imageResizer(post.image, 1000, 1000)}
            placeholder="blur"
            blurDataURL={imageResizer(post.image, 90, 90)}
            alt={`illustrator for ${post.title} `}
            width={1000}
            height={1000}
            className=" w-[35rem] rounded-lg sm:w-[50rem] xl:w-full h-[15rem] sm:h-[25rem] md:h-[35rem] object-cover"
          />
        </section>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
        <section className="my-24">
          <h2 className="font-bold text-2xl border-b pb-4 border-reviewsBorder dark:border-textColor  mt-12">
            More Stories
          </h2>
          <div className="flex gap-8 py-5 mt-8 text-white overflow-scroll scrollbar-none">
            {post.related.map(({ id, image, slug, title }) => (
              <HeroCards key={id} slug={slug} title={title} img={image} />
            ))}
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default ReviewsDetailsPage;

export const getServerSideProps: GetServerSideProps<Prop> = async ({
  query,
}) => {
  const { data, status } = await getPostBySlug(query.slug as string);
  if (status) {
    return {
      props: {
        post: data,
      },
    };
  }
  return {
    props: {
      post: null,
    },
    notFound: true,
  };
};
