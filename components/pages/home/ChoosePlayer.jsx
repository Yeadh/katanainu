"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { EffectCoverflow, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { chooseHero } from "@/data";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";

SwiperCore.use([Navigation]);

const ChoosePlayer = () => {
  const [ytVideoUrl, setYtVideoUrl] = useState(null);

  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [carouselSpace, setCarouselSpace] = useState(
    typeof window !== "undefined" &&
      (window.innerWidth < 640
        ? 10
        : window.innerWidth < 768
        ? 20
        : window.innerWidth < 1024
        ? 30
        : 40)
  );

  const [slidePerView, setSlidePerView] = useState(
    typeof window !== "undefined" &&
      (window.innerWidth < 640 ? 1 : window.innerWidth < 1280 ? 3 : 5)
  );

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  useEffect(() => {
    const carouselSettingsOnWindowWidth = () => {
      setCarouselSpace(
        window.innerWidth < 640
          ? 10
          : window.innerWidth < 768
          ? 20
          : window.innerWidth < 1024
          ? 30
          : 40 // Adjust spacing for 5 slides
      );
      setSlidePerView(
        window.innerWidth < 640 ? 1 : window.innerWidth < 1280 ? 3 : 5 // Ensure 5 slides are visible on bigger screens
      );
    };

    window.addEventListener("resize", carouselSettingsOnWindowWidth);

    return () => {
      window.removeEventListener("resize", carouselSettingsOnWindowWidth);
    };
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }

  return (
    <>
      <section className=" section-margin">
        <div className="flex flex-col sm:gap-3 justify-center items-center">
          <h5 className="uppercase text-gradient tracking-[2px] text-base sm:text-2xl md:text-3xl font-jost font-bold">
            Ready to play?
          </h5>
          <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] text-white font-jost font-bold uppercase">
            Choose your warrior
          </h2>
        </div>

        {/* carousel */}
        <div className="relative flex items-center max-page-screen">
          {/* <span className="absolute left-0 flex justify-center items-center cursor-pointer chooseHero-prev z-[1]">
            <IoIosArrowBack color="#fff" size={42} />
          </span> */}
          <div className="w-full text-white p-6 2xl:pt-10">
            <Swiper
              modules={[Navigation]}
              centeredSlides={true}
              loop="true"
              navigation
              slidesPerView={slidePerView}
              spaceBetween={carouselSpace}
              className="player-swiper"
            >
              {chooseHero.map((hero, i) => (
                <SwiperSlide
                  key={i}
                  className="min-h-[420px] sm:min-h-[320px] md:min-h-[370px] lg:min-h-[430px] xl:min-h-[450px] 2xl:min-h-[600px] !flex items-center justify-center"
                >
                  <Modal>
                    <ModalTrigger asChild>
                      <div
                        onClick={() => {
                          setYtVideoUrl(hero?.videoLink);
                        }}
                        className="flex flex-col gap-1 cursor-pointer"
                      >
                        <Image
                          src={hero.heroImgUrl}
                          alt="game play character"
                          width={400}
                          height={500}
                          className="aspect-[150/187] 2xl:aspect-[230/187] object-contain max-h-[300px] max-w-[250px] sm:max-w-full sm:max-h-[220px] md:max-h-[250px] lg:w-[800px] lg:max-h-[300px] 2xl:min-h-[400px]"
                        />
                        <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl italic font-bold text-center pb-2">
                          {hero.heroName}
                        </p>
                      </div>
                    </ModalTrigger>
                    <ModalContent>{ytVideoUrl}</ModalContent>
                  </Modal>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <span className="absolute right-0 flex justify-center items-center cursor-pointer chooseHero-next z-[1]">
            <IoIosArrowForward color="#fff" size={42} />
          </span> */}
        </div>

        <h3 className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-jost font-bold text-center -mt-5 sm:-mt-6 md:-mt-5 lg:-mt-5 xl:-mt-7 2xl:mt-0">
          Click the Character to watch the{" "}
          <span className="text-gradient">Intro video</span>
        </h3>
      </section>
    </>
  );
};

export default ChoosePlayer;
