import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
}

/**
 * A hook that detects when an element enters the viewport and applies
 * a 'visible' class for triggering animations.
 * 
 * @param options Configuration options for the intersection observer
 * @returns An object containing the ref to attach to the element and a boolean indicating visibility
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay * 1000);
            
            // Once the animation is triggered, unobserve the element
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, threshold, delay]);

  return { ref: elementRef, isVisible };
};

export default useScrollAnimation;
