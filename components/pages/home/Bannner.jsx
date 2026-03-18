import ArrowIcon from "@/components/shared/ArrowIcon";
import { Button } from "@/components/ui/button";
//import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
        <h2 className=" uppercase text-white font-medium font-poppins">
          1. Katana Inu is a fast paced action game built for players who love
          skill, speed and competition.
        </h2>

        <h2 className="medium:text-[13px] uppercase text-white font-medium font-poppins w-[71%]">
          2. Play Katana Inu your way. Available on Steam as a classic Web2
          game, with Web3 ecosystem features through the official Katana Inu
          launcher.
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
              Play on Steam
              <ArrowIcon />
            </Button>
          </Link>
          <Link
            href={"https://babydoge.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Launcher
              <ArrowIcon />
            </Button>
          </Link>
          <Link
            href={"https://babydoge.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Join Community
              <ArrowIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bannner;
