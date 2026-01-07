import { Hero } from './components/home/hero';
import { QuickAccess } from './components/home/quick-access';
import { AboutSnapshot } from './components/home/about-snapshot';
import { DepartmentsOverview } from './components/home/departments-overview';
import { OurDoctors } from './components/home/our-doctors';
import { Testimonials } from './components/home/testimonials';
import { InsurancePartners } from './components/home/insurance-partners';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickAccess />
      <AboutSnapshot />
      <DepartmentsOverview />
      <OurDoctors />
      <Testimonials />
      <InsurancePartners />
    </div>
  );
}
