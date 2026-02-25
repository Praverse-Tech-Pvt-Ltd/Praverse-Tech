
'use client';
import * as React from 'react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PUBLICATIONS } from '@/lib/data';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';


export function ResearchPublications() {

  return (
    <AnimatedSection className="py-20 md:py-28" staggerChildren={0.12}>
      <div className="container">
        <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Research & Publications
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We are committed to advancing the field through peer-reviewed research.
          </p>
        </AnimatedItem>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {PUBLICATIONS.map((pub, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <AnimatedItem delay={index * 0.05} className="h-full">
                    <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-background/80 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary">{pub.badge}</Badge>
                          <span className="text-sm text-muted-foreground">{pub.year}</span>
                        </div>
                        <CardTitle className="pt-4">{pub.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <CardDescription>{pub.abstract}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Read Abstract</Button>
                      </CardFooter>
                    </Card>
                    </AnimatedItem>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
