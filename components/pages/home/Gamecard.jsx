import { Diamond, Download, Globe, Lock } from "lucide-react";
import Image from "next/image";
const GameCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 gap-4">
      {/* Main Container */}
      <div className="max-w-md w-full bg-[#0a0514] rounded-3xl overflow-hidden border border-purple-900/30 shadow-2xl">
        {/* Header Image Section */}
        <div className="relative h-64 w-full">
          <Image
            src="/assets/images/web2kata.jpg"
            alt="Web2 Game Character"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
          />
          {/* Bottom Gradient Overlay to blend with dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="px-6 pb-8 pt-2 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-500 text-xl">✦</span>
            <h2 className="text-yellow-500 font-black text-2xl tracking-tighter uppercase italic">
              WEB3 GAME
            </h2>
            <span className="text-yellow-500 text-xl">✦</span>
          </div>

          <h1 className="text-white text-3xl font-bold mb-1">
            Play Without Limits
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Next-gen Web3 gaming ecosystem
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <FeatureBox
              icon={<Download className="text-blue-400" size={18} />}
              title="Instant Access"
              desc="Download & play via launcher"
            />
            <FeatureBox
              icon={<Lock className="text-orange-400" size={18} />}
              title="Full Freedom"
              desc="No restrictions, no limits"
            />
            <FeatureBox
              icon={<Diamond className="text-blue-300" size={18} />}
              title="True Ownership"
              desc="NFT-based assets & economy"
            />
            <FeatureBox
              icon={<Globe className="text-cyan-400" size={18} />}
              title="Cross-Server Play"
              desc="Seamless multiplayer worlds"
            />
          </div>

          {/* Action Button */}
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 text-white font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all">
            Download Launcher
          </button>
        </div>
      </div>

      {/* 2nd card */}
      <div className="max-w-md w-full bg-[#0a0514] rounded-3xl overflow-hidden border border-purple-900/30 shadow-2xl">
        {/* Header Image Section */}
        <div className="relative h-64 w-full">
          <Image
            src="/assets/images/web3kata.jpg"
            alt="Web2 Game Character"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
          />
          {/* Bottom Gradient Overlay to blend with dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="px-6 pb-8 pt-2 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-500 text-xl">✦</span>
            <h2 className="text-yellow-500 font-black text-2xl tracking-tighter uppercase italic">
              WEB3 GAME
            </h2>
            <span className="text-yellow-500 text-xl">✦</span>
          </div>

          <h1 className="text-white text-3xl font-bold mb-1">
            Play Without Limits
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Next-gen Web3 gaming ecosystem
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <FeatureBox
              icon={<Download className="text-blue-400" size={18} />}
              title="Instant Access"
              desc="Download & play via launcher"
            />
            <FeatureBox
              icon={<Lock className="text-orange-400" size={18} />}
              title="Full Freedom"
              desc="No restrictions, no limits"
            />
            <FeatureBox
              icon={<Diamond className="text-blue-300" size={18} />}
              title="True Ownership"
              desc="NFT-based assets & economy"
            />
            <FeatureBox
              icon={<Globe className="text-cyan-400" size={18} />}
              title="Cross-Server Play"
              desc="Seamless multiplayer worlds"
            />
          </div>

          {/* Action Button */}
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 text-white font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all">
            Download Launcher
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Component
const FeatureBox = ({ icon, title, desc }) => (
  <div className="bg-[#130b21] border border-white/5 p-3 rounded-xl flex items-start gap-3 text-left">
    <div className="bg-[#1c122d] p-2 rounded-lg mt-1">{icon}</div>
    <div>
      <h4 className="text-white text-xs font-bold leading-tight">{title}</h4>
      <p className="text-gray-500 text-[10px] leading-tight mt-1">{desc}</p>
    </div>
  </div>
);

export default GameCard;
