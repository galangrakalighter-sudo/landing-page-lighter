import { usePosts } from "@/components/hooks/usePorts";
import HeroSection from "@/components/artikel/HeroSection";
import LatestSection from "@/components/artikel/LatestSection";
import Sidebar from "@/components/artikel/Sidebar";
import Navbar from "@/components/home/Navbar";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Artikel() {
  const { posts, loading } = usePosts();

  return (
    <>
    <Navbar />

    <div className="max-w-[1300px] mx-auto px-4 mt-[8%]">
        <HeroSection posts={posts} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
            <LatestSection posts={posts} />
        </div>

        <div className="lg:col-span-4">
            <Sidebar />
        </div>
        </div>
    </div>
    <Partnership />
    <Footer />
    </>
  );
}