// components/HeroHeader.jsx
// DEV: Place your video file at /public/videos/katana-hero.mp4
// Usage: import HeroHeader from '@/components/HeroHeader'

import styles from "./HeroHeader.module.css";

const SteamIcon = () => (
  <svg
    className={styles.steamSvg}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z" />
  </svg>
);

export default function HeroHeader() {
  return (
    <section className={styles.hero}>
      {/* DEV: Replace /videos/katana-hero.mp4 with your actual video path */}
      <div className={styles.heroVideo}>
        {/* <video autoPlay muted loop playsInline>
          <source
            src="https://play.katanainu.com/static/media/bannerbg.c57434e55476e1e65854.mp4"
            type="video/mp4"
          />
        </video> */}
        <video
          src="https://play.katanainu.com/static/media/bannerbg.c57434e55476e1e65854.mp4"
          autoPlay
          muted
          loop
          // poster="/assets/images/thumbnail2.png"
          // width={"100%"}
          // height={"100%"}
          // className="w-full h-svh md:h-screen 2xl:h-[868px] object-cover max-video-height"
        />
      </div>

      <div className={styles.heroOverlay} />
      <div className={styles.heroVignette} />

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>Now Available</div>

        <h1 className={styles.heroTitle}>Katana Inu</h1>

        <div className={styles.heroDesc}>
          <p>
            A <strong>fast-paced action game</strong> built for skill, speed and
            competition.
          </p>
          <p>
            Play on <strong>Steam as a classic Web2 game</strong> — or unlock{" "}
            <strong>Web3 ecosystem features</strong> via the Katana Inu
            Launcher.
          </p>
        </div>

        <div className={styles.heroBtns}>
          <a
            href="https://store.steampowered.com/app/2706070/Katana_Inu/"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <SteamIcon />
            Demo on Steam
          </a>
          <a
            href="https://play.katanainu.com/"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            ⚡ Launcher
          </a>
          <a
            href="https://discord.gg/BedhH7CXGz"
            className={`${styles.btn} ${styles.btnGhost}`}
          >
            👥 Join Community
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2,5 8,11 14,5" />
        </svg>
      </div>
    </section>
  );
}
