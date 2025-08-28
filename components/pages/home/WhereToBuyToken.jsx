"use client";

import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import { kataTokenStorePartner } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const tokenStore = [
  {
    place: "uniswap",
    code: "0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15",
    src: "/assets/images/kataToken/uniswap.png",
  },
  {
    place: "Base",
    code: "0x02454a97A8372f3A760A033DBb39E67D73BD6d87",
    src: "/assets/images/logo/base.png",
    link: "https://app.uniswap.org/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet",
  },
  {
    place: "pancake swap",
    code: "0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205",
    src: "/assets/images/kataToken/pancake-2.svg",
  },
];

const WhereToBuyToken = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
  };
  return (
    <section className="main-container mt-14 md:mt-20 lg:mt-20 xl:mt-28 2xl:mt-32 mb-8 sm:mb-10 md:mb-12 xl:mb-14 2xl:mb-20">
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
        <h3 className="uppercase text-gradient font-bold tracking-[2px] text-xl sm:text-2xl md:text-3xl font-jost text-center">
          Where Can I Buy $KATA Tokens?
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium text-center max-w-[960px]">
          Pancake Swap and Uniswap are the easiest outlets for purchasing $KATA
          Token. Copy and Paste the correct contract depending on the chain into
          PancakeSwap / Uniswap and chose the amount you want to buy and simply
          swap it for any other token you have. Be careful not to send funds to
          this address directly, as you will lose your tokens.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 sm:gap-6 md:gap-8">
        {tokenStore.map((store, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-center items-center sm:gap-6 md:gap-8 flex-1 border-[2px] border-[#202020] rounded-lg p-5 bg-black"
          >
            <div className="flex flex-row md:flex-col xl:flex-row items-center gap-4 md:gap-3 lg:gap-4 2xl:gap-8">
              {/* pan cake logo */}
              {/* <Link href={"/"}> */}
              <Image
                src={store.src}
                alt=""
                width={130}
                height={100}
                className={` ${
                  i === 1
                    ? "w-14 h-12 sm:h-16 sm:w-20 md:h-12 md:w-16 lg:w-20 lg:h-16 xl:w-20 object-contain"
                    : "h-12 sm:h-16 md:h-11 lg:h-16 object-contain"
                }`}
              />
              {/* </Link> */}
              {/* button */}
              <Link href={store.link || "/"} target="_blank" rel="noreferer">
                <Button
                  variant="customAnimated"
                  className=" sm:px-10 sm:py-8 md:py-5 md:px-7 lg:py-8 lg:px-10 font-grind text-base md:text-base lg:text-xl"
                >
                  {store.place}
                </Button>
              </Link>
            </div>
            {store.code && (
              <p
                onClick={() => copyCode(store.code, i)}
                className="text-wrap text-white break-all text-center cursor-pointer"
              >
                {store.code}
                <FaCopy color="#fff" size={20} className="inline ml-2 mr-3" />
                <span className="inline">{copiedIndex === i && "Copied"}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="overflow-hidden">
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center ml-0">
          {kataTokenStorePartner.map((store, i) => (
            <li key={i} className="mx-auto sm:mx-4 my-2 list-none">
              <Link href={store.link} target="_blank" rel="norefferer">
                <Image
                  src={store.imgUrl}
                  alt={store.storeName}
                  width={154}
                  height={51}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhereToBuyToken;
