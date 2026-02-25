
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DOMAINS } from '@/lib/data';
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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((domain) => (
            <AnimatedItem key={domain.title}>
              <Card className="group h-full flex flex-col border-border/60 bg-card/50 backdrop-blur-sm shadow-sm card-hover-lift">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                        <domain.icon className={cn("h-7 w-7 transition-colors duration-300 group-hover:text-primary", domain.color)} />
                      </div>
                      <CardTitle className="text-xl md:text-2xl leading-tight">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="flex-grow px-6 pb-6 text-sm text-muted-foreground md:text-base leading-relaxed">
                    {domain.description}
                  </CardDescription>
                   {domain.href && <div className="px-6 pb-6 mt-auto">
                      <Link href={domain.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-ring rounded-sm">
                        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                   </div>}
                </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
