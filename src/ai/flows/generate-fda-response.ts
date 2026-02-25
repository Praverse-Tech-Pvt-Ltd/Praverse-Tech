'use server';

/**
 * @fileOverview A flow to generate a draft response to an FDA 483/Warning Letter.
 *
 * - generateFDA483Response - A function that generates the response.
 * - GenerateFDA483ResponseInput - The input type for the generateFDA483Response function.
 * - GenerateFDA483ResponseOutput - The return type for the generateFDA483Response function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFDA483ResponseInputSchema = z.object({
  fda483WarningLetter: z
    .string()
    .describe("The FDA 483 or Warning Letter text to generate a response for."),
});
export type GenerateFDA483ResponseInput = z.infer<typeof GenerateFDA483ResponseInputSchema>;

const GenerateFDA483ResponseOutputSchema = z.object({
  draftResponse: z
    .string()
    .describe("The generated draft response to the FDA 483 or Warning Letter."),
});
export type GenerateFDA483ResponseOutput = z.infer<typeof GenerateFDA483ResponseOutputSchema>;

export async function generateFDA483Response(
  input: GenerateFDA483ResponseInput
): Promise<GenerateFDA483ResponseOutput> {
  return generateFDA483ResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFDA483ResponsePrompt',
  input: {schema: GenerateFDA483ResponseInputSchema},
  output: {schema: GenerateFDA483ResponseOutputSchema},
  prompt: `You are an expert in pharmaceutical regulatory compliance.
  You will receive an FDA 483 or Warning Letter and generate a draft response that addresses the issues raised in the letter.
  The response should be professional, concise, and address all points raised in the letter.

  FDA 483/Warning Letter:
  {{fda483WarningLetter}}`,
});

const generateFDA483ResponseFlow = ai.defineFlow(
  {
    name: 'generateFDA483ResponseFlow',
    inputSchema: GenerateFDA483ResponseInputSchema,
    outputSchema: GenerateFDA483ResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
