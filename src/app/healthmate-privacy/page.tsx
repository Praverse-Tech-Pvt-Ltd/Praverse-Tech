
'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function HealthmatePrivacyPage() {
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
          <h1 className="text-3xl font-headline mb-2">HealthMate Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {currentDate}</p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">This is a placeholder privacy policy for HealthMate. We will publish a comprehensive policy before public launch.</p>
        </header>

        <main className="prose dark:prose-invert bg-card/0 p-6 rounded-lg">
          <h2 id="intro">1. Introduction</h2>
          <p>This is a placeholder Privacy Policy for the HealthMate product by Praverse Tech Pvt Ltd.</p>

          <h2 id="collection">2. Data Collection (Pre-Launch)</h2>
          <p>During our stealth phase, we collect personal information through our waitlist and briefing requests.</p>

          <h2 id="use">3. Use of Information</h2>
          <p>Information is used to manage launch communications, partnerships, and evaluations. We do not sell this data.</p>

          <h2 id="security">4. Security</h2>
          <p>We implement strong security measures and store data in secured Firestore with restricted access.</p>

          <h2 id="post">5. Post-Launch Policy</h2>
          <p>A comprehensive privacy policy will be published upon public launch, compliant with healthcare regulations.</p>

          <h2 id="contact">Contact Us</h2>
          <p>Questions? Contact <a href="mailto:pratham@praversetech.com">pratham@praversetech.com</a></p>
        </main>
      </div>
    </AnimatedSection>
  );
}
