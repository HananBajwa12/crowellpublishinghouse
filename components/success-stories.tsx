"use client";

import { motion } from "framer-motion";

const books = [
  {
    title: "Sphereland",
    cover: "/books/sphereland.jpg",
  },
  {
    title: "Bridge to Terabithia",
    cover: "/books/bridge-to-terabithia.jpg",
  },
  {
    title: "Come Away from the Water, Shirley",
    cover: "/books/come-away-shirley.jpg",
  },
  {
    title: "The Little Old Lady Who Was Not Afraid of Anything",
    cover: "/books/little-old-lady.jpg",
  },
  {
    title: "The Little Fir Tree",
    cover: "/books/little-fir-tree.jpg",
  },
  {
    title: "The Viking Adventure",
    cover: "/books/viking-adventure.jpg",
  },
  {
    title: "The Ghost of Windy Hill",
    cover: "/books/ghost-windy-hill.jpg",
  },
  {
    title: "Heaven to Betsy",
    cover: "/books/heaven-to-betsy.jpg",
  },
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">
            Streamlined Book Publishing for Authors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-8">
            Giving Your Stories a Voice!
          </h2>
          <div className="mx-auto mb-6 h-px max-w-5xl bg-border" />
          <p className="max-w-5xl mx-auto text-muted-foreground leading-relaxed">
            Is there an interesting story that needs to be told? The Crowell
            Publishing House is your committed USA-based publisher, bringing
            great books to the world. We offer all authors, whether new or
            established in the industry, the full tools necessary to sail
            through the publishing process and bring about the vision with
            confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="flex flex-wrap items-end justify-center gap-4 md:flex-nowrap md:gap-5">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative w-24 md:w-28 lg:w-32"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-36 w-full object-cover shadow-2xl md:h-48 lg:h-52"
                />
                <div className="absolute inset-y-0 right-0 w-2 bg-black/15" />
              </motion.div>
            ))}
          </div>
          <div className="mx-auto h-4 max-w-6xl rounded-b-full bg-gradient-to-b from-muted to-border shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
