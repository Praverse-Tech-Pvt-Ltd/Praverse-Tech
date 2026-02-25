
'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { FEATURED_PROJECTS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay"


export function FeaturedProjects() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Featured Projects & Initiatives
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into our ongoing work to shape the intelligent future.
          </p>
        </motion.div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {FEATURED_PROJECTS.map((project) => {
              const image = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex flex-col aspect-video items-center justify-center p-0 relative">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                         <div className="relative z-20 text-center text-white p-6 mt-auto w-full">
                           <h3 className="font-bold text-lg">{project.title}</h3>
                           <p className="text-sm opacity-80">{project.description}</p>
                         </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

