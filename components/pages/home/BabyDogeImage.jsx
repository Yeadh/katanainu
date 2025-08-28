import Image from "next/image";
import Link from "next/link";
import React from "react";

const BabyDogeImage = () => {
  return (
    <div>
      <Link
        href={"https://babydoge.katanainu.com/"}
        target="_blank"
        rel="norefferrer"
      >
        <Image
          src={"/assets/images/Babydoge-Banner.png"}
          alt="baby doge nft"
          width={1920}
          height={564}
          className="mx-auto w-full max-w-[1920px] my-4 lg:my-6 2xl:my-8"
        />
      </Link>
      ;
    </div>
  );
};

export default BabyDogeImage;
