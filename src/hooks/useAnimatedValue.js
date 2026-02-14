/**
 * Custom hook for animating numeric values with easeOutQuart easing.
 * Replicates the Statistics.animateValue behavior from the original app.
 *
 * @param {number} targetValue - The target number to animate towards
 * @param {number} duration - Animation duration in milliseconds (default 1000)
 * @returns {number} The current animated value
 */

import { useState, useEffect, useRef } from 'react';

export function useAnimatedValue(targetValue, duration = 1000) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const previousValue = useRef(targetValue);
  const animationRef = useRef(null);

  useEffect(() => {
    const start = previousValue.current;
    const end = targetValue;
    const range = end - start;

    // Skip animation if there's no change
    if (range === 0) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // EaseOutQuart easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + range * easeOutQuart);

      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        previousValue.current = end;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration]);

  return displayValue;
}
