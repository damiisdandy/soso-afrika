import defaultConfig from "@/config";
import axios from "axios";
import dayjs from "dayjs";
import { convert } from 'html-to-text';

const axiosInstance = axios.create({
  baseURL: defaultConfig.apiRoot,
});

type ApiResponse<T> = {
  data: T;
  status: boolean;
} | {
  data: null;
  status: false;
  error: any;
}

type getPostParams = {
  per_page: number;
  search?: string;
  order?: 'desc' | 'asc';
  orderby?: 'date' | 'id' | 'modified' | 'relevance' | 'slug' | 'title';
  categories?: number[];
  tags?: number[];
};

const defaultParams: getPostParams = {
  per_page: 20,
  order: 'desc',
}

const postSanitizer = (post: any): Post => {
  return {
    id: post.id,
    date: dayjs(post.date).format('MMMM DD, YYYY'),
    modified: post.modified,
    content: post.content.rendered,
    slug: post.slug,
    title: convert(post.title.rendered),
    description: convert(post.excerpt.rendered),
    image: post.jetpack_featured_media_url,
    author: post.author,
  }
}



export const getPosts = async (params: getPostParams = defaultParams): Promise<ApiResponse<Post[]>> => {
  const excludedKeys = ['categories', 'tags'];

  const queryObject = {
    ...(params.categories ? { categories: params.categories.join(',') } : {}),
    ...(params.tags ? { categories: params.tags.join(',') } : {}),
    status: 'publish',
  }
  for (const key in params) {
    if (excludedKeys.includes(key) || !key) continue;
    // @ts-ignore
    queryObject[key] = params[key];
  }
  const queryParams = new URLSearchParams(queryObject);
  try {
    const res = await axiosInstance.get<Post[]>(`/posts?${queryParams.toString()}`);
    return {
      data: res.data.map(postSanitizer),
      status: true,
    }
  } catch (err) {
    return {
      data: null,
      status: false,
      error: err,
    }
  }
}