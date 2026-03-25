// components/Web2Banner.jsx
// Usage: place /public/web2kata.jpg in your Next.js public folder
// then: import Web2Banner from '@/components/Web2Banner'

import Image from "next/image";
import styles from "./Web2Banner.module.css";

const SteamIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
  </svg>
);

export default function Web2Banner() {
  return (
    <div className={styles.banner}>
      {/* ── Photo ── */}
      <div className={styles.photoWrap}>
        <Image
          src="/assets/images/web2kata.jpg"
          alt="Web2 Game Character"
          fill
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
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
          <span className={styles.tagText}>✦ WEB2 GAME ✦</span>
          <div className={`${styles.tagLine} ${styles.tagLineRight}`} />
        </div>

        <h1 className={styles.headline}>Play Without Limits</h1>
        <p className={styles.subline}>Next-gen Web2 AAA Quality on Steam</p>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feat}>
            <div className={styles.featIcon}>
              <SteamIcon className={styles.steamIconSmall} />
            </div>
            <div>
              <div className={styles.featTitle}>Steam Download</div>
              <div className={styles.featSub}>Jump in and play right away</div>
            </div>
          </div>

          <div className={`${styles.feat} ${styles.featPurple}`}>
            <div className={styles.featIcon}>🔓</div>
            <div>
              <div className={styles.featTitle}>100% Full Access</div>
              <div className={styles.featSub}>Full access to the game</div>
            </div>
          </div>

          <div className={styles.feat}>
            <div className={styles.featIcon}>🛡️</div>
            <div>
              <div className={styles.featTitle}>No Restrictions</div>
              <div className={styles.featSub}>No limits, play freely</div>
            </div>
          </div>

          <div className={`${styles.feat} ${styles.featPurple}`}>
            <div className={styles.featIcon}>🌐</div>
            <div>
              <div className={styles.featTitle}>Cross-Servers</div>
              <div className={styles.featSub}>Seamless multiplayer worlds</div>
            </div>
          </div>
        </div>

        {/* F2P label */}
        <div className={styles.f2p}>FREE2PLAY &amp; NO-PAY2WIN</div>

        {/* CTA */}
        <button className={styles.ctaBtn}>
          <SteamIcon className={styles.steamIconBtn} />
          DOWNLOAD ON STEAM
        </button>
      </div>
    </div>
  );
}
