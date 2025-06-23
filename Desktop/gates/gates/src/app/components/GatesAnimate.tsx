// components/AnimatedImpactMetrics.tsx
"use client"; // This component uses client-side hooks for animation

import React, { useState, useEffect, useRef } from 'react';

// Custom hook for number animation
interface AnimateNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimateNumber: React.FC<AnimateNumberProps> = ({ value, duration = 2000, suffix = '', prefix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false); // To prevent re-animation on re-renders

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          let startValue = 0;
          const increment = value / (duration / 16); // ~60 frames per second
          let frame = 0;

          const animate = () => {
            startValue += increment;
            frame++;
            if (frame * 16 < duration) {
              setCurrentValue(Math.floor(startValue));
              requestAnimationFrame(animate);
            } else {
              setCurrentValue(value);
              hasAnimated.current = true; // Mark as animated
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, duration]);

  // Format the number with commas and add prefix/suffix
  const formattedValue = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(currentValue);

  return (
    <span ref={ref}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};


const GatesAnimate: React.FC = () => {
  const metrics = [
    {
      id: 1,
      displayValue: 500, // Actual number for animation
      label: "Communities Supported",
      suffix: "+"
    },
    {
      id: 2,
      displayValue: 10, // Actual number for animation
      label: "Lives Impacted",
      suffix: "M+"
    },
    {
      id: 3,
      displayValue: 15, // Actual number for animation
      label: "Counties Reached",
      suffix: "+"
    },
  ];

  return (
    // Inspired by the image's background, which appears to be a light green/white
    <section className="bg-[#F8FFF8] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric) => (
            <div key={metric.id} className="p-4">
              <p className="text-5xl md:text-6xl font-extrabold text-green-600 mb-2">
                <AnimateNumber
                  value={metric.displayValue}
                  suffix={metric.suffix}
                  duration={2500} // Animation duration in ms
                />
              </p>
              <p className="text-lg text-gray-700">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatesAnimate;