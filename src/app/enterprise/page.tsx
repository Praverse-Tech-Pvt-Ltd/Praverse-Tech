import type { Metadata } from "next";
import { EnterpriseSolutions } from "@/components/enterprise/EnterpriseSolutions";

export const metadata: Metadata = {
  title: "Enterprise-Grade Solutions | Praverse Tech",
  description:
    "Secure, explainable, and validation-ready AI systems for regulated industries across pharma, healthcare, and advanced enterprise operations.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer on-prem or VPC deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support on-prem, private cloud/VPC, and hybrid deployment patterns based on security and governance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support validation-ready documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide validation-oriented artifacts such as URS/FRS mappings, model documentation, testing evidence, and IQ/OQ/PQ-aligned support where relevant.",
      },
    },
  ],
};

export default function EnterprisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EnterpriseSolutions />
    </>
  );
}
