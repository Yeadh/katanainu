"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa6";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { sliderImg } from "@/constant";

const TrailerCarouosel = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const [slidesPerView, setSlidesPerView] = useState(
    innerWidth > 1536 ? 3 : innerWidth < 1024 ? 1 : 3
  );
  const [slidesSpace, setSlideSpace] = useState(
    innerWidth > 1536 ? 10 : innerWidth < 1024 ? 0 : 0
  );

  const [playSvgSize, setPlaySvgSize] = useState(
    innerWidth > 1536 ? 32 : innerWidth < 768 ? 18 : 24
  );
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [ytVideoUrl, setYtVideoUrl] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      setInnerWidth(window.innerWidth);
      setSlidesPerView(innerWidth > 1536 ? 3 : innerWidth < 1024 ? 1 : 3);
      setSlideSpace(innerWidth > 1536 ? 10 : innerWidth < 1024 ? 0 : 0);
      setPlaySvgSize(innerWidth > 1536 ? 32 : innerWidth < 1024 ? 18 : 24);
    };

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [innerWidth]);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }

  return (
    <>
      <div className="flex items-stretch px-4 md:px-0 max-page-screen">
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          loop="true"
          navigation
          slidesPerView={slidesPerView}
          spaceBetween={slidesSpace}
          className="trailer-swiper 2xl:!mx-10"
        >
          {sliderImg.map((slider, i) => (
            <SwiperSlide key={i} className="!flex justify-center items-center">
              <div className="relative">
                <Image
                  src={slider.imgUrl}
                  alt="katana inu gameplay trailers"
                  width={1000}
                  height={431}
                  className="border border-[#f5a238] object-cover object-top sm:h-[300px] md:h-[320px] lg:h-[240px] xl:h-[320px] 2xl:h-[400px]"
                />
                <h4 className="font-jost text-xs sm:text-lg lg:text-base 2xl:text-xl uppercase text-white font-bold text-center pt-2 sm:pt-5">
                  {slider.footerLabel}
                </h4>

                <Modal>
                  <ModalTrigger asChild>
                    <span
                      className="absolute top-0 flex justify-center items-center w-full h-full"
                      onClick={() => {
                        setYtVideoUrl(slider.youtubeUrl);
                      }}
                    >
                      <span className="cursor-pointer p-4 lg:p-4 xl:p-5 2xl:p-8 bg-[#ffb42f] rounded-full flex justify-center items-center">
                        <FaPlay color="#000" size={playSvgSize} />
                      </span>
                    </span>
                  </ModalTrigger>
                  <ModalContent>{ytVideoUrl}</ModalContent>
                </Modal>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TrailerCarouosel;
