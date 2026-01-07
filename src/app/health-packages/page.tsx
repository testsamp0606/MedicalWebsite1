import { healthPackages } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HealthPackageForm } from './health-package-form';

export default function HealthPackagesPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Preventive Health Packages</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Invest in your health with our comprehensive check-up packages. Early detection saves lives.
          </p>
        </div>

        <HealthPackageForm />

        <div className="mt-20">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold">Our Standard Packages</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {healthPackages.map((pkg) => (
              <Card key={pkg.name} className="flex flex-col">
                <CardHeader className="items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <pkg.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">₹{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">Book Package</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
