// components/FaqSection.jsx
// DEV: Place /public/smallcreo_Viewport_010.png (character PNG) in your public folder
// Usage: import FaqSection from '@/components/FaqSection'

"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: (
      <>
        Do I need <span className={styles.web3tag}>WEB3</span> to play Katana
        Inu?
      </>
    ),
    answer: (
      <>
        No. Katana Inu is fully playable on{" "}
        <strong>Steam as a pure Web2 game</strong> — no wallet, no blockchain,
        no NFTs required. Just download and play like any other competitive
        game.
      </>
    ),
    defaultOpen: true,
  },
  {
    question: (
      <>What is the difference between Steam and the Katana Inu Launcher?</>
    ),
    answer: (
      <>
        <strong>Steam</strong> gives you the full Web2 game experience — focused
        on gameplay, competition and accessibility. The{" "}
        <strong>Katana Inu Launcher</strong> is a separate path that unlocks the
        Web3 ecosystem &amp; <strong>$KATA token</strong> features.
      </>
    ),
  },
  {
    question: (
      <>
        Is the <span className={styles.web3tag}>WEB3</span> part required to
        enjoy the game?
      </>
    ),
    answer: (
      <>
        Absolutely not. The Web3 layer is entirely optional and does not affect
        gameplay, balance or access. Katana Inu follows a strict{" "}
        <strong>Fun2Play philosophy</strong> — all skins and abilities are
        purely cosmetic, with no Pay2Win mechanics.
      </>
    ),
  },
  {
    question: <>Can players choose how they want to access Katana Inu?</>,
    answer: (
      <>
        Yes. You pick your path — <strong>Steam for Web2</strong> or the{" "}
        <strong>Katana Inu Launcher for Web3</strong>. Both play on the same
        servers, share the same battlefields and compete in the same rankings
        together.
      </>
    ),
  },
  {
    question: (
      <>
        How about the <span className={styles.web3tag}>WEB3</span> access?
      </>
    ),
    answer: (
      <>
        Web3 access is available through the{" "}
        <strong>Katana Inu Launcher</strong>, which connects players to the
        broader <strong>$KATA token ecosystem</strong>, NFT-based assets and
        additional connected features — all as a separate, optional layer on top
        of the base game.
      </>
    ),
  },
];

function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span className={styles.faqQText}>{question}</span>
        <div className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ""}`}>
          +
        </div>
      </button>
      <div
        className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ""}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <div className={styles.wrapper}>
      {/* ── LEFT: FAQ ── */}
      <div className={styles.faqCol}>
        <div className={styles.faqTitle}>Frequently Asked Questions</div>
        <div className={styles.faqItems}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>

      {/* ── RIGHT: Character ── */}
      <div className={styles.rightCol}>
        <div className={styles.charWrap}>
          <Image
            src="/assets/images/smallcreo_Viewport_010.png"
            alt="Katana Inu Character"
            width={520}
            height={700}
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
