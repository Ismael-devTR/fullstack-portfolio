import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollReveal = <T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
}: ScrollRevealOptions = {}): [(node: T | null) => void, boolean] => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && entry.target) observerRef.current?.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin, once]);

  const callbackRef = useCallback((node: T | null) => {
    if (elementRef.current) {
      observerRef.current?.unobserve(elementRef.current);
    }
    elementRef.current = node;
    if (node) {
      observerRef.current?.observe(node);
    }
  }, []);

  return [callbackRef, isVisible];
};
