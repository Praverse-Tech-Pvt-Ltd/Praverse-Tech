'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode, useMemo, type ElementType, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

const directionVariants: Record<Direction, { hidden: Variants['hidden'] }> = {
  up: { hidden: { opacity: 0, y: 56 } },
  down: { hidden: { opacity: 0, y: -56 } },
  left: { hidden: { opacity: 0, x: 56 } },
  right: { hidden: { opacity: 0, x: -56 } },
  scale: { hidden: { opacity: 0, scale: 0.9 } },
};

type BaseAnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
};

type AnimatedSectionProps<T extends keyof JSX.IntrinsicElements = 'section'> =
  BaseAnimatedSectionProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseAnimatedSectionProps | 'ref' | 'children'> & {
    as?: T;
  };

export function AnimatedSection<T extends keyof JSX.IntrinsicElements = 'section'>({
  as = 'section' as T,
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  staggerChildren,
  once = true,
  amount = 0.25,
  ...rest
}: AnimatedSectionProps<T>) {
  const MotionComponent = useMemo(() => motion.create(as as ElementType), [as]);

  const variants: Variants = useMemo(() => {
    const chosen = directionVariants[direction] ?? directionVariants.up;
    return {
      hidden: chosen.hidden,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 20,
          delay,
          duration,
          staggerChildren,
        },
      },
    };
  }, [direction, delay, duration, staggerChildren]);

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

type AnimatedItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
};

export function AnimatedItem({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: AnimatedItemProps) {
  const variants: Variants = useMemo(() => {
    const chosen = directionVariants[direction] ?? directionVariants.up;
    return {
      hidden: chosen.hidden,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 160,
          damping: 16,
          delay,
          duration,
        },
      },
    };
  }, [direction, delay, duration]);

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}

