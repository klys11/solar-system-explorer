import styles from "./PlanetInfo.module.css";

export default function PlanetInfo({ planet }) {
  const {
    number,
    name,
    tagline,
    description,
    composition,
    stats,
    fact,
    color,
  } = planet;

  return (
    <div className={styles.info}>
      <p className={styles.number}>{number}</p>

      <h2 className={styles.name} style={{ color }}>
        {name}
      </h2>

      <p className={styles.tagline}>{tagline}</p>

      <p className={styles.description}>{description}</p>

      <div>
        <p className={styles.compositionLabel}>COMPOSITION</p>
        <div className={styles.compositionGrid}>
          {composition.map((item) => (
            <div key={item.label} className={styles.compItem}>
              <div className={styles.compLabel}>{item.label}</div>
              <div className={styles.compValue}>{item.value}</div>
              <div className={styles.compBarWrap}>
                <div
                  className={styles.compBar}
                  style={{ width: `${item.pct}%`, background: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.statsRow}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statVal} style={{ color }}>
              {s.val}
            </span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.funFact} style={{ borderColor: color }}>
        <strong>⚡ DID YOU KNOW</strong>
        {fact}
      </div>
    </div>
  );
}
