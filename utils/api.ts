import defaultConfig, { defaultBlurImage } from "@/config";
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

const postSanitizer = (post: any): PostWithRelated => {
  return {
    id: post.id,
    date: dayjs(post.date).format('MMMM DD, YYYY'),
    modified: post.modified,
    content: post.content.rendered,
    slug: post.slug,
    title: convert(post.title.rendered),
    description: convert(post.excerpt.rendered),
    image: post.jetpack_featured_media_url.split('?')[0],
    author: post.author,
    related: post["jetpack-related-posts"].map((item: any) => ({
      id: item.id,
      slug: item.url.slice(0, -1).split('/').pop(),
      image: item.img.src.split('?')[0],
      title: item.title,
    })),
  }
}



export const getPosts = async (params: getPostParams = defaultParams): Promise<ApiResponse<PostWithRelated[]>> => {
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

export const getPostBySlug = async (slug: string): Promise<ApiResponse<PostWithRelated>> => {
  try {
    const res = await axiosInstance.get<Post[]>(`/posts?slug=${slug}`);
    return {
      data: postSanitizer(res.data[0]),
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

export const imageResizer = (url: string, width: number, height: number): string => {
  if (url.length > 0) return `${url}?fit=${width}%2C${height}`;
  return defaultBlurImage;
}