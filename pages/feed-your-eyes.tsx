import ReviewPage from "@/components/review-page";
import { getPosts } from "@/utils/api";
import { GetServerSideProps } from "next";

type Props = {
  posts: Post[];
};

export default function Page({ posts }: Props) {
  return (
    <div>
      <ReviewPage description="" title="Feed Your Eyes" posts={posts} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data, status } = await getPosts({
    per_page: 100,
    order: "desc",
    orderby: "relevance",
    search: "feed your eyes",
  });
  if (status) {
    return {
      props: {
        posts: data,
      },
    };
  }
  return {
    props: {
      posts: [],
    },
  };
};
