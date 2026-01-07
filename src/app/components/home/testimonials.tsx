import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, StarHalf } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jones',
    role: 'Patient',
    imageId: 'testimonial-1',
    rating: 5,
    text: "The care and attention I received at MediSite were exceptional. The doctors and nurses were incredibly supportive throughout my treatment. I felt like I was in the best hands.",
  },
  {
    name: 'Michael Brown',
    role: 'Patient\'s Family',
    imageId: 'testimonial-2',
    rating: 4.5,
    text: "My father's surgery was a success thanks to the skilled surgeons at MediSite. The facilities are top-notch, and the post-operative care was thorough and compassionate. Highly recommended.",
  },
];

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    if (halfStar) {
        stars.push(<StarHalf key="half" className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }
    return stars;
};

export function Testimonials() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Words from Our Patients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We are proud to have earned the trust of our community. Here’s what our patients have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => {
            const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
            return (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>
                  <blockquote className="text-muted-foreground">"{testimonial.text}"</blockquote>
                </CardContent>
                <div className="flex items-center gap-4 border-t bg-card px-6 py-4">
                  {testimonialImage && (
                    <Avatar>
                      <AvatarImage src={testimonialImage.imageUrl} alt={`Photo of ${testimonial.name}`} data-ai-hint={testimonialImage.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
