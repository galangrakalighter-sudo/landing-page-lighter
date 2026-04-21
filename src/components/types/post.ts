export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  url: string;
  date: string;
  image: string;
  author: string;
}