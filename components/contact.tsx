"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kevinuzamurera@gmail.com",
      href: "mailto:kevinuzamurera@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 791 813 688",
      href: "tel:+250791813688",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Gasabo, Rwanda",
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project or idea? Let’s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.label}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Form */}
          <Card className="lg:col-span-2 border-muted/50 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">Send a Message</CardTitle>
              <CardDescription>
                Tell me about your project or idea — I’ll reply as soon as
                possible.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="Project inquiry, collaboration, etc."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-11"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Write your message..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none"
                    required
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="w-full h-11 text-base"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
