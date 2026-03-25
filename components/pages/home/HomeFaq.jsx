"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need web3 to play Katana inu?",
    answer:
      "- No. You can play Katana inu as a classic Web2 Game on Steam fully!  There are only 1 Game, but 2 ecosystems.",
  },
  {
    question:
      "What is the differente between Steam and the Katana Inu Launcher?",
    answer:
      "Steam provides the classic Web2 gameplay experience. The official Katana Inu launcher additionally provides access to our ecosystem Web3 connected features.",
  },
  {
    question: "Is the Web3 part required to enjoy the game?",
    answer:
      "- No. Web3 features are optional and separate from the Steam experience. Web3 is optional.",
  },
  {
    question: "Can players choose how they want to access Katana Inu?",
    answer:
      "- Yes. Players can choose between the classic Steam experience and the ecosystem of our launcher based Web3 experience without any restrictions.",
  },
  {
    question: "How about the Web3 access?",
    answer:
      "Alles zu Token, NFTs, Ecosystem, Marketplace und Ownership wird in einen separaten Bereich verschoben, deutlich weiter unten auf der Website.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h5 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h5>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" shadow-md rounded-2xl p-4 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
