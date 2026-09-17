import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navigation, Footer, LenisProvider, PageTransition } from "@/components";
import { localBusinessSchema, organizationSchema, websiteSchema, faqSchema } from "@/lib/schema";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PixiGrow Media - 360° Brand Agency Rajkot | Strategy, Celebs, PR & IPs",
    template: "%s | PixiGrow Media",
  },
  description:
    "Strategy, Celebs, PR & IPs. We do it all. PixiGrow Media helps brands grow through strategic marketing, creative content, and data-driven campaigns.",
  keywords: [
    "digital marketing",
    "brand strategy",
    "content creation",
    "social media",
    "PixiGrow Media",
    "marketing agency Rajkot",
  ],
  openGraph: {
    title: "PixiGrow Media - 360° Brand Agency Rajkot",
    description: "Strategy, Celebs, PR & IPs. We do it all.",
    type: "website",
    locale: "en_US",
    siteName: "PixiGrow Media",
    url: "https://pixigrow-media.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixiGrow Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixiGrow Media - 360° Brand Agency Rajkot",
    description: "Strategy, Celebs, PR & IPs. We do it all.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://pixigrow-media.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              organizationSchema,
              websiteSchema,
              faqSchema,
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <LenisProvider>
          <Navigation />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
