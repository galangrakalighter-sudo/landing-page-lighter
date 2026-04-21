import { Post } from "@/components/types/post";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <a href={post.url} className="group block">
      <img
        src={post.image}
        className="w-full h-40 object-cover mb-2"
      />

      <h3
        className="font-bold group-hover:text-red-500"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
    </a>
  );
}