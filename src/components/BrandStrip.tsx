"use client";

import Image from "next/image";

const brands = [
  { name: "Aaloki", logo: "/aaloki.svg" },
  { name: "Gopal", logo: "/gopal.svg" },
  { name: "K-Lust", logo: "/k-lust.svg" },
  { name: "Kurkure", logo: "/kurkure.svg" },
  { name: "Lenovo", logo: "/lenovo.svg" },
  { name: "Malabar", logo: "/malabar.svg" },
  { name: "Oppo", logo: "/oppo.svg" },
  { name: "Poojara", logo: "/poojara.svg" },
  { name: "Ramanta", logo: "/ramanta.svg" },
  { name: "SideCash AI", logo: "/sidecash-ai.svg" },
];

// Duplicate for seamless loop
const duplicatedBrands = [...brands, ...brands, ...brands];

export default function BrandStrip() {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-border overflow-hidden">
      <p className="text-center text-sm text-secondary mb-8">
        Trusted by leading brands
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-12 md:h-16 w-28 md:w-36 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
