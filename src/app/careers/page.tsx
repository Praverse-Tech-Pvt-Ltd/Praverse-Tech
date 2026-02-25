
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, Rocket } from 'lucide-react';
import { JOB_OPENINGS } from '@/lib/careers-data';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'careers-hero');

const whyWorkWithUs = [
    {
        icon: <Rocket className="h-8 w-8 text-primary"/>,
        title: 'Work on What Matters',
        description: 'Solve real-world problems in healthcare, robotics, and industrial AI that have a meaningful impact on society.'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary"/>,
        title: 'Innovate at the Edge',
        description: 'Join a team that’s constantly pushing the boundaries of what’s possible, from federated learning to bio-inspired intelligence.'
    },
    {
        icon: <Code className="h-8 w-8 text-primary"/>,
        title: 'Grow With the Best',
        description: 'We are a culture of learners and builders. Collaborate with and get mentored by experts in deep tech and product development.'
    }
]

export default function CareersPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-primary pt-24 pb-12 text-primary-foreground md:pt-32 md:pb-20" amount={0.55}>
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <AnimatedItem>
          <h1 className="text-4xl font-bold md:text-5xl">Join Our Mission</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <p className="mt-4 mx-auto max-w-3xl text-base text-primary-foreground/80 md:text-lg">
            We are building the future of intelligent systems. If you are passionate about solving hard problems and creating technology that matters, you’ve come to the right place.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.15}>
        <div className="container">
            <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Why Work at Praverse Tech?</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">We're more than a company; we're a hub for innovation.</p>
            </AnimatedItem>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {whyWorkWithUs.map(item => (
                    <AnimatedItem key={item.title} className="space-y-4 rounded-2xl border border-border/60 bg-background/70 p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="mx-auto w-fit rounded-full border border-primary/30 bg-primary/10 p-4">{item.icon}</div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </AnimatedItem>
                ))}
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.15}>
        <div className="container">
            <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Ready to make your mark? Find your role below.</p>
            </AnimatedItem>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                {JOB_OPENINGS.map(job => (
                    <AnimatedItem key={job.title}>
                    <Card className="glassmorphism h-full transition-transform duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>{job.location} &middot; {job.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Button asChild variant="outline">
                                <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </Card>
                    </AnimatedItem>
                ))}
            </div>
             <AnimatedItem className="mt-12 text-center">
                <p className="text-muted-foreground">Don't see your role? We're always looking for talent.</p>
                <Button asChild variant="link">
                    <Link href="/contact">Submit a general application</Link>
                </Button>
             </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
