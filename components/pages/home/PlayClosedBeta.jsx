import { gameDownloadOptions, gameTags } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
import Tags from "./Tags";

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
            href={"https://store.hyperplay.xyz/game/katanainu"}
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
        <div className="flex flex-col md:flex-row gap-5 items-center mt-4">
          <div className="flex flex-col items-center md:items-start gap-1 flex-1">
            <div className="flex items-center gap-5">
              <Image
                src="/assets/images/key.png"
                alt="game access key"
                width={32}
                height={32}
              />
              <h2 className="font-jost text-white/70 text-[22px] w-full py-5 px-3 md:w-[65%]">
                Don’t have{" "}
                <span className="text-[#f9c306]">an access key?</span> Sign up
                to our newsletter & join our Discord to stay updated on
                opportunities to win one!
              </h2>
            </div>
            {/* discord btn */}
            <Link
              href="https://discord.com/invite/katanainu"
              className="flex justify-center items-center gap-3 font-jost font-semibold text-white p-4 w-full lg:w-[80%] bg-[#808aff] rounded-lg mt-1 mb-2"
            >
              Win A Key By Joining Our Discord
              <FaDiscord color="#fff" size={32} />
            </Link>
            {/* access key with options */}
            <div className="flex flex-col gap-1 font-jost w-full">
              <p className="text-sm sm:text-base md:text-lg text-white/70 w-full lg:w-[80%]">
                You can access our closed beta without an access key if you:
              </p>

              {/* 1st key options */}
              <div className="access-key-options-1 relative w-full lg:w-[80%]">
                <Link href={"#"} target="_blank" rel="noreffrer">
                  <h3 className="font-jost italic text-base sm:text-lg text-white font-semibold uppercase">
                    Hold <span className="text-[#f9c306]">30K</span> $KATA
                    TOKENS
                  </h3>
                </Link>
              </div>

              {/* divider image */}
              <div className="w-full lg:w-[80%] flex justify-center items-center">
                <Image
                  src="/assets/images/devider.png"
                  alt="divider"
                  width={270}
                  height={18}
                />
              </div>

              {/* 2nd key options */}
              <div className="access-key-options-2 relative w-full lg:w-[80%]">
                <Link
                  href={"https://opensea.io/collection/katanainu-takeru"}
                  target="_blank"
                  rel="noreffrer"
                >
                  <h3 className="font-jost italic text-base sm:text-lg text-white font-semibold uppercase pr-[42%]">
                    Hold{" "}
                    <span className="text-[#f9c306]">
                      1 Takeru Genesis Collection NFT
                    </span>
                  </h3>
                </Link>
              </div>

              {/* divider image */}
              <div className="w-full lg:w-[80%] flex justify-center items-center">
                <Image
                  src="/assets/images/devider.png"
                  alt="divider"
                  width={270}
                  height={18}
                />
              </div>

              {/* 3rd key options */}
              <div className="access-key-options-3 relative w-full lg:w-[80%]">
                <Link
                  href={"https://hub.gamezone.io/projects/kata-inu"}
                  target="_blank"
                  rel="noreffrer"
                >
                  <h3 className="font-jost italic text-base sm:text-lg text-white font-semibold uppercase pr-[25%] hover:text-[#f9c306] transition-all duration-300 ease-in-out">
                    Hold one of the below combinations for the{" "}
                    <span className="text-[#f9c306]">
                      GameZone Sword or Bluezilla Axe NFT&apos;s:
                    </span>
                  </h3>
                </Link>
              </div>

              {/* tags */}
              <Tags />
            </div>
          </div>

          {/* images and videos */}
          <div className="text-white flex-1">
            <div className="relative z-[1] access-key-video-container flex justify-center items-center">
              <Image
                src="/assets/images/download_img.png"
                alt="background image with bunch of nfts game characters"
                width={562}
                height={738}
              />

              <div className="absolute top-[35%] left-[1%] h-[290px] sm:h-[405px] w-[99%]">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2haLfdquhHk?si=SCeN_9zCBMJZyENE&autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayClosedBeta;
