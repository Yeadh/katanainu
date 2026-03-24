import Image from "next/image";

const games = [
  {
    id: 1,
    title: "WEB2",
    image: "/hero5.webp",
    overlay: ["WEB2", "Steam Download", "100% full access", "No restrictions"],
  },
  {
    id: 2,
    title: "WEB3",
    image: "/lore-img-2.webp",
    overlay: ["WEB3", "Launcher Download", "100% full access", "NFT Ownership"],
  },
];

export default function GameCards() {
  return (
    <div className="w-full p-6 flex justify-center">
      <div className="cardd grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-[70%]">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg relative"
          >
            {/* Image */}
            <div className="relative h-64">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{game.title}</h2>
              <p className="text-sm text-gray-400">{game.edition}</p>

              {/* Overlay Red Text */}
              <div className="text-sm font-semibold space-y-1">
                {game.overlay.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
