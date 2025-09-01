import { useEffect, useRef } from "react";

export default function CursorTrailEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let trail = [];

    function mouseMove(e) {
      trail.push({ x: e.clientX, y: e.clientY, alpha: 1 });
    }
    window.addEventListener("mousemove", mouseMove);

    function animate() {
      ctx.clearRect(0, 0, w, h);
      trail.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
        p.alpha -= 0.02;
        if (p.alpha <= 0) trail.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
    />
  );
}
