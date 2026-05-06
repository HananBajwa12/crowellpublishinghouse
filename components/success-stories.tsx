"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Jessica M.",
    role: "Memoir Author",
    book: "Finding My Way",
    image: "/avatars/jessica.jpg",
    story: "I'd been sitting on my memoir for almost two years because I didn't know where to begin. Working with The Pulp House Publishing made it easy! My writer was patient, the designer captured the emotion of my story perfectly, and they even helped me set up my Amazon page. When I held my printed book for the first time, I actually cried.",
  },
  {
    name: "Aaron B.",
    role: "Fantasy Author",
    book: "The Shadow Gate",
    image: "/avatars/aaron.jpg",
    story: "I had a finished manuscript but no idea what to do next. I tried researching self-publishing on my own, but it was overwhelming. The team at The Pulp House Publishing took over and handled it all professionally while keeping me involved creatively. My book cover blew me away, and now my novel is available on Amazon and Apple Books.",
  },
  {
    name: "Maya L.",
    role: "Children's Book Author",
    book: "The Little Star Who Could",
    image: "/avatars/maya.jpg",
    story: "I had a story and a few sketches, but I wasn't sure if I could actually make a children's book on my own. They paired me with an illustrator who brought my characters to life. Every page looked magical. Now I see photos of kids reading my book. It's the most amazing feeling.",
  },
  {
    name: "David R.",
    role: "Business Author",
    book: "Lead Like You Mean It",
    image: "/avatars/david.jpg",
    story: "As a corporate trainer, I'd wanted to turn my workshop material into a book for years. The editorial team helped me turn my scattered notes into a structured, engaging business book. Within weeks of launching, my book became a powerful tool for my speaking engagements.",
  },
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Authors Who Achieved Their Dreams
          </h2>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary font-serif">
                    {story.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {story.role}, &ldquo;{story.book}&rdquo;
                  </p>
                </div>
              </div>

              {/* Story */}
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{story.story}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
