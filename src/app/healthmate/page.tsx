
import { HealthMateHero } from "@/components/healthmate/HealthMateHero";
import { ValueProps } from "@/components/healthmate/ValueProps";
import { Timeline } from "@/components/healthmate/Timeline";
import { PressCTA } from "@/components/healthmate/PressCTA";
import { FAQ } from "@/components/healthmate/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HealthMate by Praverse Tech | A New Kind of Care",
  description: "A humanoid-robot intelligence from Praverse Tech. Private beta. Launching soon. Join the waitlist for exclusive access.",
  robots: {
    index: false,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    title: "HealthMate by Praverse Tech | A New Kind of Care",
    description: "A humanoid-robot intelligence from Praverse Tech. Private beta. Launching soon.",
    url: "/healthmate",
    siteName: "Praverse Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthMate by Praverse Tech | A New Kind of Care",
    description: "A humanoid-robot intelligence from Praverse Tech. Private beta. Launching soon.",
  },
};


export default function HealthmatePage() {
  return (
    <div className="bg-background text-foreground">
      <HealthMateHero />
      <ValueProps />
      <Timeline />
      <PressCTA />
      <FAQ />
    </div>
  );
}
