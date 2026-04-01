"use client";
import AboutKatana from "@/components/pages/home/AboutKatana";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
const videoVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.6 } },
};

const extraVideos = [
  {
    videoLink: "Vj4eSet_2nA",
    poster: "/assets/images/media/media-1.webp",
    name: "battle-royale",
  },
  {
    videoLink: "r4twzrSomH8",
    poster: "/assets/images/footage-poster/gameplay-footage-2.webp",
    name: "gameplay-footage-2",
  },
  // {
  //   videoLink: "kEmfOSiqX1g",
  //   poster: "/assets/images/footage-poster/new-map.webp",
  //   name: "new-map",
  // },
  // {
  //   videoLink: "7aqQbZ8Kv7I",
  //   poster: "/assets/images/footage-poster/gameplay-footage.webp",
  //   name: "gameplay-footage",
  // },
];

const Brand = () => {
  const [videos, setVideos] = useState("Vj4eSet_2nA");
  const features = [
    "Distinct visual style",
    "High-quality AAA graphics",
    "Skill-based gameplay",
    "Community-driven competition",
    "No Pay2Win — only Fun2Play",
  ];
  return (
    <div className="text-white">
      <section className=" flex flex-col gap-5 sm:gap-7 lg:flex-row  main-container">
        <div className="relative w-full min-h-[373px] sm:min-h-[641px] flex-1 mt-[70px]">
          {/* <Image
            src={"/assets/images/aboutImg.webp"}
            alt="dog nft with sowrd"
            fill
            className="object-cover"
          /> */}

          <motion.div
            className="relative w-full pt-12 flex-1 mt-8 sm:mt-10 md:mt-12 lg:mt-10 xl:mt-0 flex flex-col gap-5"
            variants={videoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div
              className="relative w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos}?autoplay=1&mute=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* more videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center sm:justify-start gap-2.5 md:gap-3 xl:gap-4">
              {extraVideos?.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => setVideos(video?.videoLink)}
                  className="relative flex items-center justify-center isolate cursor-pointer"
                >
                  {/* paly button */}
                  <button className="absolute z-10">
                    {video?.videoLink === videos ? (
                      <FaPause className="2xl:w-5 2xl:h-5 border p-1 rounded-full" />
                    ) : (
                      <FaPlay className="2xl:w-5 2xl:h-5 border p-1 rounded-full bg-white text-black" />
                    )}
                  </button>
                  {/* poster */}
                  <Image
                    src={video?.poster}
                    alt={video?.name}
                    width={350}
                    height={350}
                    className="opacity-80 sm:w-full"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* texts */}
        <div className="flex-1 py-10">
          <AboutKatana />
        </div>
      </section>
    </div>
  );
};

export default Brand;
