import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-white opacity-80 animate-pulse" />
    </div>
  );
};

export default Cursor;
