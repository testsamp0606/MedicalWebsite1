import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stethoscope, CalendarPlus, ShieldCheck, Video } from 'lucide-react';
import Link from 'next/link';

const quickAccessItems = [
  {
    title: 'Find a Doctor',
    description: 'Search our directory of world-class doctors.',
    icon: Stethoscope,
    href: '/doctors',
  },
  {
    title: 'Book Appointment',
    description: 'Schedule your visit with ease.',
    icon: CalendarPlus,
    href: '/appointment',
  },
  {
    title: 'Health Packages',
    description: 'Choose from our preventive health plans.',
    icon: ShieldCheck,
    href: '/health-packages',
  },
  {
    title: 'Telemedicine',
    description: 'Consult with our doctors from home.',
    icon: Video,
    href: '#',
  },
];

export function QuickAccess() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="-mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccessItems.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
