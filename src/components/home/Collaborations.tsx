
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Lightbulb, Handshake, BrainCircuit, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const collaborationItems = [
    {
        icon: Lightbulb,
        title: 'Pitch Your Concept',
        description: 'Turn your idea into a structured proposal. We review every high-potential pitch personally.',
        buttonText: 'Submit Your Idea',
        href: '/innovate'
    },
    {
        icon: Handshake,
        title: 'Co-build & Innovate Together',
        description: 'Partner with Praverse Tech to co-develop AI/ML models, software tools, robotics solutions, or healthcare innovations.',
        buttonText: 'Collaborate',
        href: '/innovate'
    },
    {
        icon: BrainCircuit,
        title: 'Founder Guidance & Technical Direction',
        description: 'Get direction, prototype support, architectural guidance, and help in taking your idea to market.',
        buttonText: 'Get Mentored',
        href: '/innovate'
    }
];

export function Collaborations() {
    return (
        <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.14}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pitch Your Idea. Build With Us. Change the Future.</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">
                        We collaborate with innovators, students, researchers, and early-stage founders to turn breakthrough concepts into real-world products. If you have an idea in AI, healthcare, robotics, software, or emerging tech — let’s make it happen together.
                    </p>
                </AnimatedItem>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {collaborationItems.map((item, index) => (
                        <AnimatedItem
                            key={item.title}
                            delay={index * 0.1}
                        >
                            <Card className="glassmorphism flex h-full flex-col border-border/60 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <CardHeader>
                                    <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
                                        <item.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={item.href}>{item.buttonText}</Link>
                                    </Button>
                                </div>
                            </Card>
                        </AnimatedItem>
                    ))}
                </div>
                 <AnimatedItem className="mt-16">
                    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-20 blur-lg animate-pulse" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold">Have a game-changing idea? Let’s bring it to life.</h3>
                            <Button asChild className="mt-6">
                                <Link href="/innovate">Start Your Pitch <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedItem>
            </div>
        </AnimatedSection>
    );
}
