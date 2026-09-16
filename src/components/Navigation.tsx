"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Container, Button } from "@/components";
import gsap from "gsap";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isOpenRef = useRef(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (isMobileMenuOpen && !isOpenRef.current) {
      isOpenRef.current = true;

      // Set initial state
      gsap.set(menu, { height: "auto", display: "block" });
      const fullHeight = menu.scrollHeight;
      gsap.set(menu, { height: 0, overflow: "hidden" });

      // Animate menu open
      gsap.to(menu, {
        height: fullHeight,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(menu, { height: "auto", overflow: "visible" });
        },
      });

      // Stagger links
      const validLinks = linksRef.current.filter(Boolean);
      gsap.fromTo(
        validLinks,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else if (!isMobileMenuOpen && isOpenRef.current) {
      isOpenRef.current = false;

      gsap.to(menu, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menu, { display: "none", overflow: "hidden" });
        },
      });
    }
  }, [isMobileMenuOpen]);

  function toggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="PixiGrow Media"
              width={40}
              height={40}
              className="h-8 w-auto md:h-10"
            />
            <span className="text-lg font-bold text-dark">PixiGrow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 relative group",
                  pathname === link.href
                    ? "text-primary"
                    : "text-dark hover:text-primary"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="/contact">
              Let&apos;s talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-dark"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={clsx(
                  "block h-0.5 bg-dark transition-all duration-300 origin-center",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[4px]"
                    : "rotate-0"
                )}
              />
              <span
                className={clsx(
                  "block h-0.5 bg-dark transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                )}
              />
              <span
                className={clsx(
                  "block h-0.5 bg-dark transition-all duration-300 origin-center",
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-[4px]"
                    : "rotate-0"
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ display: "none", height: 0 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-border">
          <Container>
            <div className="py-6 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  ref={(el) => { linksRef.current[index] = el; }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "block py-3 px-4 text-base font-medium rounded-xl transition-all duration-200",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-dark hover:text-primary hover:bg-light"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={clsx(
                        "w-1.5 h-1.5 rounded-full transition-colors",
                        pathname === link.href ? "bg-primary" : "bg-transparent"
                      )}
                    />
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  className="w-full"
                >
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </nav>
  );
}
