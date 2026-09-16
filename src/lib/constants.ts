import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PixiGrow Media",
  description:
    "PixiGrow Media helps brands grow through strategic digital marketing, creative content, and data-driven campaigns.",
  url: "https://pixigrowmedia.com",
  ogImage: "https://pixigrowmedia.com/og.jpg",
  links: {
    twitter: "https://twitter.com/pixigrowmedia",
    github: "https://github.com/pixigrowmedia",
  },
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
