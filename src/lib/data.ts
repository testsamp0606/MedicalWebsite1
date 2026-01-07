import type { LucideIcon } from 'lucide-react';
import { HeartPulse, Brain, Bone, Baby, Stethoscope, Microscope, ShieldPlus, Ambulance, TestTube2, PersonStanding, Users, Activity, User } from 'lucide-react';

export type Department = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  services: string[];
  doctors: string[];
};

export type Doctor = {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  opdTimings: string;
  departmentId: string;
  imageId: string;
};

export const departments: Department[] = [
  {
    id: '1',
    name: 'Cardiology',
    slug: 'cardiology',
    icon: HeartPulse,
    description: 'Specializing in the diagnosis and treatment of heart diseases and conditions. Our state-of-the-art facility provides comprehensive cardiac care from prevention to rehabilitation.',
    services: ['ECG', 'Echocardiogram', 'Angiography', 'Angioplasty', 'Bypass Surgery'],
    doctors: ['1', '4'],
  },
  {
    id: '2',
    name: 'Neurology',
    slug: 'neurology',
    icon: Brain,
    description: 'Focused on the diagnosis and treatment of nervous system disorders. We handle conditions affecting the brain, spinal cord, and nerves with advanced diagnostic tools.',
    services: ['EEG', 'MRI', 'Stroke Care', 'Epilepsy Treatment', 'Headache Management'],
    doctors: ['2'],
  },
  {
    id: '3',
    name: 'Orthopedics',
    slug: 'orthopedics',
    icon: Bone,
    description: 'Dedicated to the prevention, diagnosis, and treatment of disorders of the bones, joints, ligaments, tendons, and muscles. We offer both surgical and non-surgical treatments.',
    services: ['Fracture Care', 'Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Arthroscopy'],
    doctors: ['3'],
  },
  {
    id: '4',
    name: 'Pediatrics',
    slug: 'pediatrics',
    icon: Baby,
    description: 'Providing comprehensive medical care for infants, children, and adolescents. Our team is committed to the health and well-being of your child.',
    services: ['Vaccinations', 'Well-child checkups', 'Developmental screening', 'Acute illness care'],
    doctors: [],
  },
  {
    id: '5',
    name: 'General Medicine',
    slug: 'general-medicine',
    icon: Stethoscope,
    description: 'The first point of contact for any patient seeking medical assistance. Our experienced physicians provide holistic care and manage common ailments.',
    services: ['Health Checkups', 'Infectious Disease Treatment', 'Chronic Disease Management', 'Preventive Care'],
    doctors: ['1', '2'],
  },
  {
    id: '6',
    name: 'Pathology & Lab',
    slug: 'pathology-lab',
    icon: Microscope,
    description: 'Our accredited laboratory provides a wide range of diagnostic tests, ensuring accurate and timely results to aid in patient diagnosis and treatment.',
    services: ['Blood Tests', 'Urine Analysis', 'Biopsy', 'Genetic Testing'],
    doctors: [],
  },
  {
    id: '7',
    name: 'Emergency Care',
    slug: 'emergency-care',
    icon: Ambulance,
    description: '24/7 state-of-the-art emergency and trauma care services. Our dedicated team is equipped to handle all medical emergencies with speed and precision.',
    services: ['24/7 Trauma Care', 'Ambulance Services', 'Critical Care Unit', 'Minor Emergency Treatment'],
    doctors: ['1','2','3','4'],
  },
  {
    id: '8',
    name: 'Health Packages',
    slug: 'health-packages',
    icon: ShieldPlus,
    description: 'Preventive health check-ups tailored to your age, gender, and lifestyle. Early detection is key to a long and healthy life.',
    services: ['Basic Health Check', 'Comprehensive Health Check', 'Cardiac Screening', 'Women\'s Wellness'],
    doctors: [],
  },
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    qualification: 'MD, DM (Cardiology)',
    specialization: 'Interventional Cardiology',
    experience: '15 Years',
    bio: 'Dr. Emily Carter is a renowned cardiologist with expertise in complex coronary interventions. She is dedicated to providing patient-centered care and is a leading voice in cardiovascular research.',
    opdTimings: 'Mon-Fri: 9 AM - 1 PM',
    departmentId: '1',
    imageId: 'doctor-1'
  },
  {
    id: '2',
    name: 'Dr. Benjamin Adams',
    qualification: 'MD, DM (Neurology)',
    specialization: 'Stroke and Epilepsy Specialist',
    experience: '12 Years',
    bio: 'Dr. Benjamin Adams is a highly skilled neurologist known for his compassionate approach. He specializes in managing acute strokes and complex epilepsy cases, utilizing the latest treatment protocols.',
    opdTimings: 'Tue, Thu, Sat: 2 PM - 6 PM',
    departmentId: '2',
    imageId: 'doctor-2'
  },
  {
    id: '3',
    name: 'Dr. Chloe Taylor',
    qualification: 'MS (Orthopedics)',
    specialization: 'Joint Replacement Surgeon',
    experience: '18 Years',
    bio: 'Dr. Chloe Taylor is a leading orthopedic surgeon with extensive experience in knee and hip replacement surgeries. Her focus on minimally invasive techniques ensures faster recovery for her patients.',
    opdTimings: 'Mon, Wed, Fri: 10 AM - 2 PM',
    departmentId: '3',
    imageId: 'doctor-3'
  },
  {
    id: '4',
    name: 'Dr. David Lee',
    qualification: 'MD (General Medicine), FACP',
    specialization: 'Preventive Cardiology',
    experience: '20 Years',
    bio: 'Dr. David Lee is a senior consultant in cardiology with a focus on preventing heart disease. He works closely with patients to manage risk factors and promote a heart-healthy lifestyle.',
    opdTimings: 'Tue, Thu: 9 AM - 12 PM',
    departmentId: '1',
    imageId: 'doctor-4'
  },
];

export const healthPackages = [
    {
      name: "Basic Wellness",
      price: "1,499",
      features: ["Complete Blood Count", "Blood Sugar", "Lipid Profile", "Urine Analysis", "Doctor Consultation"],
      icon: TestTube2,
    },
    {
      name: "Advanced Heart Care",
      price: "4,999",
      features: ["Basic Wellness Tests", "ECG", "TMT (Treadmill Test)", "2D Echocardiogram", "Cardiologist Consultation"],
      icon: HeartPulse,
    },
    {
      name: "Full Body Checkup",
      price: "7,999",
      features: ["Advanced Heart Care Tests", "Thyroid Profile", "Vitamin D & B12", "Kidney Function Test", "Liver Function Test"],
      icon: PersonStanding,
    },
    {
      name: "Women's Wellness",
      price: "3,999",
      features: ["Complete Blood Count", "Pap Smear", "Mammogram", "Ultrasound Pelvis", "Gynaecologist Consultation"],
      icon: Activity,
    },
    {
      name: "Senior Citizen (Male)",
      price: "5,999",
      features: ["Full Body Checkup Tests", "PSA (Prostate Specific Antigen)", "Bone Densitometry", "Geriatrician Consultation"],
      icon: User,
    },
    {
      name: "Family First Package",
      price: "12,999",
      features: ["Basic wellness for 2 adults and 2 children", "Customizable add-ons", "Pediatrician and Physician Consultation"],
      icon: Users,
    }
  ];

export const getDepartmentBySlug = (slug: string) => departments.find(d => d.slug === slug);
export const getDoctorById = (id: string) => doctors.find(d => d.id === id);
export const getDoctorsByDepartment = (departmentId: string) => doctors.filter(d => d.departmentId === departmentId);
