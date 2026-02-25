'use server';

/**
 * @fileOverview This file defines the conversational AI flow for Prav, the site-wide assistant.
 *
 * - pravChat - A function that takes conversation history and returns a streamed response.
 * - PravChatInput - The input type for the pravChat function.
 * - PravChatOutput - The return type for the pravChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Defines the structure for a single message in the conversation history
const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const PravChatInputSchema = z.object({
  history: z.array(MessageSchema).describe('The conversation history.'),
});
export type PravChatInput = z.infer<typeof PravChatInputSchema>;

export const PravChatOutputSchema = z.object({
  response: z.string().describe("Prav's response to the user."),
});
export type PravChatOutput = z.infer<typeof PravChatOutputSchema>;


const prompt = ai.definePrompt({
    name: 'pravChatPrompt',
    input: {schema: PravChatInputSchema},
    output: {schema: PravChatOutputSchema},
    prompt: `You are Prav, the friendly, helpful, and slightly futuristic AI companion for Praverse Tech. Your goal is to assist users, answer their questions about Praverse, and gently guide them toward our services when relevant. Always maintain a professional and encouraging tone.

    Here is some context about Praverse Tech's domains. Use this to answer user questions:

    - **AI for Pharma & Regulatory Automation**: We use AI to automate compliance, data integrity, and analyze FDA 483 warning letters for pharmaceutical companies.
    - **Humanoid Robotics (HealthMate Series)**: We are developing HealthMate, an intelligent assistive robot for healthcare and educational settings. It is currently in a private beta.
    - **Federated Learning & Edge AI**: We specialize in training AI models on decentralized data, which is crucial for privacy-sensitive applications.
    - **Vision & Medical Imaging**: Our expertise includes combining computer vision and NLP for industrial safety and analyzing medical images.
    - **AIoT & Industrial Intelligence**: In collaboration with Intel, we work on smart sensors and predictive maintenance.
    - **Biochip 2027**: This is a confidential, early-stage research initiative exploring bio-inspired intelligence and smart sensing. Do not reveal any technical details; simply state that it's an exciting, confidential research project.

    Based on the following conversation history, generate the next response for the 'model' (Prav).

    Conversation History:
    {{#each history}}
    {{role}}: {{{content}}}
    {{/each}}
    model:
    `,
});

export const pravChatFlow = ai.defineFlow(
    {
        name: 'pravChatFlow',
        inputSchema: PravChatInputSchema,
        outputSchema: PravChatOutputSchema,
    },
    async (input) => {
        const {output} = await prompt(input);
        return output!;
    }
);

export async function pravChat(input: PravChatInput) {
    return await pravChatFlow(input);
}
