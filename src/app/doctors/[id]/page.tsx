import { getDoctorById, getDepartmentBySlug, departments } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Clock, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = getDoctorById(params.id);

  if (!doctor) {
    notFound();
  }

  const department = departments.find(d => d.id === doctor.departmentId);
  const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative h-80 md:h-full">
              {doctorImage && (
                <Image
                  src={doctorImage.imageUrl}
                  alt={`Portrait of ${doctor.name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={doctorImage.imageHint}
                />
              )}
            </div>
            <div className="p-8 md:col-span-2">
              <h1 className="font-headline text-3xl font-bold md:text-4xl">{doctor.name}</h1>
              <p className="text-lg text-primary">{doctor.specialization}</p>
              {department && (
                <Link href={`/departments/${department.slug}`} className="text-md text-muted-foreground hover:underline">
                  {department.name}
                </Link>
              )}
              
              <div className="mt-6 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Qualification</h3>
                    <p>{doctor.qualification}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Experience</h3>
                    <p>{doctor.experience}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">OPD Timings</h3>
                    <p>{doctor.opdTimings}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    <Link href="/appointment">Book an Appointment</Link>
                 </Button>
              </div>
            </div>
          </div>
          <div className="border-t p-8">
            <h2 className="font-headline text-2xl font-bold">Biography & Expertise</h2>
            <p className="mt-4 text-muted-foreground whitespace-pre-wrap">{doctor.bio}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
