
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { useMemoFirebase, useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '../ui/skeleton';

interface TimelineItem {
  date: string;
  description: string;
}

export function Timeline() {
  const firestore = useFirestore();
  const timelineQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'hm_timeline');
  }, [firestore]);

  const { data: timeline, isLoading } = useCollection<TimelineItem>(timelineQuery);

  const sortedTimeline = timeline ? [...timeline].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) : [];

  if (isLoading) {
    return (
        <AnimatedSection className="py-20 md:py-28">
            <div className="container max-w-3xl mx-auto">
                 <AnimatedItem className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Roadmap</h2>
                    <p className="mt-4 text-muted-foreground text-lg">The journey to a new kind of care.</p>
                </AnimatedItem>
                <div className="space-y-8">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                </div>
            </div>
        </AnimatedSection>
    )
  }
  
  return (
    <AnimatedSection className="py-20 md:py-28" staggerChildren={0.08}>
      <div className="container max-w-3xl mx-auto">
        <AnimatedItem className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Roadmap</h2>
          <p className="mt-4 text-muted-foreground text-lg">The journey to a new kind of care.</p>
        </AnimatedItem>
        <div className="relative pl-6 md:pl-0">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-1/2" aria-hidden="true"></div>
          {sortedTimeline.map((item, index) => (
            <AnimatedItem
              key={item.date}
              direction="up"
              delay={index * 0.05}
              className="relative mb-12"
            >
              <div className={`rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} md:pr-8 md:pl-8`}>
                <p className="text-lg font-bold text-primary">{item.date}</p>
                <p className="mt-1 text-muted-foreground">{item.description}</p>
              </div>
              <div className="absolute left-3 top-8 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
                <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_10px_rgba(6,182,212,0.2)]" aria-hidden="true" />
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
