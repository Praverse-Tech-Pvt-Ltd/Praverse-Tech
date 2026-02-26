
'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-headline mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {currentDate}</p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">We value your privacy. This policy explains what data we collect and how we use it.</p>
        </header>

        <main className="prose dark:prose-invert bg-card/0 p-6 rounded-lg">
          <h2 id="intro">Introduction</h2>
          <p>Praverse Tech Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy and explaining how we collect and use your information.</p>

          <h2 id="collect">Information We Collect</h2>
          <ul>
            <li><strong>Personal Data:</strong> Information you provide, such as name and email.</li>
            <li><strong>Derivative Data:</strong> Usage data collected automatically (IP, browser, pages visited).</li>
          </ul>

          <h2 id="use">Use of Your Information</h2>
          <p>We use information to respond to inquiries, send updates, and improve our services.</p>

          <h2 id="disclosure">Disclosure of Your Information</h2>
          <p>We do not sell or trade your information to third parties for their commercial purposes.</p>

          <h2 id="security">Security of Your Information</h2>
          <p>We implement measures to protect your data, but no system is completely secure.</p>

          <h2 id="contact">Contact Us</h2>
          <p>Questions? Contact <a href="mailto:pratham@praversetech.com">pratham@praversetech.com</a></p>
        </main>
      </div>
    </AnimatedSection>
  );
}
