//import Bannner from "@/components/pages/home/Bannner";
import Brand from "@/components/pages/home/Brand";
import BrandLogo from "@/components/pages/home/BrandLogo";
import ChoosePlayer from "@/components/pages/home/ChoosePlayer";
//import GameCards from "@/components/pages/home/Gamecard";
import Newsletter from "@/components/pages/home/Newsletter";
import PlayClosedBeta from "@/components/pages/home/PlayClosedBeta";
import Requirements from "@/components/pages/home/Requirements";
//import TokenOverview from "@/components/pages/home/TokenOverview";
import WhereToBuyToken from "@/components/pages/home/WhereToBuyToken";
//import WinBySharing from "@/components/pages/home/WinBySharing";
import HeroHeader from "@/components/pages/home/HeroHeader";
import FAQPage from "@/components/pages/home/HomeFaq";
import Promoters from "@/components/pages/home/Promoters";
import Web2Web3Section from "@/components/pages/home/Web2Web3Section";
import Register from "@/components/Register";
export default function Home() {
  return (
    <main className="">
      <HeroHeader />
      {/* <WinBySharing /> */}

      <div className="bg-[url('/assets/images/background.jpg')] bg-[0%_25%] bg-cover z-[1]  relative brand_container">
        <Brand />
      </div>
      {/* <BabyDogeImage /> */}
      <div className="bg-[url('/assets/images/background.jpg')] bg-[50%_25%] bg-cover z-[1]  relative brand_container">
        {/* <Blogs /> */}

        <PlayClosedBeta />
        <Web2Web3Section />
        <FAQPage />
        {/* <Trailers /> */}
        <Register />
        <ChoosePlayer />

        <Requirements />
        <Promoters />
        <WhereToBuyToken />
        <div className="w-full bg-black">
          <Newsletter />
        </div>
        <BrandLogo />
      </div>
    </main>
  );
}
