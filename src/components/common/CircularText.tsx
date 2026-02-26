import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
  children?: React.ReactNode;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  children
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState(40);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    // radius is half the smallest dimension minus a padding for the logo
    const r = Math.max(12, Math.min(width, height) / 2 - 12);
    setRadius(r);
  }, []);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`m-0 mx-auto rounded-full relative font-black text-white text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation, ['--r' as any]: `${radius}px` }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        // Each letter is placed by rotating the container and translating outward by --r
        const outerTransform = `rotate(${rotationDeg}deg) translateY(calc(var(--r) * -1))`;
        // Then the inner element counter-rotates so the glyph is upright
        const innerTransform = `rotate(${-rotationDeg}deg)`;

        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 inline-block origin-center transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform: outerTransform, WebkitTransform: outerTransform }}
          >
            <span style={{ display: 'inline-block', transform: innerTransform, WebkitTransform: innerTransform }} className="leading-none">
              {letter}
            </span>
          </span>
        );
      })}

      {/* Center content (logo) */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default CircularText;
