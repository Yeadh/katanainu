"use client";

import { aboutKatanaInu } from "@/data";
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
  {
    videoLink: "kEmfOSiqX1g",
    poster: "/assets/images/footage-poster/new-map.webp",
    name: "new-map",
  },
  {
    videoLink: "7aqQbZ8Kv7I",
    poster: "/assets/images/footage-poster/gameplay-footage.webp",
    name: "gameplay-footage",
  },
];

const AboutVideo = () => {
  const [videos, setVideos] = useState("Vj4eSet_2nA");
  return (
    <div className="text-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 relative">
      {/* <div className="devider-container-bottom">
        <Divider className="from-transparent via-csPrimary to-transparent" />
      </div> */}

      <section className="flex flex-col gap-5 sm:gap-7 lg:flex-row items-center lg:items-start xl:items-start main-container">
        {/* Video Section */}
        <motion.div
          className="relative w-full h-fit flex-1 mt-8 sm:mt-10 md:mt-12 lg:mt-10 xl:mt-0 flex flex-col gap-5"
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

        {/* Text Section */}
        <motion.div
          className="flex-1"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-lg md:text-xl xl:text-2xl 2xl:text-5xl text-white pb-2 md:pb-3 lg:pb-4 xl:pb-5 2xl:pb-6 font-poppins font-extrabold uppercase"
            variants={textVariants}
          >
            About <span className="gradient-text">Katana Inu</span>
          </motion.h2>

          <motion.ul className="ml-0">
            {aboutKatanaInu.map((li, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3 font-medium text-[#e7e7e7] list-none"
                variants={textVariants}
              >
                <em>{li.text}</em>
              </motion.li>
            ))}
          </motion.ul>

          {/* Buttons Section */}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutVideo;
