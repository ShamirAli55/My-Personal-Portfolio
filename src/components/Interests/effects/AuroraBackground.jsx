import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const colors = ["#7c3aed", "#06b6d4", "#3b82f6"];

    function drawAurora() {
      ctx.clearRect(0, 0, w, h);
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      colors.forEach((c, i) => gradient.addColorStop(i / colors.length, c));
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, w, h);
    }

    const interval = setInterval(drawAurora, 100);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
