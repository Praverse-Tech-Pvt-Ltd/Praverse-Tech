"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Microscope,
  FileCheck2,
  Bot,
  ScanLine,
  Cpu,
  Lock,
  Building2,
  HeartPulse,
  Stethoscope,
  Factory,
  Landmark,
  ArrowRight,
  Gauge,
} from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import JoinWaitlistButton from "@/components/common/JoinWaitlistButton";
import { WaitlistDialog } from "@/components/healthmate/WaitlistDialog";

const trustBadges = [
  "Security-first",
  "Explainable AI",
  "Validation-ready",
  "Audit-friendly",
  "Enterprise support",
];

const solutionPillars = [
  {
    icon: <Microscope className="h-6 w-6 text-primary" />,
    title: "Pharma Regulatory Automation",
    body: "AI-assisted workflows for FDA 483 analysis, CAPA readiness, and structured compliance operations.",
    bullets: ["Observation clustering", "Root-cause drafting", "Response acceleration"],
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-primary" />,
    title: "GxP Data Integrity & Governance",
    body: "Control frameworks aligned to ALCOA+ with enforceable governance and end-to-end traceability.",
    bullets: ["Audit trails", "Role controls", "Data lineage"],
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "Document Intelligence at Scale",
    body: "Structured extraction, classification, and summarization for quality, regulatory, and clinical documents.",
    bullets: ["Template-aware parsing", "Classification pipelines", "Review prioritization"],
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "AI Assistants for Operations",
    body: "SOP-aware copilots and guided decision flows designed for regulated enterprise environments.",
    bullets: ["SOP-grounded answers", "Task guidance", "Human-in-loop checkpoints"],
  },
  {
    icon: <ScanLine className="h-6 w-6 text-primary" />,
    title: "Computer Vision & Medical Imaging",
    body: "Validated vision systems for retina, ultrasound, and diagnostic workflows requiring high precision.",
    bullets: ["Model explainability", "Clinical decision support", "Performance monitoring"],
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "Edge & Federated AI",
    body: "Privacy-preserving learning and deployment patterns across on-prem, edge, and hybrid ecosystems.",
    bullets: ["Federated training", "On-device inference", "Data minimization"],
  },
];

const engagementModels = [
  {
    title: "Build & Deploy (End-to-End)",
    timeline: "2–6 weeks discovery, 6–12 weeks MVP, staged production rollout",
    deliverables: ["URS/FRS package", "Validation strategy", "Model cards + risk register", "Monitoring & support plan"],
    success: "Defined KPIs met in pilot and operational handoff completed with governance controls.",
  },
  {
    title: "Co-Build with Your Team",
    timeline: "2–4 weeks alignment, 8–16 weeks shared delivery",
    deliverables: ["Joint architecture blueprint", "Training + enablement", "QA and validation checkpoints", "Playbooks for scale"],
    success: "Internal teams are enabled to operate, extend, and govern the AI system independently.",
  },
  {
    title: "Audit / Upgrade / Modernize Existing AI Systems",
    timeline: "2–5 weeks assessment, phased remediation",
    deliverables: ["Gap analysis report", "Model/performance audit", "Compliance hardening plan", "Modernization roadmap"],
    success: "Material risk reduction, improved model reliability, and compliance-readiness for operations.",
  },
];

const complianceBullets = [
  "Role-based access control (RBAC), least privilege",
  "Audit logs and traceability",
  "Data encryption at rest/in transit",
  "Validation-ready documentation package (IQ/OQ/PQ support where relevant)",
  "SOP-ready operational controls",
  "On-prem / VPC deployment options",
  "Privacy-preserving options (federated learning / edge processing)",
];

const industries = [
  {
    icon: <Landmark className="h-5 w-5 text-primary" />,
    title: "Finance Management",
    solve: "Secure, audit-ready finance operations with trustworthy automation and analytics.",
    exampleLabel: "Use case",
    exampleValue: "Budgeting, AP/AR visibility, reconciliations, and MIS reporting with traceability.",
  },
  {
    icon: <Building2 className="h-5 w-5 text-primary" />,
    title: "Pharmaceuticals",
    solve: "GMP, QA, and regulatory intelligence workflows with traceable automation.",
    exampleLabel: "Use case",
    exampleValue: "FDA 483 observation triage and response support.",
  },
  {
    icon: <HeartPulse className="h-5 w-5 text-primary" />,
    title: "Healthcare Providers & Diagnostics",
    solve: "Clinical and operational decision support with explainable outputs.",
    exampleLabel: "Use case",
    exampleValue: "Triage summaries from multi-source patient documentation.",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-primary" />,
    title: "MedTech & Digital Health",
    solve: "AI-powered product features with privacy and validation constraints in mind.",
    exampleLabel: "Use case",
    exampleValue: "Compliant document intelligence for quality workflows.",
  },
  {
    icon: <Factory className="h-5 w-5 text-primary" />,
    title: "Industrial AI & Smart Sensing",
    solve: "Edge-aware models for detection, monitoring, and operational resilience.",
    exampleLabel: "Use case",
    exampleValue: "Anomaly detection for AIoT streams in production environments.",
  },
];

