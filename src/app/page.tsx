
import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Vision } from '@/components/home/Vision';
import { Domains } from '@/components/home/Domains';
import { Cta } from '@/components/home/Cta';
import { getBlogPosts } from '@/lib/blog';
import { InnovationTimeline } from '@/components/home/InnovationTimeline';
import { ResearchPublications } from '@/components/home/ResearchPublications';
import { Collaborations } from '@/components/home/Collaborations';
import { AILabsShowcase } from '@/components/home/AILabsShowcase';
import { MachineLearningShowcase } from '@/components/home/MachineLearningShowcase';
import { Insights } from '@/components/home/Insights';

export default function Home() {
  const posts = getBlogPosts();
  const founderPost = posts.find(p => p.slug === 'future-of-ai-in-healthcare');
  const otherPosts = posts.filter(p => p.slug !== 'future-of-ai-in-healthcare').slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Vision />
        <Domains />
        <MachineLearningShowcase />
        <AILabsShowcase />
        <Insights founderPost={founderPost} otherPosts={otherPosts} />
        <InnovationTimeline />
        <ResearchPublications />
        <Collaborations />
        <Cta />
      </main>
    </div>
  );
}
