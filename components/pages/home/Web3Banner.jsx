// components/Web3Banner.jsx
// Usage: place /public/web3kata.jpg in your Next.js public folder
// then: import Web3Banner from '@/components/Web3Banner'

import Image from "next/image";
import styles from "./Web3Banner.module.css";

export default function Web3Banner() {
  return (
    <div className={styles.banner}>
      {/* ── Photo ── */}
      <div className={styles.photoWrap}>
        <Image
          src="/assets/images/web3kata.jpg"
          alt="Web3 Game Character"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          priority
        />
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`${styles.ember} ${styles["ember" + i]}`} />
        ))}
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>
        {/* Tag */}
        <div className={styles.tag}>
          <div className={styles.tagLine} />
          <span className={styles.tagText}>✦ WEB3 GAME ✦</span>
          <div className={`${styles.tagLine} ${styles.tagLineRight}`} />
        </div>

        <h1 className={styles.headline}>Play Without Limits</h1>
        <p className={styles.subline}>Next-gen Web3 gaming ecosystem</p>

        {/* Features */}
        <div className={styles.features}>
          {[
            {
              icon: "⬇️",
              title: "Instant Access",
              sub: "Download & play via launcher",
              purple: false,
            },
            {
              icon: "🔓",
              title: "Full Freedom",
              sub: "No restrictions, no limits",
              purple: true,
            },
            {
              icon: "💎",
              title: "True Ownership",
              sub: "NFT-based assets & economy",
              purple: false,
            },
            {
              icon: "🌐",
              title: "Cross-Server Play",
              sub: "Seamless multiplayer worlds",
              purple: true,
            },
          ].map(({ icon, title, sub, purple }) => (
            <div
              key={title}
              className={`${styles.feat} ${purple ? styles.featPurple : ""}`}
            >
              <div className={styles.featIcon}>{icon}</div>
              <div>
                <div className={styles.featTitle}>{title}</div>
                <div className={styles.featSub}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* F2P label */}
        <div className={styles.f2p}>
          Play2Earn ecosystem, FREE2PLAY &amp; NO-PAY2WIN{" "}
        </div>

        {/* CTA */}
        <button className={styles.ctaBtn}>DOWNLOAD LAUNCHER</button>
      </div>
    </div>
  );
}
