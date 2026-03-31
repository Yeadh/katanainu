// components/AboutKatana.jsx
// Usage: import AboutKatana from '@/components/AboutKatana'

import styles from "./AboutKatana.module.css";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 8 8"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowSvg}
  >
    <path
      d="M1 1 L7 4 L1 7"
      stroke="#f0a500"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const pills = [
  { icon: "🆓", label: "Free2Play" },
  { icon: "⚔️", label: "Distinct Visual Style" },
  { icon: "🎮", label: "High-Quality AAA Graphics" },
  { icon: "🏆", label: "Skill-Based Gameplay" },
  { icon: "👥", label: "Community-Driven Competition" },
  { icon: "🏟️", label: "eSports & Tournaments" },
  { icon: "✅", label: "No Pay2Win — Fun2Play Only" },
];

export default function AboutKatana() {
  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.title}>About Katana Inu</div>

      {/* Pills */}
      <div className={styles.pills}>
        {pills.map(({ icon, label }) => (
          <div key={label} className={styles.pill}>
            {icon} {label}
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className={styles.bullets}>
        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <ArrowIcon />
          </div>
          <p className={styles.bulletText}>
            A{" "}
            <strong>
              fast-paced multiplayer action game built for players first
            </strong>
            , with competitive PvP modes — 1v1, 3v3 and Battle Royale,Free4All
            (more coming in the future). In a third-person perspective, players
            wield deadly katanas and unleash powerful spells in intense,
            extremely responsive combat.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <ArrowIcon />
          </div>
          <p className={styles.bulletText}>
            On <strong>Steam</strong>, Katana Inu is available as a classic{" "}
            <strong>
              Web2 experience focused on gameplay, competition and accessibility
            </strong>{" "}
            — no blockchain or NFT requirements. For players who want more, the
            official <strong>Katana Inu Launcher</strong> provides access to the{" "}
            <strong className={styles.highlight}>
              Web3 ecosystem & $KATA token as a P2E system
            </strong>{" "}
            — separately to engage. You choose how you want to play.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <ArrowIcon />
          </div>
          <p className={styles.bulletText}>
            <strong>
              Web2 and Web3 players share the same servers and battlefields
            </strong>
            , competing together in the same matches and competitive rankings.
            Showcase your skills, climb the global leaderboards, unlock
            cosmetics that showcase your achievements, and participate in
            exciting tournaments and esports competitions.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bullet}>
          <div className={styles.bulletIcon}>
            <ArrowIcon />
          </div>
          <p className={styles.bulletText}>
            All skins and abilities are <strong>purely cosmetic</strong> —
            guaranteeing a balanced experience with no Pay2Win mechanics. Katana
            Inu follows a strict <strong>Fun2Play philosophy</strong>, welcoming
            both Web2 and Web3 players while ensuring a fair and competitive
            environment for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
