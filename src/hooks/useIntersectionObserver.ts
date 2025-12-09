import { useEffect, useRef, useState } from "react";

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: ObserverOptions = { threshold: 0.2 }
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (element) observer.unobserve(element); // Stop observing once visible
      }
    }, options);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { ref, isVisible };
}