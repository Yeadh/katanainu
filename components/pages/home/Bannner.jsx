import ArrowIcon from "@/components/shared/ArrowIcon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { bannerButtonData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Bannner = () => {
  return (
    <section className="banner-section relative">
      <video
        src="https://play.katanainu.com/static/media/bannerbg.c57434e55476e1e65854.mp4"
        autoPlay
        muted
        loop
        poster="/assets/images/thumbnail2.png"
        width={"100%"}
        height={"100%"}
        className="w-full h-svh md:h-screen 2xl:h-[868px] object-cover max-video-height"
      />
      {/* overlay/backdrop/shadow */}
      <div className=" bg-gradient-to-b from-black/10 to-black/20 absolute w-full h-full z-10 top-0 left-0" />

      {/* inner content */}
      <div className="absolute top-[35%] left-0 w-full flex flex-col justify-center items-center gap-5 sm:gap-7 z-20 px-10 text-center">
        <h1 className="text-2xl sm:text-[40px]">
          <Image
            src="/assets/images/title2.png"
            alt=""
            width={"496"}
            height={"59"}
            priority={true}
            className="lg:w-[741px] lg:h-[88px]"
          />
        </h1>
        <h2 className="text-lg lg:text-[28px] uppercase text-white font-medium font-poppins">
          Multiplayer on-chain action game
        </h2>

        {/* btn */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 pt-2">
          <Link
            href={"https://babydoge.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Mint NFTs
              <ArrowIcon />
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="customAnimated"
                className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
                key={2}
              >
                Purchase Token
                <ArrowIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0c0b0bc4] border-transparent flex flex-col gap-2 md:gap-3 xl:gap-3.5 p-8 lg:p-12">
              {/* <Button variant="customAnimated" className="w-full py-4" key={1}>
                Mahedi
              </Button> */}
              {bannerButtonData.map((data, i) => (
                <Link href={data.link} target="_blank" rel="norefferer" key={i}>
                  <Button
                    variant="customAnimated"
                    className="w-full py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-[22px] text-xs lg:text-sm sm:text-base"
                    key={i}
                  >
                    {data.label}
                  </Button>
                </Link>
              ))}
            </DialogContent>
          </Dialog>

          <Link
            href={"https://play.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Play
              <ArrowIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bannner;
