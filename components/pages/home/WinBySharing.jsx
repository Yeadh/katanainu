import Image from "next/image";
import Link from "next/link";

export default function WinBySharing() {
  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 bg-[url('/assets/images/win/win-bg.webp')] bg-no-repeat bg-cover relative bg-black isolate w-full overflow-hidden">
      {/* overlay */}
      <div className="bg-[url('/assets/images/win/win-overlay.webp')] bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full z-10" />
      {/* left character */}
      <div className="absolute bottom-0 lg:top-0 sm:left-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[260px] 2xl:w-[320px] h-full opacity-70 lg:opacity-100 top-20 -left-10 sm:top-8 md:-left-12 xl:left-0">
        <Image
          src={"/assets/images/win/left.webp"}
          alt="Solana character"
          width={700}
          height={700}
          className=" object-contain"
        />
      </div>
      {/* right character */}
      <div className="absolute bottom-0 lg:top-0 sm:right-0 h-full w-[200px] sm:w-[250px] md:w-[290px] lg:w-[360px] xl:w-[410px] 2xl:w-[460px] opacity-70 lg:opacity-100 top-20 -right-10 sm:top-8 md:-right-12 xl:right-0">
        <Image
          src={"/assets/images/win/right.webp"}
          alt="Solana character"
          width={700}
          height={700}
          className=" object-contain"
        />
      </div>

      {/* content */}
      <div className="flex items-center justify-center 2xl:max-w-[1000px] mx-auto relative z-40">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
          <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5">
            <h2 className="text-center text-white uppercase font-poppins font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.75em] 2xl:leading-[1.1]">
              Win <span className="text-[#FFC600]">$25,000</span> in Kata by{" "}
              <br /> share, like, comment the tweet{" "}
            </h2>
            <span className="text-[#f9c306] uppercase font-poppins text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Starting from 23.05.2025 2pm CET!</span>
            <p className="text-[#FFC600] uppercase font-poppins text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              For participate use one of these task
            </p>
          </div>
          {/* logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9">
            {logoData?.map((logo, idx) => (
              <Link
                href={logo?.link}
                key={idx}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo?.icon}
                  alt=""
                  width={200}
                  height={30}
                  className="w-12 h-2.5 sm:w-14 sm:h-3 md:w-16 md:h-4 lg:w-20 lg:h-5 xl:w-28 xl:h-6 2xl:w-32 2xl:h-7 object-contain"
                />
              </Link>
            ))}
          </div>
          {/* divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          {/* bottom text */}
          <p className="text-white font-poppins text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-[330px] sm:max-w-full">
            Add to increase your chance create a content{" "}
            <br className="hidden sm:block" /> of{" "}
            <span className="text-[#FFC600]">katana inu </span>
            game and upload on any{" "}
            <span className="text-[#FFC600]">social media</span>{" "}
            <br className="hidden sm:block" /> and share with us via DM or{" "}
            <span className="text-[#FFC600]">support@katanainu.com</span>
          </p>
            <span className="text-white">Note: $25,000 will be distributed into different trenches via social media and tasks</span>
            <span className="text-white">Participation in this giveaway constitutes acceptance of the <span className="text-[#FFC600]"><a target="_blank" href="https://docs.google.com/document/d/1cUPESAa5Z6RHhb32BeDZnuX9q_oyPzjBqzKSg48I8Xo/edit?tab=t.0">Terms and Conditions</a></span></span>
        </div>
      </div>
    </div>
  );
}

const logoData = [
  // {
  //   icon: "/assets/icons/win/win-b-1.svg",
  //   link: "#",
  // },
  // {
  //   icon: "/assets/icons/win/win-b-2.svg",
  //   link: "#",
  // },
  // {
  //   icon: "/assets/icons/win/win-b-3.svg",
  //   link: "#",
  // },
  {
    icon: "/assets/icons/win/win-b-6.svg",
    link: "https://taskon.xyz/quest/927740203",
  },
  // {
  //   icon: "/assets/icons/win/win-b-5.svg",
  //   link: "#",
  // },
];
