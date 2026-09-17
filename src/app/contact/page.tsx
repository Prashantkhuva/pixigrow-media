"use client";

import { useState } from "react";
import { Section, Container, Heading, Button } from "@/components";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/icons/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    brief: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          brief: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  const socialLinks = [
    { icon: InstagramIcon, href: "https://instagram.com/pixigrowmedia", label: "Instagram" },
    { icon: LinkedInIcon, href: "https://linkedin.com/company/pixigrowmedia", label: "LinkedIn" },
    { icon: TwitterIcon, href: "https://twitter.com/pixigrowmedia", label: "Twitter" },
    { icon: YouTubeIcon, href: "https://youtube.com/@pixigrowmedia", label: "YouTube" },
    { icon: FacebookIcon, href: "https://facebook.com/pixigrowmedia", label: "Facebook" },
  ];

  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Contact Us
            </span>
            <Heading variant="h1" className="text-white">
              Let&apos;s build something{" "}
              <span className="text-accent">great together</span>
            </Heading>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Drop us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Form + Info */}
      <Section bg="white" className="relative -mt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-dark/5 border border-border"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-light border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-secondary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 bg-light border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Company/Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your company name"
                        className="w-full px-4 py-3.5 bg-light border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-secondary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        What you need
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-light border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="strategy">Strategy</option>
                        <option value="content">Content</option>
                        <option value="pr">PR</option>
                        <option value="influencer">Influencer</option>
                        <option value="production">Production</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.brief}
                      onChange={(e) =>
                        setFormData({ ...formData, brief: e.target.value })
                      }
                      placeholder="Brief description of your project, goals, and timeline..."
                      className="w-full px-4 py-3.5 bg-light border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-secondary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full rounded-xl"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send message"
                    )}
                  </Button>

                  {status === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <svg
                        className="w-5 h-5 text-green-600 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-green-700 text-sm font-medium">
                        Thanks! We&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <svg
                        className="w-5 h-5 text-red-600 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <p className="text-red-700 text-sm font-medium">
                        {errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-dark p-8 md:p-10 rounded-2xl text-white h-full">
                <h3 className="text-xl font-bold mb-8">Get in touch</h3>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:contact@pixigrowmedia.com"
                      className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                    >
                      contact@pixigrowmedia.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+919999999999"
                      className="text-white hover:text-accent transition-colors text-lg font-medium"
                    >
                      +91 99999 99999
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Location
                    </p>
                    <p className="text-white/80 text-lg">
                      Rajkot, Gujarat, India
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                      Follow us
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business hours */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                    Business hours
                  </p>
                  <div className="space-y-2 text-white/80">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
