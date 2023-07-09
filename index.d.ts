type Post = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  image: string;
  author: string;
};

type MiniPost = {
  id: number;
  slug: string;
  image: string;
  title: string;
}

type PostWithRelated = Post & {
  related: MiniPost[];
}