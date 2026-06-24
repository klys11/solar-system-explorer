import useReveal from "../hooks/useReveal";
import PlanetVisual from "./PlanetVisual";
import PlanetInfo from "./PlanetInfo";
import styles from "./PlanetSection.module.css";

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function PlanetSection({ planet, index }) {
  const ref = useReveal();
  const isFlip = index % 2 === 1;
  const glowX = isFlip ? "80%" : "20%";
  const rgb = hexToRgb(planet.glow);

  return (
    <section
      id={planet.id}
      ref={ref}
      className={`reveal ${styles.section} ${isFlip ? styles.flip : ""}`}
      style={{
        background: `radial-gradient(ellipse at ${glowX} 50%, rgba(${rgb}, 0.05) 0%, transparent 60%)`,
      }}
    >
      <PlanetVisual planet={planet} />
      <PlanetInfo planet={planet} />
    </section>
  );
}
