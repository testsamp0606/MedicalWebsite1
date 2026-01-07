import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Ambulance, MapPin, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function EmergencyPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'emergency-banner');

  return (
    <div>
        <section className="relative h-64 w-full bg-destructive/80">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt="Emergency Room"
            fill
            className="object-cover"
            data-ai-hint={bannerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-destructive/70" />
        <div className="container relative mx-auto flex h-full items-center justify-center text-center px-4">
            <div>
                <h1 className="text-4xl font-bold text-white md:text-6xl">Emergency Services</h1>
                <p className="text-lg text-red-100 mt-2">Immediate, life-saving care when you need it most.</p>
            </div>
        </div>
      </section>

      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center bg-destructive text-destructive-foreground border-red-800">
                    <CardHeader>
                        <CardTitle className="text-xl">Emergency Contact Number</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold tracking-wider">1-800-123-4567</p>
                        <p className="text-sm mt-2">Available 24/7</p>
                        <Button asChild variant="secondary" className="mt-4">
                            <a href="tel:1-800-123-4567">Call Now</a>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-xl">Ambulance Service</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold tracking-wider">102</p>
                        <p className="text-sm mt-2">For immediate dispatch</p>
                        <Button asChild variant="outline" className="mt-4">
                            <a href="tel:102">Call Ambulance</a>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-xl">Hospital Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">123 Health St, Wellness City</p>
                        <div className="w-full h-24 bg-muted rounded-md my-2 flex items-center justify-center">
                            <MapPin className="h-8 w-8 text-muted-foreground"/>
                        </div>
                        <Button variant="link" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Alert className="mt-12 bg-yellow-100 border-yellow-300 text-yellow-900">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle>In Case of Emergency</AlertTitle>
                <AlertDescription>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Stay calm and call our emergency number immediately.</li>
                        <li>Do not move the person if there is a suspected neck or spine injury.</li>
                        <li>Provide our team with your exact location and the nature of the emergency.</li>
                        <li>Follow any instructions given by the emergency dispatcher.</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
      </div>
    </div>
  );
}
