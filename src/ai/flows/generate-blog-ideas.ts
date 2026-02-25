'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating blog post ideas related to AI in Pharma and healthcare.
 *
 * - generateBlogIdeas - A function that generates blog post ideas.
 * - GenerateBlogIdeasInput - The input type for the generateBlogIdeas function.
 * - GenerateBlogIdeasOutput - The return type for the generateBlogIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogIdeasInputSchema = z.object({
  topic: z.string().describe('The general topic for blog post ideas, e.g., AI in Pharma, Healthcare Innovation.'),
  numIdeas: z.number().describe('The number of blog post ideas to generate.').default(3),
});
export type GenerateBlogIdeasInput = z.infer<typeof GenerateBlogIdeasInputSchema>;

const GenerateBlogIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of blog post ideas.'),
});
export type GenerateBlogIdeasOutput = z.infer<typeof GenerateBlogIdeasOutputSchema>;

export async function generateBlogIdeas(input: GenerateBlogIdeasInput): Promise<GenerateBlogIdeasOutput> {
  return generateBlogIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogIdeasPrompt',
  input: {schema: GenerateBlogIdeasInputSchema},
  output: {schema: GenerateBlogIdeasOutputSchema},
  prompt: `You are a marketing expert specializing in content creation for the Pharma and Healthcare industries.
  Generate {{numIdeas}} blog post ideas related to the following topic:
  {{{topic}}}

  Format the response as a JSON object with a single key called "ideas" which is an array of strings.
  Each element of the array should be a blog post idea.  The ideas should be creative and engaging for the target audience of Pharma QA/RA leaders, CMOs/CDMOs, hospital admins, health-tech partners, and investors.
  Do not include any intro or concluding sentences.
  `,
});

const generateBlogIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogIdeasFlow',
    inputSchema: GenerateBlogIdeasInputSchema,
    outputSchema: GenerateBlogIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
