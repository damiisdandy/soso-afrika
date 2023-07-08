import ReviewPage from "@/components/review-page";
import { getPosts } from "@/utils/api";
import { GetServerSideProps } from "next";

type Props = {
  posts: Post[];
};

export default function Page({ posts }: Props) {
  return (
    <div>
      <ReviewPage description="" title="Cool Stuff" posts={posts} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data, status } = await getPosts({
    per_page: 100,
    order: "desc",
    orderby: "relevance",
    search: "cool stuff",
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
