
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
    <AnimatedSection className="container prose mx-auto max-w-4xl py-16 dark:prose-invert">
      <h1>HealthMate Privacy Policy</h1>
      <p>Last updated: {currentDate}</p>

      <h2>1. Introduction</h2>
      <p>
        This is a placeholder Privacy Policy for the HealthMate product by Praverse Tech Pvt Ltd. This document outlines our commitment to privacy and will be updated prior to public launch.
      </p>

      <h2>2. Data Collection (Pre-Launch)</h2>
      <p>
        During our stealth phase, we collect personal information through our waitlist, NDA briefing requests, and media kit request forms. This information includes names, email addresses, and professional details.
      </p>
      
      <h2>3. Use of Information</h2>
      <p>
        The information collected is used solely for the purpose of managing the launch of HealthMate, communicating with interested parties, and evaluating potential partnerships. We do not sell or share this data.
      </p>

      <h2>4. Security</h2>
      <p>
        We implement strong security measures to protect the data we collect. All data is stored in a secure Firestore database with restricted access.
      </p>

       <h2>5. Post-Launch Policy</h2>
      <p>
        A comprehensive privacy policy detailing data handling within the HealthMate product will be available upon public launch, compliant with all relevant healthcare data regulations.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this policy, please contact us at: contact@praverse.ai
      </p>
    </AnimatedSection>
  );
}
