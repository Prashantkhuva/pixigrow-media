"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const openMenu = useCallback(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    isOpenRef.current = true;

    // Kill any running timeline
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    // Measure content
    gsap.set(menu, { display: "block", height: "auto", overflow: "hidden" });
    const fullHeight = menu.scrollHeight;

    tl.fromTo(
      menu,
      { height: 0, opacity: 0 },
      { height: fullHeight, opacity: 1, duration: 0.45, ease: "power3.out" }
    );

    // Stagger links in
    const validLinks = linksRef.current.filter(Boolean);
    tl.fromTo(
      validLinks,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.25"
    );

    tl.set(menu, { height: "auto", overflow: "visible" });
  }, []);

  const closeMenu = useCallback(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    isOpenRef.current = false;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(menu, {
      height: 0,
      opacity: 0,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(menu, { display: "none", overflow: "hidden" });
      },
    });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      openMenu();
    } else if (isOpenRef.current) {
      closeMenu();
    }
  }, [isMobileMenuOpen, openMenu, closeMenu]);

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

          {/* Mobile Menu Button — animated hamburger / X */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "absolute block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isMobileMenuOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-[6px] rotate-0"
              )}
            />
            <span
              className={clsx(
                "absolute block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isMobileMenuOpen
                  ? "opacity-0 scale-x-0"
                  : "opacity-100 scale-x-100 translate-y-0"
              )}
            />
            <span
              className={clsx(
                "absolute block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isMobileMenuOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-[6px] rotate-0"
              )}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden"
        style={{ display: "none", height: 0, overflow: "hidden" }}
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
                    "block py-3 px-4 text-base font-medium rounded-xl transition-colors duration-200",
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
