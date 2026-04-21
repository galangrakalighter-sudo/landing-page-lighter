import { Post } from "../types/post";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { fetchPosts } from "@/components/services/wordpress";
import { useLoading } from "@/components/context/Loading";


interface Props {
  posts: Post[];
}

export default function HeroSection({ posts }: Props) {
  const { setLoading } = useLoading();
  const hero = posts[0];
  const trending = posts.slice(1, 6);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = async (e: React.MouseEvent, url: string) => {
    e.preventDefault();

    setLoading(true); // 🔥 START loading bar

    try {
        await queryClient.prefetchQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
        });

        // kasih delay kecil supaya animasi terlihat (opsional tapi bagus)
        setTimeout(() => {
        navigate(url);
        }, 200);
    } finally {
        // matikan loading setelah navigasi
        setTimeout(() => {
        setLoading(false);
        }, 500);
    }
    };

  if (!hero) return null;

  return (
    <>
    <header className="mb-10 border-l-[8px] border-[#c72727] pl-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-2 font-[Arial,Helvetica,sans-serif]">
              LIGHTER <span className="text-[#c72727]">ACADEMY</span>
            </h1>
            <p className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.5em] font-[Arial,Helvetica,sans-serif]">
              Integrated Digital Media Ecosystem
            </p>
          </header>
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

      {/* HERO */}
      <div className="lg:col-span-8">
        <a
          onClick={(e) => handleClick(e, hero.url)}
          className="block relative aspect-video bg-black overflow-hidden group cursor-pointer"
        >
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute bottom-0 left-0 p-6 md:p-10 bg-gradient-to-t from-black to-transparent w-full">
            <h2
              className="text-white text-xl md:text-3xl font-black italic leading-tight mb-2 transition-colors duration-300 group-hover:text-red-500 font-[Arial,Helvetica,sans-serif]"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
            <p className="text-gray-300 text-xs uppercase tracking-widest font-bold">
              Read Story →
            </p>
          </div>
        </a>
      </div>

      {/* TRENDING */}
      <aside className="lg:col-span-4">
        <div className="bg-black border-t-4 border-black shadow-lg p-5 h-full">
          <h3 className="font-black mb-5 pb-3 border-b text-xs uppercase italic flex justify-between">
            Trending Now
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </h3>

          <div className="flex flex-col gap-4">
            {trending.map((item, i) => (
              <a
                key={item.id}
                onClick={(e) => handleClick(e, item.url)}
                className="flex gap-3 group border-b pb-3 last:border-0 cursor-pointer"
              >
                <span className="text-2xl font-black text-gray-200 group-hover:text-red-500 italic">
                  0{i + 1}
                </span>

                <h4
                  className="text-xs font-bold uppercase leading-snug group-hover:text-red-500 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </a>
            ))}
          </div>
        </div>
      </aside>

    </section>
    </>
  );
}