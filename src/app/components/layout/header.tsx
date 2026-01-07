'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Hospital,
  Menu,
  Phone,
  Clock,
  Globe,
  User,
  Stethoscope,
} from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/departments', label: 'Departments' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/health-packages', label: 'Health Packages' },
  { href: '/emergency', label: 'Emergency' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <span>Emergency: 1-800-123-4567</span>
            </div>
            <div className="hidden items-center gap-1.5 md:flex">
              <Clock size={14} />
              <span>OPD: 9 AM - 8 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs">
              <Globe size={14} className="mr-1.5" />
              English
            </Button>
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs">
              <User size={14} className="mr-1.5" />
              Patient Portal
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-accent">
          <Stethoscope className="h-7 w-7 text-accent" />
          MediSite
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium',
                  pathname === link.href ? 'text-accent' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
        <Button asChild className="hidden lg:flex" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Link href="/appointment">Book Appointment</Link>
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation links for MediSite.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-accent">
                <Stethoscope className="h-7 w-7 text-accent" />
                MediSite
              </Link>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    asChild
                    variant="ghost"
                    key={link.href}
                    onClick={() => setIsOpen(false)}
                    className="justify-start"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        pathname === link.href ? 'text-accent' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
              <Button asChild onClick={() => setIsOpen(false)} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
