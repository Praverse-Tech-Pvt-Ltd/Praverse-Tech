
'use client'
import { motion } from 'framer-motion';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { TECH_STACK } from '@/lib/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const tooltips: { [key: string]: string } = {
    'Generative AI × Regulatory Compliance': 'Using LLMs to automate and verify compliance documentation.',
    'Federated Learning': 'Training AI models on decentralized data without compromising privacy.',
    'Reinforcement Learning in Robotics': 'Teaching robots complex tasks through trial-and-error in simulated environments.',
    'Synthetic Data Generation': 'Creating artificial data to train AI models when real-world data is scarce or sensitive.',
    'Multimodal AI Pipelines': 'Systems that understand and process a combination of text, images, audio, and sensor data.',
    'Explainable AI (XAI)': 'Making AI decisions transparent and understandable to human experts.',
    'Cloud + Edge Orchestration': 'Deploying and managing AI models efficiently across cloud servers and local devices.',
    'Biomedical Signal Processing': 'Analyzing biological signals like ECG and EEG for diagnostics and monitoring.',
    'Digital Twin Simulation': 'Creating high-fidelity virtual replicas of physical systems for testing and optimization.',
    'Quantum-ready AI Research': 'Exploring quantum computing algorithms to prepare for the next generation of AI.'
};

export function TechStack() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-background" amount={0.35}>
      <div className="container">
        <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending Tech & R&D Focus</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
                We are constantly exploring and mastering the technologies that will define the next decade.
            </p>
        </AnimatedItem>
        
        <TooltipProvider>
            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 40,
                        repeat: Infinity,
                    }}
                >
                    {TECH_STACK.concat(TECH_STACK).map((tech, i) => (
                        <Tooltip key={`tech-a-${i}`}>
                            <TooltipTrigger>
                                <div className="text-sm font-semibold whitespace-nowrap mx-4 px-4 py-2 rounded-full border border-border hover:bg-muted cursor-pointer">
                                    {tech}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">{tooltips[tech]}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </motion.div>
            </div>
        </TooltipProvider>

      </div>
    </AnimatedSection>
  );
}
