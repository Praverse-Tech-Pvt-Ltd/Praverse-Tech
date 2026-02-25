
'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function TermsPage() {
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
          <h1 className="text-3xl font-headline mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: {currentDate}</p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">These Terms govern your use of Praverse Tech websites and services. Read carefully — by using our services you agree to these terms.</p>
        </header>

        <main className="prose dark:prose-invert bg-card/0 p-6 rounded-lg">
          <h2 id="agreement">1. Agreement to Terms</h2>
          <p>By using our Site, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the Site.</p>

          <h2 id="ip">2. Intellectual Property Rights</h2>
          <p>The Site and its original content, features, and functionality are owned by Praverse Tech Pvt Ltd and are protected by applicable intellectual property laws.</p>

          <h2 id="user">3. User Representations</h2>
          <p>By using the Site, you represent and warrant that your registration information is accurate and you will comply with these Terms.</p>

          <h2 id="prohibited">4. Prohibited Activities</h2>
          <p>You may not use the Site for unauthorized commercial activities or any activity that violates applicable law.</p>

          <h2 id="law">5. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India.</p>

          <h2 id="contact">6. Contact Us</h2>
          <p>To resolve a complaint or request more information, contact: <a href="mailto:contact@praverse.ai">contact@praverse.ai</a></p>
        </main>
      </div>
    </AnimatedSection>
  );
}
