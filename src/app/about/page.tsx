
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, Bot } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'about-mission');

const values = [
    { icon: <Target className="h-8 w-8 text-primary"/>, title: 'Customer Obsession', description: 'We succeed when our customers succeed. We deeply embed ourselves in their domain to solve their most critical problems.'},
    { icon: <Award className="h-8 w-8 text-primary"/>, title: 'Expertise & Trust', description: 'We are experts in our field and build trust through transparency, security, and delivering on our promises.'},
    { icon: <Users className="h-8 w-8 text-primary"/>, title: 'India-First, Global Outlook', description: 'Proudly building from India for the world. We combine local talent with a global vision for impact.'},
    { icon: <Bot className="h-8 w-8 text-primary"/>, title: 'Visionary Pragmatism', description: 'We dream big about the future of AI but stay grounded in delivering practical, tangible value to our customers today.'}
]

export default function AboutPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-muted section-padding-sm" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem direction="up" className="inline-flex justify-center">
            <Badge className="mb-4">About Praverse Tech</Badge>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.1}>
            <h1 className="prose-heading">Building the Future of Industry AI</h1>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.2}>
          <p className="mt-6 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Technologists, domain experts, and visionaries solving complex industry challenges with safe, explainable AI.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.2}>
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <AnimatedItem direction="left" className="space-y-6 lg:space-y-8">
              <h2 className="prose-heading">Our Mission</h2>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                  To empower regulated industries like pharmaceuticals and healthcare with intelligent automation, turning domain expertise into competitive advantage.
                </p>
                <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                  We build AI that is trustworthy, explainable, and seamlessly integrated into the workflows of experts who use it.
                </p>
                <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                  From our base in India, we're building world-class solutions that address global challenges, ensuring partners stay ahead in a rapidly evolving technological landscape.
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem direction="right" className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 shadow-2xl">
              {heroImage && 
                <Image src={heroImage.imageUrl} alt={heroImage.description} fill loading="eager" sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" data-ai-hint={heroImage.imageHint}/>
              }
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="bg-muted section-padding" staggerChildren={0.12}>
        <div className="container">
            <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
                <h2 className="prose-heading">Our Values</h2>
                <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">The principles that guide our work and partnerships.</p>
            </AnimatedItem>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {values.map(value => (
                    <AnimatedItem key={value.title} className="space-y-4 rounded-xl border border-border/60 bg-background/80 p-6 text-center shadow-sm card-hover-lift">
                        <div className="mx-auto w-fit rounded-lg bg-primary/10 p-4 ring-1 ring-primary/20">{value.icon}</div>
                        <h3 className="text-lg font-semibold">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </AnimatedItem>
                ))}
            </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
