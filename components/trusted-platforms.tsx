"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Kobo", logo: "/partners/logo_1.webp" },
  { name: "Barnes & Noble", logo: "/partners/logo_2.webp" },
  { name: "Amazon", logo: "/partners/logo_3.webp" },
  { name: "IngramSpark", logo: "/partners/logo_4.webp" },
  { name: "Google Play Books", logo: "/partners/logo_5.webp" },
];

export function TrustedPlatforms() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border bg-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('/images/ghostwriting-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.45)_34%,rgba(255,255,255,0.08)_68%,rgba(0,0,0,0.28)_100%)]" />

      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight">
            Trusted By Leading <span className="text-primary">Self Publishing</span> Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We collaborate with world-class publishing partners and global distribution networks to 
            give your book professional reach and credibility.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex overflow-hidden bg-white/45 py-4 shadow-[0_0_24px_rgba(255,255,255,0.45)]">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center py-4"
        >
          {/* Repeat the platforms array 3 times to ensure no gaps */}
          {[...platforms, ...platforms, ...platforms].map((platform, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-4 min-w-[150px]"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 w-32 md:h-14 md:w-40 object-contain hover:scale-110 transition-transform duration-300 pointer-events-none opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
