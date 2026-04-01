import { useEffect, useRef, useCallback } from "react";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number; vx: number; vy: number }[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const prevMouse = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const isHovering = useRef(false);

  const resize = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }, []);

  useEffect(() => {
    // Only on pointer:fine devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      isHovering.current = !!(
        t.closest("a, button, [role='button'], input, textarea, label, .card-premium, .glass-card")
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    let lastSpawn = 0;

    const loop = (time: number) => {
      raf.current = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dx = mouse.current.x - prevMouse.current.x;
      const dy = mouse.current.y - prevMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn points based on speed
      const interval = isHovering.current ? 30 : 18;
      if (speed > 1.5 && time - lastSpawn > interval) {
        points.current.push({
          x: mouse.current.x,
          y: mouse.current.y,
          age: 0,
          vx: dx * 0.02,
          vy: dy * 0.02,
        });
        lastSpawn = time;
      }

      // Limit points
      if (points.current.length > 50) {
        points.current = points.current.slice(-50);
      }

      const maxAge = isHovering.current ? 0.6 : 0.9;

      // Draw
      for (let i = points.current.length - 1; i >= 0; i--) {
        const p = points.current[i];
        p.age += 0.012;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        if (p.age >= maxAge) {
          points.current.splice(i, 1);
          continue;
        }

        const life = 1 - p.age / maxAge;
        const eased = life * life;
        const baseSize = isHovering.current ? 4 : 6;
        const size = baseSize * eased;
        const alpha = eased * 0.18;

        // Muted brass/champagne glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size + 8, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(36, 25%, 48%, ${alpha * 0.3})`;
        ctx.fill();

        // Core dot - deep graphite
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(225, 10%, 28%, ${alpha * 0.8})`;
        ctx.fill();
      }

      // Cursor halo on hover
      if (isHovering.current) {
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(36, 25%, 48%, 0.04)";
        ctx.fill();
      }

      prevMouse.current.x = mouse.current.x;
      prevMouse.current.y = mouse.current.y;
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [resize]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default CursorTrail;
