import { useState, useEffect, useRef } from "react";

const STAR_COUNT = 60;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setTimeout(() => setShowName(true), 400);
    setTimeout(() => setShowOffer(true), 900);
    const t1 = setTimeout(() => setFadeOut(true), 2800);
    const t2 = setTimeout(onComplete, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  // Stars canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.8 + 0.4,
    }));

    let raf: number;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        const alpha = 0.25 + 0.35 * Math.sin(t * 0.001 * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(38,50%,75%,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Solar system */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-accent shadow-[0_0_24px_8px_hsl(38_65%_55%/0.35)]" />

          <div className="absolute inset-[28%] rounded-full border border-accent/15 animate-[spin_3s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/80 shadow-[0_0_10px_3px_hsl(38_65%_55%/0.3)]" />
          </div>

          <div className="absolute inset-[14%] rounded-full border border-accent/10 animate-[spin_5.5s_linear_infinite_reverse]">
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground/50 shadow-[0_0_10px_3px_hsl(220_10%_92%/0.12)]" />
          </div>

          <div className="absolute inset-[2%] rounded-full border border-border/10 animate-[spin_9s_linear_infinite]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
          </div>
        </div>

        {/* Text with staggered fade-in */}
        <p
          className={`text-[11px] sm:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-2 transition-all duration-700 ${
            showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Евгения Сергеева
        </p>
        <p
          className={`text-base sm:text-lg text-accent font-medium tracking-wide transition-all duration-700 ${
            showOffer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Рост без выгорания
        </p>
      </div>
    </div>
  );
};

export default Preloader;
