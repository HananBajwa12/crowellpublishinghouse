"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Lulu", logo: "/partners/logo_3.webp" },
  { name: "Google Play Books", logo: "/partners/logo_4.webp" },
  { name: "Barnes & Noble", logo: "/partners/logo_5.webp" },
  { name: "Amazon Kindle", logo: "/partners/logo_1.webp" },
  { name: "IngramSpark", logo: "/partners/logo_2.webp" },
];

export function TrustedPlatforms() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden border-t border-border bg-foreground">
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
    </section>
  );
}

export function TrustedPlatformsBridge() {
  return (
    <section className="relative overflow-visible bg-background py-10 md:py-12">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="relative z-10 flex min-h-[116px] w-full items-center overflow-hidden border-y border-primary/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.09)]">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-14 md:gap-24 py-6"
        >
          {[...platforms, ...platforms, ...platforms, ...platforms].map((platform, index) => (
            <div 
              key={index} 
              className="flex min-w-[170px] items-center justify-center px-2 md:min-w-[210px]"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 w-36 object-contain opacity-75 transition-transform duration-300 hover:scale-105 hover:opacity-100 md:h-14 md:w-44"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
