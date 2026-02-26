
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { Eye, Brain, Cpu, Orbit } from 'lucide-react';
import Image from 'next/image';
// Using a lightweight controlled tabs implementation for reliability
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const tabs = [
    { id: 'vision', label: 'Vision AI', icon: Eye, imageId: 'lab-vision-ai', title: 'Medical Imaging Analysis', description: 'Our vision models analyze retinal scans with superhuman accuracy, detecting subtle anomalies to assist in early diagnosis of diseases like diabetic retinopathy.' },
    { id: 'language', label: 'Language AI', icon: Brain, imageId: 'project-fda', title: 'FDA 483 Response Generation', description: 'We leverage large language models to draft comprehensive and compliant responses to regulatory observations, saving pharma companies weeks of work.' },
    { id: 'edge', label: 'Edge AI', icon: Cpu, imageId: 'lab-edge-ai', title: 'Real-Time Edge Inference', description: 'We optimize and deploy lightweight deep learning models on embedded systems for real-time applications, from industrial monitoring to wearable health tech.' },
    { id: 'simulation', label: 'Simulation', icon: Orbit, imageId: 'lab-simulation', title: 'Humanoid Digital Twins', description: 'In our virtual labs, we train humanoid robots in physics-based environments, accelerating development and testing of complex navigation and interaction algorithms.' },
]

export function AILabsShowcase() {
    return (
        <AnimatedSection className="section-padding bg-muted" staggerChildren={0.18} amount={0.3}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="prose-heading">AI Labs & Experiments</h2>
                    <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
                        Experimental research and development across vision, language, edge computing, and simulation.
                    </p>
                </AnimatedItem>

                <Controller />
            </div>
        </AnimatedSection>
    );
}

function Controller() {
    const [active, setActive] = useState<string>('vision');

    return (
        <div className="w-full">
            <div className="grid h-auto w-full grid-cols-2 md:grid-cols-4 gap-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={cn(
                            'inline-flex items-center justify-center py-3 gap-2 rounded-sm px-3 text-sm font-medium focus-ring transition-colors',
                            active === tab.id ? 'bg-primary/10 text-primary shadow-sm' : 'bg-muted text-muted-foreground'
                        )}
                        aria-pressed={active === tab.id}
                    >
                        <tab.icon className="w-5 h-5" />
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {(() => {
                // simple render of active tab (avoid animation issues)
                const tab = tabs.find(t => t.id === active) || tabs[0];
                const image = PlaceHolderImages.find(p => p.id === tab.imageId);

                return (
                    <div className="mt-8">
                        <Card className="overflow-hidden border-border/60 shadow-lg">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-semibold md:text-2xl">{tab.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground md:text-base">{tab.description}</p>
                                </div>
                                <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-border/70 bg-background/60 shadow-inner">
                                    {image ? (
                                      <Image
                                        src={image.imageUrl}
                                        alt={tab.title}
                                        fill
                                                                                loading="eager"
                                        sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center w-full h-full text-muted-foreground">No preview available</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/20 mix-blend-overlay pointer-events-none" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                );
            })()}
        </div>
    );
}
