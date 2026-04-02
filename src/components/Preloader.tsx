import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2400);
    const remove = setTimeout(onComplete, 3000);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Solar system */}
      <div className="relative w-48 h-48 mb-10">
        {/* Sun core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_6px_hsl(38_65%_55%/0.4)]" />

        {/* Orbit 1 */}
        <div className="absolute inset-[28%] rounded-full border border-border/30 animate-[spin_3s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/80 shadow-[0_0_8px_2px_hsl(38_65%_55%/0.3)]" />
        </div>

        {/* Orbit 2 */}
        <div className="absolute inset-[14%] rounded-full border border-border/20 animate-[spin_5s_linear_infinite_reverse]">
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground/60 shadow-[0_0_8px_2px_hsl(220_10%_92%/0.15)]" />
        </div>

        {/* Orbit 3 */}
        <div className="absolute inset-[2%] rounded-full border border-border/15 animate-[spin_8s_linear_infinite]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/50" />
        </div>
      </div>

      {/* Offer text */}
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium mb-2">
        Евгения Сергеева
      </p>
      <p className="text-base text-accent font-medium tracking-wide">
        Рост без выгорания
      </p>
    </div>
  );
};

export default Preloader;
