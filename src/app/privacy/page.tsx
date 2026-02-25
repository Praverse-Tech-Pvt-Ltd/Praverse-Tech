
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
    <AnimatedSection className="container prose mx-auto max-w-4xl py-16 dark:prose-invert">
      <h1>Privacy Policy for Praverse Tech Pvt Ltd</h1>
      <p>Last updated: {currentDate}</p>

      <h2>Introduction</h2>
      <p>
        Praverse Tech Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website praverse.ai, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </p>
      <ul>
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and company name, that you voluntarily give to us when you fill out a contact form or subscribe to our newsletter.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
      </ul>

      <h2>Use of Your Information</h2>
      <p>
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </p>
      <ul>
        <li>Respond to your inquiries and support requests.</li>
        <li>Send you a newsletter or other marketing communications.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>
        We do not share, sell, rent or trade your information with third parties for their commercial purposes.
      </p>

      <h2>Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us at: contact@praverse.ai
      </p>
    </AnimatedSection>
  );
}
