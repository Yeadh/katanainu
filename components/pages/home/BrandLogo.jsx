import { brandLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:flex items-center justify-center gap-5 sm:gap-8 xl:gap-12 2xl:gap-10 py-6  main-container">
        {brandLinks.map((brand, i) => (
          <Link
            key={i}
            href={brand.linkPath}
            target={brand.linkPath.length !== 1 ? "_blank" : "_parent"}
          >
            <Image
              src={brand.imgPath}
              alt=""
              width={200}
              height={70}
              className={` ${
                i === 3 || i === 7 || i === 5
                  ? "h-10 md:h-10 xl:h-12"
                  : "h-14 xl:h-20 "
              } ${i === 4 || i === 6 ? "object-cover" : "object-contain"}`}
            />
          </Link>
        ))}
    </div>
    
    
  );
};

export default BrandLogo;
