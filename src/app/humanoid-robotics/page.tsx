
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bot, Cpu, Users, Orbit, CheckCircle } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'humanoid-hero');
const assistImage = PlaceHolderImages.find(p => p.id === 'humanoid-assist');
const virtualImage = PlaceHolderImages.find(p => p.id === 'humanoid-virtual');

const features = [
    {
        icon: <Bot className="w-10 h-10 text-primary" />,
        title: 'Advanced Virtual Humanoids',
        description: 'We build sophisticated virtual humanoid robots capable of complex interactions and tasks in simulated environments, pushing the boundaries of AI and robotics.',
    },
    {
        icon: <Cpu className="w-10 h-10 text-primary" />,
        title: 'Seamless Human-Robot Collaboration',
        description: 'Our robots are designed to be intuitive partners for humans, assisting with tasks to enhance productivity and safety across various industries.',
    },
    {
        icon: <Orbit className="w-10 h-10 text-primary" />,
        title: 'Physics-Based Simulation',
        description: 'We leverage high-fidelity physics simulations to train and validate our robots, ensuring they can operate effectively and safely in real-world scenarios.',
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: 'Assistance for Humanity',
        description: 'Our ultimate goal is to create robots that serve humanity, from assisting in hazardous environments to providing support in healthcare and daily life.',
    },
];

export default function HumanoidRoboticsPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-primary pt-24 pb-12 text-primary-foreground md:pt-32 md:pb-20" amount={0.55}>
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <AnimatedItem>
          <Badge variant="secondary">Our New Frontier</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Pioneering Humanoid Robotics</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
          <p className="mt-4 mx-auto max-w-3xl text-base text-primary-foreground/80 md:text-lg">
            At Praverse Tech, we are engineering the next generation of virtual humanoid robots designed to collaborate with and assist humans in complex tasks.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">The Future of Human-Robot Interaction</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">We are building intelligent virtual agents that can learn, adapt, and work alongside people.</p>
          </AnimatedItem>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {features.map(feature => (
              <AnimatedItem key={feature.title}>
              <Card className="h-full text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">{feature.icon}</div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.2}>
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
            <AnimatedItem direction="left" className="space-y-6">
              <Badge>Our Approach</Badge>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Virtual First, Physically Realized</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                We believe the key to creating capable real-world robots is to perfect them in simulation. Our virtual-first approach allows for rapid iteration, extensive training, and rigorous safety testing before a single component is manufactured.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Train complex behaviors in diverse, simulated environments.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Validate safety and effectiveness through millions of virtual hours.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Develop control policies that seamlessly transfer from simulation to reality.</span>
                </li>
              </ul>
            </AnimatedItem>
            <AnimatedItem direction="right">
              {virtualImage && 
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 shadow-xl">
                  <Image src={virtualImage.imageUrl} alt={virtualImage.description} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" data-ai-hint={virtualImage.imageHint}/>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
                </div>
              }
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.18}>
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]">
            <AnimatedItem direction="left">
              {assistImage && 
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 shadow-xl">
                  <Image src={assistImage.imageUrl} alt={assistImage.description} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" data-ai-hint={assistImage.imageHint}/>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                </div>
              }
            </AnimatedItem>
            <AnimatedItem direction="right" className="space-y-6">
              <Badge>Applications</Badge>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Assistive Robotics for a Better Tomorrow</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Our humanoid robotics program is focused on creating practical solutions for real-world problems. We're exploring applications in:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Bot className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><b>Manufacturing:</b> Assisting with complex assembly and quality control tasks.</span>
                </li>
                <li className="flex items-start">
                  <Bot className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><b>Logistics:</b> Smart warehouse automation and last-mile delivery solutions.</span>
                </li>
                <li className="flex items-start">
                  <Bot className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><b>Healthcare Support:</b> Aiding nurses and staff with non-clinical tasks to improve patient care.</span>
                </li>
              </ul>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
