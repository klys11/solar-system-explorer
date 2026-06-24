import styles from "./Navbar.module.css";

export default function Navbar({ planets }) {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        ☀ <span>Solar</span> System
      </a>
      <ul className={styles.links}>
        {planets.map((planet) => (
          <li key={planet.id}>
            <a href={`#${planet.id}`}>{planet.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
