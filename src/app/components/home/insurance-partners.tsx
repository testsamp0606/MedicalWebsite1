'use client';

import { Globe } from 'lucide-react';

const partners = [
  "Alliance", "Blue Cross", "Cigna", "UnitedHealth", "Aetna", "Humana", "MetLife", "Prudential",
  "Star Health", "Max Bupa", "ICICI Lombard", "HDFC Ergo"
];

export function InsurancePartners() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Insurance & TPA Partners</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We partner with a wide range of insurance providers to make your healthcare journey seamless and cashless.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll group-hover:paused">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-4 my-2 p-4 bg-card border rounded-lg shadow-sm">
                <p className="font-semibold text-muted-foreground">{partner}</p>
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
