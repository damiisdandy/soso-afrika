import ReviewPage from "@/components/review-page";
import { GetServerSideProps } from "next";

type Props = {
  posts: Post[];
};

export default function Page({ posts }: Props) {
  return (
    <div>
      <ReviewPage description="" title="Things We See" posts={posts} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      posts: [],
    },
  };
};
