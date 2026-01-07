import { doctors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function OurDoctors() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Expert Doctors</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our team of highly qualified and experienced doctors is dedicated to providing you with the best possible care.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {doctors.map((doctor) => {
              const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
              return (
                <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="relative h-64 w-full p-0">
                        {doctorImage && (
                          <Image
                            src={doctorImage.imageUrl}
                            alt={`Portrait of ${doctor.name}`}
                            fill
                            className="object-cover"
                            data-ai-hint={doctorImage.imageHint}
                          />
                        )}
                      </CardContent>
                      <CardFooter className="flex-col items-start p-4">
                        <h3 className="font-headline text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-sm text-primary">{doctor.specialization}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{doctor.qualification}</p>
                        <Button asChild variant="link" className="p-0 mt-2 h-auto">
                            <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform" />
        </Carousel>
      </div>
    </section>
  );
}
