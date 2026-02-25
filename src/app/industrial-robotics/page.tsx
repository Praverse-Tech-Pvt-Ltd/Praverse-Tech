import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Gauge, Network, Eye, Wrench, BarChart3, Factory, Beaker, Building2, FlaskConical, ShieldCheck, Cog, Target, Workflow, Zap } from 'lucide-react';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const capabilities = [
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: 'Custom Robotic System Design',
    description: 'Application-specific robotic solutions engineered for industrial operations.',
  },
  {
    icon: <Gauge className="w-8 h-8 text-primary" />,
    title: 'Precision Automation',
    description: 'Tight control of temperature, pressure, motion, and process parameters.',
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: 'Industrial Control Integration',
    description: 'Seamless integration with PLC, SCADA, and existing control systems.',
  },
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: 'Semi-Autonomous Systems',
    description: 'Development of supervised robotic systems with human-in-the-loop control.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: 'Equipment Retrofitting',
    description: 'Upgrading existing equipment with robotic intelligence and automation.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: 'Data-Driven Monitoring',
    description: 'Real-time monitoring and control for improved process accuracy.',
  },
];

const applications = [
  {
    icon: <Beaker className="w-6 h-6 text-primary" />,
    title: 'Pharmaceutical & Life-Science Manufacturing',
    description: 'Process-critical automation for regulated environments.',
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    title: 'Chemical & Process Industries',
    description: 'Precision control for complex chemical processes.',
  },
  {
    icon: <Factory className="w-6 h-6 text-primary" />,
    title: 'High-Precision Industrial Operations',
    description: 'Automation where repeatability and reliability are essential.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: 'R&D, Pilot Plants, Scale-Up Facilities',
    description: 'Flexible systems that adapt from lab to production scale.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Controlled & Regulated Production',
    description: 'Solutions designed for traceability and compliance.',
  },
];

const engineeringSteps = [
  {
    icon: <Cog className="w-7 h-7 text-primary" />,
    title: 'Mechanical & Mechatronic Design',
    description: 'Purpose-built mechanical systems for industrial environments.',
  },
  {
    icon: <Network className="w-7 h-7 text-primary" />,
    title: 'Industrial Control Systems',
    description: 'PLC and SCADA programming for robust process control.',
  },
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    title: 'Sensors & Instrumentation',
    description: 'Calibration strategies and measurement systems for process accuracy.',
  },
  {
    icon: <Workflow className="w-7 h-7 text-primary" />,
    title: 'Process Understanding',
    description: 'Validation-ready design with process engineering principles.',
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: 'Human-in-the-Loop Safety',
    description: 'Control architectures that prioritize operator safety and oversight.',
  },
];

const reasons = [
  'Focus on custom industrial robotics, not generic solutions',
  'Strong expertise in process-critical automation',
  'Designed for real industrial conditions, not lab-only demos',
  'Seamless integration with existing plant infrastructure',
  'Scalable systems evolving from manual to semi-autonomous operation',
];

export default function IndustrialRoboticsPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-muted section-padding-sm" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem>
            <Badge className="mb-4">Industrial Automation</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <h1 className="prose-heading">Industrial Robotics & Precision Automation</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="mt-6 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
              Custom robotic and automation systems engineered for industrial environments demanding precision, repeatability, and regulatory compliance.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.3}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="focus-ring">
                <Link href="/contact">Discuss a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="focus-ring">
                <Link href="#capabilities">Explore Capabilities</Link>
              </Button>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-2xl font-semibold md:text-3xl text-center">Engineering for Regulated Environments</h2>
            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
              We engineer application-specific industrial robotic systems designed for environments where process control and regulatory compliance are paramount. Our solutions enable tight control of critical parameters in high-value manufacturing operations.
            </p>
            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
              From pharmaceutical production to chemical processing, our systems are built for regulated, high-stakes industrial environments that demand traceability, repeatability, and long-term reliability.
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection id="capabilities" className="bg-muted section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
            <h2 className="prose-heading">Core Capabilities</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
              Custom automation solutions tailored to your industrial requirements.
            </p>
          </AnimatedItem>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(capability => (
              <AnimatedItem key={capability.title}>
                <Card className="h-full border-border/60 bg-background/80 shadow-sm card-hover-lift">
                  <CardHeader>
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">{capability.icon}</div>
                    <CardTitle className="text-lg leading-tight">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.15}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
            <h2 className="prose-heading">Target Applications</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
              Systems designed for environments where precision and compliance are non-negotiable.
            </p>
          </AnimatedItem>
          <div className="mx-auto max-w-4xl space-y-6">
            {applications.map(application => (
              <AnimatedItem key={application.title}>
                <Card className="border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                      {application.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold leading-tight">{application.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{application.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.15}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Engineering Approach</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We combine mechanical engineering, control systems expertise, and process understanding to deliver robust automation solutions.
            </p>
          </AnimatedItem>
          <div className="mx-auto max-w-3xl space-y-6">
            {engineeringSteps.map((step, index) => (
              <AnimatedItem key={step.title}>
                <Card className="border border-border/60 bg-background shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedItem>
            ))}
          </div>
          <AnimatedItem className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-base text-muted-foreground md:text-lg">
              Every system is designed with traceability, repeatability, and long-term reliability as core requirements, ensuring your automation infrastructure performs consistently over its operational lifetime.
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We bring deep industrial experience and a commitment to engineering excellence.
            </p>
          </AnimatedItem>
          <div className="mx-auto max-w-3xl space-y-4">
            {reasons.map((reason, index) => (
              <AnimatedItem key={index}>
                <Card className="border border-primary/20 bg-primary/5 transition-colors duration-300 hover:bg-primary/10">
                  <CardHeader className="flex flex-row items-center gap-4 py-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Factory className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-base font-medium text-foreground">{reason}</p>
                  </CardHeader>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:pb-28">
        <div className="container">
          <AnimatedItem className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center md:p-12">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Discuss a precision automation requirement with our engineering team.
              </h2>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
