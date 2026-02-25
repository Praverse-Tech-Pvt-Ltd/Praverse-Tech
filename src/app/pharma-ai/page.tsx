
import Image from 'next/image';
import { FdaResponseGenerator } from '@/components/FdaResponseGenerator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, FileText, GanttChartSquare, Layers, Search } from 'lucide-react';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'pharma-hero');

export default function PharmaAiPage() {
  const useCases = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'FDA 483 Response Assist',
      description: 'Drastically reduce the time to draft comprehensive and compliant responses to FDA observations.',
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: 'OOS/OOT Analysis Aid',
      description: 'Accelerate root cause analysis for Out-of-Specification and Out-of-Trend results with AI-powered insights.',
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: 'DI Assessment Helpers',
      description: 'Streamline Data Integrity audits by automatically flagging potential anomalies and inconsistencies.',
    },
    {
      icon: <GanttChartSquare className="w-8 h-8 text-primary" />,
      title: 'SOP Automation',
      description: 'Generate, review, and manage Standard Operating Procedures with unparalleled speed and consistency.',
    },
  ];

  const workflowSteps = [
    { name: 'Ingest', description: 'Securely upload your FDA 483, warning letter, or other compliance documents.' },
    { name: 'Analyze', description: 'Our domain-trained AI parses the document, identifying key observations and requirements.' },
    { name: 'Draft', description: 'A comprehensive, referenced draft response is generated in minutes.' },
    { name: 'Review', description: 'Your team reviews, edits, and finalizes the AI-assisted draft, maintaining full control.' },
    { name: 'Archive', description: 'All documents and versions are securely archived for future reference and audits.' },
  ];

  return (
    <div>
      <AnimatedSection className="relative bg-primary section-padding-sm text-primary-foreground" amount={0.6}>
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <AnimatedItem>
          <Badge variant="secondary" className="mb-4">AI for Pharma</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="prose-heading text-primary-foreground">Automate Compliance, Accelerate Release</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
          <p className="mt-6 mx-auto max-w-3xl text-base text-primary-foreground/90 md:text-lg leading-relaxed">
            Specialized AI for pharmaceutical compliance — from FDA responses to SOP management, built for regulated environments.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
            <h2 className="prose-heading">Revolutionize Your GxP Workflows</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">AI tools purpose-built to address your most pressing compliance challenges.</p>
          </AnimatedItem>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map(useCase => (
              <AnimatedItem key={useCase.title}>
              <Card className="flex h-full flex-col text-center border-border/60 bg-card/50 backdrop-blur-sm shadow-sm card-hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-4 ring-1 ring-primary/20">{useCase.icon}</div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted section-padding" staggerChildren={0.18}>
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:gap-16">
            <AnimatedItem direction="left" className="rounded-xl border border-border/60 bg-background/90 p-8 shadow-2xl backdrop-blur">
              <Badge className="mb-4">Live Demo</Badge>
              <h2 className="text-2xl font-semibold md:text-3xl">FDA 483 Response Generator</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg leading-relaxed">
                Experience the power of Praverse Tech. Paste an FDA 483 observation and watch our AI generate a structured, compliant draft response.
              </p>
               <div className="mt-8 rounded-lg border border-dashed border-primary/30 bg-background p-6">
                <FdaResponseGenerator />
              </div>
            </AnimatedItem>
            <AnimatedItem direction="right" className="space-y-8">
              <h3 className="text-2xl font-semibold md:text-3xl">From Document to Draft</h3>
              {workflowSteps.map((step, index) => (
                <div key={step.name} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md ring-2 ring-primary/20">{index + 1}</div>
                    {index < workflowSteps.length - 1 && <div className="w-0.5 flex-grow bg-border/70" />}
                  </div>
                  <div className="flex-1 rounded-lg border border-border/60 bg-background/80 p-4 shadow-sm">
                    <h4 className="font-semibold text-primary text-base">{step.name}</h4>
                    <p className="text-sm text-muted-foreground md:text-base leading-relaxed mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding-sm" amount={0.3}>
        <div className="container">
          <AnimatedItem>
          <Card className="border border-primary/20 bg-primary/5 shadow-lg">
            <CardHeader className="text-center space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">A Note on Compliance</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Praverse Tech's tools are designed to align with industry best practices and guidelines such as USFDA 21 CFR Part 211, ICH Q9 (Quality Risk Management), and ICH Q10 (Pharmaceutical Quality System).
              </p>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Our platform acts as a powerful assistant, augmenting the expertise of your QA and RA teams. All AI-generated outputs are drafts and require final review by qualified personnel. We do not make legal claims of guaranteed compliance.
              </p>
              <Button asChild className="mt-6 focus-ring">
                <Link href="/contact">Discuss Your Compliance Needs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
