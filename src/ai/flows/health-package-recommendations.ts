'use server';

/**
 * @fileOverview A health package recommendation AI agent.
 *
 * - getHealthPackageRecommendations - A function that provides health package recommendations.
 * - HealthPackageRecommendationsInput - The input type for the getHealthPackageRecommendations function.
 * - HealthPackageRecommendationsOutput - The return type for the getHealthPackageRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HealthPackageRecommendationsInputSchema = z.object({
  medicalHistory: z.string().describe('The medical history of the user.'),
  profile: z.string().describe('The profile of the user, including age, gender, and lifestyle.'),
});
export type HealthPackageRecommendationsInput = z.infer<
  typeof HealthPackageRecommendationsInputSchema
>;

const HealthPackageRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of health package recommendations tailored to the user, including a brief explanation of why each package is recommended.'
    ),
});
export type HealthPackageRecommendationsOutput = z.infer<
  typeof HealthPackageRecommendationsOutputSchema
>;

export async function getHealthPackageRecommendations(
  input: HealthPackageRecommendationsInput
): Promise<HealthPackageRecommendationsOutput> {
  return healthPackageRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'healthPackageRecommendationsPrompt',
  input: {schema: HealthPackageRecommendationsInputSchema},
  output: {schema: HealthPackageRecommendationsOutputSchema},
  prompt: `You are a healthcare assistant that recommends health checkup packages to users.

  Based on the user's medical history and profile, provide a list of health package recommendations tailored to the user. Include a brief explanation of why each package is recommended.

  Medical History: {{{medicalHistory}}}
  Profile: {{{profile}}} `,
});

const healthPackageRecommendationsFlow = ai.defineFlow(
  {
    name: 'healthPackageRecommendationsFlow',
    inputSchema: HealthPackageRecommendationsInputSchema,
    outputSchema: HealthPackageRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
