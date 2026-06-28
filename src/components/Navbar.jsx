import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ planets }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        ☀ <span>Solar</span> System
      </a>

      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        {planets.map((planet) => (
          <li key={planet.id}>
            <a href={`#${planet.id}`} onClick={() => setOpen(false)}>
              {planet.name}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barBot : ""}`} />
      </button>
    </nav>
  );
}
