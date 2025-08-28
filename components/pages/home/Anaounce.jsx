"use client";


const Anaouncement = () => {
  
  return (
    <section className="main-container md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3 mb-8 sm:mb-10 md:mb-12 xl:mb-14 2xl:mb-20">
      <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-2 mb-4 sm:mb-6 md:mb-8">
        <h3 className="uppercase text-gradient font-bold tracking-[2px] text-xl sm:text-2xl md:text-3xl font-jost text-center">
            Katana Inu Giveaway
        </h3>
        <span className="text-[#f9c306] mb-1 font-bold">Starting from 23.05.2025 2pm CET!</span>
        <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium text-center max-w-[960px]">
        <span className="text-[#f9c306] mb-1 font-bold">$25,000</span> in total rewards to our amazing community!

            Mark your calendar for Friday, May 23rd and get ready to enter!
        </p>
      </div>
    </section>
  );
};

export default Anaouncement;
