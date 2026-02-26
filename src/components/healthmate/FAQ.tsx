import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { getHealthmateFaq } from "@/lib/forms-db";

export async function FAQ() {
  const faqs = await getHealthmateFaq();

  return (
    <AnimatedSection className="py-20 md:py-28" amount={0.25}>
      <div className="container max-w-3xl mx-auto">
        <AnimatedItem className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </AnimatedItem>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm backdrop-blur"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
