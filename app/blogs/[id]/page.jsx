"use client";

import Loader from "@/components/shared/Loader";
import useGetSingleBlogs from "@/hooks/useGetSingleBlogs";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SingleBlogPage() {
  const { id } = useParams();
  const { blogData, loading } = useGetSingleBlogs(id);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container blog-section">
        {/*  */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <Image
            src={blogData.imageUrl}
            alt="build walk through"
            width={1920}
            height={284}
          />
          <div className="flex flex-col gap-3">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
              {blogData.title}
            </h2>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              {blogData.Date}
            </p>
            <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
              {blogData.category}
            </p>
            <span>
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[28px] font-jost font-semibold">
                {blogData.greetings}
              </h3>
              {blogData.description && (
                <p className="text-[#787878] text-xs sm:text-sm md:text-base mt-3">
                  {blogData.description}
                </p>
              )}
            </span>
            <div
              className="blogContent"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
