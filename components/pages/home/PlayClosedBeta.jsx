import GameCards from "@/components/pages/home/Gamecard";
import { gameDownloadOptions } from "@/data";
import Image from "next/image";
import Link from "next/link";

const PlayClosedBeta = () => {
  return (
    <section className="main-container section-margin">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]  text-gradient font-semibold uppercase font-jost">
          Play Our
        </h4>
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-white font-bold uppercase font-jost">
          closed beta now!
        </h4>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium font-jost text-center">
          Download Now If You Have An Access Key:
        </h2>

        {/* download options */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:gap-x-4 mt-1 mb-6">
          {gameDownloadOptions.map((opt, i) => (
            <Link
              key={i}
              href={opt.url}
              className={`${
                opt.label &&
                "border-[1.5px] rounded text-white hover:text-[#f5a238] transition-colors duration-500 ease-in-out capitalize px-4 py-5 sm:px-3 sm:py-4 md:px-5 lg:py-6 text-nowrap w-[246px] md:w-auto text-center font-bold"
              }`}
            >
              {opt?.imgPath ? (
                <Image src={opt.imgPath} alt="" width={246} height={73} />
              ) : (
                "Download directly"
              )}
            </Link>
          ))}
          <Link
            href={"https://download.katanainu.com/Katanainu-launcher.exe"}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Image
              src={"/assets/images/hyperPlay.jpg"}
              alt=""
              width={246}
              height={73}
              className="sm:w-[160px] md:w-[180px] lg:h-[75px] lg:w-[200px] object-cover sm:object-contain rounded-lg"
            />
          </Link>
        </div>

        {/* pvp */}
        {/* devider */}
        <div className="hidden sm:block">
          <svg
            width="620"
            height="1"
            viewBox="0 0 620 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="620"
              height="1"
              fill="url(#paint0_linear_460_173)"
              fillOpacity="0.3"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_460_173"
                x1="0"
                y1="1.00813"
                x2="620"
                y2="1.00813"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7C7C7"></stop>
                <stop offset="0.520833" stopColor="#C7C7C7"></stop>
                <stop offset="1" stopColor="#C7C7C7" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-row gap-3 my-4">
          <span className="rounded-[18px] border border-[#f5a238] py-2 px-4 font-bold font-jost text-[#f9c306] text-xl md:text-2xl italic">
            1vs1
          </span>
          <span className="rounded-[18px] border border-[#f5a238] py-2 px-4 font-bold font-jost text-[#f9c306] text-xl md:text-2xl italic">
            3vs3
          </span>
        </div>
        <div className="hidden sm:block">
          <svg
            width="620"
            height="1"
            viewBox="0 0 620 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="620"
              height="1"
              fill="url(#paint0_linear_460_173)"
              fillOpacity="0.3"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_460_173"
                x1="0"
                y1="1.00813"
                x2="620"
                y2="1.00813"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7C7C7"></stop>
                <stop offset="0.520833" stopColor="#C7C7C7"></stop>
                <stop offset="1" stopColor="#C7C7C7" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* access key and other data */}
        <GameCards />
      </div>
    </section>
  );
};

export default PlayClosedBeta;
