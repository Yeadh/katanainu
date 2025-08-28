"use client";

import BlogsSkeletonLoader from "@/components/shared/CarouselSkeleton";
import { blogPageData } from "@/data";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { blogsData, loading } = useGetAllBlogs();

  useEffect(() => {
    // Combine static blogPageData with dynamic blogsData
    const mergedBlogs = [...blogsData, ...blogPageData];
    setBlogs(mergedBlogs.slice(0, 3));
  }, [blogsData]);

  if (loading) {
    return <BlogsSkeletonLoader />;
  }

  return (
    <section className="relative mb-32 xl:mb-44 lg:pt-8">
      <div className="main-container text-white flex flex-col gap-16 lg:gap-24">
        {/* heading */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
              Katana inu
            </h5>
            <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-white font-jost font-bold">
              news
            </h2>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-center mx-10 sm:mx-0">
            Stay tuned to the latest updates by reading our blog!
          </p>
        </div>

        {/* blogs content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gapa-8 lg:gap-10 items-stretch">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2a2a2a] hover:border-[#f5a238] transition duration-700 ease-in overflow-hidden pb-3 max-w-[450px] mx-auto"
            >
              <Link href={blog.link || `/blogs/${blog._id}`}>
                <Image
                  src={blog.imgUrl || blog.imageUrl}
                  alt="blogs image"
                  width={408}
                  height={270}
                  className="w-full object-cover md:object-fill h-[270px] md:h-[220px] lg:h-[270px] xl:h-[230px] 2xl:h-[270px] rounded-xl hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </Link>

              {/* heading & description */}
              <div className="flex flex-col items-center">
                <h2 className="mt-2 mb-4 font-jost text-xl lg:text-2xl font-semibold text-center px-2 hover:text-[#f5a238] transition duration-500 ease-in-out">
                  <Link href={blog.link || `/blogs/${blog._id}`}>
                    {blog.heading || blog.title}
                  </Link>
                </h2>
                <p className="px-3 text-center pb-4 text-sm md:text-base">
                  {blog.description.slice(0, 350)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
