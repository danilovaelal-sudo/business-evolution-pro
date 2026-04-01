import { useState, useEffect, useRef } from "react";

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  speed?: number;
}

const TypewriterHeading = ({
  text,
  className = "",
  as: Tag = "h2",
  speed = 35,
}: TypewriterHeadingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <Tag ref={ref as any} className={`${className} relative`}>
      {started ? displayedText : "\u00A0"}
      <span
        className="inline-block w-[2px] h-[0.8em] bg-accent/60 ml-1 align-middle animate-cursor-blink"
        aria-hidden="true"
      />
    </Tag>
  );
};

export default TypewriterHeading;
