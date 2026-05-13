"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Package, Users, Edit3, Palette, Search, Globe, DollarSign, Trophy } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Select Your Package & Get Started",
    description: "At Crowell Publishing House, we believe authors and artists should maintain complete ownership of their creative work. Our self-publishing approach allows you to retain full rights, creative freedom, and royalties while receiving professional guidance throughout the publishing process.",
    content: "From cover design and interior formatting to publishing platforms and distribution, every aspect of your project is tailored to reflect your vision and goals. Our experienced team provides the expertise and support needed to transform your manuscript into a professionally published book without compromising your originality or artistic direction. With an efficient and streamlined publishing process, your book can be prepared for distribution on major platforms such as Amazon and Kobo within approximately 6–10 days, helping you reach readers around the world quickly and professionally.",
    image: "/process/step1.png",
    icon: Package,
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "Collaborate with Your Dedicated Publishing Team",
    description: "Once your project begins, you’ll be introduced to a dedicated publishing team focused on guiding your book through every stage of the publishing journey.",
    content: "Your assigned Project Manager and Senior Publishing Consultant will provide personalized support, strategic direction, and consistent communication to ensure your goals and creative vision remain at the center of the process. Through regular updates, collaborative planning, and expert industry guidance, our team works closely with you to refine every aspect of your manuscript and publishing strategy.",
    image: "/process/step2.png",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    id: "03",
    title: "Manuscript Development & Editorial Refinement",
    description: "Our editorial team works closely with you to elevate your manuscript through comprehensive editing and content refinement services.",
    content: "Each chapter is carefully reviewed to enhance flow, pacing, tone, and consistency while ensuring your work is professionally polished and publication-ready. From proofreading and copyediting to more advanced developmental editing, our approach is thoughtfully tailored to preserve your unique voice and creative vision.",
    image: "/process/step3.png",
    icon: Edit3,
    color: "bg-purple-500",
  },
  {
    id: "04",
    title: "Professional Cover Design & Book Formatting",
    description: "Bring your book to life with professionally crafted cover designs tailored to your genre, audience, and creative direction.",
    content: "Our experienced design team works collaboratively with you to develop visually compelling concepts that capture the essence of your story while creating a strong and memorable first impression for readers. Once the design process is complete, your manuscript is carefully formatted for both print and digital publication. From typography and spacing to layout consistency and publishing specifications, every detail is refined to ensure optimal readability, professional presentation, and full compliance with industry standards.",
    image: "/process/step4.png",
    icon: Palette,
    color: "bg-pink-500",
  },
  {
    id: "05",
    title: "Final Proofreading & Quality Review",
    description: "Before publication, your manuscript undergoes a detailed proofreading and quality assurance process designed to ensure the highest standards of accuracy, consistency, and professional presentation.",
    content: "Our editorial specialists carefully review the content to identify and correct any remaining typographical errors, formatting inconsistencies, or overlooked details. In addition to linguistic refinement, a comprehensive final quality check is performed to confirm that your book meets established publishing standards across both print and digital formats. Once the review is complete, you will receive the finalized proof for approval.",
    image: "/process/step5.png",
    icon: Search,
    color: "bg-red-500",
  },
  {
    id: "06",
    title: "Global Publishing & Distribution",
    description: "Once your manuscript is finalized, our team oversees the complete publishing and distribution process to ensure your book reaches readers across major global marketplaces.",
    content: "Your work is professionally prepared for publication on leading platforms such as Amazon Kindle, Barnes & Noble, and Ingram Spark, maximizing both visibility and accessibility for your audience. From account configuration and metadata optimization to final file preparation and platform compliance, every technical aspect is carefully managed to provide a smooth and efficient publishing experience.",
    image: "/process/step6.png",
    icon: Globe,
    color: "bg-green-500",
  },
  {
    id: "07",
    title: "Royalties & Author Ownership",
    description: "Maintain complete ownership of your intellectual property while benefiting from comprehensive professional publishing support.",
    content: "Our self-publishing model ensures that you retain creative control over your work while earning royalties from every book sale across supported distribution platforms. While you focus on your creative vision, our team manages the operational aspects of publishing, including platform coordination, distribution management, and sales optimization. We also provide strategic guidance on pricing, market positioning, and global reach to help enhance your book's visibility and long-term earning potential.",
    image: "/process/step7.png",
    icon: DollarSign,
    color: "bg-emerald-500",
  },
  {
    id: "08",
    title: "Your Publishing Success",
    description: "Become part of a growing community of authors who have successfully brought their books to life with Crowell Publishing House.",
    content: "Built on a tradition of publishing excellence, we ensure your work receives the professional attention, care, and exposure it deserves in today's competitive literary landscape. Beyond publication, you can explore a range of optional services including targeted marketing, audiobook production, and promotional campaigns designed to expand your book's reach and audience engagement.",
    image: "/process/step8.png",
    icon: Trophy,
    color: "bg-yellow-500",
  },
];

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/process/step4.png"
            alt="Process Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            Our Publishing Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed"
          >
            A streamlined, expert-led journey from manuscript to global distribution, 
            designed to empower independent authors at every step.
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-3xl font-bold font-serif">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Step {step.id}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground leading-tight">
                    {step.title}
                  </h2>
                  
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="h-1 w-20 bg-primary/20 rounded-full" />
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.content}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Professional Support
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Full Rights Retained
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team is ready to help you navigate every step of the publishing world. 
              Let's bring your story to life together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact-us"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get Started Now
                <ChevronRight className="h-5 w-5" />
              </a>
              <a 
                href="tel:+17188781604"
                className="w-full sm:w-auto px-8 py-4 border border-border bg-background text-foreground rounded-full font-bold hover:bg-muted transition-all"
              >
                Talk to a Consultant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
