"use client";

import { motion } from "framer-motion";
import { MessageCircle, Edit3, Paintbrush, RocketIcon, TrendingUp, Users, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Select Your Package & Get Started",
    image: "/process/pointing.png",
    description: "Maintain complete ownership of your creative work. Our self-publishing approach allows you to retain full rights, creative freedom, and royalties while receiving professional guidance throughout the publishing process.",
    details: "From cover design and interior formatting to publishing platforms and distribution, every aspect of your project is tailored to reflect your vision and goals. Your book can be prepared for distribution on major platforms such as Amazon and Kobo within approximately 6–10 days.",
    color: "bg-amber-500",
  },
  {
    number: "02",
    icon: Users,
    title: "Collaborate with Your Dedicated Publishing Team",
    image: "/process/team_laptop.png",
    description: "Once your project begins, you’ll be introduced to a dedicated publishing team focused on guiding your book through every stage of the journey.",
    details: "Your assigned Project Manager and Senior Publishing Consultant will provide personalized support, strategic direction, and consistent communication to ensure your goals and creative vision remain at the center of the process.",
    color: "bg-orange-500",
  },
  {
    number: "03",
    icon: Edit3,
    title: "Manuscript Development & Editorial Refinement",
    image: "/process/typewriter.png",
    description: "Our editorial team works closely with you to elevate your manuscript through comprehensive editing and content refinement.",
    details: "Each chapter is carefully reviewed to enhance flow, pacing, tone, and consistency. From proofreading to advanced developmental editing, our approach is tailored to preserve your unique voice.",
    color: "bg-red-500",
  },
  {
    number: "04",
    icon: Paintbrush,
    title: "Professional Cover Design & Book Formatting",
    image: "/process/design_snippet.jpg",
    description: "Bring your book to life with professionally crafted cover designs tailored to your genre, audience, and creative direction.",
    details: "Once the design is complete, your manuscript is carefully formatted for both print and digital publication, ensuring optimal readability and full compliance with industry standards.",
    color: "bg-rose-500",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Proofreading & Quality Review",
    image: "/process/book_coffee.png",
    description: "Before publication, your manuscript undergoes a detailed quality assurance process for accuracy and consistency.",
    details: "Our specialists identify and correct typographical errors or formatting inconsistencies. You will receive the finalized proof for approval prior to the official launch.",
    color: "bg-pink-500",
  },
  {
    number: "06",
    icon: RocketIcon,
    title: "Global Publishing & Distribution",
    image: "/process/distribution.png",
    description: "Our team oversees the complete distribution process to ensure your book reaches readers across major global marketplaces.",
    details: "Your work is professionally prepared for leading platforms such as Amazon Kindle, Barnes & Noble, and Ingram Spark. We manage account configuration, metadata optimization, and technical compliance.",
    color: "bg-purple-500",
  },
  {
    number: "07",
    icon: Award,
    title: "Royalties & Author Ownership",
    image: "/process/bookshelf.png",
    description: "Maintain complete ownership of your intellectual property while earning royalties from every sale.",
    details: "Our self-publishing model ensures you retain creative control while earning royalties from major platforms. We manage the operational aspects while providing strategic guidance on pricing and market positioning.",
    color: "bg-indigo-500",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Your Publishing Success",
    image: "/process/team_hands.png",
    description: "Become part of a growing community of authors who have successfully brought their books to life with Crowell Publishing House.",
    details: "Built on a tradition of excellence, we ensure your work receives the professional attention it deserves. Explore optional services like targeted marketing, audiobook production, and promotional campaigns.",
    color: "bg-blue-500",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Workflow Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-serif text-foreground mb-8 leading-tight"
          >
            The Path to <span className="text-primary">Publication</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            A comprehensive, author-centric journey designed to transform your manuscript 
            into a globally recognized literary work.
          </motion.p>
        </div>

        {/* Steps - Editorial Layout */}
        <div className="space-y-40">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted shadow-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Number Tag */}
                  <div className={`absolute top-8 ${index % 2 === 1 ? "right-8" : "left-8"} w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white text-3xl font-bold shadow-2xl z-20`}>
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <step.icon className="w-8 h-8" />
                    <span className="text-lg font-bold tracking-widest uppercase">Stage {step.number}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                    {step.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                    {step.description}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-3 text-primary font-bold cursor-pointer group"
                >
                  Learn more about this stage
                  <div className="w-8 h-px bg-primary transition-all group-hover:w-12" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
