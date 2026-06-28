import { useState, useEffect } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.sun} />
      <p className={styles.text}>LOADING UNIVERSE...</p>
    </div>
  );
}
