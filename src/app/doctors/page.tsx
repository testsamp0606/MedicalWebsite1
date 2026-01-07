'use client';

import { useState, useMemo } from 'react';
import { doctors, departments } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const department = departments.find(d => d.id === doctor.departmentId);
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === 'all' || (department && department.slug === selectedDept);
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Find a Doctor</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Search our extensive directory of world-class doctors and specialists. Your path to expert care starts here.
          </p>
        </div>

        <Card className="mb-12 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by doctor's name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="lg:col-span-2">
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept.id} value={dept.slug}>{dept.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              Search
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDoctors.map(doctor => {
            const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
            const department = departments.find(d => d.id === doctor.departmentId);
            return (
              <Card key={doctor.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 w-full">
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
                <CardContent className="p-4">
                  <h3 className="font-headline text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-sm text-primary">{doctor.specialization}</p>
                  {department && <p className="mt-1 text-xs text-muted-foreground">{department.name}</p>}
                  <Button asChild variant="link" className="p-0 mt-3 h-auto">
                    <Link href={`/doctors/${doctor.id}`}>View Full Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {filteredDoctors.length === 0 && (
            <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No doctors found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
}
