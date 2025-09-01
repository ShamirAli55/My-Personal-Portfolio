import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    let raf;
    const follow = () => {
      setTrail((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 1.09, 
          y: prev.y + dy * 1.09,
        };
      });
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        transform: `translate(${trail.x - 20}px, ${trail.y - 20}px)`,
      }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-sky-400 opacity-40 blur-xl" />
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-fuchsia-400 opacity-80 blur-sm absolute top-2 left-2" />
      <div className="w-2 h-2 rounded-full bg-white absolute top-4 left-4 shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
    </div>
  );
};

export default Cursor;
