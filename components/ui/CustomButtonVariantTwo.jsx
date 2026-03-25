import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const CustomButtonVariantTwo = ({
  primary = true,
  secondary,
  tokenButton,
  tokenButtonClass,
  buttonVariant = "customAnimatedBlue",
  textLable = "Get started",
  horizontalElementColor = "bg-black",
  qubeElementColor = "bg-black",
  buttonPadding = "2xl:px-8",
  buttonHeight = "sm:h-8 lg:h-9 xl:h-10",
  textSize = "text-[0.625rem] md:text-xs xl:text-sm",
  buttonLink = "",
  type = "button",
  children,
  buttonExtraClass,
}) => {
  const ButtonContent = (
    <>
      {/* border element start */}
      <div className="flex justify-between items-center w-[102%] h-1 absolute z-20">
        <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
        <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
      </div>
      {/* border element ends */}
      <Button
        variant={buttonVariant}
        type={type}
        className={cn(
          `px-6 rounded-none hover:text-black whitespace-nowrap uppercase font-bold m-1 relative z-30 2xl:tracking-wider border-none flex items-center gap-2 md:gap-2.5 xl:gap-3 ${buttonPadding} ${buttonHeight} ${textSize} ${
            primary
              ? "bg-white text-black hover:text-white"
              : secondary
              ? "bg-[#8e8f9273] text-white"
              : tokenButton
              ? tokenButtonClass
              : "bg-white text-black"
          }`,
          buttonExtraClass
        )}
      >
        {/* qube element start */}
        <div
          className={`absolute top-0 left-0 w-1 h-1 z-40 ${qubeElementColor}`}
        />
        <div
          className={`absolute bottom-0 right-0 w-1 h-1 z-40 ${qubeElementColor}`}
        />
        {/* qube element ends */}
        {children}
        {/* text */}
        {textLable}
      </Button>
    </>
  );

  return buttonLink ? (
    <Link
      href={buttonLink}
      target={buttonLink && "_blank"}
      rel="noopener noreferrer"
      className="relative border border-[#848589] flex justify-center items-center"
    >
      {ButtonContent}
    </Link>
  ) : (
    <div className="relative border border-[#848589] flex justify-center items-center">
      {ButtonContent}
    </div>
  );
};

export default CustomButtonVariantTwo;
