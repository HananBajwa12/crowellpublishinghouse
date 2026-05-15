"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PenTool,
  Palette,
  BookOpen,
  Megaphone,
  Globe,
  FileEdit,
  ArrowRight,
  Users,
  CheckCircle2,
  Award,
  TrendingUp,
  RocketIcon
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Select Your Package & Get Started",
    image: "/process/pointing.png",
    subtitle: "Ownership & Control",
    description: "Retain full rights, creative freedom, and royalties while receiving professional guidance. Our self-publishing approach ensures your vision is prioritized from day one.",
    href: "/services/book-publishing",
  },
  {
    icon: Users,
    title: "Dedicated Publishing Team",
    image: "/process/team_laptop.png",
    subtitle: "Personalized Support",
    description: "Collaborate with a Project Manager and Senior Publishing Consultant focused on guiding your book through every stage with consistent communication and strategic direction.",
    href: "/services/author-branding",
  },
  {
    icon: FileEdit,
    title: "Manuscript Development",
    image: "/process/typewriter.png",
    subtitle: "Editorial Refinement",
    description: "Our editorial team elevates your manuscript through comprehensive editing designed to strengthen clarity, structure, and overall reader engagement while preserving your unique voice.",
    href: "/services/book-editing",
  },
  {
    icon: Palette,
    title: "Cover Design & Formatting",
    image: "/process/design_snippet.jpg",
    subtitle: "Visual Identity",
    description: "Professionally crafted cover designs and precise formatting for print and digital publication. We ensure optimal readability and full compliance with industry standards.",
    href: "/services/book-design",
  },
  {
    icon: CheckCircle2,
    title: "Final Proofreading",
    image: "/process/book_coffee.png",
    subtitle: "Quality Assurance",
    description: "Detailed quality review to identify and correct any remaining typographical errors or formatting inconsistencies, ensuring your book delivers a lasting impression.",
    href: "/services/editing-and-proofreading",
  },
  {
    icon: RocketIcon,
    title: "Global Distribution",
    image: "/process/distribution.png",
    subtitle: "Global Reach",
    description: "We oversee the complete publishing and distribution process on leading platforms such as Amazon Kindle, Barnes & Noble, and Ingram Spark to maximize your visibility.",
    href: "/services/book-distribution",
  },
  {
    icon: Award,
    title: "Royalties & Ownership",
    image: "/process/bookshelf.png",
    subtitle: "Earn from Your Work",
    description: "Maintain complete ownership of your intellectual property while earning royalties from every book sale across supported distribution platforms globally.",
    href: "/services/author-branding",
  },
  {
    icon: TrendingUp,
    title: "Publishing Success",
    image: "/process/team_hands.png",
    subtitle: "Lasting Impact",
    description: "Professional attention and exposure in today’s competitive landscape. Explore optional services like targeted marketing to expand your book's reach and success.",
    href: "/testimonials",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
            Publishing Services for <span className="text-primary">Indie Authors</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From first draft to global bookstores, we provide everything you need
            to publish professionally and reach readers worldwide.
          </p>
        </div>

        {/* Services Grid - Horizontal Alignment */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section - Fixed Left */}
              <div className="w-full md:w-2/5 relative aspect-video md:aspect-auto min-h-[200px] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/95 flex items-center justify-center shadow-lg z-10">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{service.subtitle}</span>
                  <h3 className="text-2xl font-bold text-foreground font-serif mt-1 leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Action */}
        <div className="mt-20 flex flex-col items-center justify-center gap-6">
          <p className="text-muted-foreground font-medium italic">Ready to see your name in print?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8 bg-primary hover:bg-primary/90">
              <Link href="/contact-us">Get a Custom Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href="tel:+17188781604">Call Our Consultants</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
