import { useEffect, useCallback } from "react";

export const useScrollAnimation = () => {
  const init = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully painted
    const timeout = setTimeout(init, 100);
    return () => clearTimeout(timeout);
  }, [init]);
};
