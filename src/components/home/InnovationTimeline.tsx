
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { TIMELINE } from '@/lib/data';

export function InnovationTimeline() {

  return (
    <AnimatedSection className="section-padding bg-muted" staggerChildren={0.08}>
      <div className="container mx-auto max-w-5xl">
        <AnimatedItem className="mb-20 text-center">
          <h2 className="prose-heading">Our Innovation Timeline</h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">Key milestones in our journey to build trustworthy AI systems.</p>
        </AnimatedItem>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/70 md:left-1/2" />

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem
                key={item.year}
                direction="up"
                delay={index * 0.05}
                className="relative mb-12 md:mb-16"
              >
                <div className="relative flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2 md:top-4">
                    <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_8px_hsl(var(--primary)/0.15)] ring-2 ring-background md:shadow-[0_0_0_12px_hsl(var(--primary)/0.1)]" />
                  </div>
                  <div
                    className={`ml-8 rounded-xl border border-border/60 bg-background/90 p-6 shadow-lg backdrop-blur-sm md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    <p className="text-lg font-bold text-primary md:text-xl">{item.year}</p>
                    <h3 className="mt-3 text-lg font-semibold md:text-xl">{item.event}</h3>
                    <p className="mt-3 text-sm text-muted-foreground md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
