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
  { icon: "🎮", label: "High-Quality AAA Graphics" },
  { icon: "🏆", label: "Skill-Based Gameplay" },
  { icon: "🏟️", label: "eSports & Tournaments" },
  { icon: "✅", label: "No Pay2Win — Fun2Play Only" },
];

const bullets = [
  <>
    Katana Inu is a{" "}
    <strong>
      fast-paced multiplayer action game built for pure competitive intensity
    </strong>
    . Jump into PvP modes like{" "}
    <strong>1v1, 3v3, Free4All, and Battle Royale</strong> — with more to come —
    and experience <strong>lightning-fast, skill-driven combat</strong> from a
    dynamic third-person perspective.
  </>,
  <>
    <strong>Master the blade.</strong> Chain deadly katana strikes, unleash
    powerful abilities, <strong>double jump</strong>, and traverse the
    battlefield with your <strong>grappling hook</strong> in fluid, responsive
    combat that <strong>rewards precision and mastery</strong>.
  </>,
  <>
    Enter a world <strong>inspired by Asian aesthetics</strong>, brought to life
    with{" "}
    <strong>high-quality visuals, stunning environments, beautiful maps</strong>
    , and unforgettable characters — all crafted with passion and attention to
    detail.
  </>,
  <>
    Built for <strong>competition at its core</strong>, Katana Inu is designed
    to evolve into a <strong>true esports experience</strong>, with intense
    matchups and high-stakes tournament play.
  </>,
  <>
    <strong>No shortcuts. No advantages.</strong> All skins and abilities are{" "}
    <strong>purely cosmetic</strong> — <strong>no pay-to-win</strong>. This is{" "}
    <strong>Fun2Play at its peak</strong> — where skill is everything, and every
    fight matters.
  </>,
];

export default function AboutKatana() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>About Katana Inu</div>

      <div className={styles.pills}>
        {pills.map(({ icon, label }) => (
          <div key={label} className={styles.pill}>
            {icon} {label}
          </div>
        ))}
      </div>

      <div className={styles.bullets}>
        {bullets.map((text, i) => (
          <div key={i}>
            <div className={styles.bullet}>
              <div className={styles.bulletIcon}>
                <ArrowIcon />
              </div>
              <p className={styles.bulletText}>{text}</p>
            </div>
            {i < bullets.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  );
}
