import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[url('/assets/images/team_bg.webp')] bg-cover pt-36 sm:pt-44 pb-0 md:pt-48 lg:pt-72 md:pb-20">
        <div className="main-container">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl">
              About
            </h5>
            <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
              KATANA INU IS AN ON-CHAIN MULTIPLAYER FREE TO PLAY & PLAY TO EARN
              GAME
            </h2>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col md:flex-row items-start">
            {/* 1st container */}
            <div className="flex flex-col flex-1 px-4 py-4 md:py-0">
              <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6 text-left">
                BEST MULTIPLAYER ON-CHAIN ACTION GAME WITH A P2E ECOSYSTEM
              </h3>
              <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                Katana Inu promotes gaming innovation by efficiently merging two
                revolutionary technologies — gaming and blockchain. As an
                all-encompassing ecosystem for gamers and traders, powered by
                DeFi and NFT, Katana Inu&apos;s objective is simple: to create a
                system where gamers can earn from their playtime. Over 1 billion
                PC gamers play traditional games for several hours daily without
                profiting from their grind. We hope to change this by developing
                a unique Play-to-Earn battle royale PC game with NFT mechanics.
                This approach is the central concept behind Katana Inu! The game
                comes with rare NFT skins and high graphics to lure players from
                the blockchain and NFT space and a portion of the 1 billion
                players of traditional PC games. Katana Inu has a native
                cross-chain NFT marketplace, which is open to Katana Inu
                players, regular art dealers, and gamers from other NFT
                projects.
              </p>
              <div className="flex justify-center items-center gap-2 flex-wrap my-4 md:my-2">
                <Link
                  href={"https://nft.katanainu.com/"}
                  target="_blank"
                  rel="noreferer"
                >
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    NFTs pages
                  </Button>
                </Link>
                <Link href={"#"}>
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    Buy Token
                  </Button>
                </Link>
                <Link
                  href={"https://staking.katanainu.com/"}
                  target="_blank"
                  rel="noreferer"
                >
                  <Button
                    variant="customAnimated"
                    className="w-[148px] py-3 px-4 md:w-[190px] h-[40px] font-semibold"
                  >
                    Staking Here
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2nd container */}
            <div className="flex-1 px-4 py-4 md:py-0">
              <video
                src="https://play.katanainu.com/static/media/bannerbg.c57434e55476e1e65854.mp4"
                autoPlay
                muted
                loop
                poster="/assets/images/thumbnail2.png"
                width={"100%"}
                height={"100%"}
                className="aspect-video"
              />
            </div>
          </div>
        </div>
        <div className="main-container mt-8 sm:mt-10 md:mt-12 xl:mt-14 2xl:mt-24">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl">
              the game
            </h5>
            <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
              Play to earn ecosystem
            </h2>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col md:flex-row items-start">
            {/* 1st container */}
            <div className="flex flex-col flex-1 px-4 py-4 md:py-0">
              <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6">
                Katana Inu Game
              </h3>
              <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                Katana Inu, a free-to-play fighting game, offers players the
                opportunity to earn exclusive NFTs and Katana Inu tokens as
                in-game rewards. These rewards can be acquired by winning
                tournaments against other players and teams, completing in-game
                quests, playing solo, or teaming up with others.
              </p>
            </div>

            {/* 2nd container */}
            <div className="flex-1 px-4 py-4 md:py-0">
              <div className="flex flex-col flex-1 md:px-4 py-4 md:py-0">
                <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6">
                  Game Modes
                </h3>
                <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                  Katana Inu&apos;s primary game mode will be Battle-Royale,
                  with a maximum of 60 players. In this mode, players can choose
                  to squad up or go solo against a team of other players in an
                  interactive open-world map. Katana Inu will also feature
                  different game modes in smaller map arenas, like 1v1 and 3v3.
                  While the Battle-Royale mode launched in Q3 2023, the
                  developers plan to introduce these more competitive game modes
                  in the future.
                </p>
                <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                  NFTs play a crucial role in Katana Inu. They serve as skins
                  and other important in-game assets, offering customization
                  options. These items are strictly for aesthetic purposes and
                  do not impact combat. Players can also earn many other
                  exciting collectibles, including weapons, abilities, spells,
                  poses, and skins, simply by playing the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
