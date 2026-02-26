
"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import Iridescence from '@/components/common/Iridescence';
import { AnimatedLinkButton } from '@/components/ui/AnimatedLinkButton';

const COLORS = [
  '#6366F1', // indigo-500
  '#06B6D4', // cyan-500
  '#F97316', // orange-400
  '#EC4899', // pink-500
];

export function Hero() {
  const [shaderColor, setShaderColor] = useState<[number, number, number]>([0.5, 0.6, 0.8]);

  useEffect(() => {
    function parseHslVar(varName: string) {
      try {
        const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        if (!raw) return null;
        // raw expected like: "173 80% 40%"
        const parts = raw.split(/\s+/);
        const h = parseFloat(parts[0]);
        const s = parseFloat(parts[1]) / 100;
        const l = parseFloat(parts[2]) / 100;

        // HSL to RGB (0-1)
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        if (s === 0) {
          return [l, l, l] as [number, number, number];
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const hk = (h % 360) / 360;
        const r = hue2rgb(p, q, hk + 1 / 3);
        const g = hue2rgb(p, q, hk);
        const b = hue2rgb(p, q, hk - 1 / 3);
        return [r, g, b] as [number, number, number];
      } catch (e) {
        return null;
      }
    }

    const parsed = parseHslVar('--primary');
    if (parsed) setShaderColor(parsed);
  }, []);
  return (
    <section className="relative w-full section-padding overflow-hidden">
      <Iridescence color={shaderColor} mouseReact amplitude={0.1} speed={1} className="absolute inset-0 z-0 opacity-80" />
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
          <AnimatedLinkButton href="#domains" className="focus-ring bg-white/10 text-white border-transparent shadow-md">
            Explore AI Domains <ArrowRight className="ml-2 h-4 w-4" />
          </AnimatedLinkButton>
          <AnimatedLinkButton href="/healthmate" className="bg-primary text-background border-transparent shadow-md hover:brightness-110 focus-ring">
            <span className="flex items-center gap-3">
              <span>Meet HealthMate</span>
              <span className="ml-1 inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-primary">Coming Soon</span>
            </span>
          </AnimatedLinkButton>
        </motion.div>
      </div>
    </section>
  );
}
