"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Users, Award, Heart, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert Guidance",
    description: "Professional editing and publishing services without barriers",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Work closely with our team at every stage of your journey",
  },
  {
    icon: Award,
    title: "Complete Rights",
    description: "Retain full creative control and 100% of your royalties",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Book lovers dedicated to bringing your story to life",
  },
];

const highlights = [
  "Founded originally in 1878",
  "Re-established in 2014",
  "Author-focused publishing model",
  "Full-service publishing support",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              About Us
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif leading-tight">
              About <span className="text-primary">Crowell</span> Publishing House
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">

              <p>
                Founded originally in 1878, Crowell Publishing House built its reputation on a
                longstanding dedication to supporting authors and bringing compelling stories
                to readers across generations. With a rich legacy in the publishing industry,
                the company became known for its commitment to literary excellence and
                author-focused publishing services.
              </p>
              <p>
                In 2014, Crowell Publishing House was re-established with a renewed vision
                tailored to the evolving publishing landscape, embracing a modern
                self-publishing model designed to provide writers with greater creative
                control, flexibility, and accessibility. This transformation allowed the
                company to continue its historic mission while adapting to the needs of
                today's independent authors.
              </p>
              <p>
                Today, Crowell Publishing House proudly serves as a trusted self-publishing
                partner for writers of all genres, from aspiring storytellers and poets to
                established authors and industry professionals. Our team of experienced
                editors, designers, publishing consultants, and marketing specialists works
                collaboratively with every client to guide their manuscript from concept to
                publication and beyond. With a passion for literature and a commitment to
                quality, we strive to provide comprehensive publishing solutions that empower
                authors at every stage of their journey.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid with Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Logo floating in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 rounded-full bg-card shadow-2xl flex items-center justify-center border-4 border-background">
                <Image
                  src="/logo.png"
                  alt="Crowell Publishing House"
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group ${index === 1 || index === 2 ? "mt-8" : ""
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-serif">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
