
"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { AnimatedLinkButton } from '@/components/ui/AnimatedLinkButton';

const COLORS = [
  '#6366F1', // indigo-500
  '#06B6D4', // cyan-500
  '#F97316', // orange-400
  '#EC4899', // pink-500
];

export function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(35% 35% at 50% 50%, hsl(var(--background)) 10%, transparent 100%), radial-gradient(100% 100% at 50% 50%, transparent 40%, ${color} 100%)`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <section className="relative w-full section-padding overflow-hidden">
       <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 z-0 opacity-70"
      />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="prose-heading text-foreground">
            Engineering Human-Centered Intelligence.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-foreground/90">
            Intelligent systems that learn, perceive, and collaborate — powering pharma AI, humanoid robotics, and next-generation bio-intelligence for regulated industries.
          </p>
          <p className="max-w-2xl mx-auto text-base text-foreground/70">
            Bringing validated innovations to market with precision and trust.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <AnimatedLinkButton href="#domains" className="focus-ring">
            Explore AI Domains <ArrowRight className="ml-2 h-4 w-4" />
          </AnimatedLinkButton>
          <AnimatedLinkButton href="/healthmate" className="bg-primary text-background border-transparent shadow-md hover:brightness-95 focus-ring">
            <span className="flex items-center gap-3">
              <span>Meet HealthMate</span>
              <span className="ml-1 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-background">Coming Soon</span>
            </span>
          </AnimatedLinkButton>
        </motion.div>
      </div>
    </section>
  );
}
