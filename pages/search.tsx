import ReviewPage from "@/components/review-page";
import { getPosts } from "@/utils/api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = {
  posts: Post[];
};

export default function Page({ posts }: Props) {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <ReviewPage description="" title={`Results for "${q}"`} posts={posts} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { q } = query;

  const { data, status } = await getPosts({
    per_page: 100,
    order: "desc",
    orderby: "relevance",
    search: q?.toString() ?? "",
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
