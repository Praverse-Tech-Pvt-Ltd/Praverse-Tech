
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/common/Logo';
import JoinWaitlistButton from './JoinWaitlistButton';
import { NAV_LINKS } from '@/lib/constants';
import { Linkedin } from 'lucide-react';
import { WaitlistDialog } from '../healthmate/WaitlistDialog';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/#domains', label: 'Domains' },
    // { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t border-border/60 bg-transparent">
      <div className="container section-padding-sm">
        <div className="rounded-2xl bg-card/60 backdrop-blur-md p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="md:w-1/3 space-y-4">
              <div className="h-10 overflow-visible flex items-center" style={{ transform: 'scale(3)', transformOrigin: 'left center' }}>
                <Logo imgClassName="h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Bringing validated innovations to market.</p>
              <address className="text-sm text-muted-foreground not-italic">TOWER 2 - 413 &amp; 420, Prince Cube, Nayaran Garden, Gotri, Vadodara, Gujarat, India</address>
              <div className="flex items-center gap-3">
                <div className="flex">
                  <Link href="https://www.linkedin.com/in/pratham-shrivastav-b81180251/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
                <div className="ml-auto md:ml-0">
                  <JoinWaitlistButton className="small" onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
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
                <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                <ul className="space-y-3">
                  <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">Privacy Policy</Link></li>
                  <li><Link href="/healthmate-terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">HealthMate Terms</Link></li>
                  <li><Link href="/healthmate-privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm">HealthMate Privacy</Link></li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/3">
              <h4 className="font-semibold text-foreground">Subscribe to our newsletter</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Get the latest on our research, products, and insights.</p>
              <div className="rounded-lg border border-border/50 p-4 bg-background/5">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div>
              <p>© {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.</p>
              <p className="text-xs">HealthMate is proprietary and patent-pending. Details available under NDA.</p>
            </div>
          </div>
        </div>
      </div>

      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <span className="sr-only">Open Waitlist</span>
      </WaitlistDialog>
    </footer>
  );
}
