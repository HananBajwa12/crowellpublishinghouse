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
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Ghostwriting",
    subtitle: "Bring Your Story to Life",
    description: "Our ghostwriting, editorial development, and professional book editing services help you write and refine your story, strengthen your message, and perfect your voice.",
    href: "/services/ghostwriting",
    featured: true,
  },
  {
    icon: FileEdit,
    title: "Book Editing",
    subtitle: "Polish to Perfection",
    description: "From developmental editing to proofreading, our expert editors refine your manuscript to meet professional publishing standards.",
    href: "/services/book-editing",
    featured: true,
  },
  {
    icon: Palette,
    title: "Book Design",
    subtitle: "Beautiful Books That Captivate",
    description: "Our design team specializes in stunning book covers, elegant page layouts, and creative illustrations. We craft visuals that make your story irresistible.",
    href: "/services/book-design",
    featured: false,
  },
  {
    icon: BookOpen,
    title: "Book Publishing",
    subtitle: "Complete Publishing Packages",
    description: "Full-service publishing that handles everything from manuscript to market. Print, eBook, and audiobook production with professional quality.",
    href: "/services/book-publishing",
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    subtitle: "Get Noticed & Build Your Brand",
    description: "We manage launch campaigns, social media, SEO, author websites, and more so readers find (and remember) you.",
    href: "/services/book-marketing",
    featured: false,
  },
  {
    icon: Globe,
    title: "Global Distribution",
    subtitle: "Reach Readers Worldwide",
    description: "We facilitate book distribution through Amazon, Apple Books, Kobo, IngramSpark, and 40,000+ retailers globally.",
    href: "/services/book-distribution",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Book Publishing Services for{" "}
            <span className="text-primary">Indie Authors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From first draft to global bookstores, we provide everything you need
            to publish professionally and reach readers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+18889080775">+1 (444)-132-1234</a>
            </Button>
          </div>
        </motion.div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {services.filter(s => s.featured).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
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

        {/* Other Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.filter(s => !s.featured).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
              <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto text-sm font-semibold group/btn">
                <Link href={service.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
