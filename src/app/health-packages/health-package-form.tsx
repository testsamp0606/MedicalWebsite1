'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getHealthPackageRecommendations, HealthPackageRecommendationsOutput } from '@/ai/flows/health-package-recommendations';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';

const recommendationFormSchema = z.object({
  profile: z.string().min(10, 'Please provide some details about your age, gender, and lifestyle (e.g., "45-year-old male, smoker, office job").'),
  medicalHistory: z.string().min(10, 'Please provide some details about your medical history (e.g., "Family history of heart disease, diagnosed with high blood pressure").'),
});

type RecommendationFormValues = z.infer<typeof recommendationFormSchema>;

export function HealthPackageForm() {
  const [recommendations, setRecommendations] = useState<HealthPackageRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationFormSchema),
    defaultValues: {
      profile: '',
      medicalHistory: '',
    },
  });

  async function onSubmit(data: RecommendationFormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await getHealthPackageRecommendations(data);
      setRecommendations(result);
    } catch (e) {
      console.error(e);
      setError('Sorry, we were unable to generate recommendations at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Wand2 className="h-6 w-6 text-primary" />
          Personalized Package Recommender
        </CardTitle>
        <CardDescription>Let our AI assistant suggest the best health packages for you based on your profile and medical history.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Profile</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 35-year-old female, active lifestyle, vegetarian" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medicalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical & Family History</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Father has diabetes, occasional joint pain" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
          </form>
        </Form>
        <div className="mt-6">
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {recommendations && (
             <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Your AI-Powered Recommendations:</h3>
                <div className="whitespace-pre-wrap rounded-md border bg-card p-4 font-mono text-sm">{recommendations.recommendations}</div>
             </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
