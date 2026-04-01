// components/DemoSection.jsx
// DEV: Place /public/katana-logo.png (Katana Inu logo PNG) in your public folder
// Usage: import DemoSection from '@/components/DemoSection'

import Image from "next/image";
import styles from "./DemoSection.module.css";

const SteamIcon = () => (
  <svg
    className={styles.steamLogo}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z" />
  </svg>
);

const SteamBtnIcon = () => (
  <svg
    className={styles.steamBtnSvg}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z" />
  </svg>
);

const modes = [
  { icon: "⚔️", label: "1 vs 1" },
  { icon: "⚔️", label: "3 vs 3" },
  { icon: "🏆", label: "Battle Royale" },
  { icon: "🎓", label: "Tutorial" },
  { icon: "🆓", label: "Free 4 All" },
];

export default function PlayClosedBeta() {
  return (
    <div className={styles.section}>
      {/* 1. Limited Offer */}
      <div className={styles.eyebrow}>Limited Offer</div>

      {/* 2. Logos */}
      <div className={styles.logosRow}>
        <Image
          src="/assets/images/katana-logo.png"
          alt="Katana Inu"
          width={52}
          height={52}
          className={styles.kataLogoImg}
          style={{ objectFit: "contain", height: "52px", width: "auto" }}
        />
        <span className={styles.logoSep}>×</span>
        <SteamIcon />
      </div>

      {/* 3. Headline */}
      <h2 className={styles.headline}>
        Play our <span>Demo on Steam</span>
      </h2>

      {/* 4. Date */}
      <div className={styles.dateLine}>From 11 – 21 April</div>

      {/* Subtext */}
      <p className={styles.subtext}>
        Available as a <strong>classic Web2 game</strong> on Steam — or with{" "}
        <strong>Web3 ecosystem features</strong> via the Katana Inu Launcher.
      </p>

      {/* Buttons */}
      <div className={styles.btns}>
        <a
          href="https://store.steampowered.com/app/2706070/Katana_Inu/"
          className={`${styles.btn} ${styles.btnSteam}`}
        >
          <SteamBtnIcon />
          Demo on Steam
        </a>
        <a
          href="https://download.katanainu.com/Katanainu-launcher.exe"
          className={`${styles.btn} ${styles.btnLauncher}`}
        >
          ⚡ Game Launcher
        </a>
        <a
          href="https://download.katanainu.com/Katanainu-launcher.exe"
          className={`${styles.btn} ${styles.btnDirect}`}
        >
          ⬇ Download Directly
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>Game Modes</span>
        <div className={styles.dividerLine} />
      </div>

      {/* Mode Tags */}
      <div className={styles.modes}>
        {modes.map(({ icon, label }) => (
          <div key={label} className={styles.modeTag}>
            {icon} {label}
          </div>
        ))}
      </div>
    </div>
  );
}
