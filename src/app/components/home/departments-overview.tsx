import { departments } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DepartmentsOverview() {
  const featuredDepartments = departments.slice(0, 6);

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Departments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our wide range of specialized departments, each equipped with modern technology and staffed by experts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featuredDepartments.map((dept) => (
            <Link href={`/departments/${dept.slug}`} key={dept.id}>
              <div className="group flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:bg-primary/5 hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <dept.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">{dept.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {dept.description}
                  </p>
                  <div className="mt-3 flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/departments">View All Departments</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
