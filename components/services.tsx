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
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Select Your Package & Get Started",
    image: "/process/pointing.png",
    subtitle: "Ownership & Control",
    description: "Retain full rights, creative freedom, and royalties while receiving professional guidance. Our self-publishing approach ensures your vision is prioritized from day one.",
    href: "/services/book-publishing",
    featured: true,
  },
  {
    icon: Users,
    title: "Dedicated Publishing Team",
    image: "/process/team_laptop.png",
    subtitle: "Personalized Support",
    description: "Collaborate with a Project Manager and Senior Publishing Consultant focused on guiding your book through every stage with consistent communication and strategic direction.",
    href: "/services/author-branding",
    featured: true,
  },
  {
    icon: FileEdit,
    title: "Manuscript Development",
    image: "/process/typewriter.png",
    subtitle: "Editorial Refinement",
    description: "Our editorial team elevates your manuscript through comprehensive editing designed to strengthen clarity, structure, and overall reader engagement while preserving your unique voice.",
    href: "/services/book-editing",
    featured: false,
  },
  {
    icon: Palette,
    title: "Cover Design & Formatting",
    image: "/process/design_snippet.jpg",
    subtitle: "Visual Identity",
    description: "Professionally crafted cover designs and precise formatting for print and digital publication. We ensure optimal readability and full compliance with industry standards.",
    href: "/services/book-design",
    featured: false,
  },
  {
    icon: CheckCircle2,
    title: "Final Proofreading",
    image: "/process/book_coffee.png",
    subtitle: "Quality Assurance",
    description: "Detailed quality review to identify and correct any remaining typographical errors or formatting inconsistencies, ensuring your book delivers a lasting impression.",
    href: "/services/editing-and-proofreading",
    featured: false,
  },
  {
    icon: Rocket,
    title: "Global Distribution",
    image: "/process/distribution.png",
    subtitle: "Global Reach",
    description: "We oversee the complete publishing and distribution process on leading platforms such as Amazon Kindle, Barnes & Noble, and Ingram Spark to maximize your visibility.",
    href: "/services/book-distribution",
    featured: false,
  },
  {
    icon: Award,
    title: "Royalties & Ownership",
    image: "/process/bookshelf.png",
    subtitle: "Earn from Your Work",
    description: "Maintain complete ownership of your intellectual property while earning royalties from every book sale across supported distribution platforms globally.",
    href: "/services/author-branding",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Publishing Success",
    image: "/process/team_hands.png",
    subtitle: "Lasting Impact",
    description: "Professional attention and exposure in today’s competitive landscape. Explore optional services like targeted marketing to expand your book's reach and success.",
    href: "/testimonials",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="relative overflow-hidden py-20 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/images/marketing-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.2)_40%,rgba(0,0,0,0.24)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/85 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white/85 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white/90 text-primary text-sm font-medium mb-4 shadow-lg"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 font-serif drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
            Book Publishing Services for{" "}
            <span className="text-primary">Indie Authors</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            From first draft to global bookstores, we provide everything you need
            to publish professionally and reach readers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact-us">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/95 text-foreground border-white/80 hover:bg-primary hover:text-primary-foreground hover:border-primary">
              <a href="tel:+17188781604">(718) 878-1604</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-lg bg-white border border-white/70 hover:border-primary/60 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-200 md:h-52">
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 blur-sm"
                />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105 [image-rendering:auto]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-md bg-white/90 flex items-center justify-center shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 font-serif group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
