
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
    <AnimatedSection className="container prose mx-auto max-w-4xl py-16 dark:prose-invert">
      <h1>HealthMate Terms of Service</h1>
      <p>Last updated: {currentDate}</p>

      <h2>1. Introduction</h2>
      <p>
        These are placeholder Terms of Service for the HealthMate product by Praverse Tech Pvt Ltd. This document will be updated prior to public launch.
      </p>

      <h2>2. Use of Pre-Release Product</h2>
      <p>
        Access to HealthMate during its private beta and limited pilot phases is by invitation only and is subject to a Non-Disclosure Agreement (NDA). Information shared during this period is confidential.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        HealthMate and all related technology are the exclusive proprietary and patent-pending intellectual property of Praverse Tech Pvt Ltd.
      </p>
      
      <h2>4. Disclaimer</h2>
      <p>The pre-release product is provided "as is" without any warranties. Praverse Tech makes no guarantees regarding performance, reliability, or fitness for a particular purpose.</p>

      <h2>Contact Us</h2>
      <p>
        If you have questions, please contact us at: contact@praverse.ai
      </p>
    </AnimatedSection>
  );
}
