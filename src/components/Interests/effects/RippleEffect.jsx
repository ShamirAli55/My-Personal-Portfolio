import { useEffect, useRef } from "react";

export default function RippleEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let ripples = [];

    function addRipple(x, y) {
      ripples.push({ x, y, r: 0 });
    }

    canvas.addEventListener("click", (e) => addRipple(e.clientX, e.clientY));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      ripples.forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.3)";
        ctx.stroke();
        r.r += 2;
        if (r.r > 200) ripples.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}
