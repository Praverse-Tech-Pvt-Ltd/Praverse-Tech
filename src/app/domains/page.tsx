
import { DOMAINS } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

export default function DomainsPage() {
  return (
    <div>
      <AnimatedSection className="bg-muted pt-24 pb-12 md:pt-32 md:pb-20" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem>
          <h1 className="text-4xl font-bold md:text-5xl">Innovation Domains</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            We are a multi-disciplinary team of experts pushing the boundaries of what's possible in intelligent systems.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      <AnimatedSection className="py-20" staggerChildren={0.15}>
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {DOMAINS.map((domain) => {
              const card = (
                <Card className="group flex h-full flex-col overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <domain.icon className={cn("h-8 w-8 transition-colors duration-300 group-hover:text-primary", domain.color)} />
                      </div>
                      <CardTitle className="text-xl">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="px-6 pb-6 text-sm flex-grow">
                    {domain.description}
                  </CardDescription>
                  <div className="px-6 pb-4">
                    <div className="text-sm font-semibold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Domain <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              );

              if (domain.href) {
                return (
                  <AnimatedItem key={domain.title}>
                  <Link href={domain.href} className="block h-full">
                    {card}
                  </Link>
                  </AnimatedItem>
                );
              }

              return (
                <AnimatedItem key={domain.title}>
                <div className="group block h-full cursor-default">
                  {card}
                </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
