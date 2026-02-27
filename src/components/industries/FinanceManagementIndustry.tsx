"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JoinWaitlistButton from "@/components/common/JoinWaitlistButton";
import { WaitlistDialog } from "@/components/healthmate/WaitlistDialog";
import { CheckCircle2 } from "lucide-react";

const useCases = [
  "Budgeting & forecasting dashboards (department, project, cost center wise)",
  "Automated invoice capture, validation, and approval workflows",
  "AP/AR aging, collections insights, and cash-flow visibility",
  "Expense management with policy rules and anomaly detection",
  "Bank reconciliation automation and exception handling",
  "Financial MIS reporting with controlled data pipelines and audit logs",
];

const trustBadges = [
  "Role-based access control (RBAC)",
  "Full audit trail & traceability",
  "Data privacy by design",
  "On-prem / private cloud options",
  "Secure integrations (ERP/CRM/banks)",
];

const integrationChips = [
  "ERP (SAP / Tally / Zoho / Oracle)",
  "CRM (Salesforce / HubSpot)",
  "Payment gateways / banking exports",
  "BI exports (Excel / PowerBI)",
];

export function FinanceManagementIndustry() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-background">
      <AnimatedSection className="section-padding-sm bg-muted" amount={0.45} staggerChildren={0.1}>
        <div className="container text-center">
          <AnimatedItem>
            <Badge className="mb-4">Industry Solutions</Badge>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="prose-heading">Finance Management</h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Praverse Tech builds secure, audit-ready finance management solutions that help teams automate reporting, control spend, reduce reconciliation effort, and improve decision-making with trustworthy AI—without compromising data privacy or compliance.
            </p>
          </AnimatedItem>
          <AnimatedItem className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="focus-ring">
              <Link href="/contact">Talk to Us</Link>
            </Button>
            <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <JoinWaitlistButton onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
            </WaitlistDialog>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto max-w-4xl text-center">
            <h2 className="prose-heading">Enterprise Finance Operations, Built for Trust</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Finance teams run on accuracy, traceability, and speed. Praverse Tech delivers enterprise-grade finance management systems that streamline budgeting, invoicing, reconciliations, approvals, and MIS reporting—powered by intelligent automation and analytics. We focus on strong access controls, audit trails, and validation-ready workflows so finance operations remain compliant, reliable, and scalable across departments and locations.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-12">
            <Card className="border-border/60 bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Key Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {useCases.map((useCase) => (
                    <div key={useCase} className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/70 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{useCase}</p>
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
          <AnimatedItem className="mx-auto max-w-3xl text-center">
            <h2 className="prose-heading">Security & Compliance Foundations</h2>
          </AnimatedItem>

          <AnimatedItem className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium text-muted-foreground md:text-sm"
              >
                {badge}
              </span>
            ))}
          </AnimatedItem>

          <AnimatedItem className="mt-10">
            <div className="rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Integration Hooks</p>
              <div className="flex flex-wrap gap-2">
                {integrationChips.map((chip) => (
                  <span key={chip} className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary md:text-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container">
          <AnimatedItem className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-10 text-center shadow-2xl md:p-16">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Modernize finance workflows with confidence.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                Deploy trustworthy automation with audit-ready controls and enterprise-grade reliability.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 focus-ring">
                  <Link href="/contact">Talk to Us</Link>
                </Button>
                <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                  <JoinWaitlistButton onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
                </WaitlistDialog>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
