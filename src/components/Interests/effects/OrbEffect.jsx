import { useEffect, useRef } from "react";

export default function OrbEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const orb = { x: w / 2, y: h / 2, r: 150 };

    function animate() {
      ctx.clearRect(0, 0, w, h);
      const gradient = ctx.createRadialGradient(
        orb.x, orb.y, 0, orb.x, orb.y, orb.r
      );
      gradient.addColorStop(0, "rgba(59,130,246,0.6)");
      gradient.addColorStop(1, "rgba(59,130,246,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
