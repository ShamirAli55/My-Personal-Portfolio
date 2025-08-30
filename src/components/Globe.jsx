import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const BASE_CONFIG = {
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 6000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, config = BASE_CONFIG }) {
  let phi = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const globe = createGlobe(canvas, {
      ...config,
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.0005;
        state.phi = phi + rs.get();
        state.width = width * dpr;
        state.height = width * dpr;
      },
    });

    canvas.style.opacity = "1";

    const resizeObserver = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    resizeObserver.observe(canvas);

    return () => {
      globe.destroy();
      resizeObserver.disconnect();
    };
  }, [rs, config]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => (pointerInteracting.current = e.clientX)}
        onPointerUp={() => (pointerInteracting.current = null)}
        onPointerOut={() => (pointerInteracting.current = null)}
        onMouseMove={(e) => {
          if (pointerInteracting.current) {
            r.set(
              r.get() +
                (e.clientX - pointerInteracting.current) / MOVEMENT_DAMPING
            );
            pointerInteracting.current = e.clientX;
          }
        }}
        onTouchStart={(e) =>
          (pointerInteracting.current = e.touches[0]?.clientX || null)
        }
        onTouchEnd={() => (pointerInteracting.current = null)}
        onTouchMove={(e) => {
          if (pointerInteracting.current && e.touches[0]) {
            r.set(
              r.get() +
                (e.touches[0].clientX - pointerInteracting.current) /
                  MOVEMENT_DAMPING
            );
            pointerInteracting.current = e.touches[0].clientX;
          }
        }}
      />
    </div>
  );
}
