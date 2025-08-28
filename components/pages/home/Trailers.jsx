import Image from "next/image";
import TrailerCarouosel from "./TrailerCarouosel";

const Trailers = () => {
  return (
    <>
      <section className="main-container mb-4 lg:mb-6 xl:mb-7 2xl:mb-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-20">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
            Katana inu
          </h5>
          <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-white font-jost font-bold">
            MEDIA
          </h2>
        </div>
      </section>
      {/* Carousel */}
      <TrailerCarouosel />
    </>
  );
};

export default Trailers;
