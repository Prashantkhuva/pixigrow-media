"use client";

import Image from "next/image";
import { Container } from "@/components";

const logos = [
  { id: 1, name: "Aaloki", src: "/aaloki.svg" },
  { id: 2, name: "K-Lust", src: "/k-lust.svg" },
  { id: 3, name: "Malabar", src: "/malabar.svg" },
  { id: 4, name: "Oppo", src: "/oppo.svg" },
  { id: 5, name: "Ramanta", src: "/ramanta.svg" },
];

export default function TrustStrip() {
  return (
    <section className="py-10 md:py-[40px] bg-light">
      <Container>
        <p className="text-center text-sm text-secondary mb-8">
          Trusted by leading brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[40px]">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={50}
                className="h-[40px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
