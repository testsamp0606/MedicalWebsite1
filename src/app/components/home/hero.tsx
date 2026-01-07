import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Compassionate Care, Advanced Medicine
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Your health is our priority. World-class treatment from a team that truly cares.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/emergency">Emergency Care</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
