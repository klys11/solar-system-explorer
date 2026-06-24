import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.eyebrow}>An Interactive Guide · 8 Planets</p>
      <div className={styles.sun} aria-hidden="true" />
      <h1 className={styles.title}>
        <span className={styles.solar}>Solar</span>
        <br />
        <span className={styles.system}>System</span>
      </h1>
      <p className={styles.subtitle}>
        Journey through our cosmic neighbourhood. Explore each planet's
        composition, atmosphere, and the quirks that make it unique.
      </p>
      <div className={styles.scrollHint} aria-hidden="true">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
