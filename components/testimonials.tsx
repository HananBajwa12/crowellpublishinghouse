"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anthony Adams",
    date: "Dec 18, 2024",
    rating: 5,
    text: "Justin is extremely professional and the whole process has been easy and straightforward. Crowell Publishing made my dream of becoming an author a reality.",
  },
  {
    name: "Monica Lallo",
    date: "Dec 12, 2024",
    rating: 5,
    text: "My experience with Crowell Publishing House for editing services was truly exceptional. Their team displayed a keen eye for details and a deep understanding of storytelling.",
  },
  {
    name: "Berel Solomon",
    date: "Dec 10, 2024",
    rating: 5,
    text: "I can&apos;t recommend Crowell Publishing book marketing services enough! They don&apos;t just promote your book - they genuinely believe in your story and work tirelessly to help it find its audience.",
  },
  {
    name: "Maizy J.",
    date: "Dec 08, 2024",
    rating: 5,
    text: "Crowell Publishing produces captivating well-crafted stories with a dedication to quality and originality. Making it a standout independent literary publishing house.",
  },
  {
    name: "Scarlet Jack",
    date: "Dec 09, 2024",
    rating: 4,
    text: "Pretty straightforward process from start to finish. Had a couple moments where I wasn&apos;t sure what was happening. Still, everything turned out fine in the end.",
  },
  {
    name: "Sebastian Liam",
    date: "Nov 28, 2024",
    rating: 5,
    text: "I was not really sure how everything would turn out, but honestly they surprised me in a good way. They handled my requests properly and didn&apos;t get annoyed when I asked for changes.",
  },
  {
    name: "Matt",
    date: "Dec 08, 2024",
    rating: 5,
    text: "I started with another company but eventually switched to Crowell Publishing. The transition was smooth and they helped me fulfill a lifelong dream of publishing my book.",
  },
  {
    name: "Aaron Smith",
    date: "Dec 08, 2024",
    rating: 5,
    text: "The support staff had my back! I just finished my first book. Many months of long hours of writing on top of a full time job left me discouraged. They guided me through everything.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
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
            Client Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            What Our <span className="text-primary">Authors</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Listen to reviews from authors, just like you, 
            who experienced the quality and commitment of Crowell Publishing House.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="h-8 w-8 text-primary/20 mb-2 group-hover:text-primary/40 transition-colors" />
                    <p className="text-foreground mb-4 line-clamp-4 leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === selectedIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
