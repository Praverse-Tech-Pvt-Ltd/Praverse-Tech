
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
    <AnimatedSection className="container prose mx-auto max-w-4xl py-16 dark:prose-invert">
      <h1>Terms of Service</h1>
      <p>Last updated: {currentDate}</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By using our Site, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the Site.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        The Site and its original content, features, and functionality are owned by Praverse Tech Pvt Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>

      <h2>3. User Representations</h2>
      <p>
        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
      </p>

      <h2>4. Prohibited Activities</h2>
      <p>
        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: contact@praverse.ai
      </p>
    </AnimatedSection>
  );
}
