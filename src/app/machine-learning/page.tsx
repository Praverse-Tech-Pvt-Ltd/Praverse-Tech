
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Cpu, FlaskConical, Microscope, Stethoscope, Layers, Database, Shield } from 'lucide-react';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const useCases = [
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: 'Healthcare & Diagnostics',
    description: 'Leveraging multimodal AI on imaging, EHR, and genomic data for early detection, risk stratification, and personalized treatment pathways.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Generative AI & Assistants',
    description: 'Building custom LLMs and intelligent agents for complex Q&A, document summarization, and automating human-in-the-loop workflows.',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
    title: 'Federated & Privacy-First AI',
    description: 'Training models on decentralized data without compromising user privacy, essential for healthcare and on-device intelligence.',
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: 'Industrial & Scientific AI',
    description: 'Implementing advanced anomaly detection, predictive maintenance, and digital twin simulations for smart manufacturing and research.',
  },
];

const principles = [
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: 'Advanced Model Architectures',
    description: 'Transformers, GNNs, Diffusion Models & more.',
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: 'Data-Centric AI',
    description: 'Synthetic data, self-supervision, and robust feature engineering.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: 'Scalable MLOps',
    description: 'CI/CD, Kubernetes, and automated monitoring for production AI.',
  },
];

export default function MachineLearningPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-muted section-padding-sm" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem>
          <Badge className="mb-4">Machine Learning</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="prose-heading">Machine Learning at Praverse Tech</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
          <p className="mt-6 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Production-grade ML systems engineered for real-world challenges: noisy data, edge constraints, and regulatory oversight.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
            <h2 className="prose-heading">Applied AI Use Cases</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">Production-ready solutions across healthcare, generative AI, privacy-preserving systems, and industrial applications.</p>
          </AnimatedItem>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map(useCase => (
              <AnimatedItem key={useCase.title}>
              <Card className="h-full text-center border-border/60 bg-card/50 backdrop-blur-sm shadow-sm card-hover-lift">
                <CardHeader>
                  <div className="mx-auto w-fit rounded-lg bg-primary/10 p-4 ring-1 ring-primary/20">{useCase.icon}</div>
                  <CardTitle className="mt-4 text-lg">{useCase.title}</CardTitle>
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

       <AnimatedSection className="bg-muted section-padding" staggerChildren={0.15}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="prose-heading">Our Core ML Principles</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">Technology-agnostic first-principles thinking to select the optimal architecture for each challenge.</p>
          </AnimatedItem>
           <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {principles.map(tech => (
              <AnimatedItem key={tech.title}>
              <Card className="border border-border/60 bg-background/80 shadow-sm card-hover-lift">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {tech.icon}
                  <CardTitle className="text-lg font-semibold">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding-sm" amount={0.3}>
        <div className="container">
          <AnimatedItem>
          <Card className="border border-primary/20 bg-primary/5 shadow-lg">
            <CardHeader className="text-center space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Trustworthy AI by Design</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                In high-stakes environments, black-box models are a liability. We build systems centered on model governance, fairness, and continuous monitoring.
              </p>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Our commitment to explainable AI (XAI) includes techniques like Grad-CAM and SHAP, making model decisions transparent and trustworthy to human experts — ensuring solutions are both powerful and accountable.
              </p>
            </CardContent>
          </Card>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="section-padding">
        <div className="container">
          <AnimatedItem className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-10 text-center md:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Need a production-ready ML system?
              </h2>
              <p className="max-w-2xl mx-auto text-primary-foreground/90 text-base md:text-lg">
                Partner with us to build validated, scalable machine learning systems for regulated industries.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary focus-ring">
                  <Link href="/contact">Discuss a Project</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 focus-ring">
                   <Link href="/blog">View Selected Case Studies</Link>
                </Button>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
