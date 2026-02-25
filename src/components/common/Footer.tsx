
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { WaitlistDialog } from '../healthmate/WaitlistDialog';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/domains', label: 'Domains' },
    // { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t bg-muted/50">
      <div className="container section-padding-sm">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">Bringing validated innovations to market.</p>
            <address className="text-sm text-muted-foreground not-italic">
              Bangalore, India | Global Operations
            </address>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">Privacy Policy</Link></li>
                <li><Link href="/healthmate-terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">HealthMate Terms</Link></li>
                <li><Link href="/healthmate-privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">HealthMate Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 md:col-span-4">
            <h3 className="font-semibold text-foreground">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Get the latest on our research, products, and insights.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.</p>
          <p>HealthMate is proprietary and patent-pending. Details available under NDA.</p>
        </div>
      </div>
    </footer>
  );
}
