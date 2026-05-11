"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "casey jonas",
    date: "October 19, 2013",
    rating: 5,
    title: "sphereland",
    format: "Paperback",
    cover: "/books/sphereland.jpg",
    text: "i really enjoyed sphereland and the concepts it introduces to the reader. it is a great story that shares the spirit of the works that preceeded it like Flatland by Abbott.",
  },
  {
    name: "Kate Bell",
    date: "May 29, 2019",
    rating: 5,
    title: "A classic of children's literature",
    format: "Kindle",
    cover: "/books/bridge-to-terabithia.jpg",
    text: "I very much enjoyed re-reading this as an adult. It doesn't have a happy ending, which is rare in children's books, but so true in real life. I found the characters very finely drawn and the rural life so clearly described with just the right details.",
  },
  {
    name: "Robin Landa",
    date: "August 1, 2010",
    rating: 5,
    title: "Hilarious",
    format: "Paperback",
    cover: "/books/come-away-shirley.jpg",
    text: "A must read. This picture book can teach any writer or art director about the synergistic relationship between words and images.",
  },
  {
    name: "ed r.",
    date: "November 4, 2025",
    rating: 5,
    title: "Good story for kids.",
    format: "Hardcover",
    cover: "/books/little-old-lady.jpg",
    text: "This was a gift to a 6 year old. She knew most of the story and was happy to get the book. Her sister said she read the book three times before they had to leave for school the next morning. She liked it was hard cover.",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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
            Voices Of Our <span className="text-primary">Readers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Read reviews from readers, just like you, 
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
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3"
                >
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="mb-5 flex h-48 items-end justify-center rounded-xl bg-muted/40 p-3">
                      <img
                        src={testimonial.cover}
                        alt={testimonial.title}
                        className="max-h-full max-w-full object-contain shadow-lg"
                      />
                    </div>
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
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {testimonial.title}
                    </h3>
                    <p className="text-foreground mb-4 line-clamp-5 leading-relaxed">
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
                        {testimonial.format}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Reviewed on {testimonial.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