const outcomes = [
  {
    title: "Regulatory Review Bottleneck",
    problem: "Manual review cycles were delaying quality and regulatory response timelines.",
    built: "A structured AI workflow for observation clustering, summarization, and action drafting.",
    result: "NDA / Confidential — reduced manual review time by X% with stronger auditability.",
  },
  {
    title: "Fragmented GxP Documentation",
    problem: "Critical records were distributed across systems with inconsistent traceability.",
    built: "A governed document intelligence layer with lineage tagging and role-based workflows.",
    result: "NDA / Confidential — improved retrieval precision by X% and shortened audit prep cycles.",
  },
  {
    title: "Model Reliability in Production",
    problem: "Existing models lacked drift visibility and validation-linked monitoring.",
    built: "A monitoring stack with alerting thresholds, model cards, and retraining triggers.",
    result: "NDA / Confidential — reduced production incidents by X% over baseline periods.",
  },
];

const processSteps = [
  "Discovery",
  "Architecture",
  "Prototype",
  "Validation-Readiness",
  "Deployment",
  "Monitoring & Support",
];

export function EnterpriseSolutions() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-background">
      <AnimatedSection className="section-padding-sm bg-muted" amount={0.45} staggerChildren={0.1}>
        <div className="container text-center">
          <AnimatedItem>
            <Badge className="mb-4">Enterprise Solutions</Badge>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="prose-heading">Enterprise-Grade AI Solutions for Regulated Industries.</h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We design and deploy secure, explainable, production-ready AI systems—built for compliance, data integrity, and mission-critical workflows.
            </p>
          </AnimatedItem>
          <AnimatedItem className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <JoinWaitlistButton onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
            </WaitlistDialog>
            <Button asChild size="lg" variant="outline" className="focus-ring">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </AnimatedItem>
          <AnimatedItem className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {trustBadges.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground md:text-sm"
              >
                {item}
              </span>
            ))}
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.08}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="prose-heading">What We Deliver</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Modular enterprise capabilities that prioritize trust, compliance, and measurable performance in production.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <AnimatedItem key={pillar.title} className="h-full">
                <Card className="h-full border-border/60 bg-card/70 backdrop-blur-sm card-hover-lift">
                  <CardHeader>
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">{pillar.icon}</div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">{pillar.body}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-muted" staggerChildren={0.1}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="prose-heading">Enterprise Engagement Models</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Flexible delivery modes built around your governance model, team maturity, and operational timeline.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <AnimatedItem key={model.title} className="h-full">
                <Card className="h-full border-border/60 bg-background/90">
                  <CardHeader>
                    <CardTitle className="text-xl">{model.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Typical timeline:</span> {model.timeline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="mb-2 font-semibold text-foreground">Deliverables</p>
                      <ul className="space-y-2">
                        {model.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-foreground">Success criteria</p>
                      <p>{model.success}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="prose-heading">Security, Compliance & Trust</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Enterprise controls engineered for regulated operations from day one.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <Card className="border-border/60 bg-card/60 p-6 shadow-lg backdrop-blur-sm md:p-8">
              <CardContent className="p-0">
                <div className="grid gap-4 md:grid-cols-2">
                  {complianceBullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/70 p-4">
                      <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-muted" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="prose-heading">Industries We Serve</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cross-functional expertise where precision, safety, and accountability are non-negotiable.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry.title}>
                <Card className="h-full border-border/60 bg-background/90">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      {industry.icon}
                      <CardTitle className="text-xl text-foreground">{industry.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">{industry.solve}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{industry.exampleLabel}:</span> {industry.exampleValue}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="prose-heading">Proof & Outcomes</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Case-study style outcomes focused on measurable impact while preserving client confidentiality.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 lg:grid-cols-3">
            {outcomes.map((item) => (
              <AnimatedItem key={item.title} className="h-full">
                <Card className="h-full border-border/60 bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <Badge className="w-fit">NDA / Confidential</Badge>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Problem</p>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">What we built</p>
                      <p>{item.built}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Result</p>
                      <p>{item.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-muted" staggerChildren={0.08}>
        <div className="container mx-auto max-w-5xl">
          <AnimatedItem className="mb-14 text-center">
            <h2 className="prose-heading">How We Work</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A disciplined delivery flow from early discovery to long-term operational excellence.
            </p>
          </AnimatedItem>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border/70 md:left-1/2" />
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedItem key={step} delay={index * 0.05} className="relative mb-10 md:mb-12">
                  <div className="relative flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2 md:top-4">
                      <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_8px_hsl(var(--primary)/0.15)] ring-2 ring-background md:shadow-[0_0_0_12px_hsl(var(--primary)/0.1)]" />
                    </div>
                    <div
                      className={`ml-8 rounded-xl border border-border/60 bg-background/90 p-5 shadow-lg backdrop-blur-sm md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                      }`}
                    >
                      <p className="text-sm font-semibold text-primary md:text-base">Step {index + 1}</p>
                      <h3 className="mt-2 text-lg font-semibold md:text-xl">{step}</h3>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container">
          <AnimatedItem className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-10 text-center shadow-2xl md:p-16">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Bring validated innovation to your enterprise.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                Partner with Praverse Tech to deploy secure, explainable AI systems designed for real-world regulated operations.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                  <JoinWaitlistButton onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
                </WaitlistDialog>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary focus-ring"
                >
                  <Link href="/contact">Collaborate With Us <Gauge className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
