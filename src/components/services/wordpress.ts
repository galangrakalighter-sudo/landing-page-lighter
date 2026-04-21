import { Post } from "../types/post";

/* 🔹 Type untuk response WordPress */
interface WPPost {
  id: number;
  slug: string; // ✅ WAJIB
  date: string;
  link: string;

  title: {
    rendered: string;
  };

  content?: {
    rendered: string;
  };

  excerpt?: {
    rendered: string;
  };

  _embedded?: {
    author?: {
      name: string;
    }[];
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
}

const BASE_URL =
  "https://article.lightermediagroup.com/wp-json/wp/v2";

/* 🔹 Mapper biar clean */
function mapPost(post: WPPost): Post {
  return {
    id: post.id,
    slug: post.slug, // ✅ FIX

    title: post.title.rendered,

    content: post.content?.rendered || "", // ✅ FIX
    excerpt: post.excerpt?.rendered || "",

    url: `/artikel/${post.slug}`, // ✅ biar konsisten routing

    date: new Date(post.date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
    }),

    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/fallback.jpg",

    author: post._embedded?.author?.[0]?.name || "Unknown", // ✅ FIX
  };
}

/* 🔹 Fetch function */
export async function fetchPosts(page: number = 1): Promise<Post[]> {
  const res = await fetch(
    `${BASE_URL}/posts?_embed&per_page=10&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: WPPost[] = await res.json(); // ✅ FIX DI SINI

  return data.map(mapPost); // ✅ clean & type-safe
}