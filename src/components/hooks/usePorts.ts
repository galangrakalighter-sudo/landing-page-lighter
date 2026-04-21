import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/components/services/wordpress";
import { Post } from "@/components/types/post";

export function usePosts() {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  return {
    posts: data || [],
    loading: isLoading,
  };
}