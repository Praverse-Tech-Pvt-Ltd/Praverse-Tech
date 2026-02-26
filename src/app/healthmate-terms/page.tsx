
'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function HealthmateTermsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }));
  }, []);

  return (
    <AnimatedSection className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8 rounded-lg p-8 bg-card/40 backdrop-blur-sm">
          <h1 className="text-3xl font-headline mb-2">HealthMate Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: {currentDate}</p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">These are pre-release terms for HealthMate. Access during beta is restricted and subject to NDA.</p>
        </header>

        <main className="prose dark:prose-invert bg-card/0 p-6 rounded-lg">
          <h2 id="intro">1. Introduction</h2>
          <p>These are placeholder Terms of Service for the HealthMate product by Praverse Tech Pvt Ltd. This document will be updated prior to public launch.</p>

          <h2 id="pre-release">2. Use of Pre-Release Product</h2>
          <p>Access during private beta and pilot phases is by invitation only and is subject to NDAs.</p>

          <h2 id="ip">3. Intellectual Property</h2>
          <p>HealthMate and related technology are proprietary and patent-pending.</p>

          <h2 id="disclaimer">4. Disclaimer</h2>
          <p>The pre-release product is provided "as is" without any warranties. Praverse Tech makes no guarantees regarding performance.</p>

          <h2 id="contact">Contact Us</h2>
          <p>If you have questions, contact <a href="mailto:pratham@praversetech.com">pratham@praversetech.com</a></p>
        </main>
      </div>
    </AnimatedSection>
  );
}
