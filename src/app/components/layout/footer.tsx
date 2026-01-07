import Link from 'next/link';
import { Stethoscope, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/departments', label: 'Departments' },
    { href: '/doctors', label: 'Find a Doctor' },
    { href: '/appointment', label: 'Book Appointment' },
    { href: '/health-packages', label: 'Health Packages' },
  ];

  const patientServices = [
    { href: '#', label: 'Online Reports' },
    { href: '#', label: 'Insurance & TPA' },
    { href: '#', label: 'Patient Testimonials' },
    { href: '#', label: 'Telemedicine' },
  ];

  return (
    <footer className="bg-card-foreground text-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
            <Stethoscope className="h-7 w-7" />
            MediSite
          </Link>
          <p className="text-sm text-muted">
            Providing compassionate and quality healthcare for a healthier community.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted hover:text-primary"><Facebook size={20} /></Link>
            <Link href="#" className="text-muted hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted hover:text-primary"><Instagram size={20} /></Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-headline text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-headline text-lg font-semibold text-primary">Patient Services</h3>
          <ul className="space-y-2">
            {patientServices.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-headline text-lg font-semibold text-primary">Contact Us</h3>
          <address className="space-y-2 text-sm not-italic text-muted">
            <p>123 Health St, Wellness City, 12345</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Emergency:</strong> 1-800-123-4567</p>
            <p><strong>Email:</strong> info@medisite.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-700 bg-black/20">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} MediSite Hospital. All Rights Reserved.</p>
          <div className="mt-2 flex gap-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
