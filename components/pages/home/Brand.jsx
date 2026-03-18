import { Button } from "@/components/ui/button";
import { aboutKatanaInu, aboutKatanaInuWeb3Integration } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCircleArrowRight, FaDiscord, FaXTwitter } from "react-icons/fa6";

const Brand = () => {
  return (
    <div className="text-white">
      <section className=" flex flex-col gap-5 sm:gap-7 lg:flex-row  main-container">
        <div className="relative w-full min-h-[373px] sm:min-h-[641px] flex-1">
          <Image
            src={"/assets/images/aboutImg.webp"}
            alt="dog nft with sowrd"
            fill
            className="object-cover"
          />
        </div>

        {/* texts */}
        <div className="flex-1 py-10">
          <h2 className="text-lg md:text-xl xl:text-2xl text-[#f5a238] pb-4 sm:pb-6">
            Katana Inu Web3 & Web2
          </h2>

          <h2 className="text-lg md:text-xl xl:text-2xl text-[#f5a238] pt-4 sm:pt-6">
            Steam & Web2:
          </h2>
          <ul className="ml-0">
            {aboutKatanaInu.map((li, i) => (
              <li
                key={i}
                className="flex items-start gap-2 py-3 font-medium text-[#e7e7e7] list-none"
              >
                <span className="w-4">
                  <FaCircleArrowRight
                    color="#f5a238"
                    size={16}
                    className="inline-flex"
                  />
                </span>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-lg md:text-xl xl:text-2xl text-[#f5a238] pt-4 sm:pt-6">
            Web3 Integration:
          </h2>
          <ul className="ml-0">
            {aboutKatanaInuWeb3Integration.map((li, i) => (
              <li
                key={i}
                className="flex items-start gap-2 py-3 font-medium text-[#e7e7e7] list-none"
              >
                <span className="w-4">
                  <FaCircleArrowRight
                    color="#f5a238"
                    size={16}
                    className="inline-flex"
                  />
                </span>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>
          {/* btn */}
          <div className="flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-3 pt-2 2xl:pt-4 mx-1">
            <Link
              href={"https://twitter.com/katanainu"}
              target="_blank"
              rel="norefferer"
            >
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase flex items-center gap-1.5 lg:gap-2"
              >
                <FaXTwitter />
                follow us on x
              </Button>
            </Link>
            <Link href={"https://discord.com/invite/katanainu"}>
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase flex items-center gap-1.5 lg:gap-2"
              >
                <FaDiscord />
                Join our discord
              </Button>
            </Link>
            <Link
              href={"https://t.me/katanainu"}
              target="_blank"
              rel="norefferer"
            >
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase flex items-center gap-1.5 lg:gap-2"
              >
                <FaTelegramPlane />
                JOIN OUR TELEGRAM
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
