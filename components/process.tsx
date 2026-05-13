"use client";

import { motion } from "framer-motion";
import { MessageCircle, Edit3, Paintbrush, Rocket, TrendingUp, Users, CheckCircle2, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Select Your Package & Get Started",
    image: "/process/bookshelf.png",
    description: "Maintain complete ownership of your creative work. Our self-publishing approach allows you to retain full rights, creative freedom, and royalties while receiving professional guidance throughout the publishing process.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    icon: Users,
    title: "Collaborate with Your Dedicated Publishing Team",
    image: "/process/team_laptop.png",
    description: "Once your project begins, you’ll be introduced to a dedicated publishing team focused on guiding your book through every stage of the publishing journey. Your Project Manager and Senior Consultant provide personalized support.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    icon: Edit3,
    title: "Manuscript Development & Editorial Refinement",
    image: "/process/typewriter.png",
    description: "Our editorial team works closely with you to elevate your manuscript through comprehensive editing and refinement designed to strengthen clarity, structure, and overall reader engagement while preserving your unique voice.",
    color: "from-red-500 to-rose-500",
  },
  {
    number: "04",
    icon: Paintbrush,
    title: "Professional Cover Design & Book Formatting",
    image: "/process/team_hands.png",
    description: "Bring your book to life with professionally crafted cover designs tailored to your genre and audience. Once the design is complete, your manuscript is carefully formatted for both print and digital publication.",
    color: "from-rose-500 to-pink-500",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Proofreading & Quality Review",
    image: "/process/pointing.png",
    description: "Before publication, your manuscript undergoes a detailed quality assurance process to ensure the highest standards of accuracy. Our specialists review the content to identify and correct any remaining details.",
    color: "from-pink-500 to-purple-500",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Global Publishing & Distribution",
    image: "/placeholder.jpg",
    description: "Once your manuscript is finalized, our team oversees the complete publishing and distribution process to ensure your book reaches readers across major global marketplaces like Amazon and IngramSpark.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "07",
    icon: Award,
    title: "Royalties & Author Ownership",
    image: "/placeholder.jpg",
    description: "Maintain complete ownership of your intellectual property while earning royalties from every sale. You retain full creative control while we manage the operational aspects and coordination.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Your Publishing Success",
    image: "/process/success.png",
    description: "Become part of a tradition of publishing excellence. With ongoing expert support and proven strategies, your story is positioned to make a meaningful and lasting impact across the literary world.",
    color: "from-blue-500 to-cyan-500",
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
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:grid md:grid-cols-[1fr_72px_1fr] md:items-center gap-6 md:gap-4 pb-10 last:pb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Line (center on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-[84px] w-0.5 h-[calc(100%-30px)] bg-gradient-to-b from-primary/25 via-border to-transparent -translate-x-1/2" />
              )}

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`${index % 2 === 1 ? "md:col-start-3" : "md:col-start-1"}`}
              >
                <div className={`min-h-[210px] p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ${
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
              <div className="hidden md:flex items-center justify-center md:col-start-2">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg font-serif shadow-xl z-10 ring-8 ring-background`}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Visual panel */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className={`hidden md:block ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-3"}`}
              >
                <div className="relative h-[210px] overflow-hidden rounded-2xl border border-border bg-neutral-200 shadow-lg">
                  <img
                    src={step.image}
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-full w-full object-cover [image-rendering:auto]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
                  <div aria-hidden="true" className={`absolute bottom-5 ${index % 2 === 1 ? "right-5" : "left-5"} rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg`}>
                    Step {step.number}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
