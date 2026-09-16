"use client";

import { useState } from "react";
import { Section, Container, Heading, Button } from "@/components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    brief: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
        setFormData({ name: "", email: "", company: "", service: "", brief: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <Container>
          <Heading variant="h1" center>
            Let&apos;s talk strategy
          </Heading>
          <p className="mt-4 text-lg text-secondary text-center">
            Drop us a line, we&apos;ll get back to you in 24 hours
          </p>
        </Container>
      </Section>

      {/* Form + Info */}
      <Section bg="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border">
                <div className="space-y-6">
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
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

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.brief}
                      onChange={(e) =>
                        setFormData({ ...formData, brief: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full"
                  >
                    {status === "loading" ? "Sending..." : "Send message"}
                  </Button>

                  {status === "success" && (
                    <p className="text-green-600 text-center">
                      Thanks! We&apos;ll be in touch soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-red-600 text-center">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-dark mb-6">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-secondary">Email</p>
                    <a
                      href="mailto:contact@pixigrowmedia.com"
                      className="text-primary hover:underline"
                    >
                      contact@pixigrowmedia.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      Location
                    </p>
                    <p className="text-dark">Rajkot, Gujarat, India</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">
                      Social
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com/pixigrowmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark hover:text-primary transition-colors"
                      >
                        IG
                      </a>
                      <a
                        href="https://linkedin.com/company/pixigrowmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
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
