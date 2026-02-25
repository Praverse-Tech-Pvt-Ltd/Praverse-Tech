
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DOMAINS } from '@/lib/data';
import MagicBento from './MagicBento';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Domains() {
  return (
    <AnimatedSection
      id="domains"
      className="section-padding bg-background"
      staggerChildren={0.12}
      amount={0.35}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="prose-heading">
            Our Core Innovation Domains
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
            Multi-disciplinary expertise pushing the boundaries of intelligent systems across regulated industries and advanced robotics.
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
