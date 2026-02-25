
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MediaDialog } from './MediaDialog';
import { BriefingDialog } from './BriefingDialog';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

export function PressCTA() {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  
  return (
    <AnimatedSection className="py-20 md:py-28 bg-muted" amount={0.3}>
      <div className="container">
        <AnimatedItem>
        <Card className="glassmorphism overflow-hidden border-primary/20 shadow-2xl">
          <CardHeader className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
            <div className="relative z-10 space-y-3">
            <Badge variant="secondary" className="mx-auto mb-2 w-fit">Press & Partners</Badge>
            <CardTitle className="text-3xl font-bold">Collaborate with us</CardTitle>
            <CardDescription className="mx-auto max-w-2xl">
              We are actively seeking press and strategic partners to join us on our journey.
            </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4 p-6 sm:flex-row">
              <MediaDialog open={isMediaOpen} onOpenChange={setIsMediaOpen}>
                <Button>Request Media Kit</Button>
              </MediaDialog>
              <BriefingDialog open={isPartnershipOpen} onOpenChange={setIsPartnershipOpen}>
                <Button variant="outline">Discuss Partnership</Button>
              </BriefingDialog>
          </CardContent>
        </Card>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
