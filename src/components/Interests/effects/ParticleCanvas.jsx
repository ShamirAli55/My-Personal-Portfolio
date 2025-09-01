import { useEffect, useRef } from "react";

export default function ParticleCanvas({ reduce = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-30";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = container.clientWidth);
    let h = (canvas.height = container.clientHeight);

    const count = reduce ? Math.max(12, Math.round((w * h) / 120000)) : Math.round((w * h) / 45000);
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: 260 + Math.random() * 80,
      alpha: 0.06 + Math.random() * 0.12,
    }));

    let raf = null;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},80%,60%,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = container.clientWidth;
      h = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, [reduce]);

  return <div ref={ref} className="absolute inset-0 -z-40" />;
}
