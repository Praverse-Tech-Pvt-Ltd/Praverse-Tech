
"use client";

import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Lock, Users } from "lucide-react";

const values = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Human-centric Interaction",
    description: "Designed for natural conversation and empathetic presence, HealthMate understands and responds with emotional intelligence.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Clinical Workflow Integration",
    description: "Built for seamless handoffs and supervision-first operations, our platform augments clinical teams without disrupting them.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Privacy and governance are at our core. HealthMate ensures data protection and full auditability from the ground up.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function ValueProps() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="text-center h-full glassmorphism border-primary/10">
                <CardHeader>
                  <div className="mx-auto bg-background/50 p-4 rounded-full w-fit mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
