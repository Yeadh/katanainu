// components/Web2Web3Section.jsx
// Usage: import Web2Web3Section from '@/components/Web2Web3Section'

import styles from './Web2Web3Section.module.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 7 7" className={styles.arrowSvg}>
    <path d="M1 1 L6 3.5 L1 6" stroke="#f0a500" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SteamIcon = () => (
  <svg className={styles.badgeSteamIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
  </svg>
)

const web2Bullets = [
  <>Katana Inu launches on Steam as a <strong>pure Web2 game — 100%</strong>, with no blockchain or NFT requirements. Anyone can jump in instantly and enjoy the full game just like any other competitive action title — <strong>without any restrictions</strong> and with 100% of all updates.</>,
  <>Our goal is simple: <strong>bring Katana Inu to millions of gamers worldwide</strong> and deliver a fast-paced, skill-based experience that stands on its own.</>,
  <><strong>Web2 gamers were our main goal</strong> from the very start of this game — and remain at the heart of everything we build.</>,
]

const web3Bullets = [
  <>Katana Inu is also built as a <strong>Web3-enabled game</strong> through our dedicated game launcher. Players who connect to the Web3 ecosystem can access <strong>NFTs, Play-to-Earn mechanics</strong>, and the broader Katana Inu economy.</>,
  <>Holding <strong>$KATA tokens</strong> and NFTs lets you level up, track your stats and player progression, and <strong>earn $KATA tokens back</strong> based on your time and skill — the more you play, the more you can earn.</>,
  <>Our focus was always a <strong>Fun2Play game</strong> with NFT &amp; Play-to-Earn mechanics alongside full Web2 support. Players can enjoy Katana Inu <strong>separately or together</strong> — they choose, without any restriction or limit.</>,
]

function BulletList({ items }) {
  return (
    <div className={styles.bullets}>
      {items.map((text, i) => (
        <div key={i}>
          <div className={styles.bullet}>
            <div className={styles.bulletIcon}><ArrowIcon /></div>
            <p className={styles.bulletText}>{text}</p>
          </div>
          {i < items.length - 1 && <div className={styles.bulletDivider} />}
        </div>
      ))}
    </div>
  )
}

export default function Web2Web3Section() {
  return (
    <div className={styles.section}>

      <div className={styles.sectionTitle}>Katana Inu Web2 &amp; Web3</div>

      <div className={styles.cols}>

        {/* LEFT: Steam & Web2 */}
        <div className={styles.col}>
          <div className={styles.colBadge}>
            <SteamIcon />
            Steam Platform
          </div>
          <div className={styles.colTitle}>Steam &amp; Web2</div>
          <BulletList items={web2Bullets} />
        </div>

        {/* RIGHT: Web3 Integration */}
        <div className={styles.col}>
          <div className={styles.colBadge}>
            🔗 Katana Inu Launcher
          </div>
          <div className={styles.colTitle}>Web3 Integration</div>
          <BulletList items={web3Bullets} />
        </div>

      </div>
    </div>
  )
}
