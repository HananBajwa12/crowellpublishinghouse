"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, History, Target, Users } from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/about/building.jpg"
            alt="Historical Background"
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
            Our Legacy & Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed"
          >
            Honoring a publishing tradition since 1878 while pioneering the future of self-publishing.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider">
                <History className="h-4 w-4" />
                Company Background
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                Founded in 1878: A Significant Force
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1878, Crowell Publishing House emerged as a significant force in American publishing, contributing to the advancement of literature, education, journalism, and public discourse during a transformative period in publishing history. Over the decades, the company became widely recognized for producing influential educational materials, literary works, magazines, and general interest publications that reached readers across the United States.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout its early history, Crowell Publishing House played an important role in making knowledge and literature more accessible to the public, publishing works that supported education, encouraged intellectual engagement, and reflected the evolving cultural landscape of the time. The company became associated with a broad range of publications, including novels, periodicals, educational texts, and family-oriented magazines that helped shape reading habits for generations of Americans.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image
                src="/about/founder.jpg"
                alt="Thomas Y. Crowell"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-1">Historical Figure</p>
                <p className="text-2xl font-bold font-serif">Thomas Y. Crowell</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break / Historical Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/about/building.jpg"
                alt="Historical Headquarters"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-lg font-serif">The Historic HQ</h3>
              </div>
            </motion.div>

            <div className="md:col-span-1 flex flex-col justify-center space-y-4 p-6 bg-white rounded-2xl shadow-sm border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-serif text-foreground">Legacy of Literacy</h3>
              <p className="text-sm text-muted-foreground">Making knowledge and literature more accessible to the public for over a century.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/about/magazine.jpg"
                alt="Woman's Home Companion"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-lg font-serif">Influential Periodicals</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto text-white shadow-xl"
            >
              <Target className="h-10 w-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground">
                2014: A Renewed Vision
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                In 2014, Crowell Publishing House was re-established with a renewed vision focused on the modern self-publishing industry. While honoring its historical legacy, the company adapted to the changing needs of contemporary authors by offering comprehensive publishing solutions that provide writers with creative freedom and professional support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 bg-primary/5 rounded-[40px] border border-primary/10"
            >
              <p className="text-lg md:text-2xl font-serif text-foreground italic leading-relaxed">
                "Today, Crowell Publishing House combines traditional publishing values with modern publishing innovation, helping authors bring their stories, ideas, and literary works to audiences worldwide through editing, design, publishing, marketing, and distribution services."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-foreground text-background overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: "Traditional Values", desc: "Upholding the standard of excellence established in 1878." },
              { icon: Target, label: "Modern Innovation", desc: "Utilizing state-of-the-art tools for the self-publishing era." },
              { icon: Users, label: "Author-Centric", desc: "Providing writers with full creative freedom and support." },
              { icon: History, label: "Global Reach", desc: "Bringing literary works to audiences worldwide." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold font-serif mb-2">{value.label}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      </section>

      <Footer />
    </main>
  );
}
