import { departments } from '@/lib/data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function DepartmentsPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Departments</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            MediSite offers a comprehensive range of medical specialties. Our departments are staffed by leading experts and equipped with advanced technology to provide the highest standard of care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <Link href={`/departments/${dept.slug}`} key={dept.id} className="group">
              <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex-grow">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <dept.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="font-headline text-xl">{dept.name}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-3 text-sm">{dept.description}</CardDescription>
                </CardHeader>
                <div className="flex items-center justify-between bg-muted/50 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
