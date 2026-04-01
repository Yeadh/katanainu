// components/AboutFull.jsx
// DEV: Place /public/gameplay-screenshot.jpg in your public folder
// Usage: import AboutFull from '@/components/AboutFull'

import styles from "./AboutFull.module.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 8 8" className={styles.arrowSvg}>
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
  "🆓 Free2Play",
  "🎮 High-Quality AAA Graphics",
  "🏆 Skill-Based Gameplay",
  "🏟️ eSports & Tournaments",
  "✅ No Pay2Win — Fun2Play Only",
];

const bullets = [
  <>
    Jump into <strong>1v1, 3v3, Free4All, and Battle Royale</strong> — with more
    modes coming. Experience{" "}
    <strong>lightning-fast, skill-driven combat</strong> from a dynamic
    third-person perspective built for pure competitive intensity.
  </>,
  <>
    <strong>Master the blade.</strong> Chain deadly katana strikes, unleash
    powerful abilities, <strong>double jump</strong>, and traverse the
    battlefield with your <strong>grappling hook</strong> in fluid combat that{" "}
    <strong>rewards precision and mastery</strong>.
  </>,
  <>
    Enter a world <strong>inspired by Asian aesthetics</strong>, brought to life
    with <strong>stunning environments, beautiful maps</strong>, and
    unforgettable characters — all crafted with passion and attention to detail
    since <strong>January 2022</strong>.
  </>,
  <>
    Built for <strong>competition at its core</strong> — Katana Inu is evolving
    into a <strong>true esports experience</strong> with intense matchups,
    high-stakes tournaments, and a growing global player community.
  </>,
  <>
    <strong>No shortcuts. No advantages.</strong> All skins and abilities are{" "}
    <strong>purely cosmetic</strong> — no pay-to-win, ever. This is{" "}
    <strong>Fun2Play at its peak</strong> — where skill is everything, and every
    fight matters.
  </>,
];

const gameModes = [
  "⚔️ 1 vs 1",
  "⚔️ 3 vs 3",
  "🏆 Battle Royale",
  "🆓 Free 4 All",
  "🎓 Tutorial",
];

export default function About() {
  return (
    <div className={styles.wrapper}>
      {/* ══ SECTION 1: HERO ══ */}
      <section className={styles.aboutHero}>
        <div className={styles.eyebrow}>About Katana Inu</div>

        <div className={styles.heroGrid}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.devBadge}>
              🗓️ In Development Since January 2022
            </div>

            <h2 className={styles.heroHeadline}>
              The Best Multiplayer
              <br />
              <span>Action Game</span> — Built for
              <br />
              Competitive Intensity
            </h2>

            <p className={styles.heroDesc}>
              Katana Inu is a{" "}
              <strong>free-to-play competitive action game</strong> set in a
              world inspired by <strong>Asian aesthetics</strong> — crafted with
              passion since January 2022. Players step into fast-paced combat in
              a <strong>stunning, high-quality environment</strong> full of
              beautiful maps and unforgettable characters.
            </p>

            <div className={styles.pills}>
              {pills.map((p) => (
                <div key={p} className={styles.pill}>
                  {p}
                </div>
              ))}
            </div>

            <div className={styles.heroBtns}>
              <a href="#" className={`${styles.heroBtn} ${styles.btnPrimary}`}>
                🎮 Play on Steam
              </a>
              <a href="#" className={`${styles.heroBtn} ${styles.btnGhost}`}>
                📖 Learn More
              </a>
            </div>
          </div>

          {/* Right — screenshot */}
          <div className={styles.heroRight}>
            {/* DEV: Replace with actual screenshot */}
            <div className={styles.imgPlaceholder}>
              <video
                src="https://play.katanainu.com/static/media/bannerbg.c57434e55476e1e65854.mp4"
                autoPlay
                muted
                loop
                poster="/assets/images/thumbnail2.png"
                width={"100%"}
                height={"100%"}
                className="aspect-video"
              />
            </div>
            {/* <a href="https://www.youtube.com/@KatanaInu" className={styles.moreVideos}>
              ▶ More Videos →
            </a> */}
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: BULLETS ══ */}
      <section className={styles.aboutDetail}>
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
      </section>

      {/* ══ SECTION 3: GAME MODES ══ */}
      <section className={styles.gameSection}>
        <div className={styles.sectionDivider} />
        <div className={`${styles.eyebrow} ${styles.eyebrowGame}`}>
          The Game
        </div>

        <div className={styles.gameCols}>
          <div>
            <div className={styles.gameColTitle}>Katana Inu Game</div>
            <p className={styles.gameColText}>
              A <strong>free-to-play competitive action game</strong> where
              players earn exclusive cosmetic rewards by winning tournaments,
              completing quests, and outplaying opponents in fast-paced
              skill-driven matches.
            </p>
            <p className={styles.gameColText}>
              Every fight is a test of{" "}
              <strong>precision, speed and mastery</strong> — chain deadly
              strikes, use your grappling hook, double jump, and unleash
              abilities to outmaneuver your enemies.
            </p>
            <p className={styles.gameColText}>
              Developed since <strong>January 2022</strong> with passion for{" "}
              <strong>Asian aesthetics and AAA quality</strong> — stunning
              environments, beautiful maps, and unforgettable characters.
            </p>
          </div>

          <div>
            <div className={styles.gameColTitle}>Game Modes</div>
            <p className={styles.gameColText}>
              The main mode is <strong>Battle Royale</strong> — up to 60 players
              on an open-world map, going solo or squadding up. Designed for
              intense, competitive play at scale.
            </p>
            <p className={styles.gameColText}>
              Smaller arena modes: <strong>1v1, 3v3 and Free4All</strong> reward
              individual skill and team coordination. A{" "}
              <strong>Tutorial mode</strong> helps new players get up to speed
              quickly.
            </p>
            <p className={styles.gameColText}>
              All cosmetic items can be{" "}
              <strong>earned purely by playing</strong> — they are strictly
              aesthetic and do <strong>not impact combat</strong> in any way.
            </p>
            <div className={styles.modePills}>
              {gameModes.map((m) => (
                <div key={m} className={styles.modePill}>
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
