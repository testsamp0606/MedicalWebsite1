import { getDepartmentBySlug, getDoctorsByDepartment, doctors as allDoctors } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, UserMd, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function DepartmentDetailPage({ params }: { params: { slug: string } }) {
  const department = getDepartmentBySlug(params.slug);

  if (!department) {
    notFound();
  }

  const departmentDoctors = allDoctors.filter(doctor => department.doctors.includes(doctor.id));
  const bannerImage = PlaceHolderImages.find(p => p.id === 'department-banner');

  return (
    <div>
      <section className="relative h-64 w-full bg-primary/10">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={department.name}
            fill
            className="object-cover"
            data-ai-hint={bannerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-white/20 p-4 text-white backdrop-blur-sm">
                <department.icon className="h-12 w-12" />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-white md:text-5xl">{department.name}</h1>
                <p className="text-lg text-gray-200">Specialized care you can trust</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">About the Department</h2>
            <p className="text-muted-foreground">{department.description}</p>

            <h2 className="mb-4 mt-12 text-2xl font-bold">Treatments & Procedures</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {department.services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground">Ready to Get Expert Care?</h2>
              <p className="mx-auto mt-2 max-w-md text-primary-foreground/80">
                Book a consultation with one of our specialists today and take the first step towards better health.
              </p>
              <Button asChild className="mt-6" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserMd className="h-6 w-6 text-primary" />
                  Our Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                {departmentDoctors.length > 0 ? (
                  <div className="space-y-4">
                    {departmentDoctors.map(doctor => {
                      const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
                      return (
                        <Link href={`/doctors/${doctor.id}`} key={doctor.id} className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-secondary">
                          {doctorImage && (
                            <Avatar>
                              <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint}/>
                              <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-semibold">{doctor.name}</p>
                            <p className="text-xs text-muted-foreground">{doctor.specialization}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No specialists listed for this department.</p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  OPD Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our department is open for consultations during the following hours:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
