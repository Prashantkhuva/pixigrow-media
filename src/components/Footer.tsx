import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";

const serviceLinks = [
  { label: "Strategy", href: "/services/strategy" },
  { label: "Social & Content", href: "/services/social-content" },
  { label: "Celebrity & IP", href: "/services/celebrity-influencer" },
  { label: "PR & Media", href: "/services/pr-media" },
  { label: "Production", href: "/services/production" },
  { label: "Performance", href: "/services/performance" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10 md:py-[40px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="PixiGrow Media"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">PixiGrow Media</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Strategy • Celebs • PR • IPs
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="mailto:contact@pixigrowmedia.com"
              className="text-sm text-primary hover:underline"
            >
              contact@pixigrowmedia.com
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/pixigrowmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                IG
              </a>
              <a
                href="https://linkedin.com/company/pixigrowmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            PixiGrow Media © 2025. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
