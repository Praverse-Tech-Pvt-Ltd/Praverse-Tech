
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WaitlistDialog } from './WaitlistDialog';
import { BriefingDialog } from './BriefingDialog';

export function HealthMateHero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-background text-foreground">
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0 opacity-50">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-radial-hero" />


      {/* Silhouette and glow */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Placeholder for silhouette - using a gradient for effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-t from-transparent via-primary/10 to-transparent"
             style={{
                maskImage: 'url("/humanoid-silhouette.svg")',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'bottom center',
             }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          HealthMate — A New Kind of Care.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A humanoid-robot intelligence from Praverse Tech. Private beta. Launching soon.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
            <Button size="lg" variant="secondary">Join Waitlist</Button>
          </WaitlistDialog>
          <BriefingDialog open={isBriefingOpen} onOpenChange={setIsBriefingOpen}>
            <Button size="lg" variant="outline" className="bg-transparent border-foreground/50 hover:bg-foreground/10">
              Request NDA Briefing
            </Button>
          </BriefingDialog>
        </div>
      </motion.div>
    </section>
  );
}
