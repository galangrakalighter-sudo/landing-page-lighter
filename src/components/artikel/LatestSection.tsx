import { Post } from "../types/post";
import { useNavigate } from "react-router-dom";
import { useLoading } from "@/components/context/Loading";

interface Props {
  posts: Post[];
}

export default function LatestSection({ posts }: Props) {
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();

    setLoading(true); // 🔥 start navbar loading

    requestAnimationFrame(() => {
      navigate(url);
    });

    // optional: stop loading setelah sedikit delay
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <section className="pb-16">

      {/* TITLE */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="bg-black text-white px-4 py-2 text-xs font-black uppercase tracking-widest italic">
          Latest Stories
        </h2>
        <div className="flex-grow h-[2px] bg-black opacity-10"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            onClick={(e) => handleClick(e, post.url)}
            className="group block cursor-pointer"
          >

            <div className="aspect-video bg-gray-100 mb-3 overflow-hidden border">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h4
              className="text-lg font-black italic leading-tight mb-2 group-hover:text-red-500 font-[Arial,Helvetica,sans-serif]"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
              <span>Read →</span>
              <span>{post.date}</span>
            </div>

          </a>
        ))}
      </div>

    </section>
  );
}