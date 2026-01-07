import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Patients',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Years of Experience',
  },
  {
    icon: CheckCircle,
    value: '100+',
    label: 'Expert Doctors',
  },
];

export function AboutSnapshot() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-snapshot');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-gray-800 md:text-4xl">
              Your Trusted Partner in Health and Wellness
            </h2>
            <p className="text-muted-foreground">
              At MediSite, we blend advanced medical technology with a personal touch. Our mission is to provide accessible, affordable, and high-quality healthcare to our community. We believe in healing with compassion and building a relationship of trust with every patient we serve.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <stat.icon className="h-10 w-10 text-primary" />
                  <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
