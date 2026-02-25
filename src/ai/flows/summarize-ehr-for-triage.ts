'use server';
/**
 * @fileOverview Summarizes a patient's EHR, highlighting key information relevant for triage.
 *
 * - summarizeEHRForTriage - A function that handles the summarization process.
 * - SummarizeEHRForTriageInput - The input type for the summarizeEHRForTriage function.
 * - SummarizeEHRForTriageOutput - The return type for the summarizeEHRForTriage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeEHRForTriageInputSchema = z.object({
  ehrData: z.string().describe('The patient\'s electronic health record data.'),
});
export type SummarizeEHRForTriageInput = z.infer<typeof SummarizeEHRForTriageInputSchema>;

const SummarizeEHRForTriageOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the patient\'s EHR, highlighting key information relevant for triage.'),
});
export type SummarizeEHRForTriageOutput = z.infer<typeof SummarizeEHRForTriageOutputSchema>;

export async function summarizeEHRForTriage(input: SummarizeEHRForTriageInput): Promise<SummarizeEHRForTriageOutput> {
  return summarizeEHRForTriageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeEHRForTriagePrompt',
  input: {schema: SummarizeEHRForTriageInputSchema},
  output: {schema: SummarizeEHRForTriageOutputSchema},
  prompt: `You are an AI assistant designed to summarize patient Electronic Health Records (EHR) for triage purposes.

  Your goal is to provide a concise and informative summary that highlights key information that is relevant for prioritizing patient care.

  EHR Data: {{{ehrData}}}
  `,
});

const summarizeEHRForTriageFlow = ai.defineFlow(
  {
    name: 'summarizeEHRForTriageFlow',
    inputSchema: SummarizeEHRForTriageInputSchema,
    outputSchema: SummarizeEHRForTriageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
