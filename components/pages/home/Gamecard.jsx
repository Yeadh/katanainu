import Web2Banner from "@/components/pages/home/Web2Banner";
import Web3Banner from "@/components/pages/home/Web3Banner";
const GameCards = () => {
  return (
    <div className="text-white flex flex-col gap-2 sm:gap-2 lg:flex-row  main-container">
      <div className="relative w-full min-h-[373px] sm:min-h-[641px] flex-1 mt-[70px]">
        <Web2Banner />
      </div>

      {/* texts */}
      <div className="relative w-full min-h-[373px] sm:min-h-[641px] flex-1 mt-[70px]">
        <Web3Banner />
      </div>

    </div>
    
  );
};

export default GameCards;
