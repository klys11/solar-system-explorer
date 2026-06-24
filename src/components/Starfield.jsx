import useStarfield from "../hooks/useStarfield";
import styles from "./Starfield.module.css";

export default function Starfield() {
  const canvasRef = useStarfield(220);
  return <canvas ref={canvasRef} className={styles.canvas} />;
}
