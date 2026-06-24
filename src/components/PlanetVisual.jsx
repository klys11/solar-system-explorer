import styles from "./PlanetVisual.module.css";

export default function PlanetVisual({ planet }) {
  const { size, visualStyle, isSaturn, isJupiter, hasContinent } = planet;
  const orbitOuter = size * 2.1;
  const orbitInner = size * 2.1 * 0.7;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.orbitRing}
        style={{ width: orbitOuter, height: orbitOuter }}
      />
      <div
        className={`${styles.orbitRing} ${styles.orbitRingInner}`}
        style={{ width: orbitInner, height: orbitInner }}
      />

      {isSaturn ? (
        <div className={styles.saturnWrap}>
          <div className={styles.saturnRing} aria-hidden="true" />
          <div className={styles.planet} style={visualStyle} />
        </div>
      ) : (
        <div className={styles.planet} style={visualStyle}>
          {isJupiter && (
            <div className={styles.jupiterGRS} aria-hidden="true" />
          )}
          {hasContinent && (
            <div className={styles.earthContinent} aria-hidden="true" />
          )}
        </div>
      )}
    </div>
  );
}
