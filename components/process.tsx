"use client";

import { motion } from "framer-motion";
import { MessageCircle, Edit3, Paintbrush, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Talk to Us",
    description: "We begin with a conversation about your goals and your book. This includes an editorial review and critical evaluation of your manuscript, followed by further discussions until we achieve the desired outcome.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    icon: Edit3,
    title: "Refine Your Manuscript",
    description: "Our experienced book editors and ghostwriters will enhance your story in whatever way you require. This process takes a few months and is entirely human-generated. Perfection cannot be rushed.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design & Format",
    description: "We provide your book with a professional visual identity. This includes eye-catching covers, visuals such as maps and illustrations, and precise formatting that matches traditional publishing standards.",
    color: "from-red-500 to-rose-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publish & Launch",
    description: "We expertly prepare your book for all major platforms, including Amazon, Barnes & Noble, and IngramSpark! Our services include providing ISBNs, protecting your rights, and distributing globally.",
    color: "from-rose-500 to-pink-500",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Promote & Grow",
    description: "We focus on marketing, branding, and publicity to expand your readership. From author websites and press releases to social media management, we provide everything you need to succeed.",
    color: "from-pink-500 to-purple-500",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Process
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Here&apos;s How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every step is transparent, collaborative, and tailored to your goals.
            We guide you through the entire publishing journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row gap-8 pb-16 last:pb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Line (center on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-[100px] w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-border to-transparent -translate-x-1/2" />
              )}

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex-1"
              >
                <div className={`p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}>
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step {step.number}</span>
                      <h3 className="text-2xl font-bold text-foreground font-serif">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

              {/* Center Number */}
              <div className="hidden md:flex items-start justify-center pt-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl font-serif shadow-xl z-10`}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
