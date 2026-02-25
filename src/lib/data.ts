
import { BrainCircuit, Cpu, FlaskConical, Microscope, Orbit, Stethoscope, Atom, ShieldCheck, Sigma } from "lucide-react";

export const DOMAINS = [
    {
        title: 'AI for Pharma & Regulatory Automation',
        description: 'Compliance automation, data integrity, and FDA 483 analytics.',
        href: '/pharma-ai',
        icon: FlaskConical,
        color: 'text-purple-400',
    },
    {
        title: 'Humanoid Robotics (HealthMate Series)',
        description: 'Intelligent assistive robot for healthcare & education.',
        href: '/healthmate',
        icon: Stethoscope,
        color: 'text-green-400',
    },
    {
        title: 'Federated Learning & Edge AI',
        description: 'Decentralized model training for privacy-sensitive data.',
        href: null,
        icon: ShieldCheck,
        color: 'text-pink-400',
    },
    {
        title: 'Vision & Medical Imaging',
        description: 'CV + NLP fusion for industrial safety & medical imaging.',
        href: null,
        icon: Microscope,
        color: 'text-teal-400',
    },
    {
        title: 'AIoT & Industrial Intelligence',
        description: 'Smart sensors and predictive maintenance with Intel collaboration.',
        href: null,
        icon: Cpu,
        color: 'text-orange-400',
    },
    {
        title: 'Biochip 2027',
        description: 'Exploring bio-inspired intelligence and smart sensing. Early-stage, confidential research.',
        href: null,
        icon: Atom,
        color: 'text-blue-400',
    }
];


export const FEATURED_PROJECTS = [
    { title: 'HealthMate v0.9', description: 'Private Beta Launching Soon', imageId: 'project-healthmate' },
    { title: 'FDA 483 Response Automation', description: 'Live Client Demo', imageId: 'project-fda' },
    { title: 'Cognitive Robot Simulation', description: 'Webots × NEAT Integration', imageId: 'project-robotics' },
    { title: 'Federated Learning for Wearables', description: 'Research Collaboration', imageId: 'project-federated' },
    { title: 'Smart EHR Assistant', description: 'Under Testing', imageId: 'project-ehr' },
];

export const TIMELINE = [
  { year: '2023', event: 'Netra Sakhi: Virtual Eye-Care Assistant', description: 'Launched an NLP + Twilio powered assistant for ophthalmic screening.' },
  { year: '2024', event: 'PCOS Detection Pipeline', description: 'Developed a novel CV model using Ultrasound & EHR data for early detection.' },
  { year: '2025', event: 'HealthMate & Intel Collaboration', description: 'Filed key patents for our AI Hospital Robot and began a strategic collaboration with Intel.' },
  { year: '2026', event: 'Biochip Intelligence Research', description: 'Initiated R&D for a new class of diagnostic biochips with smart sensing capabilities.' },
  { year: '2027', event: 'Cognitive AI Ecosystem Launch', description: 'Projected launch of our integrated platform for industrial and healthcare AI.' },
];

export const PUBLICATIONS = [
  { 
    title: 'Deep Learning for Diabetic Macular Edema (DME) Detection from Fundus Images', 
    venue: 'IEEE Transactions on Medical Imaging', 
    year: '2023',
    abstract: 'A novel convolutional neural network architecture for the automated detection and grading of DME, achieving 98% accuracy.',
    badge: 'IEEE'
  },
  { 
    title: 'Netra Sakhi: An Edge AI System for Ophthalmic Screening in Low-Resource Settings', 
    venue: 'Scopus Indexed Conference', 
    year: '2023',
    abstract: 'This paper presents a lightweight, deployable edge AI system for screening multiple eye diseases, designed for rural healthcare camps.',
    badge: 'Scopus'
  },
  { 
    title: 'Autonomous Driving Simulation using Neuroevolution of Augmenting Topologies (NEAT)', 
    venue: 'International Journal of Robotics & Automation', 
    year: '2024',
    abstract: 'We demonstrate the effectiveness of the NEAT algorithm in training agents for complex, multi-objective autonomous driving scenarios in simulation.',
    badge: 'Journal'
  },
];

export const TECH_STACK = [
    'Generative AI × Regulatory Compliance',
    'Federated Learning',
    'Reinforcement Learning in Robotics',
    'Synthetic Data Generation',
    'Multimodal AI Pipelines',
    'Explainable AI (XAI)',
    'Cloud + Edge Orchestration',
    'Biomedical Signal Processing',
    'Digital Twin Simulation',
    'Quantum-ready AI Research',
];

export const WHY_PRAVERSE = [
    {
        title: 'Domain Depth + AI Expertise',
        description: 'We bridge the gap between complex industries like pharma and healthcare with deep, practical knowledge of modern AI.',
    },
    {
        title: 'Innovation Network',
        description: 'Our strong ties with academic institutions and industry leaders keep us at the forefront of research and application.',
    },
    {
        title: 'Ethical AI by Design',
        description: 'We are committed to building AI that is transparent, explainable, and prioritizes privacy and human oversight.',
    }
]
