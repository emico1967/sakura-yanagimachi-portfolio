import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    // Observe all fade-in-up children
    const targets = el.querySelectorAll(".fade-in-up, .timeline-line");
    targets.forEach((t) => observer.observe(t));

    // Also observe the element itself if it has fade-in-up
    if (el.classList.contains("fade-in-up") || el.classList.contains("timeline-line")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
