
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { InnovateForm } from '@/components/innovate/InnovateForm';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const processSteps = [
    { name: 'Submit Idea', description: 'Fill out our confidential pitch form with your concept.' },
    { name: 'Review', description: 'Our expert panel reviews every submission for feasibility, impact, and alignment.' },
    { name: 'Collaborate', description: 'If selected, we will reach out to schedule a meeting and discuss next steps.' },
    { name: 'Prototype', description: 'We work with you to build a proof-of-concept or minimum viable product.' },
    { name: 'Launch', description: 'Leverage our ecosystem to take your innovation to market.' },
  ];
  

export default function InnovatePage() {
  return (
    <div>
        <AnimatedSection className="relative bg-primary pt-24 pb-12 text-primary-foreground md:pt-32 md:pb-20" amount={0.5}>
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-5"></div>
            <div className="container relative z-10 text-center">
                <AnimatedItem>
                <h1 className="text-4xl md:text-5xl font-bold">Innovate With Us</h1>
                </AnimatedItem>
                <AnimatedItem delay={0.1}>
                <p className="mt-4 mx-auto max-w-3xl text-base text-primary-foreground/80 md:text-lg">
                    Your ideas have the power to change industries. We provide the expertise, resources, and partnership to help you bring them to life.
                </p>
                </AnimatedItem>
            </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 md:py-28" staggerChildren={0.18}>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <AnimatedItem direction="left" className="space-y-6">
                        <h2 className="text-3xl font-bold md:text-4xl">Why Collaborate with Praverse?</h2>
                        <p className="text-base text-muted-foreground md:text-lg">
                            We're more than just a technology provider; we're a launchpad for deep-tech innovation.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Rocket className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Technical & Product Expertise</h3>
                                    <p className="text-sm text-muted-foreground">From AI model development to MLOps and robotics simulation, our team provides the technical firepower to build robust products.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Handshake className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Founder Mentorship</h3>
                                    <p className="text-sm text-muted-foreground">Gain direct access to our founder and leadership for strategic guidance, architectural reviews, and go-to-market planning.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Lightbulb className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">From Idea to Market</h3>
                                    <p className="text-sm text-muted-foreground">We help you navigate the entire product lifecycle, from initial prototype to a scalable, market-ready solution.</p>
                                </div>
                            </li>
                        </ul>
                    </AnimatedItem>
                     <AnimatedItem direction="right">
                        <Card className="border border-border/60 shadow-xl">
                            <CardHeader className="space-y-2">
                                <CardTitle>Pitch Your Idea</CardTitle>
                                <CardDescription>Ready to start? Fill out the form to submit your concept.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <InnovateForm />
                            </CardContent>
                        </Card>
                    </AnimatedItem>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.12}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">A transparent and collaborative journey from concept to reality.</p>
                </AnimatedItem>
                <div className="relative max-w-5xl mx-auto">
                     <div className="absolute left-0 top-4 right-0 h-0.5 bg-border -z-10" />
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {processSteps.map((step, index) => (
                        <AnimatedItem key={step.name} delay={index * 0.05} className="flex flex-col items-center">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-muted bg-primary text-base font-bold text-primary-foreground shadow-md">{index + 1}</div>
                            <h4 className="font-semibold">{step.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </AnimatedItem>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="py-20" amount={0.3}>
            <div className="container">
            <AnimatedItem>
            <Card className="border border-primary/20 bg-primary/5">
                <CardHeader className="flex-row items-center justify-center gap-4 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <ShieldCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle className="text-xl font-bold md:text-2xl">Your Ideas Are Safe With Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center max-w-3xl mx-auto">
                <p className="text-muted-foreground">
                    We believe that great ideas deserve protection. All submissions are treated as strictly confidential. We respect intellectual property and are committed to a transparent and fair collaboration process. Formal NDAs will be established before any detailed technical discussions.
                </p>
                </CardContent>
            </Card>
            </AnimatedItem>
            </div>
      </AnimatedSection>
    </div>
  )
}
