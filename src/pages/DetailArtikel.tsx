import { useParams, Link } from "react-router-dom";
import { Post } from "@/components/types/post";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/Footer";
import Partnership from "@/components/Partnership";
import Sidebar from "@/components/artikel/Sidebar";
import { useLoading } from "@/components/context/Loading";
import { useQueryClient } from "@tanstack/react-query";
import { fetchPosts } from "@/components/services/wordpress";
import { useNavigate } from "react-router-dom";
import "@/components/services/wp.css";

interface Props {
  posts: Post[];
}

export default function DetailArtikel({ posts }: Props) {
  const { slug } = useParams();
  const { setLoading } = useLoading();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const article = posts.find((p) => p.slug === slug);

  const relatedPosts: Post[] = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  function injectRecommendations(content: string, posts: Post[]): string {
    const parts = content.split("</p>");
    let result = "";
    let recIndex = 0;

    parts.forEach((part, index) => {
      if (!part.trim()) return;

      result += part + "</p>";

      if ((index + 1) % 3 === 0 && posts[recIndex]) {
        const post = posts[recIndex];

        result += `
          <div class="my-10 p-4 border border-gray-800 bg-[#111] cursor-pointer recommended-item"
               data-url="/artikel/${post.slug}">
            <div style="display:flex;gap:12px;align-items:center;">
              <img src="${post.image}" style="width:100px;height:70px;object-fit:cover;" />
              <div>
                <span style="font-size:10px;color:#888;text-transform:uppercase;">Recommended</span>
                <h4 style="font-weight:bold;color:white;">${post.title}</h4>
              </div>
            </div>
          </div>
        `;

        recIndex++;
      }
    });

    return result;
  }

  const handleClick = async (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setLoading(true);

    try {
      await queryClient.prefetchQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
      });

      setTimeout(() => {
        navigate(url);
      }, 200);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const card = target.closest(".recommended-item");

    if (!(card instanceof HTMLElement)) return;

    const url = card.dataset.url;
    if (!url) return;

    handleClick(e, url);
  };

  const formattedDate = new Date(article.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function transformContent(content: string): string {
    return content.replace(
      /<p>\s*<strong>(.*?)<\/strong>\s*<\/p>/g,
      (_, text: string) => {
        const cleanText = text.trim();

        if (cleanText.length > 30) {
          return `
            <h2 class="mt-14 mb-6 text-3xl md:text-5xl font-black text-white italic tracking-tight leading-tight">
              ${cleanText}
            </h2>
          `;
        }

        return `
          <p class="mt-10 mb-4 text-xl font-bold text-white">
            ${cleanText}
          </p>
        `;
      }
    );
  }

  let contentProcessed = article.content;
  contentProcessed = transformContent(contentProcessed);
  contentProcessed = injectRecommendations(contentProcessed, relatedPosts);

  if (!article) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  const words = (article.title || "")
    .replace(/<[^>]*>/g, "") // hapus HTML WP
    .trim()
    .split(/\s+/);

  const shortTitle =
    words.length > 4
      ? words.slice(0, 4).join(" ") + "..."
      : words.join(" ");

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white font-[Arial,Helvetica,sans-serif]">

        <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">

          <main className="pt-10 pb-20">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* MAIN */}
              <div className="lg:col-span-8 max-w-[1300px] mx-auto px-4 mt-[8%]">

                {/* BREADCRUMB */}
                <nav className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 mb-8">
                  <Link to="/" className="hover:text-red-500">
                    Home
                  </Link>
                  <span>/</span>
                  <Link to="/artikel" className="hover:text-red-500">
                    Article
                  </Link>
                  <span>/</span>
                  <span>{shortTitle}</span>
                </nav>

                <article>

                  {/* TITLE */}
                  <header className="mb-10">

                    <h1
                      className="text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8"
                      dangerouslySetInnerHTML={{ __html: article.title }}
                    />

                    {/* AUTHOR */}
                    <div className="flex items-center justify-between border-y border-gray-800 py-8">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 bg-white text-black flex items-center justify-center font-black uppercase rounded-full">
                          {article.author?.charAt(0)}
                        </div>

                        <div>
                          <span className="text-red-500 text-[12px] font-black uppercase">
                            By {article.author}
                          </span>
                          <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                            {formattedDate}
                          </div>
                        </div>

                      </div>

                    </div>
                  </header>

                  {/* IMAGE */}
                  <figure className="mb-12">
                    <div className="border border-gray-800 overflow-hidden shadow-2xl">
                      <img
                        src={article.image}
                        className="w-full object-cover opacity-90"
                      />
                    </div>
                  </figure>

                  {/* CONTENT */}
                  <div
                    className="prose prose-invert max-w-none text-[19px] leading-[1.8]"
                    onClick={handleContentClick}
                    dangerouslySetInnerHTML={{ __html: contentProcessed }}
                  />

                </article>

              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4">

                <div className="sticky top-28 space-y-12">

                  {/* TRENDING */}
                  <div className="bg-black border-t-4 border-black p-8">

                    <h3 className="font-black mb-8 uppercase text-sm flex justify-between">
                      Trending Now
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    </h3>

                    <div className="flex flex-col gap-8">

                      {relatedPosts.map((item, i) => (
                        <Link
                          key={item.id}
                          to={`/artikel/${item.slug}`}
                          className="flex gap-4 border-b border-gray-800 pb-6 group"
                        >
                          <span className="text-4xl font-black text-gray-700 group-hover:text-red-500">
                            0{i + 1}
                          </span>
                          <h4 className="text-sm font-bold uppercase group-hover:text-red-500">
                            {item.title}
                          </h4>
                        </Link>
                      ))}

                    </div>

                  </div>

                  <Sidebar />

                </div>

              </aside>

            </div>

          </main>

        </div>

      </div>

      <Footer />
    </>
  );
}