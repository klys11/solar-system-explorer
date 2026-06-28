import { useEffect, useRef } from "react";
import styles from "./Orrery.module.css";

const orbitData = [
  {
    id: "mercury",
    name: "Mercury",
    color: "#b0a090",
    size: 5,
    rx: 80,
    ry: 32,
    duration: 8,
    startAngle: 20,
  },
  {
    id: "venus",
    name: "Venus",
    color: "#e8c97a",
    size: 8,
    rx: 120,
    ry: 48,
    duration: 20,
    startAngle: 80,
  },
  {
    id: "earth",
    name: "Earth",
    color: "#4fc3f7",
    size: 9,
    rx: 165,
    ry: 66,
    duration: 33,
    startAngle: 155,
  },
  {
    id: "mars",
    name: "Mars",
    color: "#ef6c50",
    size: 6,
    rx: 210,
    ry: 84,
    duration: 62,
    startAngle: 240,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    color: "#d4956a",
    size: 16,
    rx: 270,
    ry: 108,
    duration: 120,
    startAngle: 310,
  },
  {
    id: "saturn",
    name: "Saturn",
    color: "#e8d090",
    size: 13,
    rx: 330,
    ry: 132,
    duration: 295,
    startAngle: 45,
  },
  {
    id: "uranus",
    name: "Uranus",
    color: "#80deea",
    size: 10,
    rx: 385,
    ry: 154,
    duration: 420,
    startAngle: 190,
  },
  {
    id: "neptune",
    name: "Neptune",
    color: "#5c6bc0",
    size: 9,
    rx: 435,
    ry: 174,
    duration: 600,
    startAngle: 270,
  },
];

export default function Orrery() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = 960;
    const H = 420;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;

    function draw() {
      const elapsed = (Date.now() - startTime.current) / 1000;

      ctx.clearRect(0, 0, W, H);

      // Orbit rings
      orbitData.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, p.rx, p.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(121,134,203,0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Sun halo
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55);
      halo.addColorStop(0, "rgba(255,213,79,0.5)");
      halo.addColorStop(1, "rgba(255,213,79,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      // Sun
      const sunGrad = ctx.createRadialGradient(cx - 8, cy - 8, 2, cx, cy, 26);
      sunGrad.addColorStop(0, "#fff9c4");
      sunGrad.addColorStop(0.4, "#ffd54f");
      sunGrad.addColorStop(1, "#e65100");
      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.fill();

      // Planets
      orbitData.forEach((p) => {
        const angle =
          (p.startAngle * Math.PI) / 180 + (elapsed / p.duration) * Math.PI * 2;
        const x = cx + p.rx * Math.cos(angle);
        const y = cy + p.ry * Math.sin(angle);

        // Glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.size * 2.5);
        glow.addColorStop(0, p.color + "55");
        glow.addColorStop(1, p.color + "00");
        ctx.beginPath();
        ctx.arc(x, y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Planet
        const grad = ctx.createRadialGradient(
          x - p.size * 0.3,
          y - p.size * 0.3,
          1,
          x,
          y,
          p.size,
        );
        grad.addColorStop(0, "#ffffff99");
        grad.addColorStop(1, p.color);
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Saturn rings
        if (p.id === "saturn") {
          ctx.beginPath();
          ctx.ellipse(
            x,
            y,
            p.size * 2.2,
            p.size * 0.6,
            angle * 0.1,
            0,
            Math.PI * 2,
          );
          ctx.strokeStyle = "rgba(232,208,144,0.55)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Live Orbital View</p>
      <h2 className={styles.title}>The Solar System</h2>
      <p className={styles.subtitle}>
        All 8 planets orbiting the Sun — speeds proportional to real orbital
        periods
      </p>

      <div className={styles.wrapper}>
        <canvas ref={canvasRef} className={styles.canvas} />

        <div className={styles.legend}>
          {orbitData.map((p) => (
            <a key={p.id} href={`#${p.id}`} className={styles.legendItem}>
              <span className={styles.dot} style={{ background: p.color }} />
              <span className={styles.legendName}>{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
