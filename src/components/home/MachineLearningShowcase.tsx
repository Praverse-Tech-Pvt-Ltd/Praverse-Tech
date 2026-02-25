
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database, Layers, BrainCircuit, Bot, Network } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const pipelineSteps = [
    { name: 'Data', icon: <Database className="w-8 h-8"/> },
    { name: 'Feature Eng.', icon: <Layers className="w-8 h-8"/> },
    { name: 'Training', icon: <BrainCircuit className="w-8 h-8"/> },
    { name: 'Evaluation', icon: <Bot className="w-8 h-8"/> },
    { name: 'Deployment', icon: <Network className="w-8 h-8"/> }
];

export function MachineLearningShowcase() {
  return (
    <AnimatedSection className="section-padding bg-background" staggerChildren={0.2}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <AnimatedItem direction="left" className="space-y-6 lg:space-y-8">
            <h2 className="prose-heading">
              Machine Learning & Applied AI
            </h2>
            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
              From clinical decision support to intelligent automation, we design and deploy production-ready ML systems that are robust, explainable, and validated.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">End-to-end ML lifecycle: data → model → validation → deployment.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">Computer vision for healthcare & imaging (fundus, ultrasound, diagnostics).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">NLP for assistants, triage bots, and document understanding.</span>
              </li>
               <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">MLOps: monitoring, drift detection, and CI/CD for production ML.</span>
              </li>
            </ul>
             <Button asChild className="focus-ring">
                <Link href="/machine-learning">Explore ML Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedItem>
          <AnimatedItem direction="right">
             <Card className="border-border/60 bg-card/50 backdrop-blur-sm p-8 shadow-lg">
                <CardContent className="p-0">
                    <h3 className="text-center font-semibold mb-6 text-lg">Production ML Pipeline</h3>
                    <div className="relative flex flex-wrap items-center justify-between gap-6">
                        {pipelineSteps.map((step, index) => (
                           <AnimatedItem
                                key={step.name}
                                className="flex flex-col items-center gap-3 z-10 group"
                                delay={index * 0.1}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10">
                                    {step.icon}
                                </div>
                                <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{step.name}</span>
                           </AnimatedItem>
                        ))}
                        {/* center line removed as requested */}
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Vision</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">NLP</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Tabular</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Edge</span>
                    </div>
                </CardContent>
             </Card>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
