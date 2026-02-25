
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {

  return (
    <AnimatedSection className="section-padding" amount={0.4}>
      <div className="container">
        <AnimatedItem className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-10 text-center md:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Build the next wave of intelligent systems.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-base text-primary-foreground/90 md:text-lg leading-relaxed">
              Whether solving complex industry challenges or pioneering assistive robotics, we want to hear from you.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary focus-ring">
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 focus-ring">
                 <Link href="/contact">Intern / Partner</Link>
              </Button>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
